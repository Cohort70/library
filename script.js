const library = [];
// isbn, title, author, year
let inputData = prompt("Enter data in the format: ISBN, Title, Author, Year of publishing");
while (inputData) {
    // TODO create and add unique book to library
    const arr = inputData.split(',');
    if(findBook(library, arr[0] ) === -1){
        const book = new Book(arr[0], arr[1], arr[2], arr[3]);
        library.push(book);
    }
    inputData = prompt("Enter data in the format: ISBN, Title, Author, Year of publishing");
}

printLibrary(library);

function printLibrary(library) {
    // TODO add all books from library to <ol id="result"></ol>
    for (let i = 0; i < library.length; i++) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(library[i].toString()))
        result.appendChild(li);
    }
}

function findBook(library, isbn) {
    // TODO return index of book with isbn or -1 if not found
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