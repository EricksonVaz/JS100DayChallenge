//Constructor

function Book(title, author, year){
    console.log('Book initialize');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//instantiate a Object
const book1 = new Book('Book one','John Doe','2013');
const book2 = new Book('Book two','Jane Doe','2016');

console.log(book1)

console.log(book2.getSummary());