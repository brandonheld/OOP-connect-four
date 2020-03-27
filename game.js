import { Column } from "./column.js"

export class Game {
    
    constructor(playerOneName, playerTwoName){
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
        this.winnerNumber = 0;
    }
    
    getName(){
        return `${this.playerOneName} vs ${this.playerTwoName}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    playInColumn(columnIndex) {
       this.columns[columnIndex].add(this.currentPlayer);
       
        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
            
        } else {
            this.currentPlayer = 1;
            
        }
    }

    isColumnFull(columnIndex) {
        return this.columns[columnIndex].isFull();
    }

}
