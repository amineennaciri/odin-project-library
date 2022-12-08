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

/* const theHobbit = new Book('The Hobbit','J.R.R. Tolkien','295','not read yet') */

const btnAdd = document.querySelector('.btn')
const btnDisp = document.querySelector('.btnShow')
const userTitle = document.querySelector('.bookTitle')
const userAuthor = document.querySelector('.bookAuthor')
const userPages = document.querySelector('.bookPages')
const userRead = document.querySelector('.bookRead')

btnAdd.addEventListener('click',addBookToLibrary);
btnDisp.addEventListener('click',displayLib);

function addBookToLibrary(e){
    e.preventDefault(); 
    // this line prevent the default action to happen
    // on that event, in this case the default action is
    // submitting the data to the form's url
    myLibrary.push( new Book(`${userTitle.value}`,`${userAuthor.value}`,`${userPages.value}`,`${userRead.value}`) );
     for(let i=0;i<=myLibrary.length-1;i++){
        bookLib[i] = myLibrary[i].info();
    }
    // reset input form
    document.querySelector('.bookTitle').value = ''
    document.querySelector('.bookAuthor').value = ''
    document.querySelector('.bookPages').value = ''
    document.querySelector('.bookRead').value = ''
    return myLibrary;
}
function displayLib(e){
    e.preventDefault(); 
    // this line prevent the default action to happen
    // on that event, in this case the default action is
    // submitting the data to the form's url


    // below is the auto refresh functionality before displaying the books
    if(document.querySelector('.card')!=null){
        const cardNumber = document.querySelectorAll('.card').length;
        if(cardNumber==1){
            document.querySelector('.card').remove();
        }else{
            for(let i= 0;i<=cardNumber-1;i++){
                //document.querySelectorAll('.card')[i].remove();
                document.querySelector('.card').remove();
            }
        }
    }
    for(let i = 0; i<= bookLib.length-1;i++){
        // creating a div card with DOM manipulation
        const divCard = document.createElement('div');
        //divCard.classList.add(`card${i+1}`)
        divCard.classList.add('card')
        // select the card we are working on
        //document.querySelector(`.card${i+1}`)
        //document.querySelector('.display').appendChild(document.getElementsByClassName(`card${i+1}`));
        // this is the trick
        document.querySelector('.display').appendChild(divCard);
        //working
        //document.querySelector('.display').appendChild(document.getElementsByClassName('card'));
        //test
        document.querySelector('.display').appendChild(document.querySelectorAll('.card')[i]);
        const hThree = document.createElement('h3');
        hThree.textContent = `Book ${i+1}`
        //document.getElementsByClassName(`card${i+1}`).appendChild(hThree);
        //working
        //divCard.appendChild(hThree);
        //test
        document.querySelectorAll('.card')[i].appendChild(hThree);
        const divCardContent = document.createElement('div');
        divCardContent.classList.add('card-content')
        // working
        //divCard.appendChild(divCardContent);
        //test
        document.querySelectorAll('.card')[i].appendChild(divCardContent);
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
        //spanTitle.innerText = myLibrary[i].title
        iL.appendChild(articleTitle);
        iL.appendChild(spanTitle);
        // author
        const articleAuthor = document.createElement('a');
        const spanAuthor = document.createElement('span');
        articleAuthor.textContent = 'Author:'
        articleAuthor.href = '#'
        spanAuthor.classList.add('authorVal')
        //spanAuthor.innerText = myLibrary[i].author
        iL.appendChild(articleAuthor);
        iL.appendChild(spanAuthor);
        // number of pages
        const articlePages = document.createElement('a');
        const spanPages = document.createElement('span');
        articlePages.textContent = 'Number of pages:'
        articlePages.href = '#'
        spanPages.classList.add('pagesVal')
        //spanPages.innerText = myLibrary[i].pages
        iL.appendChild(articlePages);
        iL.appendChild(spanPages);
        // read status
        const articleRead = document.createElement('a');
        const spanRead = document.createElement('span');
        articleRead.textContent = 'Read Status'
        articleRead.href = '#'
        spanRead.classList.add('readVal')
        //spanRead.innerText = myLibrary[i].read
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
        // Add the inputs to the span element
        //document.querySelector('.titleVal').innerText = myLibrary[i].title
        document.querySelectorAll('.card')[i].querySelector('.titleVal').innerText = myLibrary[i].title
        //document.querySelector('.authorVal').innerText = myLibrary[i].author
        document.querySelectorAll('.card')[i].querySelector('.authorVal').innerText = myLibrary[i].author
        //document.querySelector('.pagesVal').innerText = myLibrary[i].pages
        document.querySelectorAll('.card')[i].querySelector('.pagesVal').innerText = myLibrary[i].pages
        //document.querySelector('.readVal').innerText = myLibrary[i].read
        document.querySelectorAll('.card')[i].querySelector('.readVal').innerText = myLibrary[i].read
    }
    return bookLib;
}