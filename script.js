const library = [];

addBook.onclick = function () {
    if (library.findIndex(({isbn}) => isbn === isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const btnDel = createButtonDel(() => {
            const index = library.findIndex(({isbn}) => isbn === book.isbn);
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
        const years = library.map(b => b.year);
        const h3min = createInfoElement(`Min year: ${Math.min(...years)}`, 'h3');
        const h3max = createInfoElement(`Max year: ${Math.max(...years)}`, 'h3');
        let year = years.reduce((sum, y) => sum + y, 0) / years.length;
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