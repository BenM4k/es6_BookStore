import Books from '../modules/booksOperations.js';
import displayBooks from '../modules/displayBooks.js';
import storeForm from '../modules/storeForm.js';
import displayTime from '../modules/displayTime.js';
import './index.css';

const books = JSON.parse(localStorage.getItem('form')) || [];
const addButton = document.getElementById('addBook');
const newTitle = document.getElementById('bookTitle');
const newAuthor = document.getElementById('authorName');
const container = document.querySelector('.bodyh1');

for (let i = 0; i < books.length; i += 1) {
  const book = displayBooks(books[i], i);
  container.innerHTML += book;
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (newAuthor.value !== '' && newTitle.value !== '') {
    const library = new Books(newAuthor.value, newTitle.value, books);
    library.addBook();
    storeForm(books);
    window.location.reload();
  }
  document.getElementById('addNewForm').reset();
});

const deleteBtn = document.querySelectorAll('[id^="delete"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const libraryOne = new Books(newAuthor.value, newTitle.value, books, button);
    libraryOne.deleteBook();
    storeForm(books);
  });
});

// SPA

const navHome = document.querySelector('.nav-home');
const navBooks = document.querySelector('.nav-books');
const navContact = document.querySelector('.nav-contact');

const homeSection = document.querySelector('.home');
const bookSection = document.querySelector('.books');
const contactSection = document.querySelector('.contacts');

navHome.addEventListener('click', () => {
  navHome.style.color = 'blue';
  navBooks.style.color = 'black';
  navContact.style.color = 'black';
  homeSection.style.display = 'flex';
  bookSection.style.display = 'none';
  contactSection.style.display = 'none';
});
navBooks.addEventListener('click', () => {
  navHome.style.color = 'black';
  navBooks.style.color = 'blue';
  navContact.style.color = 'black';
  homeSection.style.display = 'none';
  bookSection.style.display = 'flex';
  contactSection.style.display = 'none';
});
navContact.addEventListener('click', () => {
  navHome.style.color = 'black';
  navBooks.style.color = 'black';
  navContact.style.color = 'blue';
  homeSection.style.display = 'none';
  bookSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

const timeSlot = document.getElementById('time');

const dateTime = displayTime();
timeSlot.innerHTML = dateTime;