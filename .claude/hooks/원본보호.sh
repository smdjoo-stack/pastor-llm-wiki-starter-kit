#!/bin/bash
# PostToolUse 검사기 — 10. 원본자료 파일의 원본 보존 섹션과 내용을 확인한다.
#
# Write / Edit / MultiEdit 로 `10. 원본자료/` 아래 파일을 건드릴 때마다 실행된다.
# 쓰기가 끝난 뒤 누락을 발견하면 종료 코드 2로 Claude에게 알려 스스로 고치게 한다.
# PostToolUse는 이미 실행된 쓰기를 되돌리지 않으므로 사전 차단기가 아니다.
#
# 근거: LLM-운영지침.md 절대 원칙 — "10. 원본자료의 파일은 덮어쓰거나 축약하지 않는다."
# 문서 규칙만으로는 놓치는 경우가 있어 하네스 단에서 한 번 더 확인한다.

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | python3 -c "import sys, json; d = json.load(sys.stdin); print(d.get('tool_input', {}).get('file_path', ''))" 2>/dev/null || echo "")

[ -z "$FILE_PATH" ] && exit 0

# `10. 원본자료/` 아래 .md 파일만 검사
if [[ "$FILE_PATH" != *"10. 원본자료/"* ]]; then
  exit 0
fi

if [[ "$FILE_PATH" != *.md ]] || [[ "$FILE_PATH" == *".gitkeep" ]]; then
  exit 0
fi

# "안내" 문서는 원본 콘텐츠가 아니라 폴더 설명 문서 — 검사 제외
if [[ "$FILE_PATH" == *"안내"* ]]; then
  exit 0
fi

[ ! -f "$FILE_PATH" ] && exit 0

if ! awk '
  /^## 원문 또는 원본 메모[[:space:]]*$/ { in_original = 1; next }
  in_original && /^##[[:space:]]/ { exit }
  in_original && $0 !~ /^[[:space:]]*$/ && $0 !~ /^[[:space:]]*<!--[[:space:]]*$/ {
    has_original = 1
    exit
  }
  END { exit(has_original ? 0 : 1) }
' "$FILE_PATH"; then
  cat >&2 <<EOF
[원본보호] 경고: 원본자료의 "## 원문 또는 원본 메모" 섹션이 없거나 비어 있습니다.

파일: $FILE_PATH

규칙 (LLM-운영지침.md 절대 원칙): 10. 원본자료의 모든 파일은 원문 또는 원본 메모
섹션에 원문을 그대로 보존해야 한다. 요약으로 대체하지 않는다.

조치: "## 원문 또는 원본 메모" 제목 아래에 원문 전체 또는 핵심 원본 메모를
그대로 옮겨 적은 뒤 다시 저장하세요. (90. 설정/템플릿/원본자료 템플릿.md 참고)

참고: 이 검사는 쓰기 후에 실행되므로 방금 저장된 내용을 자동으로 되돌리지는 않습니다.
EOF
  exit 2
fi

exit 0
