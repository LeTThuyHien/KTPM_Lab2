# ☕ Coffee Shop Management System — Design Patterns

> **Sinh viên:** Lê Thị Thùy Hiền — **MSSV:** 22708291  
> **Môn:** Thiết kế & Kiến trúc Phần mềm  
> **Ngôn ngữ:** TypeScript

---

## 📋 Mô tả dự án

Dự án minh họa **3 Design Patterns** thuộc nhóm **Creational Patterns** thông qua hệ thống quản lý quán cà phê:

| # | Pattern | Lớp chính | Mô tả |
|---|---------|-----------|-------|
| 1 | **Singleton** | `CoffeeShopManager` | Quản lý thông tin & doanh thu cửa hàng |
| 2 | **Factory Method** | `DrinkFactory` | Tạo các loại đồ uống (Espresso, Cappuccino…) |
| 3 | **Abstract Factory** | `CoffeeShopUIFactory` | Tạo họ UI component theo theme (Light/Dark/Vintage) |

---

## 🗂️ Cấu trúc dự án

```
src/
├── singleton/
│   ├── CoffeeShopManager.ts   ← Singleton class
│   └── demo.ts                ← Demo Singleton
├── factory-method/
│   ├── Drinks.ts              ← Product interface + Concrete Products
│   ├── DrinkFactory.ts        ← Abstract Creator + Concrete Creators
│   └── demo.ts                ← Demo Factory Method
├── abstract-factory/
│   ├── UIComponents.ts        ← Abstract & Concrete Products (Button, Card, Header, Banner)
│   ├── CoffeeShopUIFactory.ts ← Abstract Factory + Concrete Factories + Client
│   └── demo.ts                ← Demo Abstract Factory
└── index.ts                   ← Main entry point (chạy tất cả)
```

---

## 🚀 Cách chạy

### Cài đặt dependencies
```bash
npm install
```

### Chạy tất cả patterns
```bash
npm start
```

### Chạy từng pattern riêng lẻ
```bash
npm run start:singleton   # Chạy Singleton demo
npm run start:factory     # Chạy Factory Method demo
npm run start:abstract    # Chạy Abstract Factory demo
```

### Build TypeScript sang JavaScript
```bash
npm run build
```

---

## 📐 Sơ đồ UML

### ① Singleton Pattern

```
┌─────────────────────────────────┐
│       CoffeeShopManager         │
├─────────────────────────────────┤
│ - instance: CoffeeShopManager   │  ← static, private
│ - shopName: string              │
│ - totalRevenue: number          │
│ - orderHistory: OrderRecord[]   │
├─────────────────────────────────┤
│ - constructor()                 │  ← private
│ + getInstance(): Manager        │  ← static
│ + addOrder(...): OrderRecord    │
│ + getShopInfo(): void           │
│ + getTotalRevenue(): number     │
└─────────────────────────────────┘
```

### ② Factory Method Pattern

```
     «abstract»                    «interface»
    DrinkFactory    ─────────►      Drink
  ─────────────────          ─────────────────
  + createDrink()  ◄──┐      + getName()
  + orderDrink()      │      + getPrice()
                      │      + prepare()
         ┌────────────┼────────────┐
         ▼            ▼            ▼
  EspressoFactory  CappuccinoFactory  MatchaLatteFactory ...
  createDrink()    createDrink()      createDrink()
      │                │                  │
      ▼                ▼                  ▼
   Espresso        Cappuccino         MatchaLatte
```

### ③ Abstract Factory Pattern

```
  «interface»                    «interface» Products
CoffeeShopUIFactory        UIButton | UIMenuCard | UIHeader | UIOrderBanner
─────────────────          ──────────────────────────────────────────────────
+ createButton()                    ▲               ▲               ▲
+ createMenuCard()          LightButton        DarkButton      VintageButton
+ createHeader()            LightMenuCard      DarkMenuCard    VintageMenuCard
+ createOrderBanner()       LightHeader        DarkHeader      VintageHeader
        ▲
        │
   ┌────┴──────────────┐
   │                   │
LightTheme         DarkTheme       VintageTheme
Factory            Factory         Factory
```

---

## 🔑 Điểm mấu chốt của từng Pattern

### Singleton
- **Constructor là `private`** → không thể `new` từ bên ngoài
- **`static instance`** → biến lưu instance duy nhất
- **`static getInstance()`** → kiểm tra nếu chưa có thì tạo, có rồi thì trả về

### Factory Method
- **Abstract method `createDrink()`** trong lớp cha → subclass override
- Client gọi `orderDrink()` mà **không biết** drink cụ thể là gì
- Dễ **mở rộng** (thêm loại mới chỉ cần thêm Factory + Product class)

### Abstract Factory
- **Một factory tạo ra nhiều loại product** (Button + Card + Header + Banner)
- Đảm bảo **tính nhất quán** trong cùng một "họ" (ví dụ: toàn bộ Light Theme)
- Client (`CoffeeShopApp`) làm việc qua **interface** → dễ **swap theme** tại runtime
