class Person {
  name = "";
  address = "";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getName() {
    return this.name;
  }
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address = address;
  }
  toString() {
    
    return `Person[name = ${this.name}, address = ${this.address}]`;
  }
}
class Student extends Person {
  program = "";
  year = 0;
  fee = 0;  constructor(name, address,program, year, fee) {
    super(name, address);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }
  getProgram() {
    return this.program;
  }
  setProgram(program) {
    this.program = program;
  }
  getYear() {
    return this.year;
  }
  setYear(year) {
    this.year = year;
  }
  getFee() {
    return this.fee;
  }
  setFee(fee) {
    this.fee = fee;
  }
  toString() {
   return `Student[${super.toString()},
    program = ${this.program}, 
    year = ${this.year},
    fee = ${this.fee}]`;
  }
}

class Staff extends Person{
    school = "";
    pay = 0;
    constructor(name, address,school, pay) {
      super(name, address);
        this.school = school;
        this.pay = pay;
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }
    getPay() {
        return this.pay;
    }
    setPay(pay) {
        this.pay = pay;
    }
    toString () {
        return `Staff[$super.toString()}, 
          school = ${this.school}, 
          pay = ${this.pay}]`;
    }
}

const main = () => {
  const Person1 = new Person("Thin", "New York");
  const Student1 = new Student("Thin", "New York", "Digital", 2565, 1.5);
  const Staff1 = new Staff("Thin", "New York", "Bosston", 15000.25 );
 console.log(Student1.toString);
 
console.log("/////////////////////////////////////////////////////////");
 console.log(Person1.toString);
}
main();