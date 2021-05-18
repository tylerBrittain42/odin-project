createBoard();

function createBoard(){

    //Grabs the container
    const board = document.getElementById("board-container")

    //creates the tiles inside of the board
    for(let i = 0; i < (16*16); i++){
        const tag = document.createElement("button");
        tag.classList.add("board-tile")
        tag.setAttribute('id',i)
        board.appendChild(tag);
    }

    //adding event listeners to all of the buttons
    const tiles = document.querySelectorAll('.board-tile');
    console.log(tiles)
    tiles.forEach((tile) => {
        tile.addEventListener("mouseover", () => {
            console.log(tile.id);
            tile.style.backgroundColor = "red"

        })

    })

}
