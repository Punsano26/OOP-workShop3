class Customer {
  id = "";
  name = "";
  discount = "";
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
    let name = "";
    return `${this.name}{${this.discount}%}`;
  }
}
class Invoice {
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
    return this.amount - (this.amount * this.customer.getDiscount()) / 100;
  }
  toString() {
    return ("Invoice [id =" + this.id + ", customer = " + this.customer.toString() + ", amount = " + this.getAmountAfterDiscount() + "]")
  }
}

const main = () => {
  const customer1 = new Customer("01", "Punsan", "200");

  console.log(customer1.toString());
};
main();
