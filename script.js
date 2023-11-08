const myLibrary = [];

function Book(title, author, pages, readStatus) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

addBookToLibrary('Nirwana', 'Tommy Wieringa', '231', 'Read')
addBookToLibrary('Voornamelijk vrouwen', 'Connie Palmen', '176', 'Not read')
addBookToLibrary('Hoe overleef ik alles ...', 'Francine Oomen', '301', 'Read')
addBookToLibrary('Kruiden, kokkels en kippen', 'Louise O. Fresco', '91', 'Not read')

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
}

function displayMyLibrary() {
    const bookGrid = document.querySelector('.books_grid')

    const deleteThisBook = document.getElementsByClassName('book_container');
    // Remove existing book elements
    while (deleteThisBook.length > 0) {
        deleteThisBook[0].remove();
    }

    for (let i = 0; i < myLibrary.length; i++) {
        // book content
        const bookContent = document.createElement('div');
        bookContent.classList.add('book_container');

        let bookId = i; // Gives each book an unique ID label
        bookContent.classList.add(bookId);

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = myLibrary[i].title
        bookContent.appendChild(bookTitle);

        const bookAuthor = document.createElement('h3');
        bookAuthor.textContent = myLibrary[i].author
        bookContent.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages
        bookContent.appendChild(bookPages);

        const bookReadStatus = document.createElement('p');
        bookReadStatus.textContent = myLibrary[i].readStatus
        if (myLibrary[i].readStatus === 'Read') {
            bookReadStatus.classList.add('read');
        } else {
            bookReadStatus.classList.add('notread');
        }
        bookContent.appendChild(bookReadStatus);

        const bookEditStats = document.createElement('button');
        bookEditStats.textContent = "I've read this book";
        bookEditStats.addEventListener('click', () => {
            if (myLibrary[bookId].readStatus === 'Read') {
                myLibrary[bookId].readStatus = 'Not read';
                bookReadStatus.className = 'notread';
            } else {
                myLibrary[bookId].readStatus = 'Read';
                bookReadStatus.className = 'Read';
            }
            displayMyLibrary();
        });

        bookContent.appendChild(bookEditStats);

        const bookDelete = document.createElement('button');
        bookDelete.textContent = 'Delete book';
        bookDelete.classList.add('delete_button');
        bookDelete.classList.add(bookId);

        bookDelete.addEventListener('click', () => {
            myLibrary.splice(bookId, 1);
            displayMyLibrary();
        });

        bookContent.appendChild(bookDelete);



        // appending all content to book grid container
        bookGrid.appendChild(bookContent);
    };
}


// Add book dialog
const dialog = document.querySelector('dialog');

const addBookBtn = document.querySelector('button');
addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

const addBookCloseBtn = document.getElementById('dialog_cancel_button');
addBookCloseBtn.addEventListener('click', () => {
    dialog.close();
})

const form = document.getElementById('addBookForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formTitle = document.getElementById('book_name').value;
    const formAuthor = document.getElementById('book_author').value;
    const formPages = document.getElementById('book_pages').value;
    const formReadStatus = document.getElementById('book_status').value;

    addBookToLibrary(formTitle, formAuthor, formPages, formReadStatus);
    displayMyLibrary();

    dialog.close();
});


// delete book



displayMyLibrary();
