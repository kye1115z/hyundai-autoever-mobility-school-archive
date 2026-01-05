const account = {
  balance: 0,
  transactions: [],

  deposit(amount, memo = "") {
    this.balance += amount;
    const transaction = {
      type: "입금",
      amount: amount,
      memo: memo,
      date: new Date().toLocaleDateString(),
    };
    this.transactions.push(transaction);
    console.log(
      `${amount}원이 입금되었습니다. (잔액: ${this.balance.toLocaleString()}원)`
    );
  },

  withdraw(amount, memo = "") {
    if (this.balance >= amount) {
      this.balance -= amount;
      const transaction = {
        type: "출금",
        amount: amount,
        memo: memo,
        date: new Date().toLocaleDateString(),
      };
      this.transactions.push(transaction);
      console.log(
        `${amount}원이 출금되었습니다. (잔액: ${this.balance.toLocaleString()}원)`
      );
    } else {
      console.log(
        `잔액이 부족합니다. (현재 잔액: ${this.balance.toLocaleString()}원)`
      );
    }
  },

  getBalance() {
    console.log(`현재 잔액: ${this.balance.toLocaleString()}원`);
  },

  getTransactions() {
    let i = 1;
    console.log("=== 거래 내역 ===");
    for (const tr of this.transactions) {
      console.log(`${i}. [${tr.type}] ${tr.amount}원 - ${tr.memo}`);
      i++;
    }
  },

  getStatement() {
    console.log("=== 계좌 명세서 === ");
    let deposit = 0;
    let withdraw = 0;
    for (const tr of this.transactions) {
      if (tr.type === "입금") {
        deposit += tr.amount;
      } else {
        withdraw += tr.amount;
      }
    }
    console.log(`입금 총액: ${deposit.toLocaleString()}원`);
    console.log(`출금 총액: ${withdraw.toLocaleString()}원`);
    console.log(`잔액: ${this.balance.toLocaleString()}원`);
  },

  transfer(otherAccount, amount, memo = "") {
    if (amount > this.balance) {
      console.log("잔액이 부족합니다.");
      return;
    }
    this.withdraw(amount, `이체: ${memo}`);
    otherAccount.deposit(amount, `받은 이체: ${memo}`);
    console.log(`${amount}원이 이체되었습니다.`);
  },
};

account.deposit(10000, "급여");
account.deposit(5000, "용돈");
account.withdraw(3000, "점심");
account.withdraw(30000, "강아지 사료");
account.getBalance();
account.getTransactions();
account.getStatement();

const account2 = {
  balance: 0,
  transactions: [],

  deposit(amount, memo = "") {
    this.balance += amount;
    const transaction = {
      type: "입금",
      amount: amount,
      memo: memo,
      date: new Date().toLocaleDateString(),
    };
    this.transactions.push(transaction);
    console.log(
      `${amount}원이 입금되었습니다. (잔액: ${this.balance.toLocaleString()}원)`
    );
  },
};
account.transfer(account2, 2999, "점심 N빵");
