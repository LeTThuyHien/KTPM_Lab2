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
  console.log("\n+-----------------------------------------------+");
  console.log("|    FACTORY METHOD PATTERN - DEMO              |");
  console.log("+-----------------------------------------------+");
  console.log();
  console.log("Muc dich: Dinh nghia mot interface de tao object,");
  console.log("   nhung de subclass quyet dinh class nao se duoc khoi tao.\n");

  // ── Demo 1: Sử dụng trực tiếp từng Concrete Factory ──────
  console.log("-----------------------------------------------");
  console.log("  Demo 1: Tao do uong qua Concrete Factories");
  console.log("-----------------------------------------------");

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
  console.log("\n-----------------------------------------------");
  console.log("  Demo 2: Tao do uong qua Factory Registry");
  console.log("-----------------------------------------------");
  console.log("   (Client chi can biet ten loai do uong, khong can biet class cu the)");

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
  console.log("\n-----------------------------------------------");
  console.log("  Demo 3: Tinh da hinh - Cung method, khac ket qua");
  console.log("-----------------------------------------------");
  console.log("   createDrink(DrinkSize.MEDIUM) voi cac factory khac nhau:\n");

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

  console.log("\n[Factory Method] Demo hoan tat!\n");
}

// Chạy độc lập nếu gọi trực tiếp file này
if (require.main === module) {
  runFactoryMethodDemo();
}
