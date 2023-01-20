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
    displayLib : function(){
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