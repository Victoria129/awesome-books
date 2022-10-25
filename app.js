class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class UI {
    static displayBooks() {
        const BooksStored = [
            {

            }
        ];
        BooksStored.forEach((book) => UI.addBookToList());
    }
    static addBookToList(book) {
        const list = document.querySelector('#books-listcontainer');
        const addBook = document.createElement('div');
        addBook.innerHTML = `
        ${book.title}
        ${book.author}
        <button>Remove</button>
        `;
        list.appendChild(addBook);
    }
    
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    const book = new Book(title, author);

    // add book to list
    UI.addBookToList(book);

});
  
  