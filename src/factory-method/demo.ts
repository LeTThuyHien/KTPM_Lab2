// ============================================================
// DEMO: Factory Method Pattern
// ============================================================

import { DrinkSize, getDrinkFactory, DrinkType } from "./DrinkFactory";
import {
  EspressoFactory,
  CappuccinoFactory,
  MatchaLatteFactory,
  CaramelMacchiatoFactory,
  ColdBrewFactory,
} from "./DrinkFactory";

export function runFactoryMethodDemo(): void {
  console.log("\n╔═══════════════════════════════════════════════╗");
  console.log("║    🏭 FACTORY METHOD PATTERN - DEMO           ║");
  console.log("╚═══════════════════════════════════════════════╝");
  console.log();
  console.log("📌 Mục đích: Định nghĩa một interface để tạo object,");
  console.log("   nhưng để subclass quyết định class nào sẽ được khởi tạo.\n");

  // ── Demo 1: Sử dụng trực tiếp từng Concrete Factory ──────
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 1: Tạo đồ uống qua Concrete Factories");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  const espressoFactory = new EspressoFactory();
  espressoFactory.orderDrink(DrinkSize.SMALL);

  const cappuccinoFactory = new CappuccinoFactory();
  cappuccinoFactory.orderDrink(DrinkSize.MEDIUM);

  const matchaFactory = new MatchaLatteFactory();
  matchaFactory.orderDrink(DrinkSize.LARGE);

  const caramelFactory = new CaramelMacchiatoFactory();
  caramelFactory.orderDrink(DrinkSize.MEDIUM);

  const coldBrewFactory = new ColdBrewFactory();
  coldBrewFactory.orderDrink(DrinkSize.LARGE);

  // ── Demo 2: Sử dụng Factory Registry (linh hoạt) ─────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 2: Tạo đồ uống qua Factory Registry");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("   (Client chỉ cần biết tên loại đồ uống, không cần biết class cụ thể)");

  const orders: Array<{ type: DrinkType; size: DrinkSize }> = [
    { type: "espresso", size: DrinkSize.LARGE },
    { type: "matcha", size: DrinkSize.SMALL },
    { type: "coldbrew", size: DrinkSize.MEDIUM },
  ];

  orders.forEach(({ type, size }) => {
    const factory = getDrinkFactory(type);
    factory.orderDrink(size);
  });

  // ── Demo 3: Minh họa tính đa hình (Polymorphism) ─────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  📌 Demo 3: Tính đa hình - Cùng method, khác kết quả");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("   createDrink(DrinkSize.MEDIUM) với các factory khác nhau:\n");

  const factories = [
    new EspressoFactory(),
    new CappuccinoFactory(),
    new MatchaLatteFactory(),
    new CaramelMacchiatoFactory(),
    new ColdBrewFactory(),
  ];

  factories.forEach((factory) => {
    const drink = factory.createDrink(DrinkSize.MEDIUM);
    console.log(
      `   ${factory.getFactoryName().padEnd(25)} → ${drink.getName().padEnd(20)} | ${drink.getPrice().toLocaleString("vi-VN")} VNĐ`
    );
  });

  console.log("\n✅ [Factory Method] Demo hoàn tất!\n");
}

// Chạy độc lập nếu gọi trực tiếp file này
if (require.main === module) {
  runFactoryMethodDemo();
}
