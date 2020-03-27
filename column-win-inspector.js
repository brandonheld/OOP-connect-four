export class ColumnWinInspector{
    constructor(column){
        this.column = column;

    }
    inspect(){
        let value;
        let haveWinner = false;
        for (let index = 5; index > 2; index--) {
            const token1 = this.column.getTokenAt(index);
            const token2 = this.column.getTokenAt(index-1);
            const token3 = this.column.getTokenAt(index-2);
            const token4 = this.column.getTokenAt(index-3);
            
            if((token1 === token2) && (token2 === token3) && (token3 === token4)){
                value = token1;
                haveWinner = true;
            }else{
                value = 0;
            }
            if(haveWinner) return value;
            
        }

       
    }
}




