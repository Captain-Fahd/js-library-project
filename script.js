const myLibrary = [];

let dialog = document.querySelector(".new-book");
let nameInput = document.querySelector("#name-input");
let pagesInput = document.querySelector("#pages-input");
let statusInput = document.querySelector("#status-input");
let dialogButton = document.querySelector(".create-book")
let bookList = document.querySelector(".book-list");
let bookSubmit = document.querySelector(".submit-book");

function Book(name, numPage, status) {
  this.name = name,
  this.numPage = numPage,
  this.status = status
}


function addBookToLibrary(book) {
 let newBook = book.name + ", " + book.numPage + ", " + book.status;
 return myLibrary.push(newBook);
}

function displayBook() {
  for(let i = 0; i < myLibrary.length; i++){
    let newBook = document.createElement("li");
    newBook.textContent = myLibrary[i];
    bookList.appendChild(newBook);
  }
}

dialogButton.addEventListener('click', () => {
  dialog.showModal();
})
bookSubmit.addEventListener('click', () => {
  let bookInput = nameInput.value;
  let pageNums = pagesInput.value;
  let bookStatus = statusInput.value;

  let currentBook = new Book(bookInput, pageNums, bookStatus);
  addBookToLibrary(currentBook);
  bookList.innerHTML = "";
  displayBook();
  dialog.close();
})