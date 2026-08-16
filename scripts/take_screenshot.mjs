import { chromium } from "@playwright/test";
import fs from "fs";
import path from "path";

async function captureViewports(page, name) {
  const screenshotsDir = path.resolve("public", "screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // 1. Desktop Screenshot
  console.log(`Setting desktop viewport for ${name}...`);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.waitForTimeout(1500); // Give layout shift time to settle
  const desktopPath = path.join(screenshotsDir, `desktop_${name}.png`);
  await page.screenshot({ path: desktopPath, fullPage: true });
  console.log(`Saved desktop screenshot: ${desktopPath}`);

  // 2. Mobile Screenshot
  console.log(`Setting mobile viewport for ${name}...`);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(1500); // Give layout shift time to settle
  // Move fixed bottom navigation to static so it renders at the bottom/end in fullPage capture
  await page.evaluate(() => {
    const fixedBars = document.querySelectorAll('nav.fixed, footer.fixed, [class*="fixed bottom-0"]');
    fixedBars.forEach((el) => {
      el.style.position = "static";
      el.style.width = "100%";
    });
  });
  const mobilePath = path.join(screenshotsDir, `mobile_${name}.png`);
  await page.screenshot({ path: mobilePath, fullPage: true });
  console.log(`Saved mobile screenshot: ${mobilePath}`);
}

async function main() {
  console.log("Launching browser in headless mode...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  page.on("console", (msg) => console.log(`[PAGE CONSOLE] ${msg.type()}: ${msg.text()}`));
  page.on("requestfailed", (request) => console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure()?.errorText}`));

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
    
    // Navigate directly to /home
    console.log("Navigating to /home...");
    await page.goto("http://localhost:3000/home", { waitUntil: "networkidle" });
    
    // Wait for scenarios to load
    console.log("Waiting for /home scenarios to load...");
    await page.waitForSelector("a[href*='/scenario/']", { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(1000);
    await captureViewports(page, "home");
    
    // Navigate to scenario details
    console.log("Navigating to http://localhost:3000/scenario/transportation...");
    await page.goto("http://localhost:3000/scenario/transportation", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await captureViewports(page, "scenario");

    // Discover first experience from scenario page or fallback to /experience/1
    const expHref = await page.locator("a[href*='/experience/']").first().getAttribute("href").catch(() => null);
    const expUrl = expHref ? `http://localhost:3000${expHref}` : "http://localhost:3000/experience/1";
    console.log(`Navigating to experience: ${expUrl}...`);
    await page.goto(expUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    // Expand the AI Tutor section
    const aiTutorBtn = page.locator('button:has-text("Practice with AI Tutor")');
    if (await aiTutorBtn.isVisible()) {
      console.log("Expanding AI Tutor chat...");
      await aiTutorBtn.click();
      await page.waitForTimeout(1500);
    }
    await captureViewports(page, "experience");

    // Navigate to stats / progress page
    console.log("Navigating to http://localhost:3000/progress...");
    await page.goto("http://localhost:3000/progress", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await captureViewports(page, "progress");

    // Navigate to profile page (with Coffee card)
    console.log("Navigating to http://localhost:3000/profile...");
    await page.goto("http://localhost:3000/profile", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await captureViewports(page, "profile");

    // Navigate to tutor page
    console.log("Navigating to http://localhost:3000/tutor...");
    await page.goto("http://localhost:3000/tutor", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await captureViewports(page, "tutor");

    // Navigate to vocabulary page
    console.log("Navigating to http://localhost:3000/vocabulary...");
    await page.goto("http://localhost:3000/vocabulary", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await captureViewports(page, "vocabulary");

    console.log("All screenshots captured successfully!");
  } catch (err) {
    console.error("Error during automation:", err);
  } finally {
    await browser.close();
  }
}

main();
