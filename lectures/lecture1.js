// var obj = {};
// var obj1 = new Object;

// console.log(obj);
// console.log(obj1);


var book = {
    name: 'Functional Javascript',
    author: 'Micbael Fogus',
    publisher: 'O\'Reilly',
    page: 250,

    print: function() {
        console.log(this.name, this.author);
    }
}

// console.log('Publisher Year: ' + book.publishedYear);

book.publishedYear = 2010;

// console.log('Publisher Year: ' + book.publishedYear);

book['price'] = 30;

// console.log('Price : ' + book.price);




// console.log(book);
// book.print();

// console.log('BooK Name: ' + book.name);
// console.log('Author Name: ' + book['author']); 


for (var props in book) {
    // console.log(props);
    console.log(props + ' = ' + book[props]);
    
}

