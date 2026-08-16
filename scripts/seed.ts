const lang = process.env.APP_LANG || "it";

async function main() {
  if (lang === "de") {
    const { seedGerman } = await import("./de/index");
    await seedGerman();
  } else {
    const { seedItalian } = await import("./it/index");
    await seedItalian();
  }
}

main().catch(console.error);