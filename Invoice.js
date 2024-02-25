class Customer {
  id = "";
  name = "";
  discount = 0;
  constructor(id, name, discount) {
    this.name = name;
    this.id = id;
    this.discount = discount;
  }
  getID() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getDiscount() {
    return this.discount;
  }
  setDiscount(discount) {
    this.discount = discount;
  }
  toString() {
    return `${this.getName()}($this.getID()})({${this.getDiscount()}%})`;
  }
}
class Invoice {
  id = 0;
  customer = "";
  amount = 0;
  constructor(id, customer, amount) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }
  getID() {
    return this.id;
  }
  getCustomer() {
    return this.customer;
  }
  setCustomer(customer) {
    this.customer = customer;
  }
  getAmount() {
    return this.amount;
  }
  setAmount(amount) {
    this.amount = amount;
  }
  getCustomerID() {
    return this.customer.getID;
  }
  getCustomerName() {
    return this.customer.getName;
  }
  getCustomerDiscount() {
    return this.customer.getDiscount;
  }
  getAmountAfterDiscount() {
    let dis = (this.customer.getDiscount() * this.amount) / 100;
    let amountAfterDiscount = this.amount - dis;
    return amountAfterDiscount;
  }
  toString() {
    return `Invoice[id = ${
      this.id
    }, customer = ${this.customer.toString()}, amount = ${this.amount}]`;
  }
}

const main = () => {
  const customer1 = new Customer("01", "Punsan", "200");
  const Invoice1 = new Invoice(1, customer1, 100);
  console.log(customer1.toString());
};
main();
