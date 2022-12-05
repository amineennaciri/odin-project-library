let myLibrary = []
let bookLib = []
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
const btnDisp = document.querySelector('.btnShow')
const userTitle = document.querySelector('.bookTitle')
const userAuthor = document.querySelector('.bookAuthor')
const userPages = document.querySelector('.bookPages')
const userRead = document.querySelector('.bookRead')
btnAdd.addEventListener('click',addBookToLibrary);
btnDisp.addEventListener('click'/* , () => {
    console.log('hello world');})// */,displayLib);
/* , () => {
    console.log('hello world');
    alert(userInput.value)
    myLibrary[0] = userInput.value;
    console.log(myLibrary); 
    return myLibrary;
  }) */

function addBookToLibrary(e){
/*     console.log(e)
    console.log('hello world'); */
    /* alert(userTitle.value) */
    //myLibrary[0] = new Book(`${userTitle.value}`,`${userAuthor.value}`,`${userPages.value}`,`${userRead.value}`);
    myLibrary.push( new Book(`${userTitle.value}`,`${userAuthor.value}`,`${userPages.value}`,`${userRead.value}`) );
/*     console.log(myLibrary[0].info()); */
    /* console.log(myLibrary[0].info()) */
     for(let i=0;i<=myLibrary.length-1;i++){
        bookLib[i] = myLibrary[i].info();
    }
    return myLibrary;
}

function displayLib(){
      for(let i=0;i<=bookLib.length-1;i++){
        console.log(bookLib[i]);
    }
    /* Add the inputs to the span element */
    document.querySelector('.titleVal').innerText = myLibrary[0].title
    document.querySelector('.authorVal').innerText = myLibrary[0].author
    document.querySelector('.pagesVal').innerText = myLibrary[0].pages
    document.querySelector('.readVal').innerText = myLibrary[0].read
    /* Show / Hide the div element */
    let cardToggle = document.querySelector(".card");
/*     if (cardToggle.style.display === "none") {
        cardToggle.style.display = "block";
    } else {
        cardToggle.style.display = "none";
    } */

    /* creating a div card with DOM manipulation */
    const divCard = document.createElement('div');
    divCard.classList.add('card')
    document.querySelector('.display').appendChild(divCard);
    const hThree = document.createElement('h3');
    hThree.textContent = 'Book 2'
    divCard.appendChild(hThree);
    const divCardContent = document.createElement('div');
    divCardContent.classList.add('card-content')
    divCard.appendChild(divCardContent);
    const uL = document.createElement('ul');
    const iL = document.createElement('il');
    divCardContent.appendChild(uL);
    uL.appendChild(iL);
    // creating the articles and spans
    // title
    const articleTitle = document.createElement('a');
    const spanTitle = document.createElement('span');
    articleTitle.textContent = 'Title:'
    articleTitle.href = '#'
    spanTitle.classList.add('titleVal')
    spanTitle.innerText = myLibrary[0].title
    iL.appendChild(articleTitle);
    iL.appendChild(spanTitle);
    // author
    const articleAuthor = document.createElement('a');
    const spanAuthor = document.createElement('span');
    articleAuthor.textContent = 'Author:'
    articleAuthor.href = '#'
    spanAuthor.classList.add('authorVal')
    spanAuthor.innerText = myLibrary[0].author
    iL.appendChild(articleAuthor);
    iL.appendChild(spanAuthor);
    // number of pages
    const articlePages = document.createElement('a');
    const spanPages = document.createElement('span');
    articlePages.textContent = 'Number of pages:'
    articlePages.href = '#'
    spanPages.classList.add('pagesVal')
    spanPages.innerText = myLibrary[0].pages
    iL.appendChild(articlePages);
    iL.appendChild(spanPages);
    // read status
    const articleRead = document.createElement('a');
    const spanRead = document.createElement('span');
    articleRead.textContent = 'Read Status'
    articleRead.href = '#'
    spanRead.classList.add('readVal')
    spanRead.innerText = myLibrary[0].read
    iL.appendChild(articleRead);
    iL.appendChild(spanRead);
    // css styling for our card-content
    iL.style.display = 'grid';
    iL.style.gridTemplateColumns = '50% 50%';
    articleTitle.style.gridColumn = '1/2';
    articleAuthor.style.gridColumn = '1/2';
    articlePages.style.gridColumn = '1/2';
    articleRead.style.gridColumn = '1/2';
    //document.querySelectorAll(".titleVal.authorVal.pagesVal.readVal").style.gridcolumn='2/3';
    document.querySelector(".titleVal").style.gridColumn='2/3';
    document.querySelector(".authorVal").style.gridColumn='2/3';
    document.querySelector(".pagesVal").style.gridColumn='2/3';
    document.querySelector(".readVal").style.gridColumn='2/3';
    //
    return bookLib;
}


