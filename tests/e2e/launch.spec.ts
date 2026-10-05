import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const publicRoutes = ["/", "/experiences", "/stories", "/about", "/partners", "/join", "/privacy", "/terms", "/contact"];

for (const route of publicRoutes) {
  test(`${route} renders without a server error`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status(), `Unexpected status for ${route}`).toBeLessThan(400);
    await expect(page.locator("main#main-content")).toBeVisible();
  });
}

test("homepage has primary landmarks, visible navigation and a usable join form", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Expand the space music can occupy");
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await expect(page.getByRole("textbox", { name: "Email address" })).toBeVisible();
  await expect(page.getByRole("button", { name: /Join Open Volume/i })).toBeEnabled();
});

test("skip link reaches main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused({ timeout: 2_000 }).catch(() => undefined);
  expect(new URL(page.url()).hash).toBe("#main-content");
});

test("unknown route renders branded 404", async ({ page }) => {
  const response = await page.goto("/this-page-should-not-exist-ov", { waitUntil: "networkidle" });
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("That page is not here");
  await expect(page.getByRole("link", { name: /Return Home/i })).toBeVisible();
});

test("core pages pass automated WCAG AA scan", async ({ page }, testInfo) => {
  test.skip(!["chromium", "mobile-chromium"].includes(testInfo.project.name), "Run axe once per desktop/mobile engine.");

  for (const route of ["/", "/join", "/stories", "/privacy"]) {
    await page.goto(route, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(results.violations, `Accessibility violations on ${route}: ${JSON.stringify(results.violations, null, 2)}`).toEqual([]);
  }
});

test("mobile layout does not overflow horizontally", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile-"), "Mobile projects only.");
  await page.goto("/", { waitUntil: "networkidle" });

  const sizes = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));

  expect(sizes.scroll).toBeLessThanOrEqual(sizes.viewport + 1);
  await expect(page.locator("details.mobile-nav")).toBeVisible();
});
