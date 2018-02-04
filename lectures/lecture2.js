// var books = [
//     {
//         name: 'Functional Javascript',
//     }, 
//     {
//         name: 'Javascript Definitive Guide'
//     }
// ]


// function Person(name, email) {

//     this.name = name;
//     this.email = email;
//     this.print = function() {
//         console.log('Name : ' + this.name);
//     }
// }

// var p1 = new Person('HM Nayem', 'hasan.m.nayem@gmail.com');
// var p2 = new Person('Shegufa Taranjum', 'shegufa@gmail.com');
// var p3 = new Person('Twinkle Cats', 'cats.twinkle@gmail.com');

// var people = [p1, p2, p3];


// console.log(p1.name);
// console.log(p1.email);
// console.log(p1);

// console.log(people);

// people.forEach(function(person) {
//     // console.log('Email: ' + person.email);
//     person.print();
// });


// for (var props in p1) {
//     console.log('Properties = ' + props);
// }

function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
}

var book = new Book('Functional Javascript', 'Micbael Fogus', 30);

console.log(book.constructor);
