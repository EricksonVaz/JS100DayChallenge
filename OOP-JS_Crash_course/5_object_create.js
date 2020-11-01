//Object of protos
const BookProtos = {
    getSumary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge:function(){
        let years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    },
    revise:function(newYear){
        this.year = newYear;
        this.revise = true;
    }
}

const book1 = Object.create(BookProtos);
book1.title='Book One';
book1.author='John Doe';
book1.year='2016';

const book2 = Object.create(BookProtos,{
    title : {value:'Book two'},
    author : {value:'Jane Doe'},
    year : {value:'2016'},
});

const book3 = Object.create(BookProtos,objValue('Book Three','ECV','2020'));

function objValue(title,author,year){
    return {
        title: {value : title},
        author: {value : author},
        year: {value : year}
    }
}

console.log(book1);
console.log(book2);
console.log(book3);
