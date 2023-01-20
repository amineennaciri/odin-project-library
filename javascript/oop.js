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
    this.toggle = function(){
        if (this.read === 'Read'){
            return this.read = 'Not read yet';
        }else if((this.read === 'Not read yet')){
            return this.read = 'Read';
        }
    }
}

// constructor that make event listeners
function AddEvent(btnTargeted,eventFunction){
    this.btnTargeted = btnTargeted
    this.eventFunction = eventFunction
    this.addEvent = function(){
        btnTargeted.addEventListener('click',eventFunction);
    }
}

// constructor that create elements using DOM
function CreateElmt(varName,elmtName,parentElmt,elmtText,attrOne,attrOneValue,attrTwo,attrTwoValue,attrThree,attrThreeValue,attrFour,attrFourValue){
    this.varName = varName
    this.elmtName = elmtName
    this.attrOne = attrOne
    this.attrOneValue = attrOneValue
    this.attrTwo = attrTwo
    this.attrTwoValue = attrTwoValue
    this.attrThree = attrThree
    this.attrThreeValue = attrThreeValue
    this.attrFour = attrFour
    this.attrFourValue = attrFourValue
    this.parentElmt = parentElmt
    this.elmtText = elmtText
    let attrArray = [this.attrOne,this.attrTwo,this.attrThree,this.attrFour]
    this.createElmt = function(){
        this.varName = document.createElement(this.elmtName);
        this.varName.setAttribute(attrOne,attrOneValue);
        this.varName.setAttribute(attrTwo,attrTwoValue);
        this.varName.setAttribute(attrThree,attrThreeValue);
        this.varName.setAttribute(attrFour,attrFourValue);
        this.varName.innerText = this.elmtText;
        // this for loop get rid of the undefined attributes and their values in order to avoid browser problems with security
        for(let i=0;i<=attrArray.length-1;i++){
            if(attrArray[i]===undefined){
                this.varName.removeAttribute(`${attrArray[i]}`)
            }
        }
        this.parentElmt.appendChild(this.varName);
        return this.varName
    }
}


let libProj = {
    // properties
    // Add New Book button that create the form list
    addNewBookBtn : document.querySelector('.newBook'),
    myLibrary : [],
    newForm : undefined,
    titleLabel : undefined,
    titleInput : undefined,
    authorLabel : undefined,
    authorInput : undefined,
    pagesLabel : undefined,
    pagesInput : undefined,
    readLabel : undefined,
    newSelect : undefined,
    readStatusOption : undefined,
    readOption : undefined,
    notReadOption : undefined,
    btnAdd : undefined,
    btnDisp : undefined,
    titleInputError : undefined,
    authorInputError : undefined,
    pagesInputError : undefined,
    newSelectError : undefined,
    cardNumber : undefined,
    divDisp : undefined,
    dispHTwo : undefined,
    divCard : undefined,
    hThree : undefined,
    divCardContent : undefined,
    uL : undefined,
    iL : undefined,
    articleTitle : undefined,
    spanTitle : undefined,
    articleAuthor : undefined,
    spanAuthor : undefined,
    articlePages : undefined,
    spanPages : undefined,
    articleRead : undefined,
    spanRead : undefined,
    btnDelete : undefined,
    changeReadStatus : undefined,
    btnDeleteEvent : undefined,
    changeReadStatusEvent : undefined,
    bookIndexRemove : undefined,
    bookIndexChange : undefined,
    // methods
    addNewBook : function(){
        // creating form element
        libProj.newForm = new CreateElmt(libProj.newForm,'form',document.body,'','class',"entry","action","#","method","post").createElmt();
        //titleLabel
        libProj.titleLabel = new CreateElmt(libProj.titleLabel,'label',libProj.newForm,'Title','for',"book_title").createElmt();
        //titleInput
        libProj.titleInput = new CreateElmt(libProj.titleInput,'input',libProj.newForm,'','class',"bookTitle","id","book_title","type","text").createElmt();
        //titleInputErrorDiv
        libProj.titleInputError = new CreateElmt(libProj.titleInputError,'div',libProj.newForm,'titleInput is required','class',"div-error").createElmt();
        //authorLabel
        libProj.authorLabel = new CreateElmt(libProj.authorLabel,'label',libProj.newForm,`Author's name`,'for',"book_author").createElmt();
        //authorInput
        libProj.authorInput = new CreateElmt(libProj.authorInput,'input',libProj.newForm,'',"class","bookAuthor","id","book_author","type","text").createElmt();
        //authorInputErrorDiv
        libProj.authorInputError = new CreateElmt(libProj.authorInputError,'div',libProj.newForm,'titleInput is required','class',"div-error").createElmt();
        //pagesLabel
        libProj.pagesLabel = new CreateElmt(libProj.pagesLabel,'label',libProj.newForm,'Number of pages',"for","num_pages").createElmt();
        //pagesInput
        libProj.pagesInput = new CreateElmt(libProj.pagesInput,'input',libProj.newForm,'',"class","bookPages","id","book_pages","type","number").createElmt();
        //pagesInputErrorDiv
        libProj.pagesInputError = new CreateElmt(libProj.pagesInputError,'div',libProj.newForm,'titleInput is required','class',"div-error").createElmt();
        //readLabel
        libProj.readLabel = new CreateElmt(libProj.readLabel,'label',libProj.newForm,'Reading status',"for","reading_status").createElmt();
        //read Selection
        libProj.newSelect = new CreateElmt(libProj.newSelect,'select',libProj.newForm,'',"name","bookRead","class","bookRead","id","reading_status").createElmt();
        // option inside selection
        // choose a reading option
        libProj.readStatusOption = new CreateElmt(libProj.readStatusOption,'option',libProj.newSelect,'Choose a reading status!',"value","reading_status!",'selected','',).createElmt();
        // read option
        libProj.readOption = new CreateElmt(libProj.readOption,'option',libProj.newSelect,'Read',"value","Read").createElmt();
        // not read yet option
        libProj.notReadOption = new CreateElmt(libProj.notReadOption,'option',libProj.newSelect,'Not read yet',"value","Not read yet").createElmt();
        //newSelectErrorDiv
        libProj.newSelectError = new CreateElmt(libProj.newSelectError,'div',libProj.newForm,'titleInput is required','class',"div-error").createElmt();
        // submit button
        libProj.btnAdd = new CreateElmt(libProj.btnAdd,'button',libProj.newForm,'Submit Book',"class","btn","type","submit").createElmt();
        // display button
        libProj.btnDisp = new CreateElmt(libProj.btnDisp,'button',libProj.newForm,'Display Library',"class","btnShow").createElmt();
        // preparation for next event listeners
        libProj.btnAddEvent = new AddEvent(libProj.btnAdd,libProj.addBookToLibrary).addEvent();
        libProj.btnDispEvent = new AddEvent(libProj.btnDisp,libProj.displayLib).addEvent();
        // TEMPLATE (varName,elmtName,parentElmt,elmtText,attrOne,attrOneValue,attrTwo,attrTwoValue,attrThree,attrThreeValue,attrFour,attrFourValue)
    },
    addBookToLibrary : function(e){
        // the following line prevent the default action of a form to happen, in this case the default action is submitting the data to the form's url
        e.preventDefault();
        // it's time to store the input's values
        libProj.titleInputVal = libProj.titleInput.value.trim();
        libProj.authorInputVal =  libProj.authorInput.value.trim();
        libProj.pagesInputVal = libProj.pagesInput.value.trim();
        libProj.newSelectVal = libProj.newSelect.value.trim();
        
        // check validity of the title input.
        new InputsVerification(libProj.titleInput,`The book's title is required`,libProj.titleInputVal === '');
        // check validity of the author input.
        new InputsVerification(libProj.authorInput,`The author's name is required`,libProj.authorInputVal === '');
        // check validity of the page number input.
        new InputsVerification(libProj.pagesInput,`Book's number of pages is required`,libProj.pagesInputVal === '','Provide a valid number of pages',libProj.pagesInputVal<=0);
        // check validity of the reading status input.
        new InputsVerification(libProj.newSelect,`Please select either "read" or "not read yet"`,libProj.newSelectVal === 'reading_status!');

        // condition loop to check all conditions before storing the book into the array.
        if( libProj.titleInput.classList.contains("success") && libProj.authorInput.classList.contains("success") && libProj.pagesInput.classList.contains("success") && libProj.newSelect.classList.contains("success") )  {
            
            libProj.myLibrary.push( new Book(`${libProj.titleInput.value}`,`${libProj.authorInput.value}`,`${libProj.pagesInput.value}`,`${libProj.newSelect.value}`) );
            //store the inputs as a new book inside the myLibrary array
            // reset input form
            libProj.authorInput.value = '';
            libProj.titleInput.value = '';
            libProj.pagesInput.value = '';
            /* libProj.newSelect.value = document.querySelector('[value="reading_status!"]').innerText; */
            libProj.newSelect.value = "reading_status!";
        }
    },
    displayLib : function(e){
        e.preventDefault(); 
        // this line prevent the default action to happen
        // on that event, in this case the default action is
        // submitting the data to the form's url
        // below is the auto refresh functionality before displaying the books
        if(document.querySelector('.card')!=null){
            libProj.cardNumber = document.querySelectorAll('.card').length;
            if(libProj.cardNumber==1){
                document.querySelector('.card').remove();
            }else{
                for(let i= 0;i<=libProj.cardNumber-1;i++){
                    //document.querySelectorAll('.card')[i].remove();
                    document.querySelector('.card').remove();
                }
            }
        } else if(document.querySelector('.display')===null){ 
            // this line is used so that we avoid creating multiple h2, each time we click on the button display lib
            // declaration of the container div
            libProj.divDisp = new CreateElmt(libProj.divDisp,'div',document.body,'','class','display').createElmt();
            // declaration of the header h2
            libProj.dispHTwo = new CreateElmt(libProj.dispHTwo,'h2',libProj.divDisp,'My Books').createElmt();
        }
        for(let i = 0; i<= libProj.myLibrary.length-1;i++){
            // creating a div card with DOM manipulation
            libProj.divCard = new CreateElmt(libProj.divCard,'div',document.querySelector('.display'),'','class','card').createElmt();
            /* //test
            document.querySelector('.display').appendChild(document.querySelectorAll('.card')[i]); */
            libProj.hThree = new CreateElmt(libProj.hThree,'h3',document.querySelectorAll('.card')[i],`Book ${i+1}`).createElmt();

            libProj.divCardContent = new CreateElmt(libProj.divCardContent,'div',document.querySelectorAll('.card')[i],`Book ${i+1}`,'class','card-content').createElmt();

            libProj.uL = new CreateElmt(libProj.uL,'ul',libProj.divCardContent,``,).createElmt();

            libProj.iL = new CreateElmt(libProj.iL,'il',libProj.uL,``,).createElmt();

            // creating the articles and spans title
            libProj.articleTitle = new CreateElmt(libProj.articleTitle,'a',libProj.iL,`Title:`,'href','#').createElmt();

            libProj.spanTitle = new CreateElmt(libProj.spanTitle,'span',libProj.iL,``,'class','titleVal').createElmt();
            // author
            libProj.articleAuthor = new CreateElmt(libProj.articleAuthor,'a',libProj.iL,`Author:`,'href','#').createElmt();

            libProj.spanAuthor = new CreateElmt(libProj.spanAuthor,'span',libProj.iL,``,'class','authorVal').createElmt();
            // number of pages
            libProj.articlePages = new CreateElmt(libProj.articlePages,'a',libProj.iL,`Number of pages:`,'href','#').createElmt();

            libProj.spanPages = new CreateElmt(libProj.spanPages,'span',libProj.iL,``,'class','pagesVal').createElmt();
            // read status
            libProj.articleRead = new CreateElmt(libProj.articleRead,'a',libProj.iL,`Read Status:`,'href','#').createElmt();

            libProj.spanRead = new CreateElmt(libProj.spanRead,'span',libProj.iL,``,'class','readVal').createElmt();
            // css styling for our card-content

            libProj.iL.style.display = 'grid';
            libProj.iL.style.gridTemplateColumns = '50% 50%';
            libProj.articleTitle.style.gridColumn = '1/2';
            libProj.articleAuthor.style.gridColumn = '1/2';
            libProj.articlePages.style.gridColumn = '1/2';
            libProj.articleRead.style.gridColumn = '1/2';
            //document.querySelectorAll(".titleVal.authorVal.pagesVal.readVal").style.gridcolumn='2/3';
            document.querySelector(".titleVal").style.gridColumn='2/3';
            document.querySelector(".authorVal").style.gridColumn='2/3';
            document.querySelector(".pagesVal").style.gridColumn='2/3';
            document.querySelector(".readVal").style.gridColumn='2/3';
            //
            // Add the inputs to the span element
            //document.querySelector('.titleVal').innerText = myLibrary[i].title
            document.querySelectorAll('.card')[i].querySelector('.titleVal').innerText = libProj.myLibrary[i].title
            //document.querySelector('.authorVal').innerText = myLibrary[i].author
            document.querySelectorAll('.card')[i].querySelector('.authorVal').innerText = libProj.myLibrary[i].author
            //document.querySelector('.pagesVal').innerText = myLibrary[i].pages
            document.querySelectorAll('.card')[i].querySelector('.pagesVal').innerText = libProj.myLibrary[i].pages
            //document.querySelector('.readVal').innerText = myLibrary[i].read
            document.querySelectorAll('.card')[i].querySelector('.readVal').innerText = libProj.myLibrary[i].read
            
            // delete button

            libProj.btnDelete = new CreateElmt(libProj.btnDelete,'button',libProj.divCard,`Remove this book`,'class','btnDelete',"id",`${i}`).createElmt();
            // the i index in the libProj.btnDelete Id help us to locate the index of the exact book inside myLibrary.
            // preparation for next delete buttonn event listeners.
            libProj.btnDeleteEvent = new AddEvent(libProj.btnDelete,libProj.removeBook).addEvent();
            // change read status button
            libProj.changeReadStatus = new CreateElmt(libProj.changeReadStatus,'button',libProj.divCard,`Switch Reading Status`,'class','btnChangeStatus',"id",`${i}`).createElmt();
            // the i index in the libProj.btnDelete Id help us to locate the index of the exact book inside myLibrary.
            // preparation for next delete buttonn event listeners.
            libProj.changeReadStatusEvent = new AddEvent(libProj.changeReadStatus,libProj.changeReadingStatus).addEvent();
        }
    },
    removeBook : function(e){
        /*     const index = console.log(e.id)
        console.log(index) */
        //console.log(e.path[1]) // select the container of the button that we clicked on.
        /*     console.log(e.composedPath().attributes)
        console.log(e.composedPath()[0].attributes[0].textContent) */
        //console.log(e.composedPath()[1].lastChild.id)
        // now I need to remove the book from the array
        libProj.bookIndexRemove = e.composedPath()[1].lastChild.id;
        libProj.myLibrary.splice(libProj.bookIndexRemove,1);//remove the book from the array
        e.composedPath()[1].remove(); // remove the book from the display
    },
    changeReadingStatus : function(e){
        //console.log(e.composedPath())
        libProj.bookIndexChange = e.composedPath()[1].lastChild.id;
        libProj.myLibrary[libProj.bookIndexChange].toggle();// switch reading status
        // update the display of the book status
        document.querySelectorAll('.card')[libProj.bookIndexChange].querySelector('.readVal').innerText = libProj.myLibrary[libProj.bookIndexChange].read
        /* return libProj.myLibrary */
    },
}
// add event listener to the Add book button
libProj.addNewBookBtnEvent = new AddEvent(libProj.addNewBookBtn,libProj.addNewBook).addEvent();

// constructor that make the selection of the success message or error message for our Book inputs verification
//
function InputsVerification(element,errorMessageOne,conditionOne,errorMessageTwo,conditionTwo){
    this.element = element;
    this.errorMessageOne = errorMessageOne;
    this.errorMessageTwo = errorMessageTwo;
    this.conditionOne = conditionOne;
    this.conditionTwo = conditionTwo;
    this.setError = function(element,message){
        element.classList.add('error');
        element.classList.remove('success');
        element.nextElementSibling.style.visibility = "visible";
        element.nextElementSibling.innerText = message;
    }
    this.setSuccess = function(element){
        element.classList.add('success');
        element.classList.remove('error');
        element.nextElementSibling.style.visibility = "hidden";
        element.nextElementSibling.innerText = '';
    }
    // this is the condition loop we will run if there is no second condition and second error message
    if(this.conditionTwo===undefined && this.errorMessageTwo ===undefined){
        if(this.conditionOne) {
            this.setError(this.element,this.errorMessageOne);
        }else {
            this.setSuccess(this.element);
        }
    // now if there is a second condition run this condition loop
    }else{
        if(this.conditionOne){
            this.setError(this.element,this.errorMessageOne);
        }else if(this.conditionTwo){
            this.setError(this.element,this.errorMessageTwo);
        }else{
            this.setSuccess(this.element);
        }
    }
}