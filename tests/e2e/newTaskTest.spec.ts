import { test } from "@playwright/test";

test("Create a new task and verify success toast", async ({ page }) => {
  // Navigate to your application
  await page.goto("http://localhost:3000/en/tasks");

  // Click on the "New Task" button
  await page.click("text=New Task");

  // Wait for the form to be visible
  await page.waitForSelector('input[placeholder="Title"]');

  // Fill in the title and description
  await page.fill('input[placeholder="Title"]', "Test Task Title");
  await page.fill('input[placeholder="Description"]', "Test Task Description");

  // Click the "Save" button
  await page.click("text=SAVE");

  // Wait for the toast to appear and verify it contains "successfully"
  await page.waitForSelector('[data-testid="toast-success"]');
});
