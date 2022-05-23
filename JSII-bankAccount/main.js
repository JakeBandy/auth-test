"use strict";
const assert = require("assert");

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    function myAmt(pastTransactions, currentTransaction) {
      return pastTransactions.amount + currentTransaction.amount;
    }
    const currentBalance = this.transactions.reduce(myAmt);
    console.log(currentBalance);
    return currentBalance;
  }
  deposit(amt) {
    const newDeposit = new Transaction(amt, "Deposit");

    if (amt > 0) {
      this.transactions.push(newDeposit);
    } else {
      console.log("Error: Invalid amount deposited");
    }
  }
  charge(amt, payee) {
    const newCharge = new Transaction(-amt, payee);

    if (amt > this.balance) {
      console.log("Error: Insufficient Funds");
    } else {
      this.transactions.push(newCharge);
      console.log(this.transactions);
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;
  }
}


//test
if (typeof describe === 'function') {
  const assert = require('assert');
  // describe('#towersOfHanoi()', () => {
  //   it('should be able to move a block', () => {
  //     towersOfHanoi('a', 'b');
  //     assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
  //   });
  // });

  describe("#testing acc creation", function(){
    it('should create a new account correctly', function(){
      let acc1 = new BankAccount('xx6730', "Bruce Wayne");
      assert.equal(acc1.owner, 'Bruce Wayne');
      assert.equal(acc1.accountNumber, 'xx6730');
      assert.equal(acc1.transactions.length, 0);

    })
  })

  describe("#testing transactions for deposit", function(){
    it('should create a new transaction correctly', function(){
      let t1 = new Transaction(300,000,000, "Deposit");
      assert.equal(t1.amount, 300,000,000);
      assert.equal(t1.payee, 'Deposit');
      assert.notequal(t1.date, undefined);
      assert.notequal(t1.date, null);

    })
  })

  describe("#testing transactions for a charge", function(){
    it('should create a new transaction correctly', function(){
      let t2 = new Transaction(-500,000, "Target");
      assert.equal(t1.amount, -500,000);
      assert.equal(t1.payee, 'Target');
      assert.notequal(t1.date, undefined);
      assert.notequal(t1.date, null);

    })
  })
