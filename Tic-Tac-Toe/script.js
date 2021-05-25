// IIIFE example
const gameBoard = (() => {

    let boardLayout = [1]

    const getLayout = () => boardLayout

    return{

        getLayout
    }


})()

// Factory example
const Player = () => {




}




createListeners()















function createListeners(){

    const tiles = document.querySelectorAll('.grid-item')
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            tile.innerHTML = (tile.innerHTML === 'X') ? 'O' : 'X'
        })

    })

}