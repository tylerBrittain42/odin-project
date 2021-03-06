
let myLibrary = []

// Loads library from local storage(if it exists)
if (localStorage.getItem('localLibrary') !== null){
    myLibrary = JSON.parse(localStorage.getItem('localLibrary'))
}
else{
    localStorage.setItem('localLibrary',JSON.stringify(myLibrary))
}

// display initial library
displayLibary()

//-------------- functions below --------------//

function Book(title, author, pages, haveRead){

    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

    this.report = function(){
        return (title + ' by ' + author + ' is ' + pages + ' pages long.')
    }
}

function displayLibary(){

    const shelf = document.querySelector('.container')
    
    myLibrary.forEach((book, i) => {
        
        displayBook(shelf, book, i)

    });

}

// Toggles between Completed/Not completed
function createToggle(toAdd){

    toAdd.addEventListener('click', () => {

        const bookID = toAdd.parentNode.id
        myLibrary[bookID].haveRead = !myLibrary[bookID].haveRead
        
        if(myLibrary[bookID].haveRead === false){
            toAdd.innerHTML = "Not Completed"
        }
        else{
            toAdd.innerHTML = "Completed"
        }
        localStorage.setItem('localLibrary',JSON.stringify(myLibrary))
    })
}

function addBookToLibary(title,author,pgCt){

    // adding to library
    myLibrary.push(new Book(title,author,Number(pgCt),false))
    localStorage.setItem('localLibrary',JSON.stringify(myLibrary))

    // updating view
    const shelf = document.querySelector('.container')
    displayBook(shelf,myLibrary[myLibrary.length - 1], myLibrary.length - 1)

}

function removeBook(id){

    // removing from library
    myLibrary.splice(id,1);
    localStorage.setItem('localLibrary',JSON.stringify(myLibrary))

    // removing from view
    let removedEle = document.getElementById(String(id))
    removedEle.remove()

}

function displayBook(shelff, curBook, index){

    // creating card
    const bookTag = document.createElement("div")
    bookTag.setAttribute('class',"book-card")
    bookTag.setAttribute('id',index)
    shelff.appendChild(bookTag)
    
    // adding title to card
    let tag = document.createElement('h2')
    tag.innerHTML = curBook.title
    bookTag.appendChild(tag)

    // adding author to card
    tag = document.createElement('h3')
    tag.innerHTML = curBook.author
    bookTag.appendChild(tag)

    // adding page count to card
    tag = document.createElement('h3')
    tag.innerHTML = curBook.pages + ' pages'
    bookTag.appendChild(tag)

    // adding completed button to card
    tag = document.createElement('button')
    tag.innerHTML = myLibrary[index].haveRead ? 'Completed' : 'Not Completed'
    bookTag.appendChild(tag)

    createToggle(tag)

    // line break
    tag = document.createElement('br')
    bookTag.appendChild(tag)

    // adding remove button to card
    tag = document.createElement('button')
    tag.innerHTML = 'Remove'
    bookTag.appendChild(tag)

    // adding listener for remove button
    tag.addEventListener('click', () => {removeBook(index)})
}

function addMenu(){

    // if a menu already exists THEN return
    if(document.querySelector('.new-book-form') !== null)
        return

    // getting relevant dom information
    const body = document.querySelector('body')
    const targetNode = document.querySelector('h1')

    // creating form
    const formTag = document.createElement('form')
    formTag.setAttribute('class','new-book-form')
    body.insertBefore(formTag, targetNode.nextSibling)

    // adding title input
    let tag = document.createElement('input')
    tag.setAttribute('type','text')
    tag.setAttribute('name','newTitle')
    tag.setAttribute('placeholder','Title')
    formTag.appendChild(tag)
    formTag.appendChild(document.createElement('br'))

    // adding author input
    tag = document.createElement('input')
    tag.setAttribute('type','text')
    tag.setAttribute('name','newAuthor')
    tag.setAttribute('placeholder','Author')
    formTag.appendChild(tag)
    formTag.appendChild(document.createElement('br'))

    // adding page count input
    tag = document.createElement('input')
    tag.setAttribute('type','text')
    tag.setAttribute('name','newPageCount')
    tag.setAttribute('placeholder','Page Count')
    formTag.appendChild(tag)
    formTag.appendChild(document.createElement('br'))

    // adding submit button
    tag = document.createElement('input')
    tag.setAttribute('type','button')
    tag.setAttribute('value','Submit')
    tag.setAttribute('onclick','addBookToLibary(newTitle.value,newAuthor.value,newPageCount.value);')
    formTag.appendChild(tag)

    // removes the menu once a book has been created
    tag.addEventListener('click', () => {
        let addForm = document.querySelector('.new-book-form')
        addForm.remove()
    })
}