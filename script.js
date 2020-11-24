// function Book(title, author, pages, price, read) {
//   return { title, author, pages, price, read }
// }

// const displayFormBtn = function (selectedButton) {
//   selectedButton.addEventListener('click', () => {
//     form.classList.toggle('display');
//   });
// };

const container = document.querySelector('.container');
const submitBtn = document.querySelector('.submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const page = document.querySelector('#page');
const price = document.querySelector('#price');
const read = document.querySelector('#read');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const formField = document.querySelectorAll('.form_field');
const myLibrary = [];



// function Book(title, author, pages, price, read) {
//   return { title, author, pages, price, read }
// }

// const displayFormBtn = function (selectedButton) {
//   selectedButton.addEventListener('click', () => {
//     form.classList.toggle('display');
//   });
// };


class Books {

  constructor(title, author, pages, price, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.read = read;
    this.addToLibrary();
  }

  addToLibrary() {
    myLibrary.push(this);
  }

  logthe() {
    console.log(this);
  }

  static removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
  }
}


const book = new Books('The Boook', 'Hemingway', 200, 20, true);
const book2 = new Books('Second Book', 'Wya', 200, 20, true);
const book3 = new Books('Third Book', 'Aaaaia', 3010, 10, false);
Books.removeBookFromLibrary(0)
console.log(myLibrary);












//Toggle the display of the form
// displayFormBtn(btn);

// Adds book to the Library
// function addBookToLibrary(input) {
//   myLibrary.push(input);
// }
// //Removes book from the library
// function removeBookFromLibrary(index) {
//   myLibrary.splice(index, 1);
// }

//New books are
// const book1 = new Book('The Boook', 'Hemingway', 200, 20, true);
// const book2 = new Book('Second Book', 'Wya', 200, 20, true);
// const book3 = new Book('Third Book', 'Aaaaia', 3010, 10, false);
// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

// console.log(myLibrary);
// function displayLibrary(array) {
//   container.innerHTML = '';
//   let i = 0;
//   array.forEach(book => {
//     const div = document.createElement('div');
//     const title = document.createElement('h3');
//     const readBtn = document.createElement('button');
//     const deleteBookBtn = document.createElement('button');
//     const description = document.createElement('p');

//     description.textContent = `This book is written ${book.author} 
//                                and it has ${book.pages} pages and it
//                                costs ${book.price}$
//                                  `;
//     title.textContent = book.title;

//     deleteBookBtn.textContent = 'Delete book';
//     deleteBookBtn.setAttribute('data-attribute', i);

//     deleteBookBtn.addEventListener('click', (e) => {
//       const index = e.target.getAttribute('data-attribute');
//       removeBookFromLibrary(index);
//       displayLibrary(myLibrary);
//     });

//     if (book.read) {
//       readBtn.textContent = 'I have read this book';
//     } else {
//       readBtn.textContent = "I haven't read it yet?";
//     }

//     readBtn.addEventListener('click', () => {
//       book.read = !book.read;
//       displayLibrary(myLibrary);
//     });


//     container.appendChild(div);
//     div.appendChild(title);
//     div.appendChild(description);
//     div.appendChild(deleteBookBtn);
//     div.appendChild(readBtn);

//     i += 1
//   });
// }


// //Resets the form to initial state
// function resetFomr() {
//   title.value = '';
//   author.value = '';
//   page.value = '';
//   price.value = '';
//   read.checked = false;
// }



// function showError(input, message) {
//   let formControl = input.parentElement;
//   formControl.classList.add('error')
//   let small = formControl.querySelector('small');
//   small.textContent = message


// }

// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (title.value === "") {
//     showError(title, `${title.id} can't be blank`)
//   } else {

//     const newbook = new Book(title.value, author.value, page.value, price.value, read.checked);
//     addBookToLibrary(newbook);
//     displayLibrary(myLibrary);
//     resetFomr()
//     formField.forEach(element => {
//       element.classList.remove('error')
//     })
//   }
// });



// displayLibrary(myLibrary);
