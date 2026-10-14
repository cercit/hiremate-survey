"""Screenshots of the live site for the PDF (light theme, fixed sizes)."""
import asyncio, sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:4400"
OUT = Path(__file__).parent / "img"
OUT.mkdir(exist_ok=True)
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=EDGE)
        ctx = await b.new_context(viewport={"width": 1280, "height": 760}, color_scheme="light", device_scale_factor=1.5)
        page = await ctx.new_page()

        # 1. landing hero
        await page.goto(f"{BASE}/home/"); await page.wait_for_timeout(800)
        await page.screenshot(path=OUT / "landing-hero.png")
        # 2. landing pricing
        await page.locator("#pricing").scroll_into_view_if_needed(); await page.wait_for_timeout(300)
        await page.locator("#pricing").screenshot(path=OUT / "landing-pricing.png")

        # 3. prototype: collections, realistic, round 3 with a rule-breaking answer
        m = await ctx.new_page()
        await m.set_viewport_size({"width": 760, "height": 1100})
        await m.goto(f"{BASE}/demo/"); await m.wait_for_timeout(800)
        await m.click('[data-role="collections"]'); await m.click('[data-lang="en"]'); await m.click('[data-style="realistic"]')
        await m.click("#startBtn")
        for _ in range(2):  # rounds 1-2 with sample answers
            for _ in range(2):
                await m.click("#sampleBtn"); await m.click("#submitBtn"); await m.wait_for_timeout(100)
            await m.click("#nextBtn"); await m.wait_for_timeout(100)
        await m.fill("#answer", "OK sir, I will call him at 7:30 tomorrow morning because the account is critical.")
        await m.click("#submitBtn"); await m.wait_for_timeout(400)
        await m.evaluate("window.scrollTo(0,0)")
        await m.locator("#interview .card").screenshot(path=OUT / "proto-pushback.png")
        await m.click("#sampleBtn"); await m.click("#submitBtn"); await m.wait_for_timeout(200)
        await m.click("#nextBtn"); await m.wait_for_timeout(3200)   # let the toast fade
        await m.evaluate("window.scrollTo(0,0)")
        await m.screenshot(path=OUT / "proto-results.png", full_page=False)
        await b.close()

asyncio.run(main())
print("ok")
