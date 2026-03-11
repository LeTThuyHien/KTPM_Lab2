// ============================================================
// FACTORY METHOD PATTERN - DrinkFactory
// ============================================================
// Định nghĩa abstract factory và các concrete factory
// để tạo ra các loại đồ uống khác nhau
// ============================================================

import {
  Drink,
  DrinkSize,
  Espresso,
  Cappuccino,
  MatchaLatte,
  CaramelMacchiato,
  ColdBrew,
} from "./Drinks";

// Re-export DrinkSize so consumers only need to import from DrinkFactory
export { DrinkSize } from "./Drinks";

// ── Abstract Creator (Creator) ───────────────────────────────
// Khai báo factory method trừu tượng - subclass phải implement
export abstract class DrinkFactory {
  // 🔑 FACTORY METHOD - Phương thức trừu tượng cần override
  public abstract createDrink(size: DrinkSize): Drink;

  // Template method sử dụng factory method
  public orderDrink(size: DrinkSize): Drink {
    const drink = this.createDrink(size); // Gọi factory method
    console.log(`\n   🛒 Đặt hàng: ${drink.getName()} (${size})`);
    console.log(`   📦 Nguyên liệu: ${drink.getIngredients().join(", ")}`);
    drink.prepare();
    drink.serve();
    return drink;
  }

  public getFactoryName(): string {
    return this.constructor.name;
  }
}

// ── Concrete Creator 1: EspressoFactory ──────────────────────
export class EspressoFactory extends DrinkFactory {
  public createDrink(size: DrinkSize): Drink {
    return new Espresso(size);
  }
}

// ── Concrete Creator 2: CappuccinoFactory ────────────────────
export class CappuccinoFactory extends DrinkFactory {
  public createDrink(size: DrinkSize): Drink {
    return new Cappuccino(size);
  }
}

// ── Concrete Creator 3: MatchaLatteFactory ───────────────────
export class MatchaLatteFactory extends DrinkFactory {
  public createDrink(size: DrinkSize): Drink {
    return new MatchaLatte(size);
  }
}

// ── Concrete Creator 4: CaramelMacchiatoFactory ──────────────
export class CaramelMacchiatoFactory extends DrinkFactory {
  public createDrink(size: DrinkSize): Drink {
    return new CaramelMacchiato(size);
  }
}

// ── Concrete Creator 5: ColdBrewFactory ──────────────────────
export class ColdBrewFactory extends DrinkFactory {
  public createDrink(size: DrinkSize): Drink {
    return new ColdBrew(size);
  }
}

// ── Factory Registry: ánh xạ tên → factory class ─────────────
export type DrinkType = "espresso" | "cappuccino" | "matcha" | "caramel" | "coldbrew";

const factoryMap: Record<DrinkType, new () => DrinkFactory> = {
  espresso: EspressoFactory,
  cappuccino: CappuccinoFactory,
  matcha: MatchaLatteFactory,
  caramel: CaramelMacchiatoFactory,
  coldbrew: ColdBrewFactory,
};

export function getDrinkFactory(type: DrinkType): DrinkFactory {
  const FactoryClass = factoryMap[type];
  if (!FactoryClass) {
    throw new Error(`Không tìm thấy factory cho loại đồ uống: ${type}`);
  }
  return new FactoryClass();
}
