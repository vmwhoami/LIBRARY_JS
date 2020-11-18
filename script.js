const container = document.querySelector(".container")







let myLibrary = [];

function Book(title,author,pages,price,read) {
  this.title =  title,
   this.author =author,
   this.pages = pages,
   this.price = price,
   this.read = read
}
function addBookToLibrary(input) {
  myLibrary.push(input)
}

let book1 = new Book("The Boook","Hemingway",200,20,true)
let book2 = new Book("Second Book","Wya",200,20,true)
let book3 = new Book("Second Book","Wya",300,10,false)
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
 

function displayLibrary(array){
  for(let i = 0; i<array.length; i++){
    let book = array[i]
   
    const div = document.createElement('div');
    container.appendChild(div);
    const title = document.createElement("h3")
    title.textContent = book.title
    const description = document.createElement("p")
    description.textContent = `This book is written ${book.author} and it has ${book.pages} pages and it
    costs ${book.price}$
    `
    div.appendChild(title)
    div.appendChild(description)


  }
}
console.log(myLibrary);

displayLibrary(myLibrary)

