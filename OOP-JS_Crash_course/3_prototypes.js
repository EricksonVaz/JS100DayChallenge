//Constructor

function Book(title, author, year){
    console.log('Book initialize');
    this.title = title;
    this.author = author;
    this.year = year;
}

//prototype getSumary

Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function(){
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
}

//instantiate a Object
const book1 = new Book('Book one','John Doe','2013');
const book2 = new Book('Book two','Jane Doe','2016');

console.log(book1);

console.log(book1.getSummary());

book1.revise('2015');

console.log(book1);

console.log(book2.getSummary());

console.log(book2.getAge());

