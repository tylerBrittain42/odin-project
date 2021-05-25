const currentPlayer = 'X'

// IIIFE example
const gameBoard = (() => {

    let boardLayout = []
    for(let i = 0; i < 9; i++){
        boardLayout[i] = 'e'
    }

    const getLayout = () => boardLayout

    const isWin = () => {
        
        // Horizontal
        for(let i = 0; i < 7; i = i + 3){
            if (boardLayout[i] === boardLayout[i+1] && boardLayout[i+1] === boardLayout[i+2] && boardLayout[i] !== 'e')
                return true
        }

       // Vertical
        for(let i = 0; i < 3; i++){
            if (boardLayout[i] === boardLayout[i+3] && boardLayout[i+3] === boardLayout[i+6] && boardLayout[i] !== 'e')
                return true
        }

        // Diagonal
        if (boardLayout[0] === boardLayout[4] && boardLayout[4] === boardLayout[8] && boardLayout[0] !== 'e')
            return true
        else if (boardLayout[2] === boardLayout[4] && boardLayout[4] === boardLayout[6] && boardLayout[2] !== 'e')
            return true


    }

    const isTie = () => {

        let tie = true

        boardLayout.forEach((tile) => {
            if (tile === 'e'){
                tie = false
            }
        })
        return tie
    }

    const claimSpace = (player, currentTile) => {

        if(boardLayout[currentTile.id] === 'e'){
            boardLayout[currentTile.id] = player
            currentTile.innerHTML = player
        }
        else{
            console.log('invalid move')
        }
    }

    return{
        isWin,
        isTie,
        getLayout,
        claimSpace
    }

})()

// Factory example
const Player = (token) => {

    const getToken = () => token
    const setToken = (newToken) => {
        token = newToken
    }

    return{
        getToken,
        setToken
    }

}


// createListeners()
// console.log(gameBoard.getLayout())

const controller = (() => {

})()













function createListeners(){

    const tiles = document.querySelectorAll('.grid-item')
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            gameBoard.claimSpace(currentPlayer,tile)
            console.log(gameBoard.isTie())
        })

    })

}