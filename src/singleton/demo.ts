// ============================================================
// DEMO: Singleton Pattern
// ============================================================

import { CoffeeShopManager } from "./CoffeeShopManager";

export function runSingletonDemo(): void {
  console.log("\n╔═══════════════════════════════════════════════╗");
  console.log("║       🔒 SINGLETON PATTERN - DEMO             ║");
  console.log("╚═══════════════════════════════════════════════╝");
  console.log();
  console.log("📌 Mục đích: Đảm bảo một class chỉ có DUY NHẤT một instance");
  console.log("   và cung cấp một điểm truy cập toàn cục tới instance đó.\n");

  // Lần đầu gọi getInstance() → tạo mới instance
  console.log("👉 Lần 1: Lấy instance của CoffeeShopManager...");
  const manager1 = CoffeeShopManager.getInstance();

  // Lần hai gọi getInstance() → trả về instance cũ (KHÔNG tạo mới)
  console.log("\n👉 Lần 2: Lấy instance của CoffeeShopManager...");
  const manager2 = CoffeeShopManager.getInstance();

  // Lần ba gọi getInstance() → vẫn là instance cũ
  console.log("\n👉 Lần 3: Lấy instance của CoffeeShopManager...");
  const manager3 = CoffeeShopManager.getInstance();

  // Kiểm chứng: cả 3 biến đều trỏ đến cùng 1 object
  console.log("\n🔍 Kiểm tra tính đồng nhất của các instance:");
  console.log(`   manager1 === manager2 : ${manager1 === manager2}`);
  console.log(`   manager2 === manager3 : ${manager2 === manager3}`);
  console.log(`   manager1 === manager3 : ${manager1 === manager3}`);
  console.log("   ✅ Kết quả: Tất cả đều là CÙNG một instance!\n");

  // Sử dụng manager1 để thêm đơn hàng
  console.log("📋 Thêm đơn hàng qua manager1:");
  manager1.addOrder("Nguyễn Văn An", "Cà phê sữa đá", "Lớn", 45000);
  manager1.addOrder("Trần Thị Bích", "Cappuccino", "Vừa", 55000);

  // Sử dụng manager2 (cùng instance) để thêm thêm đơn hàng
  console.log("\n📋 Thêm đơn hàng qua manager2 (cùng instance):");
  manager2.addOrder("Lê Minh Cường", "Matcha Latte", "Nhỏ", 60000);

  // manager3 cũng thấy tất cả đơn hàng vì là cùng instance
  console.log("\n📊 Thông tin cửa hàng qua manager3:");
  manager3.getShopInfo();

  // Thay đổi tên qua manager1, manager2 & manager3 cũng thấy thay đổi
  console.log("✏️  Đổi tên cửa hàng qua manager1:");
  manager1.setShopName("Hien's Coffee & Tea");

  console.log("\n📊 Kiểm tra lại qua manager2 sau khi đổi tên:");
  console.log(`   Tên hiện tại (manager2): "${manager2.getShopName()}"`);
  console.log(`   Tên hiện tại (manager3): "${manager3.getShopName()}"`);
  console.log("   ✅ Thay đổi phản ánh ngay trên tất cả các biến!\n");

  console.log("✅ [Singleton] Demo hoàn tất!\n");
}

// Chạy độc lập nếu gọi trực tiếp file này
if (require.main === module) {
  runSingletonDemo();
}
