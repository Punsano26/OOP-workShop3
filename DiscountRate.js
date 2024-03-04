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
    a;
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
  constructor(customer, date, serviceExpense, productExpense) {
    this.customer = customer;
    this.date = date;
    this.serviceExpense = serviceExpense;
    this.productExpense = productExpense;
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
    let ptotal = this.getProductExpense() - DiscountRate.PGOLD;
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
  static PPREMIUM = new DiscountRate(0.1);
  static PGOLD = new DiscountRate(0.1);
  static PSILVER = new DiscountRate(0.1);
  constructor(type) {
    this.type = type;
  }
  getServiceDiscountRate(type) {
    switch (type) {
      case "premium":
        return 0.2;
      case "gold":
        return 0.15;
      case "silver":
        return 0.1;
      default:
        return ;
    }
  }
  getDiscountRate() {
    return this.name;
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
