import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";

async function captureViewports(page, name) {
  const screenshotDir = path.resolve("screenshot");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  // 1. Desktop Screenshot
  console.log(`Setting desktop viewport for ${name}...`);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.waitForTimeout(2000); // Give layout shift time to settle
  const desktopPath = path.join(screenshotDir, `desktop_${name}.png`);
  await page.screenshot({ path: desktopPath, fullPage: true });
  console.log(`Saved desktop screenshot: ${desktopPath}`);

  // 2. Mobile Screenshot
  console.log(`Setting mobile viewport for ${name}...`);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(2000); // Give layout shift time to settle
  const mobilePath = path.join(screenshotDir, `mobile_${name}.png`);
  await page.screenshot({ path: mobilePath, fullPage: true });
  console.log(`Saved mobile screenshot: ${mobilePath}`);
}

async function main() {
  console.log("Launching browser in non-headless mode...");
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  page.on("console", (msg) => console.log(`[PAGE CONSOLE] ${msg.type()}: ${msg.text()}`));
  page.on("requestfailed", (request) => console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure()?.errorText}`));
  page.on("response", async (response) => {
    if (response.status() >= 400) {
      console.log(`[API ERROR] ${response.url()} returned status ${response.status()}`);
    }
  });

  try {
    console.log("Navigating to http://localhost:3000/ (landing)...");
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await captureViewports(page, "landing");

    console.log("Navigating to http://localhost:3000/onboarding/welcome...");
    await page.goto("http://localhost:3000/onboarding/welcome", { waitUntil: "networkidle" });
    await captureViewports(page, "onboarding_welcome");

    console.log("Navigating to http://localhost:3000/onboarding/level...");
    await page.goto("http://localhost:3000/onboarding/level", { waitUntil: "networkidle" });
    await captureViewports(page, "onboarding_level");

    console.log("Navigating to http://localhost:3000/onboarding/goals...");
    await page.goto("http://localhost:3000/onboarding/goals", { waitUntil: "networkidle" });
    await captureViewports(page, "onboarding_goals");

    console.log("Navigating to http://localhost:3000/auth...");
    await page.goto("http://localhost:3000/auth", { waitUntil: "networkidle" });
    
    // Switch to Login tab directly
    const loginTab = page.locator('button:has-text("Log In")');
    if (await loginTab.isVisible()) {
      console.log("Clicking Log In tab...");
      await loginTab.click();
    }
    
    await page.fill('input[type="email"]', "e2e@test.com");
    await page.fill('input[type="password"]', "123456");
    await page.click('button[type="submit"]');
    
    await page.waitForTimeout(2000);
    
    // If redirected to auth or onboarding, navigate directly to /home
    if (page.url().includes("/auth") || page.url().includes("/onboarding")) {
      console.log("Navigating directly to /home...");
      await page.goto("http://localhost:3000/home", { waitUntil: "load" });
    }
    
    // Wait a couple of seconds to ensure page content loads fully
    console.log("Waiting for /home scenarios to load...");
    await page.waitForSelector("a[href*='/scenario/']", { timeout: 15000 });
    console.log("Content loaded!");
    
    // Capture Home
    await captureViewports(page, "home");
    
    // Navigate to scenario details
    console.log("Navigating to http://localhost:3000/scenario/transportation...");
    await page.goto("http://localhost:3000/scenario/transportation", { waitUntil: "load" });
    await page.waitForSelector("button:has-text('Delay Announcements'), div:has-text('Experiences')", { timeout: 15000 });
    console.log("Scenario details loaded!");
    
    // Capture Scenario
    await captureViewports(page, "scenario");

    // Navigate to experience details
    console.log("Navigating to http://localhost:3000/experience/1...");
    await page.goto("http://localhost:3000/experience/1", { waitUntil: "load" });
    await page.waitForSelector("h3:has-text('Transcript')", { timeout: 15000 });
    await page.waitForTimeout(1000);
    console.log("Experience details loaded!");
    await captureViewports(page, "experience");

    console.log("Screenshots captured successfully!");
  } catch (err) {
    console.error("Error during automation:", err);
  } finally {
    await browser.close();
  }
}

main();
