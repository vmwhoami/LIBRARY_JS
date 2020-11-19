const container = document.querySelector('.container');
const submitBtn = document.querySelector('.submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const page = document.querySelector('#page');
const price = document.querySelector('#price');
const read = document.querySelector('#read');

const myLibrary = [];

function Book(title, author, pages, price, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.price = price;
  this.read = read;
}

function addBookToLibrary(input) {
  myLibrary.push(input);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}


const book1 = new Book('The Boook', 'Hemingway', 200, 20, true);
const book2 = new Book('Second Book', 'Wya', 200, 20, true);
const book3 = new Book('Third Book', 'Aaaaia', 3010, 10, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


function displayLibrary(array) {
  container.innerHTML = '';

  for (let i = 0; i < array.length; i += 1) {
    const book = array[i];


    const div = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = book.title;
    const description = document.createElement('p');
    description.textContent = `This book is written ${book.author} 
                               and it has ${book.pages} pages and it
                               costs ${book.price}$
                                 `;
    const deleteBookBtn = document.createElement('button');
    deleteBookBtn.textContent = 'Delete book';
    deleteBookBtn.setAttribute('data-attribute', i);

    deleteBookBtn.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-attribute');
      removeBookFromLibrary(index);
      displayLibrary(myLibrary);
    });
    const readBtn = document.createElement('button');

    if (book.read) {
      readBtn.textContent = 'I have read this book';
    } else {
      readBtn.textContent = "I haven't read it yet?";
    }

    readBtn.addEventListener('click', () => {
      book.read = !book.read;
      displayLibrary(myLibrary);
    });


    container.appendChild(div);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(deleteBookBtn);
    div.appendChild(readBtn);
  }
}


displayLibrary(myLibrary);
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newbook = new Book(title.value, author.value, page.value, price.value, read.checked);
  addBookToLibrary(newbook);
  displayLibrary(myLibrary);
  title.value = '';
  author.value = '';
  page.value = '';
  price.value = '';
  read.checked = false;
});


const btn = document.querySelector('.btn');
const form = document.querySelector('.form');

btn.addEventListener('click', () => {
  form.classList.toggle('display');
});
