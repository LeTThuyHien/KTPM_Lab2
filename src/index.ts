// ╔══════════════════════════════════════════════════════════════╗
// ║       COFFEE SHOP MANAGEMENT SYSTEM                         ║
// ║       Design Patterns in TypeScript                         ║
// ║                                                             ║
// ║  Sinh viên : Lê Thị Thùy Hiền                               ║
// ║  MSSV      : 22708291                                       ║
// ║  Môn       : Thiết kế & Kiến trúc Phần mềm                  ║
// ╚══════════════════════════════════════════════════════════════╝
//
//  Các Design Pattern được implement:
//  ① Singleton       — CoffeeShopManager (quản lý cửa hàng)
//  ② Factory Method  — DrinkFactory (tạo đồ uống)
//  ③ Abstract Factory— CoffeeShopUIFactory (giao diện theo theme)
// ═══════════════════════════════════════════════════════════════

import { runSingletonDemo } from "./singleton/demo";
import { runFactoryMethodDemo } from "./factory-method/demo";
import { runAbstractFactoryDemo } from "./abstract-factory/demo";

function printBanner(): void {
  console.log("\n");
  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║       ☕  COFFEE SHOP MANAGEMENT SYSTEM  ☕                  ║");
  console.log("║            Design Patterns — TypeScript                     ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log("║  Sinh viên : Lê Thị Thùy Hiền                               ║");
  console.log("║  MSSV      : 22708291                                        ║");
  console.log("╚══════════════════════════════════════════════════════════════╝");
  console.log();
  console.log("  Các Design Pattern được minh họa:");
  console.log("  ① Singleton Pattern       — CoffeeShopManager");
  console.log("  ② Factory Method Pattern  — DrinkFactory");
  console.log("  ③ Abstract Factory Pattern— CoffeeShopUIFactory");
  console.log();
}

function printSeparator(patternName: string, index: number): void {
  console.log("\n");
  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log(`║  PATTERN ${index}: ${patternName.padEnd(52)}║`);
  console.log("╚══════════════════════════════════════════════════════════════╝");
}

function printSummary(): void {
  console.log("\n");
  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║                    📚 TỔNG KẾT                              ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log("║                                                              ║");
  console.log("║  ① SINGLETON PATTERN                                         ║");
  console.log("║     • Đảm bảo class chỉ có 1 instance duy nhất              ║");
  console.log("║     • Cung cấp điểm truy cập toàn cục (getInstance())        ║");
  console.log("║     • Dùng cho: Logger, Config, DB Connection, Cache...      ║");
  console.log("║     • Ví dụ: CoffeeShopManager quản lý doanh thu & đơn hàng ║");
  console.log("║                                                              ║");
  console.log("║  ② FACTORY METHOD PATTERN                                    ║");
  console.log("║     • Định nghĩa interface tạo object                        ║");
  console.log("║     • Để subclass quyết định class nào được instantiate      ║");
  console.log("║     • Dùng khi: không biết trước loại object cần tạo         ║");
  console.log("║     • Ví dụ: DrinkFactory tạo Espresso/Cappuccino/Matcha... ║");
  console.log("║                                                              ║");
  console.log("║  ③ ABSTRACT FACTORY PATTERN                                  ║");
  console.log('║     • Tạo ra "họ" (family) các object liên quan              ║');
  console.log("║     • Không chỉ định class cụ thể của chúng                  ║");
  console.log("║     • Đảm bảo tính nhất quán giữa các product trong họ       ║");
  console.log("║     • Ví dụ: Light/Dark/Vintage Theme → Button+Card+Header  ║");
  console.log("║                                                              ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log("║  ✅ Tất cả patterns đã được demo thành công!                 ║");
  console.log("╚══════════════════════════════════════════════════════════════╝\n");
}

// ─── Main ────────────────────────────────────────────────────
function main(): void {
  printBanner();

  printSeparator("SINGLETON PATTERN — CoffeeShopManager", 1);
  runSingletonDemo();

  printSeparator("FACTORY METHOD PATTERN — DrinkFactory", 2);
  runFactoryMethodDemo();

  printSeparator("ABSTRACT FACTORY PATTERN — CoffeeShopUIFactory", 3);
  runAbstractFactoryDemo();

  printSummary();
}

main();
