const myLibrary = [];

function Book(title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const book1 = new Book('Nirwana', 'Tommy Wieringa', '231', 'Read')
const book2 = new Book('Voornamelijk vrouwen', 'Connie Palmen', '176', 'Not read')
const book3 = new Book('Hoe overleef ik alles ...', 'Francine Oomen', '301', 'Read')
const book4 = new Book('Kruiden, kokkels en kippen', 'Louise O. Fresco', '91', 'Not read')

function addBookToLibrary() {
  // do stuff here
}