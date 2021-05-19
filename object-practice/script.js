// This directory is going to serve as practice
// for using objects in javascript


let myLibary = []

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