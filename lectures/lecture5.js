// function printMe() {
//     console.log('Hello, ' + this.name);
// }

// var obj1 = {
//     name: 'HM Nayem',
//     age: 22
// }

// var obj2 = {
//     name: 'Shegufa Taranjum',
//     email: 'taranjum@gmail.com'
// }
// // var binded1 = printMe.bind(obj1);
// // var binded2 = printMe.bind(obj2);

// // binded1();
// // binded2();

// printMe.call(obj1);
// printMe.call(obj2);

function add (a, b) {
    return (a + b) * this.c;
}

var obj1 = {
    c: 3
}

var obj2 = {
    c: 5
}

var res = add.call(obj1, 10, 4);
res;

var res2 = add.apply(obj2, [10, 3]);
res2;

var binded = add.bind(obj1);
console.log(binded(12, 5));
