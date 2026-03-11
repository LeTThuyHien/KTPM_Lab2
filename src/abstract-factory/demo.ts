// ============================================================
// DEMO: Abstract Factory Pattern
// ============================================================

import {
  LightThemeFactory,
  DarkThemeFactory,
  VintageThemeFactory,
  CoffeeShopApp,
  CoffeeShopUIFactory,
} from "./CoffeeShopUIFactory";

export function runAbstractFactoryDemo(): void {
  console.log("\n╔═══════════════════════════════════════════════╗");
  console.log("║   🎨 ABSTRACT FACTORY PATTERN - DEMO          ║");
  console.log("╚═══════════════════════════════════════════════╝");
  console.log();
  console.log("📌 Mục đích: Cung cấp một interface để tạo ra CÁC HỌ");
  console.log("   (families) object có liên quan, mà không cần chỉ định");
  console.log("   class cụ thể của chúng.\n");

  const shopName = "Hien's Coffee House";

  // ── Demo 1: Light Theme Factory ──────────────────────────
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 1: Tạo UI với Light Theme Factory");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const lightFactory = new LightThemeFactory();
  const app = new CoffeeShopApp(lightFactory);
  app.renderUI(shopName);

  // ── Demo 2: Dark Theme Factory ───────────────────────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 2: Tạo UI với Dark Theme Factory");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const darkFactory = new DarkThemeFactory();
  app.setTheme(darkFactory);
  app.renderUI(shopName);

  // ── Demo 3: Vintage Theme Factory ────────────────────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 3: Tạo UI với Vintage Theme Factory");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const vintageFactory = new VintageThemeFactory();
  app.setTheme(vintageFactory);
  app.renderUI(shopName);

  // ── Demo 4: Minh họa tính nhất quán trong 1 "họ" ─────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 4: So sánh CSS Style của 3 themes");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  const factories: CoffeeShopUIFactory[] = [
    new LightThemeFactory(),
    new DarkThemeFactory(),
    new VintageThemeFactory(),
  ];

  factories.forEach((factory) => {
    console.log(`  ${factory.getThemeName()}:`);
    const btn = factory.createButton("Order");
    const card = factory.createMenuCard("Espresso", 40000);
    const header = factory.createHeader("Menu");
    console.log(`    Button  → ${btn.getStyle()}`);
    console.log(`    Card    → ${card.getStyle()}`);
    console.log(`    Header  → ${header.getStyle()}\n`);
  });

  // ── Demo 5: Highlight sản phẩm nổi bật ──────────────────
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 5: Highlight menu card theo từng theme");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  factories.forEach((factory) => {
    const card = factory.createMenuCard("Cold Brew ⭐ BÁN CHẠY", 50000);
    card.highlight();
  });

  console.log("\n✅ [Abstract Factory] Demo hoàn tất!\n");
}

// Chạy độc lập nếu gọi trực tiếp file này
if (require.main === module) {
  runAbstractFactoryDemo();
}
