const s1 ='Hello';//object literal

console.log(typeof s1);

const s2 = new String('Hello');//object constructor

console.log(typeof s2);

console.log(window.top);//window no js é o absolut parent object

window.alert("primeira forma")

alert("segunda forma")

console.log(navigator.appVersion);

const book1 ={
    title:'Book 1',
    author:'John Doe',
    year:'2013',
    getSumary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 ={
    title:'Book 2',
    author:'Jane Doe',
    year:'2016',
    getSumary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.title);

console.log(book1.getSumary());

console.log(book2.getSumary());

console.log(Object.values(book2));

console.log(Object.keys(book2))
