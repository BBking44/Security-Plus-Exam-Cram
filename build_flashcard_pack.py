#!/usr/bin/env python3
"""Regenerate flashcard-pack.js from sources/flashcard-pack HTML files."""
import json
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "sources", "flashcard-pack")
OUT = os.path.join(ROOT, "flashcard-pack.js")

FILE_DOMAIN = [
    ("Domain 1 flashcards.html", 1),
    ("Domain 2 flashcards.html", 2),
    ("Domain 3 flashcards..html", 3),
    ("Domain 4 flashcards..html", 4),
    ("Domain 5 flashcards..html", 6),
]

CARD_BLOCK_RE = re.compile(r"\{f:(.+?),b:(.+?),t:(.+?)\}", re.DOTALL)


def unescape_js(s: str) -> str:
    return bytes(s, "utf-8").decode("unicode_escape")


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def read_js_string_literal(raw: str, index: int = 0) -> tuple[str, int]:
    raw = raw[index:].lstrip()
    if not raw:
        raise ValueError("Expected JS string literal")
    quote = raw[0]
    if quote not in ("'", '"'):
        raise ValueError(f"Expected quoted string, got: {raw[:40]}")
    out = []
    i = 1
    while i < len(raw):
        ch = raw[i]
        if ch == "\\":
            if i + 1 >= len(raw):
                raise ValueError("Trailing escape in JS string")
            out.append(raw[i : i + 2])
            i += 2
            continue
        if ch == quote:
            return unescape_js("".join(out)), index + (i + 1)
        out.append(ch)
        i += 1
    raise ValueError("Unterminated JS string literal")


def parse_quoted_field(raw: str) -> str:
    value, _ = read_js_string_literal(raw.strip())
    return value


def parse_cards(path: str) -> list[tuple[str, str, str]]:
    text = open(path, encoding="utf-8").read()
    cards = []
    for block in CARD_BLOCK_RE.findall(text):
        try:
            cards.append(
                (
                    parse_quoted_field(block[0]),
                    parse_quoted_field(block[1]),
                    parse_quoted_field(block[2]),
                )
            )
        except ValueError as exc:
            raise SystemExit(f"{os.path.basename(path)}: {exc}") from exc
    return cards


def main():
    entries = []
    counts = {}

    for filename, domain in FILE_DOMAIN:
        path = os.path.join(SRC, filename)
        if not os.path.isfile(path):
            raise SystemExit(f"Missing source file: {filename}")
        cards = parse_cards(path)
        counts[domain] = len(cards)
        for question, answer, tag in cards:
            entries.append(
                {
                    "domain": domain,
                    "q": f"[FC] {question}",
                    "a": answer,
                    "tag": tag,
                }
            )

    lines = [
        "// Auto-generated from sources/flashcard-pack HTML files",
        "",
        "window.SECPLUS_FLASHCARD_PACK = [",
    ]
    for card in entries:
        lines.append(
            f"  {{ domain: {card['domain']}, q: {js_string(card['q'])}, "
            f"a: {js_string(card['a'])}, tag: {js_string(card['tag'])} }},"
        )
    lines.append("];")
    lines.extend(
        [
            "",
            "(function() {",
            "  // Works even when study-data.js fails to load (e.g. missing on Netlify)",
            "  const pack = window.SECPLUS_FLASHCARD_PACK || [];",
            "  const existing = window.SECPLUS_FLASHCARDS || [];",
            "  const norms = new Set(existing.map(c => (c.q || '').replace(/\\[(FC|Lecture)\\]\\s*/, '').toLowerCase().slice(0, 80)));",
            "  const toAdd = pack.filter(c => {",
            "    const n = c.q.replace(/\\[(FC|Lecture)\\]\\s*/, '').toLowerCase().slice(0, 80);",
            "    if (norms.has(n)) return false;",
            "    norms.add(n);",
            "    return true;",
            "  });",
            "  window.SECPLUS_FLASHCARDS = existing.concat(toAdd).map((c, i) => ({ id: i + 1, ...c }));",
            "  window.SECPLUS_FLASHCARD_PACK_META = {",
            f"    total: {len(entries)},",
            "    added: toAdd.length,",
            '    source: "sources/flashcard-pack"',
            "  };",
            "})();",
            "",
        ]
    )

    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"Wrote {OUT}")
    print(f"  Total cards: {len(entries)}")
    for domain, count in sorted(counts.items()):
        print(f"  Domain {domain}: {count}")


if __name__ == "__main__":
    main()