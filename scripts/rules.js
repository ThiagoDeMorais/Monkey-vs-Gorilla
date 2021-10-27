let board = ['','','',
             '','','',
             '','',''];
const victorySceneries = [[0,1,2],[3,4,5],[6,7,8],
                          [0,3,6],[1,4,7],[2,5,8],
                          [0,4,8],[2,4,6]];
let turnPlayer = 0;
let playerSymbols = ['m','g'];
let gameOver = 0;
let winningPlayer = '';

function handleTurn(position){
    if(board[position]!=='') {
       return;
   }

   board[position] = playerSymbols[turnPlayer];
   console.log(turnPlayer );

   checkVictory();//Vitória checada antes da troca de turno

   if(turnPlayer !== 0){
      turnPlayer = 0;
   }else{
      turnPlayer = 1;
   } 
}

const assignTurnPlayer = id => {
     turnPlayer = id;
}

function checkVictory(){

      const draw = board.some(element => element === '');
      console.log(draw);
      for(let i = 0; i<victorySceneries.length; i++){
         const firstIndex =  victorySceneries[i][0];
         const secondIndex =  victorySceneries[i][1];
         const thirdIndex =  victorySceneries[i][2];
   
         const positionsIsEqual = (board[firstIndex] === board[secondIndex]) 
                                  && (board[firstIndex]) === board[thirdIndex];
   
         if(board[firstIndex] !== '' && positionsIsEqual ){
            winningPlayer = playerSymbols[turnPlayer];
            console.log("Ganhou");
            gameOver = 1;
            break;
         }else if(!draw){
            winningPlayer = '';
            console.log("Empate");
            gameOver = 1; 
         }  
                 
      }
} 