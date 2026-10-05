import { test, expect } from "@playwright/test";

const routes = ["/", "/experiences", "/stories", "/about", "/partners", "/join", "/privacy", "/terms", "/contact"];

for (const route of routes) {
  test(`${route} loads`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("main")).toBeVisible();
  });
}

test("brand signature image loads", async ({ page }) => {
  await page.goto("/");
  const logo = page.locator(".brand-signature img").first();
  await expect(logo).toBeVisible();
  const width = await logo.evaluate((img: HTMLImageElement) => img.naturalWidth);
  expect(width).toBeGreaterThan(0);
});

test("primary navigation is present", async ({ page }) => {
  await page.goto("/");
  for (const label of ["Experiences", "Stories", "About", "Partners"]) {
    await expect(page.getByRole("link", { name: label, exact: true }).first()).toBeVisible();
  }
});

test("custom 404 responds correctly", async ({ page }) => {
  const response = await page.goto("/qa-not-found");
  expect(response?.status()).toBe(404);
  await expect(page.locator("main")).toBeVisible();
});

test("mobile navigation opens", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("mobile"), "mobile project only");
  await page.goto("/");
  const menu = page.locator(".mobile-nav summary");
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(page.locator(".mobile-nav").getByRole("link", { name: "Join", exact: true })).toBeVisible();
});
