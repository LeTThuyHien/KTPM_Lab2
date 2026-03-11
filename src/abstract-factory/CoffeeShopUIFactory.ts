// ============================================================
// ABSTRACT FACTORY PATTERN - CoffeeShopUIFactory
// ============================================================
// Abstract Factory interface + 3 Concrete Factories:
//   LightThemeFactory | DarkThemeFactory | VintageThemeFactory
// ============================================================

import {
  UIButton,
  UIMenuCard,
  UIHeader,
  UIOrderBanner,
  LightButton,
  LightMenuCard,
  LightHeader,
  LightOrderBanner,
  DarkButton,
  DarkMenuCard,
  DarkHeader,
  DarkOrderBanner,
  VintageButton,
  VintageMenuCard,
  VintageHeader,
  VintageOrderBanner,
} from "./UIComponents";

// ════════════════════════════════════════════════════════════
//  ABSTRACT FACTORY - Interface tạo ra "họ" UI components
// ════════════════════════════════════════════════════════════
export interface CoffeeShopUIFactory {
  createButton(label: string): UIButton;
  createMenuCard(drinkName: string, price: number): UIMenuCard;
  createHeader(title: string): UIHeader;
  createOrderBanner(): UIOrderBanner;
  getThemeName(): string;
  getThemeDescription(): string;
}

// ════════════════════════════════════════════════════════════
//  CONCRETE FACTORY 1: Light Theme Factory
// ════════════════════════════════════════════════════════════
export class LightThemeFactory implements CoffeeShopUIFactory {
  createButton(label: string): UIButton {
    return new LightButton(label);
  }
  createMenuCard(drinkName: string, price: number): UIMenuCard {
    return new LightMenuCard(drinkName, price);
  }
  createHeader(title: string): UIHeader {
    return new LightHeader(title);
  }
  createOrderBanner(): UIOrderBanner {
    return new LightOrderBanner();
  }
  getThemeName(): string {
    return "🌞 Light Theme";
  }
  getThemeDescription(): string {
    return "Giao diện sáng, ấm áp — phù hợp ban ngày";
  }
}

// ════════════════════════════════════════════════════════════
//  CONCRETE FACTORY 2: Dark Theme Factory
// ════════════════════════════════════════════════════════════
export class DarkThemeFactory implements CoffeeShopUIFactory {
  createButton(label: string): UIButton {
    return new DarkButton(label);
  }
  createMenuCard(drinkName: string, price: number): UIMenuCard {
    return new DarkMenuCard(drinkName, price);
  }
  createHeader(title: string): UIHeader {
    return new DarkHeader(title);
  }
  createOrderBanner(): UIOrderBanner {
    return new DarkOrderBanner();
  }
  getThemeName(): string {
    return "🌙 Dark Theme";
  }
  getThemeDescription(): string {
    return "Giao diện tối, hiện đại — bảo vệ mắt ban đêm";
  }
}

// ════════════════════════════════════════════════════════════
//  CONCRETE FACTORY 3: Vintage Theme Factory
// ════════════════════════════════════════════════════════════
export class VintageThemeFactory implements CoffeeShopUIFactory {
  createButton(label: string): UIButton {
    return new VintageButton(label);
  }
  createMenuCard(drinkName: string, price: number): UIMenuCard {
    return new VintageMenuCard(drinkName, price);
  }
  createHeader(title: string): UIHeader {
    return new VintageHeader(title);
  }
  createOrderBanner(): UIOrderBanner {
    return new VintageOrderBanner();
  }
  getThemeName(): string {
    return "📜 Vintage Theme";
  }
  getThemeDescription(): string {
    return "Giao diện cổ điển, sang trọng — phong cách quán cà phê xưa";
  }
}

// ════════════════════════════════════════════════════════════
//  CLIENT: CoffeeShopApp — sử dụng factory mà không biết
//          cụ thể là theme nào (chỉ biết interface)
// ════════════════════════════════════════════════════════════
export class CoffeeShopApp {
  private factory: CoffeeShopUIFactory;

  constructor(factory: CoffeeShopUIFactory) {
    this.factory = factory;
  }

  // Thay đổi theme tại runtime
  public setTheme(factory: CoffeeShopUIFactory): void {
    this.factory = factory;
    console.log(`\n   🔄 Theme đã được chuyển sang: ${factory.getThemeName()}`);
  }

  // Render toàn bộ UI của app
  public renderUI(shopName: string): void {
    console.log(`\n   ┌─────────────────────────────────────────┐`);
    console.log(`   │  Theme: ${this.factory.getThemeName().padEnd(33)}│`);
    console.log(`   │  ${this.factory.getThemeDescription().padEnd(41)}│`);
    console.log(`   └─────────────────────────────────────────┘`);

    // Tạo và render Header
    const header = this.factory.createHeader(shopName);
    header.render();

    // Tạo và render Menu Cards
    const menuItems = [
      { name: "Espresso", price: 40000 },
      { name: "Cappuccino", price: 55000 },
      { name: "Matcha Latte", price: 60000 },
    ];
    menuItems.forEach(({ name, price }) => {
      const card = this.factory.createMenuCard(name, price);
      card.render();
    });

    // Tạo và render Buttons
    const orderBtn = this.factory.createButton("Đặt hàng ngay");
    const viewBtn = this.factory.createButton("Xem thực đơn");
    orderBtn.render();
    viewBtn.render();

    // Simulate click
    orderBtn.onClick();

    // Tạo và render Order Banner
    const banner = this.factory.createOrderBanner();
    banner.render("Đơn hàng của bạn đã được xác nhận! Vui lòng chờ 5 phút.");

    console.log(`   CSS Button  : ${this.factory.createButton("x").getStyle()}`);
    console.log(`   CSS Card    : ${this.factory.createMenuCard("x", 0).getStyle()}`);
  }
}
