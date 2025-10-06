const library = [];
// isbn, title, author, year
addBook.onclick = function () {
    // TODO task 1 get data from inputs, and put book in <ol id="result"></ol>
    // check is book unique

    // TODO task 2 advanced: implements remove book functionality
    // NB! after remove book, we have possibility to add book with same isbn
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if(library[i].isbn === isbn){
            return i;
        }
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}