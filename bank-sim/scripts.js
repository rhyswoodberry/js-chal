class Account { 
  constructor(name, acno, balance){
    this.name = name;
    this.acno = acno;
    this.balance = balance;
  }

  withdraw(amount) {
    this.balance -= amount;

    if (this.balance < amount) {
      alert("Insufficient Funds")
    }
  }

  deposit(amount) {
    this.balance += amount;
  }
}

