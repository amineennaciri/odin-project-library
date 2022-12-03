let myLibrary = []

/* code legacy from previous exercise */
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read  = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const theHobbit = new Book('The Hobbit','J.R.R. Tolkien','295','not read yet')
/* console.log(theHobbit.info()); */
// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const btnAdd = document.querySelector('.btn')
const userInput = document.querySelector('.bookForm')
btnAdd.addEventListener('click',addBookToLibrary)/* , () => {
    console.log('hello world');
    alert(userInput.value)
    myLibrary[0] = userInput.value;
    console.log(myLibrary); 
    return myLibrary;
  }) *///


function addBookToLibrary(e){
    console.log(e)
    console.log('hello world');
    alert(userInput.value)
    myLibrary[0] = userInput.value;
    console.log(myLibrary); 
    return myLibrary;
}