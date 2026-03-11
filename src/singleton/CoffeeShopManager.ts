// ============================================================
// SINGLETON PATTERN - Coffee Shop Manager
// ============================================================
// Đảm bảo chỉ có MỘT instance duy nhất của CoffeeShopManager
// trong toàn bộ ứng dụng (quản lý cửa hàng cà phê)
// ============================================================

export interface OrderRecord {
  id: number;
  customerName: string;
  drinkName: string;
  size: string;
  price: number;
  timestamp: Date;
}

export class CoffeeShopManager {
  // Thuộc tính static lưu trữ instance duy nhất
  private static instance: CoffeeShopManager;

  // Thông tin cửa hàng
  private shopName: string;
  private openingHours: string;
  private totalRevenue: number;
  private orderHistory: OrderRecord[];
  private nextOrderId: number;

  // Constructor là private - ngăn không cho tạo instance từ bên ngoài
  private constructor() {
    this.shopName = "Copilot Coffee House";
    this.openingHours = "07:00 - 22:00";
    this.totalRevenue = 0;
    this.orderHistory = [];
    this.nextOrderId = 1;
    console.log("[Singleton] CoffeeShopManager instance da duoc khoi tao!");
  }

  // Phương thức static để lấy instance duy nhất
  public static getInstance(): CoffeeShopManager {
    if (!CoffeeShopManager.instance) {
      CoffeeShopManager.instance = new CoffeeShopManager();
    }
    return CoffeeShopManager.instance;
  }

  // Lấy thông tin cửa hàng
  public getShopInfo(): void {
    console.log("-----------------------------------------");
    console.log(`Ten cua hang : ${this.shopName}`);
    console.log(`Gio mo cua   : ${this.openingHours}`);
    console.log(`Doanh thu    : ${this.totalRevenue.toLocaleString("vi-VN")} VND`);
    console.log(`So don hang  : ${this.orderHistory.length}`);
    console.log("-----------------------------------------");
  }

  // Thêm đơn hàng mới
  public addOrder(customerName: string, drinkName: string, size: string, price: number): OrderRecord {
    const order: OrderRecord = {
      id: this.nextOrderId++,
      customerName,
      drinkName,
      size,
      price,
      timestamp: new Date(),
    };
    this.orderHistory.push(order);
    this.totalRevenue += price;
    console.log(`Don hang #${order.id}: ${customerName} - ${drinkName} (${size}) - ${price.toLocaleString("vi-VN")} VND`);
    return order;
  }

  // Xem toàn bộ lịch sử đơn hàng
  public getOrderHistory(): OrderRecord[] {
    return [...this.orderHistory];
  }

  // Tổng doanh thu
  public getTotalRevenue(): number {
    return this.totalRevenue;
  }

  // Tên cửa hàng
  public getShopName(): string {
    return this.shopName;
  }

  // Cập nhật tên cửa hàng
  public setShopName(name: string): void {
    this.shopName = name;
    console.log(`Ten cua hang da duoc cap nhat thanh: "${name}"`);
  }
}
