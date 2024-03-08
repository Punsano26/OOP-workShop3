class Customer {
  name = "";
  member = false;
  memberType = "";
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  isMember() {
    return this.member;
  }
  setMember(member) {
    this.member = member;
  }
  getMemberType() {
    return this.memberType;
  }
  setMemberType(memberType) {
    this.memberType = memberType;
  }
  toString() {
    return `Customer [ name = ${this.name}, member = ${
      this.member
    }, memberType = ${this.getMemberType()}]`;
  }
}

class Visit {
  customer = null;
  date = "";
  serviceExpense = 0;
  productExpense = 0;
  constructor(customer, date) {
    this.customer = customer;
    this.date = date;
  }
  getName() {
    return this.name;
  }
  getServiceExpense() {
    return this.serviceExpense;
  }
  setServiceExpense(serviceExpense) {
    this.serviceExpense = serviceExpense;
  }
  getProductExpense() {
    return this.productExpense;
  }
  setProductExpense(productExpense) {
    this.productExpense = productExpense;
  }
  getTotalExpense() {
    let total = 0;
    let proTotal =
      this.getProductExpense() -
      DiscountRate.getProduceDiscountRate(this.customer.getMemberType()) *
        this.getProductExpense();
    let serTotal =
      this.getServiceExpense() -
      DiscountRate.getServiceDiscountRate(this.customer.getMemberType()) *
        this.getServiceExpense();

    total = serTotal + proTotal;

    return total;
  }
  toString() {
    return `Visit [ ${this.customer.toString()}, serviceExpense = ${
      this.serviceExpense
    } ,
        productExpense ${
          this.productExpense
        }, total = ${this.getTotalExpense()}]`;
  }
}

class DiscountRate {
  static SPREMIUM = new DiscountRate("premium");
  static SGOLD = new DiscountRate("gold");
  static SSILVER = new DiscountRate("silver");

  constructor(type) {
    this.type = type;
  }
  static getServiceDiscountRate(type) {
    switch (type) {
      case "premium":
        return 0.2;
      case "gold":
        return 0.15;
      case "silver":
        return 0.1;
      default:
        return 0;
    }
  }

  static getProduceDiscountRate(type) {
    switch (type) {
      case "Premium":
        return 0.1;
      case "Gold":
        return 0.1;
      case "Silver":
        return 0.1;
      default:
        return 0;
    }
  }
}

const main = () => {
  const customer2 = new Customer("vick");
  customer2.setMember(true);
  customer2.setMemberType("gold");
  const visit1 = new Visit(customer2, "2024/03/04");

  visit1.setProductExpense(150);
  visit1.setServiceExpense(100);
  console.log(visit1.toString());
};
main();
