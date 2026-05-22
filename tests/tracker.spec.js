const path = require("node:path");
const { test, expect } = require("@playwright/test");

const sitePath = `file://${path.resolve(__dirname, "..", "index.html")}`;

test.beforeEach(async ({ page }) => {
  await page.goto(sitePath);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("renders aligned list headers including author", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "Tracker" })).toBeVisible();
  await expect(page.locator(".book-row").first().locator(".author")).toHaveText("George Eliot");

  const headers = page.locator(".list-header > span");
  await expect(headers).toHaveText(["Book", "Author", "Read", "Want", "Recommend"]);

  const headerVisible = await page.locator(".list-header").isVisible();
  if (!headerVisible) return;

  const headerBoxes = await headers.evaluateAll((elements) =>
    elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return { left: Math.round(rect.left), width: Math.round(rect.width) };
    })
  );
  const rowBoxes = await page.locator(".book-row").first().locator(":scope > *").evaluateAll((elements) =>
    elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return { left: Math.round(rect.left), width: Math.round(rect.width) };
    })
  );

  expect(headerBoxes).toEqual(rowBoxes);
});

test("updates summaries, author ranking, local storage, and image download", async ({ page }) => {
  await page.locator("#read-6").check();
  await page.locator("#read-7").check();
  await page.locator("#read-9").check();
  await page.locator("#want-3").check();
  await page.locator("#recommend-4").check();

  await expect(page.locator("#read-count")).toHaveText("4");
  await expect(page.locator("#want-count")).toHaveText("1");
  await expect(page.locator("#recommend-count")).toHaveText("1");

  const summary = await page.locator("#summary").inputValue();
  expect(summary).toContain("I have read 4: To the Lighthouse • Anna Karenina • War and Peace • Pride and Prejudice");
  expect(summary).toContain("I want to read 1: Ulysses");
  expect(summary).toContain("I highly recommend 1: To the Lighthouse");
  expect(summary).not.toContain("6. Anna Karenina");
  expect(summary).not.toContain(" * ");

  await expect(page.locator("#author-ranking")).toContainText("Leo Tolstoy");
  await expect(page.locator("#author-ranking")).toContainText("2 read");

  await page.reload();
  await expect(page.locator("#read-6")).toBeChecked();
  await expect(page.locator("#read-7")).toBeChecked();
  await expect(page.locator("#recommend-4")).toBeChecked();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Save image" }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("guardian-100-summary.png");
});
