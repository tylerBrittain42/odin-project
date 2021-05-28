/*eslint linebreak-style: ["error", "windows"]*/
// IIIFE example
const gameBoard = (() => {
  const boardLayout = [];
  for (let i = 0; i < 9; i++) {
    boardLayout[i] = "e";
  }

  const getLayout = () => boardLayout;

  const isWin = () => {
    // Horizontal
    for (let i = 0; i < 7; i = i + 3) {
      if (
        boardLayout[i] === boardLayout[i + 1] &&
        boardLayout[i + 1] === boardLayout[i + 2] &&
        boardLayout[i] !== "e"
      ) {
        return true;
      }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
      if (
        boardLayout[i] === boardLayout[i + 3] &&
        boardLayout[i + 3] === boardLayout[i + 6] &&
        boardLayout[i] !== "e"
      ) {
        return true;
      }
    }

    // Diagonal
    if (
      boardLayout[0] === boardLayout[4] &&
      boardLayout[4] === boardLayout[8] &&
      boardLayout[0] !== "e"
    ) {
      return true;
    } else if (
      boardLayout[2] === boardLayout[4] &&
      boardLayout[4] === boardLayout[6] &&
      boardLayout[2] !== "e"
    ) {
      return true;
    }
  };

  const isTie = () => {
    let tie = true;

    boardLayout.forEach((tile) => {
      if (tile === "e") {
        tie = false;
      }
    });
    return tie;
  };

  const isAvailable = (currentTile) => {
    if (boardLayout[currentTile.id] === "e") return true;
    else return false;
  };

  const claimSpace = (player, currentTile) => {
    boardLayout[currentTile.id] = player;
    currentTile.innerHTML = player;
  };

  return {
    isWin,
    isTie,
    getLayout,
    isAvailable,
    claimSpace,
  };
})();

const controller = (() => {
  const createListeners = () => {
    const tiles = document.querySelectorAll(".grid-item");
    const header = document.querySelector("h1");
    tiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        // valid move
        if (gameBoard.isAvailable(tile)) {
          gameBoard.claimSpace(
            turnCount % 2 === 0 ? playerOne.getToken() : playerTwo.getToken(),
            tile
          );

          // check for end game states
          if (gameBoard.isWin()) {
            header.innerHTML =
              (turnCount % 2 === 0
                ? playerOne.getToken()
                : playerTwo.getToken()) + " won";
          } else if (gameBoard.isTie()) {
            header.innerHTML = "Tie game";
          }
          turnCount++;
        }
      });
    });
  };

  return {
    createListeners,
  };
})();

// Factory example
const Player = (token) => {
  const getToken = () => token;
  const setToken = (newToken) => {
    token = newToken;
  };

  return {
    getToken,
    setToken,
  };
};

let turnCount = 0;
const playerOne = Player("X");
const playerTwo = Player("O");
console.log(playerOne.getToken());
controller.createListeners();
