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
    console.log(`   Xay hat ca phe -> Nen vao portafilter -> Chiet xuat ${this.size}`);
  }
  serve(): void {
    console.log(`   Phuc vu ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VND`);
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
    console.log(`   Chiet xuat espresso -> Danh bot sua -> Do theo ti le 1:1:1 (${this.size})`);
  }
  serve(): void {
    console.log(`   Phuc vu ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VND`);
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
    console.log(`   Hoa tan bot matcha -> Dun nong sua -> Khuay deu (${this.size})`);
  }
  serve(): void {
    console.log(`   Phuc vu ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VND`);
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
    console.log(`   Hap sua -> Them vanilla -> Chiet espresso -> Ruoi caramel (${this.size})`);
  }
  serve(): void {
    console.log(`   Phuc vu ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VND`);
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
    console.log(`   Ngam ca phe 12h trong nuoc lanh -> Loc -> Rot da (${this.size})`);
  }
  serve(): void {
    console.log(`   Phuc vu ${this.getName()} (${this.size}) - ${this.getPrice().toLocaleString("vi-VN")} VND`);
  }
}
