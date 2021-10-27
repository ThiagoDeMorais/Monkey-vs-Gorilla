const iconsOfPlayers = document.querySelectorAll('.image');
const squares = document.querySelectorAll('.square');
const popup = document.querySelector('.popup-wrapper');
const body = document.querySelector('body');

// End Elements++
const endWrapperPopup = document.createElement('p');
const Popup = document.createElement('p');
const imageContainer = document.createElement('p');
const reinitButton = document.createElement('button');
// End Elements--

// End Functions++
function removeClassFromSquares(){
    squares.forEach(square => {
        square.setAttribute('class','square');
    })
}

function reinicialization(){
   board = ['','','','','','','','',''];
   turnPlayer = 0;
   playerSymbols = ['m','g'];
   gameOver = 0;
   winningPlayer = '';

   endWrapperPopup.remove();
   popup.style.display = 'block';
   removeClassFromSquares();

}


function initializeEndElements(){
    endWrapperPopup.classList.add('popup-wrapper');
    Popup.classList.add('popup');
    imageContainer.classList.add('greatContainer');
    reinitButton.textContent = "Reiniciar"

    if(winningPlayer === 'm'){
      imageContainer.innerHTML = `<img ass="image" src="./images/MonkeyCrown.png">`;
    }else if(winningPlayer === 'g'){
      imageContainer.innerHTML = `<img ass="image" src="./images/GorillaCrown.png">`
    }else{
        imageContainer.innerHTML = `<img ass="image" src="./images/Empate.png">`

    }
    Popup.append(imageContainer);
    Popup.append(reinitButton);
    endWrapperPopup.append(Popup);
    body.append(endWrapperPopup);

    reinitButton.addEventListener('click',reinicialization);
  
}

function informsVictory(gameStatus){
    if(gameStatus){
        initializeEndElements()
    }
}
// End Functions++


function refreshSquare(square){
    const newClass = board[square.id]
    square.classList.add(newClass);
    informsVictory (gameOver);
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
