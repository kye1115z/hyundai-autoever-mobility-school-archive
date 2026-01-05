const inventory = {
  products: [],
  nextId: 1,

  addProduct(name, price, stock) {
    this.products.push({
      id: this.nextId,
      name: name,
      price: price,
      stock: stock,
    });
    this.nextId++;
    console.log(`"${name}" 상품이 추가되었습니다. (ID: ${this.nextId - 1})`);
  },

  updateStock(id, newStock) {
    for (const product of this.products) {
      if (product.id === id) {
        const oldStock = product.stock;
        product.stock = newStock;
        console.log(`"${product.name}" 재고: ${oldStock}개 → ${newStock}개`);
        return;
      }
    }
  },

  sellProduct(id, quantity) {
    for (const product of this.products) {
      if (product.id === id) {
        if (quantity > product.stock) {
          console.log(`재고가 부족합니다. (현재 재고: ${product.stock}개)`);
          return;
        }

        product.stock -= quantity;
        const revenue = product.price * quantity;
        console.log(
          `""${
            product.name
          }" ${quantity}개가 판매되었습니다. (매출: ${revenue.toLocaleString()}원, 남은 재고: ${
            product.stock
          }개)`
        );
        return;
      }
    }
  },

  getProduct(id) {
    for (const product of this.products) {
      if (product.id === id) {
        console.log(`ID: ${product.id}`);
        console.log(`이름: ${product.name}`);
        console.log(`가격: ${product.price.toLocaleString()}원`);
        console.log(`재고: ${product.stock}개`);
        return;
      }
    }
  },

  getAllProducts() {
    console.log("=== 전체 상품 목록 ===");
    for (const product of this.products) {
      console.log(
        `${product.id}. ${
          product.name
        } - ${product.price.toLocaleString()}원 (재고: ${product.stock}개)`
      );
    }
  },

  getLowStockProducts() {
    const lowStock = [];

    for (const product of this.products) {
      if (product.stock <= 5) lowStock.push(product);
    }
    if (lowStock.length === 0) {
      console.log("재고 부족 상품이 없습니다.");
      return;
    }

    console.log("=== 재고 부족 상품 (5개 이하) ===");
    for (const product of lowStock) {
      console.log(
        `${product.name} - ${product.price.toLocaleString()}원 (재고: ${
          product.stock
        }개)`
      );
    }
  },

  getTotalValue() {
    let total = 0;

    for (const product of this.products) {
      total += product.price * product.stock;
    }

    console.log(`총 재고 가치: ${total.toLocaleString()}원`);
    return total;
  },

  searchProduct(keyword) {
    const results = [];

    for (const product of this.products) {
      if (product.name.includes(keyword)) results.push(product);
    }

    if (results.length === 0) {
      console.log(`"${keyword}" 검색 결과가 없습니다.`);
      return;
    }

    console.log(`=== "${keyword}" 검색 결과 ===`);
    for (const product of results) {
      console.log(
        `${product.id}. ${
          product.name
        } - ${product.price.toLocaleString()}원 (재고: ${product.stock}개)`
      );
    }
  },

  getProductsByPriceRange(minPrice, maxPrice) {
    const results = this.products.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );

    if (results.lenght === 0) {
      console.log("해당 가격대의 상품이 없습니다.");
      return;
    }

    console.log(
      `=== ${minPrice.toLocaleString()}원 ~ ${maxPrice.toLocaleString()}원 이하 상품 ===`
    );
    for (const product of results) {
      console.log(
        `${product.name} - ${product.price.toLocaleString()}원 (재고: ${
          product.stock
        }개)`
      );
    }
  },

  restock(id, quantity) {
    for (const product of this.products) {
      if (product.id === id) {
        product.stock += quantity;
        console.log(
          `"${product.name}" ${quantity}개가 입고되었습니다. (현재 재고: ${product.stock}개})`
        );
      }
      return;
    }
  },
};

inventory.addProduct("노트북", 1500000, 10);
// "노트북" 상품이 추가되었습니다. (ID: 1)
inventory.addProduct("마우스", 30000, 50);
// "마우스" 상품이 추가되었습니다. (ID: 2)
inventory.addProduct("키보드", 80000, 3);
// "키보드" 상품이 추가되었습니다. (ID: 3)

inventory.getAllProducts();
// === 전체 상품 목록 ===
// 1. 노트북 - 1,500,000원 (재고: 10개)
// 2. 마우스 - 30,000원 (재고: 50개)
// 3. 키보드 - 80,000원 (재고: 3개)

inventory.sellProduct(1, 2);
// "노트북" 2개가 판매되었습니다. (매출: 3,000,000원, 남은 재고: 8개)

inventory.sellProduct(1, 20);
// 재고가 부족합니다. (현재 재고: 8개)

inventory.updateStock(3, 10);
// "키보드" 재고: 3개 → 10개

inventory.getProduct(2);
// ID: 2
// 이름: 마우스
// 가격: 30,000원
// 재고: 50개

inventory.getLowStockProducts();
// 재고 부족 상품이 없습니다.

inventory.sellProduct(3, 7);
// "키보드" 7개가 판매되었습니다. (매출: 560,000원, 남은 재고: 3개)

inventory.getLowStockProducts();
// === 재고 부족 상품 (5개 이하) ===
// 키보드 - 80,000원 (재고: 3개)

inventory.getTotalValue();
// 총 재고 가치: 13,740,000원

inventory.searchProduct("노트북");
inventory.getProductsByPriceRange(1000000, 2000000);
inventory.restock(1, 10);
