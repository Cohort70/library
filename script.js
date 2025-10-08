const library = [];

addBook.onclick = function () {
    if (library.findIndex(b => b.isbn === isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const btnDel = createButtonDel(() => {
            const index = library.findIndex(b => b.isbn === book.isbn);
            library.splice(index, 1);
            showStats();
        });
        li.append(book.toString(), btnDel);
        result.append(li);
        showStats();
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}

function showStats() {
    const divStats = document.createElement('div')
    if (library.length) {
        let year = library.reduce((min, b) => b.year < min ? b.year : min, library[0].year);
        const h3min = createInfoElement(`Min year: ${year}`, 'h3');
        year = library.reduce((max, b) => b.year > max ? b.year : max, library[0].year);
        const h3max = createInfoElement(`Max year: ${year}`, 'h3');
        year = library.reduce((sum, b) => sum + b.year, 0) / library.length;
        const h3avg = createInfoElement(`Average year: ${year}`, 'h3');
        const total = createInfoElement(`Total books ${library.length}`, 'h3');
        divStats.append(total, h3min, h3max, h3avg);
    }
    if (stats.firstElementChild.nextElementSibling) {
        stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
    } else {
        stats.append(divStats);
    }
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