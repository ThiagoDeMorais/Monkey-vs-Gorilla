const iconsOfPlayers = document.querySelectorAll('.image');

function removePopUpPicker(){
    const popup = document.querySelector('.popup-wrapper');
    popup.style.display = 'none';
}

 const getTurnPlayer =  event => {
    assignTurnPlayer(event.target.id);
    console.log(turnPlayer);
    removePopUpPicker();
}


iconsOfPlayers.forEach(imagePlayer =>{
    imagePlayer.addEventListener('click', getTurnPlayer)
})
