// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.hello = function() {
//         console.log('Hello, ' + this.name);
//     }
// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Person.prototype.hello = function() {
//     console.log('Hello, ' + this.name);
// }

// Person.prototype.print = function() {
//     console.log(this.name, this.age);
// }

// Person.prototype.email = 'hmnayem@gmail.com'

Person.prototype = {
    hello: function() {
        console.log('Hello, ' + this.name);
    },
    
    print: function() {
        console.log(this.name, this.email); 
    },

    email: 'hmnayem@gmail.com'
}

var p1 = new Person('HM Nayem', 22);
var p2 = new Person('Shegufa Taranjum', 20);

console.log(p1);
console.log(p2);

// console.log(Person.prototype);
