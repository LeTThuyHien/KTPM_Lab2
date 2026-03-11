// ============================================================
// DEMO: Singleton Pattern
// ============================================================

import { CoffeeShopManager } from "./CoffeeShopManager";

export function runSingletonDemo(): void {
  console.log("\n+-----------------------------------------------+");
  console.log("|       SINGLETON PATTERN - DEMO                |");
  console.log("+-----------------------------------------------+");
  console.log();
  console.log("Muc dich: Dam bao mot class chi co DUY NHAT mot instance");
  console.log("   va cung cap mot diem truy cap toan cuc toi instance do.\n");

  console.log("Lan 1: Lay instance cua CoffeeShopManager...");
  const manager1 = CoffeeShopManager.getInstance();

  console.log("\nLan 2: Lay instance cua CoffeeShopManager...");
  const manager2 = CoffeeShopManager.getInstance();

  console.log("\nLan 3: Lay instance cua CoffeeShopManager...");
  const manager3 = CoffeeShopManager.getInstance();

  console.log("\nKiem tra tinh dong nhat cua cac instance:");
  console.log(`   manager1 === manager2 : ${manager1 === manager2}`);
  console.log(`   manager2 === manager3 : ${manager2 === manager3}`);
  console.log(`   manager1 === manager3 : ${manager1 === manager3}`);
  console.log("   => Ket qua: Tat ca deu la CUNG mot instance!\n");

  console.log("Them don hang qua manager1:");
  manager1.addOrder("Nguyen Van An", "Ca phe sua da", "Lon", 45000);
  manager1.addOrder("Tran Thi Bich", "Cappuccino", "Vua", 55000);

  console.log("\nThem don hang qua manager2 (cung instance):");
  manager2.addOrder("Le Minh Cuong", "Matcha Latte", "Nho", 60000);

  console.log("\nThong tin cua hang qua manager3:");
  manager3.getShopInfo();

  console.log("Doi ten cua hang qua manager1:");
  manager1.setShopName("Hien's Coffee & Tea");

  console.log("\nKiem tra lai qua manager2 sau khi doi ten:");
  console.log(`   Ten hien tai (manager2): "${manager2.getShopName()}"`);
  console.log(`   Ten hien tai (manager3): "${manager3.getShopName()}"`);
  console.log("   => Thay doi phan anh ngay tren tat ca cac bien!\n");

  console.log("[Singleton] Demo hoan tat!\n");
}

// Chạy độc lập nếu gọi trực tiếp file này
if (require.main === module) {
  runSingletonDemo();
}
