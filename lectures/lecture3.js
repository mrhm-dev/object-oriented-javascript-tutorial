// var obj = {
//     name: 'Twinkle Cats',

//     print: function() {
//         console.log(this);
//     }
// }

// function myFunc() {
    
//     function inner(){
//         console.log(this);
//     }

//     new inner();
// }

// obj.print();

// var person = {
//     name: 'HM Nayem',

//     print: function() {
//         console.log(this);
//         console.log('Hello, ' + this.name);
//     }
// }

// person.print();

// var myname = person.name;
// console.log(myname);

// var myPrint = function() {
//     // console.log(this);
//     console.log('Hello, ' + this.name);
// }
// var myPrint = person.print.bind(person);
// console.log(myPrint);

//  myPrint();

// function add (num) {
//     console.log(this);
//     return this.value + num;
// }

// var obj = {
//     value: 30
// }

// var binded = add.bind(obj);
// var result = binded(100);

// console.log(result);

var person = {
    name: 'Twinkle Cats',

    print: function() {
        
        // var name = this.name;
        setTimeout(function() {
            
            console.log(this);
            console.log('Hello, ' + this.name);

        }.bind(this), 2000);
    }
}
