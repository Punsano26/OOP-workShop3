class Residence {
    address = "";
    rent = 0;
    name = "";
    isAvailable = true;

    constructor(address, rent, name) {
        this.address = address;
        this.rent = rent;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    serAddress(address) {
        this.address = address;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price
    }
}

class Condo extends Residence {
    security = true;
    pool = true;
    roomNumber = "";
    constructor(security, pool, roomNumber) {
        this.security = security;
    }
}

class TownHouse extends Residence {
    floor = 0;

}

class House extends Residence {
    area = 0;
}
