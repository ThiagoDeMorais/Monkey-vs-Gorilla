let board = ['','','',
             '','','',
             '','',''];


let turnPlayer = 0;
let playerSymbols = ['m','g'];

function handleTurn(position){
    if(board[position]!=='') {
       return;
   }

   board[position] = playerSymbols[turnPlayer];
   console.log(turnPlayer );

   if(turnPlayer !== 0){
      turnPlayer = 0;
   }else{
      turnPlayer = 1;
   }


}

const assignTurnPlayer = id => {
     turnPlayer = id;
}

