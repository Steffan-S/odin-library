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
        bookContent.classList.add(i);

        const bookContentTitle = document.createElement('div');
        

        const bookTitle = document.createElement('h2');
        bookTitle.textContent = myLibrary[i].title;
        bookContentTitle.appendChild(bookTitle);

        const bookAuthor = document.createElement('h3');
        bookAuthor.textContent = myLibrary[i].author;
        bookContentTitle.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = myLibrary[i].pages + ' Pages';
        bookContentTitle.appendChild(bookPages);

        bookContent.appendChild(bookContentTitle);

        const bookEditStats = document.createElement('button');
        bookEditStats.textContent = myLibrary[i].readStatus;

        bookEditStats.addEventListener('click', () => {
            if (myLibrary[i].readStatus === 'Read') {
                myLibrary[i].readStatus = 'Not read';
                bookEditStats.classList.remove('read');   // Remove 'Read' class
                bookEditStats.classList.add('notread');    // Add 'notread' class
            } else {
                myLibrary[i].readStatus = 'Read';
                bookEditStats.classList.remove('notread');  // Remove 'notread' class
                bookEditStats.classList.add('read');        // Add 'Read' class
            }
            displayMyLibrary();
        });

        bookContent.appendChild(bookEditStats);

        const bookDelete = document.createElement('button');
        bookDelete.textContent = 'Delete book';
        bookDelete.classList.add('delete_button');
        bookDelete.classList.add(i);

        bookDelete.addEventListener('click', () => {
            myLibrary.splice(i, 1);
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
