// ============================================================
// FACTORY METHOD PATTERN - Drink Factory
// ============================================================
// Định nghĩa interface và các concrete class cho đồ uống
// ============================================================

// ── Interface sản phẩm (Product Interface) ──────────────────
export interface Drink {
  getName(): string;
  getSize(): string;
  getPrice(): number;
  getIngredients(): string[];
  prepare(): void;
  serve(): void;
}

// ── Enum kích cỡ ─────────────────────────────────────────────
export enum DrinkSize {
  SMALL = "Nhỏ (S)",
  MEDIUM = "Vừa (M)",
  LARGE = "Lớn (L)",
}

// ── Bảng giá theo size ───────────────────────────────────────
export const SIZE_PRICE_MULTIPLIER: Record<DrinkSize, number> = {
  [DrinkSize.SMALL]: 0.8,
  [DrinkSize.MEDIUM]: 1.0,
  [DrinkSize.LARGE]: 1.2,
};

// ── Concrete Product 1: Espresso ─────────────────────────────
export class Espresso implements Drink {
  private basePrice = 40000;

  constructor(private size: DrinkSize) {}

  getName(): string {
    return "Espresso";
  }
  getSize(): string {
    return this.size;
  }
  getPrice(): number {
    return Math.round(this.basePrice * SIZE_PRICE_MULTIPLIER[this.size]);
  }
  getIngredients(): string[] {
    return ["Hạt cà phê Arabica rang đậm", "Nước nóng 90°C"];
  }
  prepare(): void {
    console.log(`   ☕ Xay hạt cà phê → Nén vào portafilter → Chiết xuất ${this.size}`);
  }
  serve(): void {
    console.log(`   🍵 Phục vụ ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VNĐ`);
  }
}

// ── Concrete Product 2: Cappuccino ───────────────────────────
export class Cappuccino implements Drink {
  private basePrice = 55000;

  constructor(private size: DrinkSize) {}

  getName(): string {
    return "Cappuccino";
  }
  getSize(): string {
    return this.size;
  }
  getPrice(): number {
    return Math.round(this.basePrice * SIZE_PRICE_MULTIPLIER[this.size]);
  }
  getIngredients(): string[] {
    return ["Espresso đôi", "Sữa tươi nguyên kem", "Bọt sữa mịn"];
  }
  prepare(): void {
    console.log(`   ☕ Chiết xuất espresso → Đánh bọt sữa → Đổ theo tỉ lệ 1:1:1 (${this.size})`);
  }
  serve(): void {
    console.log(`   🍵 Phục vụ ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VNĐ`);
  }
}

// ── Concrete Product 3: Matcha Latte ─────────────────────────
export class MatchaLatte implements Drink {
  private basePrice = 60000;

  constructor(private size: DrinkSize) {}

  getName(): string {
    return "Matcha Latte";
  }
  getSize(): string {
    return this.size;
  }
  getPrice(): number {
    return Math.round(this.basePrice * SIZE_PRICE_MULTIPLIER[this.size]);
  }
  getIngredients(): string[] {
    return ["Bột matcha Nhật Bản", "Sữa tươi", "Siro đường mía"];
  }
  prepare(): void {
    console.log(`   🍵 Hòa tan bột matcha → Đun nóng sữa → Khuấy đều (${this.size})`);
  }
  serve(): void {
    console.log(`   🍵 Phục vụ ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VNĐ`);
  }
}

// ── Concrete Product 4: Caramel Macchiato ────────────────────
export class CaramelMacchiato implements Drink {
  private basePrice = 65000;

  constructor(private size: DrinkSize) {}

  getName(): string {
    return "Caramel Macchiato";
  }
  getSize(): string {
    return this.size;
  }
  getPrice(): number {
    return Math.round(this.basePrice * SIZE_PRICE_MULTIPLIER[this.size]);
  }
  getIngredients(): string[] {
    return ["Espresso", "Sữa tươi hấp", "Siro vanilla", "Sốt caramel"];
  }
  prepare(): void {
    console.log(`   ☕ Hấp sữa → Thêm vanilla → Chiết espresso → Rưới caramel (${this.size})`);
  }
  serve(): void {
    console.log(`   🍵 Phục vụ ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VNĐ`);
  }
}

// ── Concrete Product 5: Cold Brew ────────────────────────────
export class ColdBrew implements Drink {
  private basePrice = 50000;

  constructor(private size: DrinkSize) {}

  getName(): string {
    return "Cold Brew";
  }
  getSize(): string {
    return this.size;
  }
  getPrice(): number {
    return Math.round(this.basePrice * SIZE_PRICE_MULTIPLIER[this.size]);
  }
  getIngredients(): string[] {
    return ["Cà phê xay thô", "Nước lạnh", "Đá viên"];
  }
  prepare(): void {
    console.log(`   🧊 Ngâm cà phê 12h trong nước lạnh → Lọc → Rót đá (${this.size})`);
  }
  serve(): void {
    console.log(`   🍵 Phục vụ ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VNĐ`);
  }
}
