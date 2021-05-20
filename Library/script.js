// This directory is going to serve as practice
// for using objects in javascript


let myLibrary = []
// making a few sample books for testing purposes
// for(let i = 0; i < 5; i++){
    myLibrary.push(new Book('truancy','isamu',120,false));
// }

displayLibary()

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

function createToggle(toAdd){

    toAdd.addEventListener('click', () => {
        
        if(toAdd.innerHTML === "Completed"){
            toAdd.innerHTML = "Not Completed"
        }
        else{
            toAdd.innerHTML = "Completed"
        }

    })
}

function addBookToLibary(title,author,pgCt){

    const shelf = document.querySelector('.container')

    myLibrary.push(new Book(title,author,Number(pgCt),false));
    displayBook(shelf,myLibrary[myLibrary.length - 1], myLibrary.length - 1)

}

function removeBook(id){

    let removedEle = document.getElementById(String(id))

    myLibrary.splice(id,1);
    removedEle.remove()

}

function displayBook(shelff, curBook, index){

    //creating card
    const bookTag = document.createElement("div")
    bookTag.setAttribute('class',"book-card")
    bookTag.setAttribute('id',index)
    shelff.appendChild(bookTag)
    
    //adding title to card
    let tag = document.createElement('h2')
    tag.innerHTML = curBook.title
    bookTag.appendChild(tag)

    //adding author to card
    tag = document.createElement('h3')
    tag.innerHTML = curBook.author
    bookTag.appendChild(tag)

    //adding page count to card
    tag = document.createElement('h3')
    tag.innerHTML = curBook.pages + ' pages'
    bookTag.appendChild(tag)

    //adding completed button to card
    tag = document.createElement('button')
    tag.innerHTML = 'Completed'
    bookTag.appendChild(tag)

    createToggle(tag)

    //line break
    tag = document.createElement('br')
    bookTag.appendChild(tag)

    //adding remove button to card
    tag = document.createElement('button')
    tag.innerHTML = 'Remove'
    bookTag.appendChild(tag)

    //adding listener for remove button
    tag.addEventListener('click', () => {removeBook(index)})



}

function addMenu(){

    if(document.querySelector('.new-book-form') !== null)
        return

    //getting relevant dom information
    const body = document.querySelector('body')
    const targetNode = document.querySelector('h1')

    //creating form
    const formTag = document.createElement('form')
    formTag.setAttribute('class','new-book-form')
    body.insertBefore(formTag, targetNode.nextSibling)

    //adding title input
    let tag = document.createElement('input')
    tag.setAttribute('type','text')
    tag.setAttribute('name','newTitle')
    tag.setAttribute('placeholder','Title')
    formTag.appendChild(tag)
    formTag.appendChild(document.createElement('br'))

    //adding author input
    tag = document.createElement('input')
    tag.setAttribute('type','text')
    tag.setAttribute('name','newAuthor')
    tag.setAttribute('placeholder','Author')
    formTag.appendChild(tag)
    formTag.appendChild(document.createElement('br'))

    //adding page count input
    tag = document.createElement('input')
    tag.setAttribute('type','text')
    tag.setAttribute('name','newPageCount')
    tag.setAttribute('placeholder','Page Count')
    formTag.appendChild(tag)
    formTag.appendChild(document.createElement('br'))

    //adding submit button
    tag = document.createElement('input')
    tag.setAttribute('type','button')
    tag.setAttribute('value','Submit')
    tag.setAttribute('onclick','addBookToLibary(newTitle.value,newAuthor.value,newPageCount.value);')
    formTag.appendChild(tag)
    
    

    

}