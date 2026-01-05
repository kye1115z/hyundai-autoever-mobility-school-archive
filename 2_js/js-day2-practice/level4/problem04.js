const cart = {
  items: [],
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  },
  getTotalprice() {
    let sum = 0;
    for (const item of this.items) {
      sum += item.price * item.quantity;
    }
    return `총 금액: ${sum}원`;
  },
  printItems() {
    for (const item of this.items) {
      console.log(`${item.name} - ${item.price}원 X ${item.quantity}개`);
    }
    console.log(this.getTotalprice());
  },
};

cart.addItem("사과", 5000, 3);
cart.addItem("바나나", 3000, 2);
cart.printItems();
cart.getTotalprice();
