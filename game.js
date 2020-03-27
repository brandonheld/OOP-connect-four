import { Column } from "./column.js"
import { ColumnWinInspector } from "./column-win-inspector.js"
import {RowWinInspector} from "./row-win-inspector.js"
import {DiagonalWinInspector} from "./diagonal-win-inspector.js"

export class Game {
    
    constructor(playerOneName, playerTwoName){
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
        this.winnerNumber = 0;
    }
    
    getName(){
        if(this.winnerNumber === 3){
            return `${this.playerOneName} ties ${this.playerTwoName}`;
        }else  if(this.winnerNumber === 1){
            return `${this.playerOneName} Wins!`;
        }else  if(this.winnerNumber === 2){
            return `${this.playerTwoName} Wins!`;
        }
        return `${this.playerOneName} vs ${this.playerTwoName}`;
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    checkForTie(){
        if(this.columns.every(ele => ele.isFull())) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin(){
        if(this.winnerNumber !== 0)return;

        for(let i = 0; i < 7; i++){
            let columnChecked = this.columns[i];
            let inspector = new ColumnWinInspector(columnChecked);
            let value = inspector.inspect();

            if(value === 1 || value === 2){
                this.winnerNumber = value;
                break;
            }


        } 
        
       
    }

    checkForDiagonalWin() {
        if(this.winnerNumber !==0) return;

        for(let i = 0; i < 4; i++) {
            const group = this.columns.slice(i, i + 4)
            const inspector = new DiagonalWinInspector(group);
            let value = inspector.inspect();
            
            if(value === 1 || value === 2){
                this.winnerNumber = value;
                break;
            }
        }


    }

    checkForRowWin(){
        if(this.winnerNumber !==0) return;

        for(let i = 0; i < 4; i++) {
            const group = this.columns.slice(i, i + 4)
            const inspector = new RowWinInspector(group);
            let value = inspector.inspect();
            
            if(value === 1 || value === 2){
                this.winnerNumber = value;
                break;
            }
        }
    }

    playInColumn(columnIndex) {
       this.columns[columnIndex].add(this.currentPlayer);
       
        if(this.currentPlayer === 1) {
            this.currentPlayer = 2;
            
        } else {
            this.currentPlayer = 1;
            
        }
        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();

    }

    isColumnFull(columnIndex) {
        if(this.winnerNumber === 1 || this.winnerNumber === 2){
            return true;
        }
        return this.columns[columnIndex].isFull();
    }
    
    

}
