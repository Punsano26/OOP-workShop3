class Author {
  name = "";
  email = "";
  gender = "";
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  toString() {
    return `Author [name = ${this.name}, Email = ${this.email}]`;
  }
}

//---------------book---------------
class Book {
    name = "";
    authors = [];
    price = 0;
    qty = 0;

    constructor(name, author, price, qty=0) {
        this.name = name;
        this.authors =author;
        this.price = price;
        this.qty = qty;
      }

    
  
  getName() {
    return this.name;
  }

  getAuthors() {
    return this.authors;
  }

  getPrice() {
    return this.price;
  }
  setPrice(price) {
    this.price = price;
  }
  getQty() {
    return this.qty;
  }
  setQty(qty) {
    this.qty = qty;
  }

toString() {
    let authorname = "";

    for(let i = 0; i < this.authors.length; i++){
    authorname += this.authors[i].toString();
    if (i < this.authors.length - 1 ) {
        authorname += " , "
    }
    }
    return `book [name = ${this.name}, author = {${authername}},price = ${this.price} qty = ${this.qty}]`;
}
getAuthorNames() {
    let authername = "";
    for (let i = 0; i < this.authors.length; i++) {
        authorname2 += this.authors[i].getName();
        if (i < this.authors.length; i++) {
            authorname += " + ";
        }
    }
     return authername;
}
}


const main = ()=> {
    const author1 = new Author("Vick", "vick@gmail.com", "M");
    const author2 = new Author("Mind", "mind@gmail.com", "F");
    // console.log(author1.toString());
    // console.log(author2.toString());

    const book1 = new Book("Paratest", [author1 , author2], 100, 2);
    console.log(book1.getAuthorNames());
    console.log(book1.toString());
}
main();

