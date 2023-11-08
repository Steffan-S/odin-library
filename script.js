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

console.log(myLibrary);