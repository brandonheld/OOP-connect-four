import {Column} from "./column.js"

export class RowWinInspector{
    constructor(columns){
        this.columns = columns;
    }
    inspect(){
        console.log(this.columns)
        for(let i = 0; i < 6; i++) {
          const token1 = this.columns[0].getTokenAt(i);
          const token2 = this.columns[1].getTokenAt(i); 
          const token3 = this.columns[2].getTokenAt(i); 
          const token4 = this.columns[3].getTokenAt(i);   
          console.log(i)
          if(i === 5) {
              console.log(token1, token2, token3, token4)
          }  
          
            
            if((token1 === token2) && (token2 === token3) && (token3 === token4) && (token1 !== null) && (token1 !== undefined)){
                console.log(`Token1: ${token1}`)
                return token1;
                
            }   
            
        }
        return 0;
    }
}