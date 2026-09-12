"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => WikiDashboardPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/view.ts
var import_obsidian4 = require("obsidian");

// src/bible.ts
var OT = [
  ["\uCC3D\uC138\uAE30", "\uCC3D"],
  ["\uCD9C\uC560\uAD7D\uAE30", "\uCD9C"],
  ["\uB808\uC704\uAE30", "\uB808"],
  ["\uBBFC\uC218\uAE30", "\uBBFC"],
  ["\uC2E0\uBA85\uAE30", "\uC2E0"],
  ["\uC5EC\uD638\uC218\uC544", "\uC218"],
  ["\uC0AC\uC0AC\uAE30", "\uC0BF"],
  ["\uB8FB\uAE30", "\uB8FB"],
  ["\uC0AC\uBB34\uC5D8\uC0C1", "\uC0BC\uC0C1"],
  ["\uC0AC\uBB34\uC5D8\uD558", "\uC0BC\uD558"],
  ["\uC5F4\uC655\uAE30\uC0C1", "\uC655\uC0C1"],
  ["\uC5F4\uC655\uAE30\uD558", "\uC655\uD558"],
  ["\uC5ED\uB300\uC0C1", "\uB300\uC0C1"],
  ["\uC5ED\uB300\uD558", "\uB300\uD558"],
  ["\uC5D0\uC2A4\uB77C", "\uC2A4"],
  ["\uB290\uD5E4\uBBF8\uC57C", "\uB290"],
  ["\uC5D0\uC2A4\uB354", "\uC5D0"],
  ["\uC6A5\uAE30", "\uC6A5"],
  ["\uC2DC\uD3B8", "\uC2DC"],
  ["\uC7A0\uC5B8", "\uC7A0"],
  ["\uC804\uB3C4\uC11C", "\uC804"],
  ["\uC544\uAC00", "\uC544"],
  ["\uC774\uC0AC\uC57C", "\uC0AC"],
  ["\uC608\uB808\uBBF8\uC57C", "\uB818"],
  ["\uC608\uB808\uBBF8\uC57C\uC560\uAC00", "\uC560"],
  ["\uC5D0\uC2A4\uAC94", "\uAC94"],
  ["\uB2E4\uB2C8\uC5D8", "\uB2E8"],
  ["\uD638\uC138\uC544", "\uD638"],
  ["\uC694\uC5D8", "\uC69C"],
  ["\uC544\uBAA8\uC2A4", "\uC554"],
  ["\uC624\uBC14\uB31C", "\uC635"],
  ["\uC694\uB098", "\uC698"],
  ["\uBBF8\uAC00", "\uBBF8"],
  ["\uB098\uD6D4", "\uB098"],
  ["\uD558\uBC15\uAD6D", "\uD569"],
  ["\uC2A4\uBC14\uB0D0", "\uC2B5"],
  ["\uD559\uAC1C", "\uD559"],
  ["\uC2A4\uAC00\uB7B4", "\uC2A5"],
  ["\uB9D0\uB77C\uAE30", "\uB9D0"]
];
var NT = [
  ["\uB9C8\uD0DC\uBCF5\uC74C", "\uB9C8"],
  ["\uB9C8\uAC00\uBCF5\uC74C", "\uB9C9"],
  ["\uB204\uAC00\uBCF5\uC74C", "\uB205"],
  ["\uC694\uD55C\uBCF5\uC74C", "\uC694"],
  ["\uC0AC\uB3C4\uD589\uC804", "\uD589"],
  ["\uB85C\uB9C8\uC11C", "\uB86C"],
  ["\uACE0\uB9B0\uB3C4\uC804\uC11C", "\uACE0\uC804"],
  ["\uACE0\uB9B0\uB3C4\uD6C4\uC11C", "\uACE0\uD6C4"],
  ["\uAC08\uB77C\uB514\uC544\uC11C", "\uAC08"],
  ["\uC5D0\uBCA0\uC18C\uC11C", "\uC5E1"],
  ["\uBE4C\uB9BD\uBCF4\uC11C", "\uBE4C"],
  ["\uACE8\uB85C\uC0C8\uC11C", "\uACE8"],
  ["\uB370\uC0B4\uB85C\uB2C8\uAC00\uC804\uC11C", "\uC0B4\uC804"],
  ["\uB370\uC0B4\uB85C\uB2C8\uAC00\uD6C4\uC11C", "\uC0B4\uD6C4"],
  ["\uB514\uBAA8\uB370\uC804\uC11C", "\uB524\uC804"],
  ["\uB514\uBAA8\uB370\uD6C4\uC11C", "\uB524\uD6C4"],
  ["\uB514\uB3C4\uC11C", "\uB51B"],
  ["\uBE4C\uB808\uBAAC\uC11C", "\uBAAC"],
  ["\uD788\uBE0C\uB9AC\uC11C", "\uD788"],
  ["\uC57C\uACE0\uBCF4\uC11C", "\uC57D"],
  ["\uBCA0\uB4DC\uB85C\uC804\uC11C", "\uBCA7\uC804"],
  ["\uBCA0\uB4DC\uB85C\uD6C4\uC11C", "\uBCA7\uD6C4"],
  ["\uC694\uD55C\uC77C\uC11C", "\uC694\uC77C"],
  ["\uC694\uD55C\uC774\uC11C", "\uC694\uC774"],
  ["\uC694\uD55C\uC0BC\uC11C", "\uC694\uC0BC"],
  ["\uC720\uB2E4\uC11C", "\uC720"],
  ["\uC694\uD55C\uACC4\uC2DC\uB85D", "\uACC4"]
];
var BIBLE_BOOKS = [
  ...OT.map(([name, abbr]) => ({ name, abbr, testament: "\uAD6C\uC57D" })),
  ...NT.map(([name, abbr]) => ({ name, abbr, testament: "\uC2E0\uC57D" }))
];
var BOOK_ALIASES = {
  \uC694\uB098\uC11C: "\uC694\uB098",
  \uC694\uC5D8\uC11C: "\uC694\uC5D8"
};
var CANON = new Set(BIBLE_BOOKS.map((b) => b.name));
var canonicalBook = (raw) => {
  const name = raw.trim();
  if (CANON.has(name)) return name;
  const alias = BOOK_ALIASES[name];
  return alias && CANON.has(alias) ? alias : void 0;
};

// src/types.ts
var NO_TYPE_LABEL = "(\uC885\uB958 \uC5C6\uC74C)";
var NO_STATUS_LABEL = "(\uC0C1\uD0DC \uC5C6\uC74C)";
var NO_MAP_KIND_LABEL = "(\uC720\uD615 \uC5C6\uC74C)";
var SMALL_FOLDER_MAX = 3;
var COMPOSITION_TOP_N = 12;
var DONUT_MAX_SLICES = 6;
var DONUT_MIN_SHARE = 0.01;
var BOOK_TAG_PREFIX = "\uBCF8\uBB38/";
var DEFAULT_SETTINGS = {
  excludedFolders: ["90. \uC124\uC815"]
};

// src/snapshot.ts
var dateToYmd = (v) => {
  const isDateOnly = v.getUTCHours() === 0 && v.getUTCMinutes() === 0 && v.getUTCSeconds() === 0 && v.getUTCMilliseconds() === 0;
  const y = isDateOnly ? v.getUTCFullYear() : v.getFullYear();
  const m = (isDateOnly ? v.getUTCMonth() : v.getMonth()) + 1;
  const d = isDateOnly ? v.getUTCDate() : v.getDate();
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
};
var str = (v) => {
  if (typeof v === "string") return v.trim() !== "" ? v.trim() : void 0;
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : void 0;
  if (typeof v === "boolean") return String(v);
  if (v instanceof Date) return Number.isFinite(v.getTime()) ? dateToYmd(v) : void 0;
  if (Array.isArray(v)) {
    for (const item of v) {
      const s = str(item);
      if (s !== void 0) return s;
    }
    return void 0;
  }
  return void 0;
};
var toTags = (v) => {
  if (Array.isArray(v)) return v.map((t) => String(t).trim()).filter(Boolean);
  if (typeof v === "string") return v.split(",").map((t) => t.trim()).filter(Boolean);
  return [];
};
var isExcluded = (path, excluded) => excluded.some((e) => path === e || path.startsWith(e + "/"));
var toNoteInfo = (raw) => {
  var _a;
  const fm = (_a = raw.frontmatter) != null ? _a : {};
  const parts = raw.path.split("/");
  const folder = parts.length > 1 ? parts[0] : "/";
  const subfolder = parts.length > 2 ? parts[1] : void 0;
  return {
    path: raw.path,
    title: raw.basename,
    folder,
    subfolder,
    type: str(fm["\uC885\uB958"]),
    status: str(fm["\uC0C1\uD0DC"]),
    review: str(fm["\uAC80\uD1A0"]),
    updated: str(fm["\uAC31\uC2E0\uC77C"]),
    mapKind: str(fm["\uC9C0\uB3C4\uC720\uD615"]),
    tags: toTags(fm["\uD0DC\uADF8"])
  };
};
var byCountDesc = (a, b) => b.count - a.count;
var buildFolderCounts = (notes) => {
  var _a;
  const top = /* @__PURE__ */ new Map();
  for (const n of notes) {
    let entry = top.get(n.folder);
    if (!entry) {
      entry = { count: 0, children: /* @__PURE__ */ new Map() };
      top.set(n.folder, entry);
    }
    entry.count += 1;
    if (n.subfolder) {
      entry.children.set(n.subfolder, ((_a = entry.children.get(n.subfolder)) != null ? _a : 0) + 1);
    }
  }
  const counts = [...top.entries()].map(([folder, e]) => ({
    folder,
    count: e.count,
    children: [...e.children.entries()].map(([f, c]) => ({ folder: f, count: c })).sort(byCountDesc)
  })).sort(byCountDesc);
  const hasLarge = counts.some((f) => f.count > SMALL_FOLDER_MAX);
  if (hasLarge) {
    for (const f of counts) {
      if (f.count <= SMALL_FOLDER_MAX) f.tail = true;
    }
  }
  return counts;
};
var buildTypeGroups = (notes) => {
  var _a;
  const groups = /* @__PURE__ */ new Map();
  for (const n of notes) {
    const key = (_a = n.type) != null ? _a : NO_TYPE_LABEL;
    const list = groups.get(key);
    if (list) list.push(n);
    else groups.set(key, [n]);
  }
  const untyped = groups.get(NO_TYPE_LABEL);
  groups.delete(NO_TYPE_LABEL);
  const sorted = [...groups.entries()].map(([type, list]) => ({ type, notes: list })).sort((a, b) => b.notes.length - a.notes.length);
  if (untyped) sorted.push({ type: NO_TYPE_LABEL, notes: untyped });
  for (const g of sorted) {
    g.notes.sort((a, b) => a.title.localeCompare(b.title, "ko"));
  }
  return sorted;
};
var buildStatuses = (notes) => [...new Set(notes.map((n) => {
  var _a;
  return (_a = n.status) != null ? _a : NO_STATUS_LABEL;
}))].sort(
  (a, b) => a.localeCompare(b, "ko")
);
var buildMocsByMapKind = (mocs) => {
  var _a;
  const byKind = /* @__PURE__ */ new Map();
  for (const m of mocs) {
    const key = (_a = m.mapKind) != null ? _a : NO_MAP_KIND_LABEL;
    const list = byKind.get(key);
    if (list) list.push(m);
    else byKind.set(key, [m]);
  }
  return [...byKind.entries()].map(([mapKind, list]) => ({ mapKind, mocs: list })).sort((a, b) => b.mocs.length - a.mocs.length);
};
var buildMocs = (notes, links, inScope) => {
  var _a;
  const backlinkCount = /* @__PURE__ */ new Map();
  for (const [from, targets] of Object.entries(links)) {
    if (!inScope.has(from)) continue;
    for (const to of Object.keys(targets)) {
      if (to === from || !inScope.has(to)) continue;
      backlinkCount.set(to, ((_a = backlinkCount.get(to)) != null ? _a : 0) + 1);
    }
  }
  return notes.filter((n) => n.type === "MOC").map((n) => {
    var _a2, _b;
    const targets = (_a2 = links[n.path]) != null ? _a2 : {};
    const outgoing = Object.keys(targets).filter(
      (t) => t !== n.path && inScope.has(t)
    ).length;
    return { ...n, outgoing, backlinks: (_b = backlinkCount.get(n.path)) != null ? _b : 0 };
  }).sort((a, b) => b.outgoing - a.outgoing || b.backlinks - a.backlinks);
};
var buildFolderShare = (folderCounts) => {
  if (folderCounts.length === 0) return [];
  const total = folderCounts.reduce((n, f) => n + f.count, 0);
  if (total === 0) return [];
  const keep = [];
  const fold = [];
  for (const f of folderCounts) {
    const tooThin = f.count / total < DONUT_MIN_SHARE;
    const tooMany = keep.length >= DONUT_MAX_SLICES - 1;
    if (tooThin || tooMany) fold.push(f);
    else keep.push(f);
  }
  const slices = keep.map((f) => ({ label: f.folder, count: f.count }));
  if (fold.length > 0) {
    slices.push({
      label: "\uAE30\uD0C0",
      count: fold.reduce((n, f) => n + f.count, 0),
      other: true
    });
  }
  return slices;
};
var buildBookCoverage = (notes) => {
  var _a;
  const counts = /* @__PURE__ */ new Map();
  let unknownCount = 0;
  for (const n of notes) {
    const booksInNote = /* @__PURE__ */ new Set();
    let sawUnknown = false;
    for (const tag of n.tags) {
      if (!tag.startsWith(BOOK_TAG_PREFIX)) continue;
      const raw = tag.slice(BOOK_TAG_PREFIX.length).split("/")[0];
      if (!raw) continue;
      const book = canonicalBook(raw);
      if (book) booksInNote.add(book);
      else sawUnknown = true;
    }
    for (const book of booksInNote) {
      counts.set(book, ((_a = counts.get(book)) != null ? _a : 0) + 1);
    }
    if (sawUnknown) unknownCount += 1;
  }
  const books = BIBLE_BOOKS.map((b) => {
    var _a2;
    return {
      name: b.name,
      abbr: b.abbr,
      testament: b.testament,
      count: (_a2 = counts.get(b.name)) != null ? _a2 : 0
    };
  });
  return {
    books,
    max: books.reduce((m, b) => b.count > m ? b.count : m, 0),
    unknownCount
  };
};
var buildTypeComposition = (notes) => {
  var _a;
  const counts = /* @__PURE__ */ new Map();
  for (const n of notes) {
    if (!n.type) continue;
    counts.set(n.type, ((_a = counts.get(n.type)) != null ? _a : 0) + 1);
  }
  const ranked = [...counts.entries()].map(([type, count]) => ({ type, count })).sort((a, b) => b.count - a.count || a.type.localeCompare(b.type, "ko"));
  const slices = ranked.slice(0, COMPOSITION_TOP_N);
  const rest = ranked.slice(COMPOSITION_TOP_N);
  if (rest.length > 0) {
    slices.push({
      type: "\uAE30\uD0C0",
      count: rest.reduce((n, x) => n + x.count, 0),
      other: true
    });
  }
  return {
    slices,
    total: slices.reduce((n, x) => n + x.count, 0)
  };
};
var buildSnapshot = (raw, links, opts) => {
  var _a;
  const excluded = opts.excludedFolders;
  const kept = [];
  let excludedCount = 0;
  for (const r of raw) {
    if (isExcluded(r.path, excluded)) {
      excludedCount += 1;
      continue;
    }
    kept.push(toNoteInfo(r));
  }
  const inScope = new Set(kept.map((n) => n.path));
  const folderCounts = buildFolderCounts(kept);
  const typeGroups = buildTypeGroups(kept);
  const mocs = buildMocs(kept, links, inScope);
  return {
    vaultName: opts.vaultName,
    notes: kept,
    folderCounts,
    folderShare: buildFolderShare(folderCounts),
    typeGroups,
    typeCount: typeGroups.filter((g) => g.type !== NO_TYPE_LABEL).length,
    statuses: buildStatuses(kept),
    mocs,
    mocsByMapKind: buildMocsByMapKind(mocs),
    bookCoverage: buildBookCoverage(kept),
    typeComposition: buildTypeComposition(kept),
    excludedCount,
    excludedFolders: [...excluded],
    scannedAt: (_a = opts.now) != null ? _a : Date.now()
  };
};

// src/collect.ts
var collectRaw = (app) => {
  const raw = app.vault.getMarkdownFiles().map((file) => {
    var _a;
    return {
      path: file.path,
      basename: file.basename,
      frontmatter: (_a = app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter
    };
  });
  return {
    raw,
    links: app.metadataCache.resolvedLinks,
    vaultName: app.vault.getName()
  };
};

// src/sections/summary.ts
var fmtTime = (ms) => new Date(ms).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
var renderSummary = (s, parent, onRefresh) => {
  const bar = parent.createDiv({ cls: "wd-summary" });
  const left = bar.createDiv({ cls: "wd-summary-left" });
  left.createSpan({ cls: "wd-vault-name", text: s.vaultName });
  const stats = [
    `${s.notes.length} \uB178\uD2B8`,
    `${s.typeCount} \uC885\uB958`,
    `${s.mocs.length} MOC`
  ].join(" \xB7 ");
  left.createSpan({ cls: "wd-stats", text: stats });
  if (s.excludedCount > 0) {
    left.createSpan({
      cls: "wd-excluded",
      text: `${s.excludedFolders.join(", ")} ${s.excludedCount}\uAC1C \uC81C\uC678\uB428`
    });
  }
  const right = bar.createDiv({ cls: "wd-summary-right" });
  right.createSpan({ cls: "wd-scanned", text: `${fmtTime(s.scannedAt)} \uAE30\uC900` });
  const btn = right.createEl("button", { cls: "wd-refresh", text: "\u21BB \uC0C8\uB85C\uACE0\uCE68" });
  btn.addEventListener("click", onRefresh);
};

// src/sections/donut.ts
var import_obsidian = require("obsidian");
var R = 40;
var CIRC = 2 * Math.PI * R;
var GAP = 1.5;
var renderDonut = (slices, parent, opts) => {
  const total = slices.reduce((n, s) => n + s.count, 0);
  const wrap = parent.createDiv({ cls: "wd-donut-wrap" });
  if (total === 0) {
    wrap.createDiv({ cls: "wd-empty", text: "\uADF8\uB9B4 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." });
    return;
  }
  const figure = wrap.createDiv({ cls: "wd-donut-figure" });
  const svg = figure.createSvg("svg", {
    attr: { viewBox: "0 0 100 100", class: "wd-donut" }
  });
  svg.setAttr("role", "img");
  svg.setAttr(
    "aria-label",
    slices.map((s) => `${s.label} ${s.count}`).join(", ")
  );
  svg.createSvg("circle", {
    attr: {
      class: "wd-donut-track",
      cx: "50",
      cy: "50",
      r: String(R),
      fill: "none",
      "stroke-width": "16"
    }
  });
  let consumed = 0;
  slices.forEach((slice, i) => {
    var _a;
    const arc = slice.count / total * CIRC;
    const drawn = Math.max(1, arc - GAP);
    const el = svg.createSvg("circle", {
      attr: {
        class: slice.other ? "wd-donut-arc wd-donut-arc--other" : `wd-donut-arc wd-donut-arc--s${Math.min(5, i + 1)}`,
        cx: "50",
        cy: "50",
        r: String(R),
        fill: "none",
        "stroke-width": "16",
        "stroke-dasharray": `${drawn} ${CIRC - drawn}`,
        // -90도에서 시작해 12시 방향부터 시계방향으로 채운다.
        "stroke-dashoffset": String(-consumed),
        transform: "rotate(-90 50 50)"
      }
    });
    (0, import_obsidian.setTooltip)(
      el,
      `${slice.label} \xB7 ${slice.count}${(_a = opts.unit) != null ? _a : "\uAC1C"} \xB7 ${(slice.count / total * 100).toFixed(1)}%`
    );
    consumed += arc;
  });
  const center = figure.createDiv({ cls: "wd-donut-center" });
  center.createDiv({ cls: "wd-donut-value", text: opts.centerValue });
  center.createDiv({ cls: "wd-donut-label", text: opts.centerLabel });
  const legend = wrap.createDiv({ cls: "wd-donut-legend" });
  slices.forEach((slice, i) => {
    var _a;
    const row = legend.createDiv({ cls: "wd-donut-legend-row" });
    row.createDiv({
      cls: slice.other ? "wd-donut-swatch wd-donut-arc--other" : `wd-donut-swatch wd-donut-arc--s${Math.min(5, i + 1)}`
    });
    row.createSpan({ cls: "wd-donut-legend-name", text: slice.label });
    row.createSpan({
      cls: "wd-donut-legend-count",
      text: `${slice.count}${(_a = opts.unit) != null ? _a : ""}`
    });
    row.createSpan({
      cls: "wd-donut-legend-pct",
      text: `${(slice.count / total * 100).toFixed(1)}%`
    });
  });
};

// src/sections/structure.ts
var renderStructure = (s, parent, onOpenFolder) => {
  const sec = parent.createDiv({ cls: "wd-section" });
  sec.createEl("h3", { cls: "wd-section-title", text: "\uBCFC\uD2B8 \uAD6C\uC131" });
  if (s.folderCounts.length === 0) {
    sec.createDiv({ cls: "wd-empty", text: "\uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." });
    return;
  }
  renderDonut(s.folderShare, sec, {
    centerValue: String(s.notes.length),
    centerLabel: "\uB178\uD2B8"
  });
  const max = s.folderCounts[0].count || 1;
  const row = (host, label, path, count, cls) => {
    const r = host.createDiv({ cls });
    const isLink = path !== "/";
    const name = r.createSpan({
      cls: isLink ? "wd-folder-name wd-folder-name--link" : "wd-folder-name",
      text: label
    });
    if (isLink) {
      name.addEventListener("click", () => onOpenFolder(path));
    }
    r.createSpan({ cls: "wd-folder-count", text: String(count) });
    const track = r.createDiv({ cls: "wd-bar-track" });
    const fill = track.createDiv({ cls: "wd-bar-fill" });
    fill.style.width = `${Math.max(2, count / max * 100)}%`;
  };
  const withChildren = s.folderCounts.filter((f) => !f.tail && f.children.length > 0);
  for (const f of withChildren) {
    row(sec, f.folder, f.folder, f.count, "wd-folder-row wd-folder-top");
    const kids = sec.createDiv({ cls: "wd-folder-children" });
    for (const c of f.children) {
      row(kids, c.folder, `${f.folder}/${c.folder}`, c.count, "wd-folder-row wd-folder-child");
    }
  }
};

// src/sections/charts.ts
var import_obsidian2 = require("obsidian");
var SHADE_STEPS = 5;
var shadeStep = (count, max) => {
  if (count <= 0 || max <= 0) return 0;
  const t = Math.sqrt(count / max);
  return Math.min(SHADE_STEPS, Math.max(1, Math.ceil(t * SHADE_STEPS)));
};
var bookCell = (host, b, max) => {
  const step = shadeStep(b.count, max);
  const cell = host.createDiv({
    cls: step === 0 ? "wd-book wd-book--empty" : `wd-book wd-book--s${step}`
  });
  cell.createSpan({ cls: "wd-book-abbr", text: b.abbr });
  (0, import_obsidian2.setTooltip)(cell, `${b.name} \xB7 ${b.count > 0 ? `${b.count}\uAC1C` : "\uC5C6\uC74C"}`);
  cell.setAttr("aria-label", `${b.name} ${b.count}\uAC1C`);
};
var renderBookCoverage = (s, parent) => {
  const sec = parent.createDiv({ cls: "wd-section" });
  const head = sec.createDiv({ cls: "wd-section-head" });
  head.createEl("h3", { cls: "wd-section-title", text: "\uC131\uACBD \uBCF8\uBB38 \uCEE4\uBC84\uB9AC\uC9C0" });
  const cov = s.bookCoverage;
  const covered = cov.books.filter((b) => b.count > 0).length;
  head.createSpan({
    cls: "wd-chart-note",
    text: `66\uAD8C \uC911 ${covered}\uAD8C \xB7 \uBE48 \uCC45 ${66 - covered}\uAD8C`
  });
  if (cov.max === 0) {
    sec.createDiv({ cls: "wd-empty", text: "\uBCF8\uBB38 \uD0DC\uADF8\uAC00 \uBD99\uC740 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." });
    return;
  }
  for (const testament of ["\uAD6C\uC57D", "\uC2E0\uC57D"]) {
    const row = sec.createDiv({ cls: "wd-testament" });
    row.createDiv({ cls: "wd-testament-label", text: testament });
    const grid = row.createDiv({ cls: "wd-book-grid" });
    for (const b of cov.books) {
      if (b.testament === testament) bookCell(grid, b, cov.max);
    }
  }
  const legend = sec.createDiv({ cls: "wd-chart-legend" });
  legend.createDiv({ cls: "wd-book wd-book--empty wd-swatch" });
  legend.createSpan({ cls: "wd-legend-text", text: "\uC5C6\uC74C" });
  legend.createSpan({ cls: "wd-legend-text", text: "\uC801\uC74C" });
  for (let i = 1; i <= SHADE_STEPS; i += 1) {
    legend.createDiv({ cls: `wd-book wd-book--s${i} wd-swatch` });
  }
  legend.createSpan({ cls: "wd-legend-text", text: `\uB9CE\uC74C (\uCD5C\uB300 ${cov.max})` });
  if (cov.unknownCount > 0) {
    sec.createDiv({
      cls: "wd-chart-note wd-chart-footnote",
      text: `\uC815\uACBD\uC5D0 \uC5C6\uB294 \uBCF8\uBB38 \uD0DC\uADF8\uAC00 \uBD99\uC740 \uB178\uD2B8 ${cov.unknownCount}\uAC1C\uB294 \uACA9\uC790\uC5D0\uC11C \uBE60\uC84C\uC2B5\uB2C8\uB2E4.`
    });
  }
};
var renderTypeComposition = (s, parent) => {
  const sec = parent.createDiv({ cls: "wd-section" });
  const head = sec.createDiv({ cls: "wd-section-head" });
  head.createEl("h3", { cls: "wd-section-title", text: "\uC885\uB958\uBCC4 \uAD6C\uC131\uBE44" });
  const comp = s.typeComposition;
  if (comp.total === 0) {
    sec.createDiv({ cls: "wd-empty", text: "\uC885\uB958\uAC00 \uBD99\uC740 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." });
    return;
  }
  head.createSpan({
    cls: "wd-chart-note",
    text: `\uC885\uB958\uAC00 \uBD99\uC740 \uB178\uD2B8 ${comp.total}\uAC1C \uAE30\uC900`
  });
  const max = comp.slices[0].count;
  for (const slice of comp.slices) {
    const pct = slice.count / comp.total * 100;
    const row = sec.createDiv({
      cls: slice.other ? "wd-comp-row wd-comp-row--other" : "wd-comp-row"
    });
    row.createSpan({ cls: "wd-comp-name", text: slice.type });
    const track = row.createDiv({ cls: "wd-comp-track" });
    const fill = track.createDiv({ cls: "wd-comp-fill" });
    fill.style.width = `${Math.max(1, slice.count / max * 100)}%`;
    row.createSpan({ cls: "wd-comp-count", text: String(slice.count) });
    row.createSpan({ cls: "wd-comp-pct", text: `${pct.toFixed(1)}%` });
    (0, import_obsidian2.setTooltip)(row, `${slice.type} \xB7 ${slice.count}\uAC1C \xB7 ${pct.toFixed(1)}%`);
  }
};
var renderCharts = (s, parent) => {
  renderBookCoverage(s, parent);
  renderTypeComposition(s, parent);
};

// src/sections/mocs.ts
var mocRow = (host, m, showKind, onOpenNote) => {
  var _a;
  const r = host.createDiv({ cls: "wd-moc-row" });
  if (showKind) {
    r.createSpan({ cls: "wd-moc-kind", text: (_a = m.mapKind) != null ? _a : NO_MAP_KIND_LABEL });
  } else {
    r.createSpan({ cls: "wd-moc-kind" });
  }
  const title = r.createSpan({ cls: "wd-moc-title", text: m.title });
  title.addEventListener("click", () => onOpenNote(m.path));
  r.createSpan({ cls: "wd-moc-num", text: `\uAC70\uB290\uB9BC ${m.outgoing}` });
  r.createSpan({ cls: "wd-moc-num wd-moc-num-sub", text: `\uBC31\uB9C1\uD06C ${m.backlinks}` });
};
var renderMocs = (s, parent, onOpenNote) => {
  const sec = parent.createDiv({ cls: "wd-section" });
  const head = sec.createDiv({ cls: "wd-section-head" });
  head.createEl("h3", { cls: "wd-section-title", text: "\uC911\uC694 MOC \u2014 \uAC70\uB290\uB9B0 \uC21C" });
  const toggle = head.createEl("button", { cls: "wd-toggle", text: "\uC9C0\uB3C4\uC720\uD615\uBCC4 \uBCF4\uAE30" });
  const body = sec.createDiv({ cls: "wd-moc-body" });
  if (s.mocs.length === 0) {
    body.createDiv({ cls: "wd-empty", text: "MOC \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." });
    toggle.remove();
    return;
  }
  const kindSlices = s.mocsByMapKind.map((g) => ({
    label: g.mapKind,
    count: g.mocs.length
  }));
  renderDonut(kindSlices, sec, {
    centerValue: String(s.mocs.length),
    centerLabel: "MOC"
  });
  let grouped = false;
  const draw = () => {
    body.empty();
    if (!grouped) {
      for (const m of s.mocs) mocRow(body, m, true, onOpenNote);
      return;
    }
    for (const g of s.mocsByMapKind) {
      body.createDiv({
        cls: "wd-moc-group",
        text: `${g.mapKind} (${g.mocs.length})`
      });
      for (const m of g.mocs) mocRow(body, m, false, onOpenNote);
    }
  };
  toggle.addEventListener("click", () => {
    grouped = !grouped;
    toggle.setText(grouped ? "\uAC70\uB290\uB9B0 \uC21C \uBCF4\uAE30" : "\uC9C0\uB3C4\uC720\uD615\uBCC4 \uBCF4\uAE30");
    draw();
  });
  draw();
};

// src/sections/noteList.ts
var import_obsidian3 = require("obsidian");
var matches = (n, q) => q === "" || n.title.toLowerCase().includes(q);
var renderNoteList = (s, parent, onOpenNote) => {
  const sec = parent.createDiv({ cls: "wd-section" });
  const head = sec.createDiv({ cls: "wd-section-head" });
  head.createEl("h3", { cls: "wd-section-title", text: "\uC804\uCCB4 \uBAA9\uB85D" });
  const controls = head.createDiv({ cls: "wd-controls" });
  const search = controls.createEl("input", {
    cls: "wd-search",
    attr: { type: "search", placeholder: "\uC81C\uBAA9 \uAC80\uC0C9" }
  });
  const typeSel = controls.createEl("select", { cls: "wd-filter" });
  typeSel.createEl("option", { value: "", text: "\uC885\uB958 \uC804\uCCB4" });
  for (const g of s.typeGroups) {
    typeSel.createEl("option", { value: g.type, text: `${g.type} (${g.notes.length})` });
  }
  const statusSel = controls.createEl("select", { cls: "wd-filter" });
  statusSel.createEl("option", { value: "", text: "\uC0C1\uD0DC \uC804\uCCB4" });
  for (const st of s.statuses) statusSel.createEl("option", { value: st, text: st });
  const body = sec.createDiv({ cls: "wd-list-body" });
  const noteRow = (host, n) => {
    var _a, _b;
    const r = host.createDiv({ cls: "wd-note-row" });
    const t = r.createSpan({ cls: "wd-note-title", text: n.title });
    t.addEventListener("click", () => onOpenNote(n.path));
    r.createSpan({ cls: "wd-note-meta", text: (_a = n.status) != null ? _a : NO_STATUS_LABEL });
    r.createSpan({ cls: "wd-note-meta", text: (_b = n.updated) != null ? _b : "" });
  };
  const draw = () => {
    body.empty();
    const q = search.value.trim().toLowerCase();
    const status = statusSel.value;
    const type = typeSel.value;
    let shown = 0;
    for (const g of s.typeGroups) {
      if (type !== "" && g.type !== type) continue;
      const filtered = g.notes.filter(
        (n) => {
          var _a;
          return matches(n, q) && (status === "" || ((_a = n.status) != null ? _a : NO_STATUS_LABEL) === status);
        }
      );
      if (filtered.length === 0) continue;
      shown += filtered.length;
      const group = body.createDiv({ cls: "wd-group" });
      const header = group.createDiv({ cls: "wd-group-header" });
      const caret = header.createSpan({ cls: "wd-caret", text: "\u25B8" });
      header.createSpan({ cls: "wd-group-name", text: g.type });
      header.createSpan({ cls: "wd-group-count", text: `(${filtered.length})` });
      const inner = group.createDiv({ cls: "wd-group-body" });
      inner.hide();
      let open = q !== "" || status !== "" || type !== "";
      let drawn = false;
      const apply = () => {
        if (open && !drawn) {
          for (const n of filtered) noteRow(inner, n);
          drawn = true;
        }
        caret.setText(open ? "\u25BE" : "\u25B8");
        if (open) inner.show();
        else inner.hide();
      };
      header.addEventListener("click", () => {
        open = !open;
        apply();
      });
      apply();
    }
    if (shown === 0) {
      body.createDiv({ cls: "wd-empty", text: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." });
    }
  };
  const drawSoon = (0, import_obsidian3.debounce)(draw, 150, true);
  search.addEventListener("input", () => drawSoon());
  statusSel.addEventListener("change", draw);
  typeSel.addEventListener("change", draw);
  draw();
};

// src/view.ts
var VIEW_TYPE_WIKI_DASHBOARD = "wiki-dashboard-view";
var DashboardView = class extends import_obsidian4.ItemView {
  constructor(leaf, getSettings) {
    super(leaf);
    this.getSettings = getSettings;
    this.pending = false;
  }
  /**
   * 파일 탐색기 뷰의 폴더 공개 메서드. 공개 타입에 없어 좁은 구조 타입으로 받는다.
   *
   * revealLeaf를 반드시 await한다. 사이드바가 접혀 있으면 그 리프는 deferred라
   * `leaf.view`에 revealInFolder가 없고(1.7.2 이후), 첫 클릭이 조용히 실패한다.
   */
  async revealFolder(folder) {
    var _a;
    const explorer = this.app.workspace.getLeavesOfType("file-explorer")[0];
    if (!explorer) return;
    await this.app.workspace.revealLeaf(explorer);
    const view = explorer.view;
    (_a = view.revealInFolder) == null ? void 0 : _a.call(view, folder);
  }
  getViewType() {
    return VIEW_TYPE_WIKI_DASHBOARD;
  }
  getDisplayText() {
    return "\uC704\uD0A4 \uB300\uC2DC\uBCF4\uB4DC";
  }
  getIcon() {
    return "layout-dashboard";
  }
  async onOpen() {
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", (leaf) => {
        if (leaf === this.leaf && this.pending) this.refresh();
      })
    );
    this.refresh();
  }
  /** 화면에 보이지 않으면 그리지 않고 표시만 해 둔다. */
  requestRefresh() {
    if (this.containerEl.isShown()) this.refresh();
    else this.pending = true;
  }
  refresh() {
    this.pending = false;
    const { raw, links, vaultName } = collectRaw(this.app);
    const snapshot = buildSnapshot(raw, links, {
      vaultName,
      excludedFolders: this.getSettings().excludedFolders
    });
    const root = this.contentEl;
    root.empty();
    root.addClass("wiki-dashboard");
    const openNote = (path) => {
      const file = this.app.vault.getFileByPath(path);
      if (file) void this.app.workspace.getLeaf(false).openFile(file);
    };
    const openFolder = (folder) => {
      if (folder === "/") return;
      const target = this.app.vault.getAbstractFileByPath(folder);
      if (target instanceof import_obsidian4.TFolder) void this.revealFolder(target);
    };
    renderSummary(snapshot, root, () => this.refresh());
    renderStructure(snapshot, root, openFolder);
    renderCharts(snapshot, root);
    renderMocs(snapshot, root, openNote);
    renderNoteList(snapshot, root, openNote);
  }
};

// src/settings.ts
var import_obsidian5 = require("obsidian");
var WikiDashboardSettingTab = class extends import_obsidian5.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const commit = (0, import_obsidian5.debounce)(
      (value) => {
        this.plugin.settings.excludedFolders = value.split("\n").map((l) => l.trim()).filter(Boolean);
        void this.plugin.saveSettings();
        this.plugin.refreshViews();
      },
      500,
      true
    );
    this.commit = commit;
    new import_obsidian5.Setting(containerEl).setName("\uC9D1\uACC4\uC5D0\uC11C \uC81C\uC678\uD560 \uD3F4\uB354").setDesc("\uD55C \uC904\uC5D0 \uD558\uB098\uC529. \uCD5C\uC0C1\uC704 \uD3F4\uB354 \uC774\uB984\uC744 \uADF8\uB300\uB85C \uC801\uB294\uB2E4. \uC608: 90. \uC124\uC815").addTextArea((text) => {
      text.inputEl.rows = 4;
      text.setPlaceholder("90. \uC124\uC815").setValue(this.plugin.settings.excludedFolders.join("\n")).onChange((value) => {
        commit(value);
      });
    });
  }
  hide() {
    var _a;
    (_a = this.commit) == null ? void 0 : _a.run();
    super.hide();
  }
};

// src/main.ts
var defaultSettings = () => ({
  ...DEFAULT_SETTINGS,
  excludedFolders: [...DEFAULT_SETTINGS.excludedFolders]
});
var WikiDashboardPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.settings = defaultSettings();
  }
  async onload() {
    await this.loadSettings();
    this.registerView(
      VIEW_TYPE_WIKI_DASHBOARD,
      (leaf) => new DashboardView(leaf, () => this.settings)
    );
    this.addRibbonIcon("layout-dashboard", "\uC704\uD0A4 \uB300\uC2DC\uBCF4\uB4DC", () => {
      void this.activateView();
    });
    this.addCommand({
      id: "open-wiki-dashboard",
      name: "\uC704\uD0A4 \uB300\uC2DC\uBCF4\uB4DC \uC5F4\uAE30",
      callback: () => void this.activateView()
    });
    this.addSettingTab(new WikiDashboardSettingTab(this.app, this));
    const onChange = (0, import_obsidian6.debounce)(() => this.refreshViews(), 1e3, true);
    this.register(() => onChange.cancel());
    this.registerEvent(this.app.metadataCache.on("resolved", onChange));
    this.registerEvent(this.app.vault.on("rename", onChange));
    this.registerEvent(this.app.vault.on("delete", onChange));
  }
  refreshViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_WIKI_DASHBOARD)) {
      const view = leaf.view;
      if (view instanceof DashboardView) view.requestRefresh();
    }
  }
  async activateView() {
    const { workspace } = this.app;
    const existing = workspace.getLeavesOfType(VIEW_TYPE_WIKI_DASHBOARD);
    if (existing.length > 0) {
      await workspace.revealLeaf(existing[0]);
      return;
    }
    const leaf = workspace.getLeaf("tab");
    await leaf.setViewState({ type: VIEW_TYPE_WIKI_DASHBOARD, active: true });
    await workspace.revealLeaf(leaf);
  }
  async loadSettings() {
    this.settings = Object.assign(defaultSettings(), await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
