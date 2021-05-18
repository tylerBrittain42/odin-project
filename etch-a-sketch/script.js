createBoard();

function createBoard(){

    //Grabs the container
    const board = document.getElementById("board-container");

    //creates the tiles inside of the board
    for(let i = 0; i < (16*16); i++){
        const tag = document.createElement("button");
        tag.classList.add("board-tile")
        tag.setAttribute('id',i)
        board.appendChild(tag);
    }

    //adding event listeners to all of the buttons
    const tiles = document.querySelectorAll('.board-tile');

    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = randomColor();
    })})
}

//Reverts all tiles back to white
function resetBoard(){

    const tiles = document.querySelectorAll('.board-tile');

    tiles.forEach((tile) => {
        tile.style.backgroundColor = "white";
    })
}

//Generates a random number by generating a hex value one char at a time
function randomColor(){

    const hexVals = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += hexVals[Math.floor(Math.random() * 16)]
    }
    return(color);

}
