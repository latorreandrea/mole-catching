//create an event listener that start game by pressing button StartGame!
document.getElementsByClassName("start")[0].addEventListener('click', startGame);

//set a start game function that play initial animation and shows game area

function startGame(event) {
    document.getElementById('game-area').style.display = "block";
    document.getElementById('combo').style.display = "block";
    document.getElementById('loading').style.display = "none";
}

//create a function that randomly showing a mole
function showMole() {

let num = Math.floor(Math.random()*3)+1;
 

if (num == 1){
        document.getElementsByTagName('img')[0].src = "./assets/images/talpaesce.svg";        
    }else if(num == 2){
        document.getElementsByTagName('img')[1].src = "./assets/images/talpaesce.svg";
    }else if(num == 3){
        document.getElementsByTagName('img')[2].src = "./assets/images/talpaesce.svg";
    }
}
setInterval(() => {
    showMole();
}, 2000)
// create a function that hide mole after some time

//create a function that confirm we hit the mole


//create a function that increase combo

//create a function that decrese the attempts and stop the game if we finish them