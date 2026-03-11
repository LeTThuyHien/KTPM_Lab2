// ============================================================
// ABSTRACT FACTORY PATTERN - Coffee Shop UI Theme
// ============================================================
// Tạo ra "họ" (family) các UI component cho giao diện
// Coffee Shop App: Light Theme & Dark Theme & Vintage Theme
// ============================================================

// ════════════════════════════════════════════════════════════
//  ABSTRACT PRODUCTS - Các interface cho từng loại component
// ════════════════════════════════════════════════════════════

// ── Abstract Product A: Button ───────────────────────────────
export interface UIButton {
  render(): void;
  onClick(): void;
  getStyle(): string;
}

// ── Abstract Product B: MenuCard ─────────────────────────────
export interface UIMenuCard {
  render(): void;
  highlight(): void;
  getStyle(): string;
}

// ── Abstract Product C: Header ───────────────────────────────
export interface UIHeader {
  render(): void;
  getStyle(): string;
}

// ── Abstract Product D: OrderBanner ──────────────────────────
export interface UIOrderBanner {
  render(message: string): void;
  getStyle(): string;
}

// ════════════════════════════════════════════════════════════
//  CONCRETE PRODUCTS - Light Theme
// ════════════════════════════════════════════════════════════

export class LightButton implements UIButton {
  constructor(private label: string) {}
  render(): void {
    console.log(`   [ 🌞 LIGHT ] Button: [ ${this.label} ] | bg:#FFFFFF | text:#333333 | border:#CCCCCC`);
  }
  onClick(): void {
    console.log(`   [ 🌞 LIGHT ] Button "${this.label}" được nhấn!`);
  }
  getStyle(): string {
    return "background:#FFFFFF; color:#333333; border:1px solid #CCCCCC; border-radius:4px";
  }
}

export class LightMenuCard implements UIMenuCard {
  constructor(private drinkName: string, private price: number) {}
  render(): void {
    console.log(`   [ 🌞 LIGHT ] MenuCard: 📋 ${this.drinkName} — ${this.price.toLocaleString("vi-VN")} VNĐ | bg:#FFF8F0 | shadow: nhẹ`);
  }
  highlight(): void {
    console.log(`   [ 🌞 LIGHT ] MenuCard "${this.drinkName}" được highlight: viền cam nhạt`);
  }
  getStyle(): string {
    return "background:#FFF8F0; border:1px solid #FFD9A0; box-shadow:0 2px 8px rgba(0,0,0,0.08)";
  }
}

export class LightHeader implements UIHeader {
  constructor(private title: string) {}
  render(): void {
    console.log(`   [ 🌞 LIGHT ] Header: ═══ ${this.title} ═══ | bg:#FFFAF5 | text:#8B4513`);
  }
  getStyle(): string {
    return "background:#FFFAF5; color:#8B4513; font-weight:bold; border-bottom:2px solid #FFD9A0";
  }
}

export class LightOrderBanner implements UIOrderBanner {
  render(message: string): void {
    console.log(`   [ 🌞 LIGHT ] Banner: ✅ ${message} | bg:#F0FFF4 | text:#2D6A4F`);
  }
  getStyle(): string {
    return "background:#F0FFF4; color:#2D6A4F; border:1px solid #74C69D; padding:12px";
  }
}

// ════════════════════════════════════════════════════════════
//  CONCRETE PRODUCTS - Dark Theme
// ════════════════════════════════════════════════════════════

export class DarkButton implements UIButton {
  constructor(private label: string) {}
  render(): void {
    console.log(`   [ 🌙 DARK  ] Button: [ ${this.label} ] | bg:#1E1E2E | text:#CDD6F4 | border:#45475A`);
  }
  onClick(): void {
    console.log(`   [ 🌙 DARK  ] Button "${this.label}" được nhấn! (ripple effect)`);
  }
  getStyle(): string {
    return "background:#1E1E2E; color:#CDD6F4; border:1px solid #45475A; border-radius:8px";
  }
}

export class DarkMenuCard implements UIMenuCard {
  constructor(private drinkName: string, private price: number) {}
  render(): void {
    console.log(`   [ 🌙 DARK  ] MenuCard: 📋 ${this.drinkName} — ${this.price.toLocaleString("vi-VN")} VNĐ | bg:#313244 | glow effect`);
  }
  highlight(): void {
    console.log(`   [ 🌙 DARK  ] MenuCard "${this.drinkName}" được highlight: viền tím sáng`);
  }
  getStyle(): string {
    return "background:#313244; border:1px solid #CBA6F7; box-shadow:0 4px 16px rgba(203,166,247,0.2)";
  }
}

export class DarkHeader implements UIHeader {
  constructor(private title: string) {}
  render(): void {
    console.log(`   [ 🌙 DARK  ] Header: ░░░ ${this.title} ░░░ | bg:#181825 | text:#CDD6F4`);
  }
  getStyle(): string {
    return "background:#181825; color:#CDD6F4; font-weight:bold; border-bottom:2px solid #CBA6F7";
  }
}

export class DarkOrderBanner implements UIOrderBanner {
  render(message: string): void {
    console.log(`   [ 🌙 DARK  ] Banner: ✅ ${message} | bg:#1E3A2E | text:#A6E3A1`);
  }
  getStyle(): string {
    return "background:#1E3A2E; color:#A6E3A1; border:1px solid #A6E3A1; padding:12px";
  }
}

// ════════════════════════════════════════════════════════════
//  CONCRETE PRODUCTS - Vintage Theme
// ════════════════════════════════════════════════════════════

export class VintageButton implements UIButton {
  constructor(private label: string) {}
  render(): void {
    console.log(`   [ 📜 VNTGE ] Button: ❧ ${this.label} ❧ | bg:#F5E6C8 | text:#3D1C02 | border:double`);
  }
  onClick(): void {
    console.log(`   [ 📜 VNTGE ] Button "${this.label}" được nhấn! (chime sound)`);
  }
  getStyle(): string {
    return "background:#F5E6C8; color:#3D1C02; border:3px double #8B6914; font-family:serif";
  }
}

export class VintageMenuCard implements UIMenuCard {
  constructor(private drinkName: string, private price: number) {}
  render(): void {
    console.log(`   [ 📜 VNTGE ] MenuCard: ✦ ${this.drinkName} ✦ — ${this.price.toLocaleString("vi-VN")} VNĐ | parchment style`);
  }
  highlight(): void {
    console.log(`   [ 📜 VNTGE ] MenuCard "${this.drinkName}" được highlight: viền vàng cổ điển`);
  }
  getStyle(): string {
    return "background:#FDF3DC; border:2px solid #C8A951; font-family:Georgia,serif";
  }
}

export class VintageHeader implements UIHeader {
  constructor(private title: string) {}
  render(): void {
    console.log(`   [ 📜 VNTGE ] Header: ✦✦✦ ${this.title.toUpperCase()} ✦✦✦ | bg:#F0D9A0 | text:#3D1C02`);
  }
  getStyle(): string {
    return "background:#F0D9A0; color:#3D1C02; font-family:'Times New Roman',serif; text-transform:uppercase";
  }
}

export class VintageOrderBanner implements UIOrderBanner {
  render(message: string): void {
    console.log(`   [ 📜 VNTGE ] Banner: ✦ ${message} ✦ | bg:#FDF3DC | text:#5C3D11`);
  }
  getStyle(): string {
    return "background:#FDF3DC; color:#5C3D11; border:2px solid #C8A951; font-family:Georgia,serif; padding:12px";
  }
}
