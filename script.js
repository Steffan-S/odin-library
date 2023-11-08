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

for (let i = 0; i < myLibrary.length; i++) {
    // book content
    const bookGrid = document.querySelector('.books_grid')

    const bookContent = document.createElement('div');
    bookContent.classList.add('book_container');

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

    // appending all content to book grid container
    bookGrid.appendChild(bookContent);
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
    console.log('hello');
    const formTitle = document.getElementById('book_name').value;
    const formAuthor = document.getElementById('book_author').value;
    const formPages = document.getElementById('book_pages').value;
    const formReadStatus = document.getElementById('book_status').value;
    addBookToLibrary(formTitle, formAuthor, formPages, formReadStatus);

    dialog.close();

    console.log(myLibrary);
});
