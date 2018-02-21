function Animal(name) {
    this.name = name;
}

Animal.prototype.printName = function() {
    console.log(this.name);
}

function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

var cat = myNew(Animal, 'Cat');

cat.printName();

// var cat = new Animal('Cat');
// var dog = new Animal('dog');

// cat.printName();

var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = myNew(Person, "HM Nayen", 22);