createBoard();

function createBoard(){

    const board = document.getElementById("board-container")

    for(let i = 0; i < (16*16); i++){
        const tag = document.createElement("div");
        tag.classList.add("board-tile")
        board.appendChild(tag);
    }

}