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

function addBookToLibary(){

}

function displayLibary(){

    const shelf = document.querySelector('.container')
    
    myLibrary.forEach(book => {
        
        //creating card
        const bookTag = document.createElement("div")
        bookTag.setAttribute('class',"book-card")
        bookTag.setAttribute('id',book.title)
        shelf.appendChild(bookTag)
        
        //adding title to card
        let tag = document.createElement('h2')
        tag.innerHTML = book.title
        bookTag.appendChild(tag)

        //adding author to card
        tag = document.createElement('h3')
        tag.innerHTML = book.author
        bookTag.appendChild(tag)

        //adding page count to card
        tag = document.createElement('h3')
        tag.innerHTML = book.pages + ' pages'
        bookTag.appendChild(tag)

        //adding completed button to card
        tag = document.createElement('button')
        tag.innerHTML = 'Completed'
        bookTag.appendChild(tag)

        createListener(tag)


    });

}

function createListener(toAdd){

    toAdd.addEventListener('click', () => {
        
        if(toAdd.innerHTML === "Completed"){
            toAdd.innerHTML = "Not Completed"
        }
        else{
            toAdd.innerHTML = "Completed"
        }

    })


}