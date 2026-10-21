"""Dependency-free structural checks for the static CyberLab interface."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.assets: list[str] = []
        self.language: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if tag == "html":
            self.language = attributes.get("lang")
        if "id" in attributes and attributes["id"]:
            self.ids.append(attributes["id"] or "")
        for attribute in ("src", "href"):
            value = attributes.get(attribute)
            if value and not value.startswith(("http://", "https://", "#", "mailto:")):
                self.assets.append(value.split("?", 1)[0])


def main() -> int:
    html_path = ROOT / "index.html"
    js_path = ROOT / "app.js"
    css_path = ROOT / "styles.css"
    parser = PageParser()
    parser.feed(html_path.read_text(encoding="utf-8"))
    parser.close()

    errors: list[str] = []
    duplicate_ids = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
    if duplicate_ids:
        errors.append(f"Повторяются идентификаторы HTML: {', '.join(duplicate_ids)}")
    if parser.language != "ru":
        errors.append("Для страницы должен быть задан язык ru.")
    missing_assets = sorted({asset for asset in parser.assets if not (ROOT / asset).is_file()})
    if missing_assets:
        errors.append(f"Не найдены локальные ресурсы: {', '.join(missing_assets)}")

    js = js_path.read_text(encoding="utf-8")
    referenced_ids = set(re.findall(r'getElementById\(["\']([^"\']+)', js))
    dynamic_ids = {"changeStatusButton", "copyIncidentButton"}
    missing_ids = sorted(referenced_ids - set(parser.ids) - dynamic_ids)
    if missing_ids:
        errors.append(f"JavaScript обращается к отсутствующим HTML ID: {', '.join(missing_ids)}")
    if not re.search(r'<meta\s+name=["\']viewport["\']', html_path.read_text(encoding="utf-8"), re.I):
        errors.append("Не найден meta viewport для адаптивной вёрстки.")
    if not css_path.is_file():
        errors.append("Не найден файл стилей.")

    if errors:
        print("Проверка не пройдена:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Структурная проверка пройдена: язык ru, {len(parser.ids)} HTML ID, {len(referenced_ids)} ссылок JavaScript на элементы, {len(parser.assets)} локальных ресурсов.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

