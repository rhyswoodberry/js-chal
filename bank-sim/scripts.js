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


function randomName() {
  const firstNames = ["Herb", "Merv", "Berg"]
  const lastNames = ["Walker", "Wilson", "Wilkins"]
  return randomChoice(firstNames) + " " + randomChoice(lastNames);
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

// Instances of accounts

const accounts = [];

for(let i = 0; i < 10; i++) {
  // create new account
  let newAccount = new Account(randomName(),
  randomInt(10000000, 99999999), 
  randomInt(0, 100000000000));
  
  accounts.push(newAccount)
}

function getDetails() {
  const accountNumber = document.getElementById("accNum").value;

  for (let i = 0; i < accounts.length; i++) {
    if(accounts[i].number == accountNumber) {
      document.getElementById('details').innerHTML = `<p> Name: ${accounts[i].name}
      </p><p> Balance: ${accounts[i].balance}</p>`;
    }
  }
}
