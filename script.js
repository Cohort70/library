const library = [];

addBook.onclick = function () {
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const btnDel = createButtonDel(() => {
            const index = findBook(library, book.isbn);
            library.splice(index, 1);
        });
        li.append(book.toString(), btnDel);
        result.append(li);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
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