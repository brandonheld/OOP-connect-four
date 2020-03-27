import {Game} from "./game.js";

let game = undefined;
    
function updateUi() {
    const boardholder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
        
    if(game === undefined) {
       boardholder.classList.add('is-invisible');
    } else {
        boardholder.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();

        for(let columnIndex = 0; columnIndex <= 6; columnIndex++) {
            const columnID =`column-${columnIndex}`;
            const columnFull = game.isColumnFull(columnIndex);
            const column = document.getElementById(columnID);
    
            if(columnFull) {
                column.classList.add('full');
            } else {
                column.classList.remove('full');
            }
        }

        for(let rowIndex = 0; rowIndex <= 5; rowIndex++) {
            for(let columnIndex = 0; columnIndex <= 6; columnIndex++) {
                const square = document.querySelector(`#square-${rowIndex}-${columnIndex}`);
                const playerNumber = game.getTokenAt(rowIndex, columnIndex);
                square.innerHTML = '';

                
                if(playerNumber === 1) {
                    const token = document.createElement('div');
                    token.classList.add('token');
                    token.classList.add('black');
                    square.appendChild(token)
                
                } else if(playerNumber === 2) {
                    const token = document.createElement('div');
                    token.classList.add('token');
                    token.classList.add('red');
                    square.appendChild(token)
                }
            }
        }

        const currentPlayer = game.currentPlayer;
        const targets = document.getElementById("click-targets"); 
        if(currentPlayer === 1) {
            targets.classList.add('black');
            targets.classList.remove('red');
        } else {
            targets.classList.add('red');
            targets.classList.remove('black');
        }
    }

   
}

window.addEventListener("DOMContentLoaded", event => { 
    updateUi()
    const elePlayer1 = document.getElementById("player-1-name");
    const elePlayer2 = document.getElementById("player-2-name");
    
    let gameState = document.getElementById("new-game")

    function enableNewGame() {
        let playerOne = document.getElementById("player-1-name").value;
        let playerTwo = document.getElementById("player-2-name").value;
    
        if((playerOne.length && playerTwo.length) !== 0){
            gameState.disabled = false;
        }

    }

    elePlayer1.addEventListener('keyup', () =>{
        enableNewGame();  

    });

    elePlayer2.addEventListener('keyup',() =>{
        enableNewGame();
        
    });

    gameState.addEventListener('click', () => {
        game = new Game(elePlayer1.value, elePlayer2.value)
        elePlayer1.value = '';
        elePlayer2.value = '';
        enableNewGame();
        updateUi();
    });

    document.getElementById("click-targets").addEventListener("click", event => {
        const targetId = event.target.id;
        
        if(!targetId.startsWith('column-')) {
            return;
        }

        const columnIndex = Number.parseInt(targetId[targetId.length - 1]);

        game.playInColumn(columnIndex);
        updateUi();
        console.log(game.columns)
    })

});





