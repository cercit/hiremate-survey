"""Render the strategy HTML to PDF with Edge, then measure body fill per page."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
import pymupdf

HERE = Path(__file__).parent
SRC = HERE / "HireMate-Launch-Strategy.html"
OUT = HERE / "HireMate-Launch-Strategy-Sameer-Mittimani.pdf"
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

async def render():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=EDGE)
        page = await b.new_page()
        await page.goto(SRC.as_uri()); await page.wait_for_timeout(800)
        await page.pdf(path=str(OUT), format="A4", print_background=True, prefer_css_page_size=True)
        await b.close()

asyncio.run(render())

# body fill = vertical extent of content inside the margin box / margin-box height
doc = pymupdf.open(OUT)
MM = 72 / 25.4
top, bottom = 20 * MM, 18 * MM
for i, pg in enumerate(doc, 1):
    h = pg.rect.height - top - bottom
    ys = [b[3] for b in pg.get_text("blocks")] + [im["bbox"][3] for im in pg.get_image_info()]
    used = (max(ys) - top) / h if ys else 0
    print(f"page {i}: fill {used:.0%}")
print("pages:", len(doc), "->", OUT.name)
