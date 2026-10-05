import { test, expect } from '@playwright/test';

test('home loads', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.ok()).toBeTruthy();
});
