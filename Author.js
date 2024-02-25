class Author {
  name = "";
  email = "";
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  getName(){
    return this.name;
  }
  getEmail(){
    return this.email;
  }
  setEmail(email){
    this.email = email;
  }
  toString(){
    return `Author [ name = ${this.name},
    email = ${this.email},
    gender = ${this.gender}]`;
  }
}

class Book {
  name = "";
  authors = [];
  price = 0 ;
  qty = 0;
  constructor(name, authors, price, qty){
    this.name = name;
    this.authors = authors;
    this.price = price;
    this.qty = qty;
  }
  getName(){
    return this.name;
  }
  getAuthors(){
    return this.authors;
  }
  getPrice(){
    return this.price;
  }
  setPrice(price){
    this.price = price;
  }
  getQty(){
    return this.qty;
  }
  setQty(qty){
    this.qty = qty;
  }
  toString(){
    let authorDetail = "";
    for (let i=0; i<this.authors.length; i++){
      authorDetail += this.authors[i].toString();
      if(i < this.authors.length - 1) {
        authorDetail += ", ";
      }
    } 
    return `book [ name = ${this.name}, 
      authors = {${authorDetail}}, 
      price = ${this.price}, 
      qty = ${this.qty}]`;
  }
 getAuthorName(){
  let authorName = "";
  for(let i = 0; i < this.authors.lenght; i++) {
    authorName += this.authors[i].getName();
    if (i <this.authors.lenght - 1) {
      authorName += ", ";
    }
  }
  return `a" ${authorName}"`
 }
}
const main =() => {
  const author1 = new Author('Flow', 'Folows@gmail.com', 'M');
  const author2 = new Author('Tan', 'TTT1@gmail.com', 'F');

  const book = new Book('Java Presented', [author1, author2], 100.0, 99);

  console.log(book.toString());
  console.log(book.getAuthorName());
};
main();