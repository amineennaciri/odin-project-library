let myLibrary = []
/* let bookLib = [] */
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
// Add New Book button that create the form list
const addNewBookBtn = document.querySelector('.newBook'); 
addNewBookBtn.addEventListener('click',addNewBook);
function addNewBook(){
    // creating form element
    const newForm = document.createElement('form')
    newForm.setAttribute("action","#");
    newForm.setAttribute("class","entry");
    newForm.setAttribute("method","post");
    document.body.appendChild(newForm);
    //titleLabel
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute("for","book_title");
    titleLabel.innerText= 'Title';
    newForm.appendChild(titleLabel);
    //titleInput
    const titleInput = document.createElement('input');
    titleInput.setAttribute("class","bookTitle");
    titleInput.setAttribute("id","book_title");
    titleInput.setAttribute("type","text");
    newForm.appendChild(titleInput);
    //authorLabel
    const authorLabel = document.createElement('label');
    authorLabel.setAttribute("for","book_author");
    authorLabel.innerText=`Author's name`;
    newForm.appendChild(authorLabel);
    //authorInput
    const authorInput = document.createElement('input');
    authorInput.setAttribute("class","bookAuthor");
    authorInput.setAttribute("id","book_author");
    authorInput.setAttribute("type","text");
    newForm.appendChild(authorInput);
    //pagesLabel
    const pagesLabel = document.createElement('label');
    pagesLabel.setAttribute("for","num_pages");
    pagesLabel.innerText='Number of pages';
    newForm.appendChild(pagesLabel);
    //pagesInput
    const pagesInput = document.createElement('input');
    pagesInput.setAttribute("class","bookPages");
    pagesInput.setAttribute("id","book_pages");
    pagesInput.setAttribute("type","number");
    newForm.appendChild(pagesInput);
    //readLabel
    const readLabel = document.createElement('label');
    readLabel.setAttribute("for","reading_status");
    readLabel.innerText='Reading status';
    newForm.appendChild(readLabel);
    //read Selection
    const newSelect = document.createElement('select');
    newSelect.setAttribute("name","bookRead");
    newSelect.setAttribute("class","bookRead");
    newSelect.setAttribute("id","reading_status");
    newForm.appendChild(newSelect);
    // option inside selection
    // read option
    const readOption = document.createElement('option');
    readOption.setAttribute("value","Read");
    readOption.innerText='Read';
    newSelect.appendChild(readOption);
    // not read yet option
    const notReadOption = document.createElement('option');
    notReadOption.setAttribute("value","Not read yet");
    notReadOption.innerText='Not read yet';
    newSelect.appendChild(notReadOption);
    // submit button
    const btnAdd = document.createElement('button');
    btnAdd.setAttribute("class","btn");
    btnAdd.setAttribute("type","submit");
    btnAdd.innerText='Submit Book';
    newForm.appendChild(btnAdd);
    // display button
    const btnDisp = document.createElement('button');
    btnDisp.setAttribute("class","btnShow");
    btnDisp.innerText='Display Library';
    newForm.appendChild(btnDisp);
    // preparation for next event listeners
    btnAdd.addEventListener('click',addBookToLibrary);
    btnDisp.addEventListener('click',displayLib);
}
// before all this
/* const btnAdd = document.querySelector('.btn')
const btnDisp = document.querySelector('.btnShow') */

function addBookToLibrary(e){
    const userTitle = document.querySelector('.bookTitle')
    const userAuthor = document.querySelector('.bookAuthor')
    const userPages = document.querySelector('.bookPages')
    const userRead = document.querySelector('.bookRead')
    e.preventDefault(); 
    // this line prevent the default action to happen
    // on that event, in this case the default action is
    // submitting the data to the form's url
    myLibrary.push( new Book(`${userTitle.value}`,`${userAuthor.value}`,`${userPages.value}`,`${userRead.value}`) );
/*      for(let i=0;i<=myLibrary.length-1;i++){
        bookLib[i] = myLibrary[i].info();
    } */
    // reset input form
    document.querySelector('.bookTitle').value = ''
    document.querySelector('.bookAuthor').value = ''
    document.querySelector('.bookPages').value = ''
    //document.querySelector('.bookRead').value = ''
    return myLibrary;
}
function displayLib(e){
    //console.log(e.composedPath()[0].className)
    if(e.composedPath()[0].className==="btnShow"){
        e.preventDefault(); 
        // this line prevent the default action to happen
        // on that event, in this case the default action is
        // submitting the data to the form's url
    }


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
    for(let i = 0; i<= myLibrary.length-1;i++){
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
        // delete button
        const btnDelete = document.createElement('button');
        btnDelete.setAttribute("class","btnDelete");
        btnDelete.setAttribute("id",`${i}`);// help us to locate the index of the exact book inside myLibrary
        btnDelete.innerText='Remove this book';
        divCard.appendChild(btnDelete);
        // preparation for next event listeners
        btnDelete.addEventListener('click',removeBook);
    }
    return myLibrary;
}

function removeBook(e){
/*     const index = console.log(e.id)
    console.log(index) */
    //console.log(e.path[1]) // select the container of the button that we clicked on.
/*     console.log(e.composedPath().attributes)
    console.log(e.composedPath()[0].attributes[0].textContent) */
    console.log(e.composedPath()[1].lastChild.id)
    // now I need to remove the book from the array
    const bookIndex = e.composedPath()[1].lastChild.id;
    myLibrary.splice(bookIndex,1);//remove the book from the array
    e.composedPath()[1].remove(); // remove the book from the display
}
/* 
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
    } */