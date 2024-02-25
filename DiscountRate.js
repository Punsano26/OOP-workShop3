class Customer {
    name = "";
    member = false;
    memberType = 0;
    constructor(name, member = false, memberType) {
        this.name = name;
        this.member = member;
        this.memberType = memberType;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember() {
        this.member = member;
    }
    getMember() {
        return this.member;
    }
    getMemberType() {
        return this.getMemberType;
    }
    toString() {
        return `Customer[name = ${this.name},
                member = ${this.member},
                memberType = ${this.memberType}]`
    }
}
 class Visit {
    customer = null;
    date = "";
    serviceExpense = 0 ;
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
    setServiceExpense() {
        this.serviceExpense = serviceExpense;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense() {
        this.productExpense = productExpense;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return `Visit[${this.customer.toString()},
                serviceExpense = ${this.serviceExpense},
                productxpense = ${this.productExpense},
                total = ${this.getTotalExpense()}]`;
    }
 }

class DiscountRate {
    static serviceDiscountPremiun = new DiscountRate(0.2);
    static serviceDiscountGold = new DiscountRate(0.15);
    static serviceDiscountSilver = new DiscountRate(0.1);
    static productDiscountPremium = new DiscountRate(0.1);
    static productDiscountGold = new DiscountRate(0.1);
    static productDiscountSilver = new DiscountRate(0.1);
    constructor(name) {
        this.name = name;
    }
    getServiceDiscountRate() {
        return this.name;
    }
    getProductDiscountRate() {
        return this.name;
    }
}

const main = () => {
    const Customer1 = new Customer("Ohm", false, DiscountRate.serviceDiscountGold);
    const Vist1 = new Visit(Customer1, "30/06/2570", 33.3, 64.8);
    console.log(Customer1.toString());
    console.log("\*-----------------------------------------*/");
    console.log(Vist1.toString());
}
main();