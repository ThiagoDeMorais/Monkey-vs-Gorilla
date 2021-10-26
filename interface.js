const iconsOfPlayers = document.querySelectorAll('.image');
const squares = document.querySelectorAll('.square');

function refreshSquare(square){
    const newClass = board[square.id]
    square.classList.add(newClass);
}

squares.forEach(square =>{
    square.addEventListener('click', event => {
        const position = event.target.id;
        handleTurn(position);
        refreshSquare(event.target)
        console.log(board);
    })
})

function removePopUpPicker(){
    const popup = document.querySelector('.popup-wrapper');
    popup.style.display = 'none';
}

 const getTurnPlayer =  event => {
     if(event.target.id === 'monkey'){
        assignTurnPlayer(0);
     }else{
        assignTurnPlayer(1);
     }
    console.log(turnPlayer);
    removePopUpPicker();
}


iconsOfPlayers.forEach(iconPlayer =>{
    iconPlayer.addEventListener('click', getTurnPlayer)
})
