//create an event listener that start game by pressing button StartGame!
document.getElementsByClassName("start")[0].addEventListener('click', startGame);

let num = Math.floor(Math.random()*3)+1;            
let showA = document.getElementsByTagName('img')[0];
let showS = document.getElementsByTagName('img')[1];
let showD = document.getElementsByTagName('img')[2];

//set a start game function that play initial animation and shows game area

function startGame(event) {
    document.getElementById('game-area').style.display = "block";
    document.getElementById('combo').style.display = "block";
    document.getElementById('loading').style.display = "none";
    setInterval(() => {
    showMole();
}, 1500)

}

//create a function that randomly showing a mole

function showMole() {
    num = Math.floor(Math.random()*3)+1;        
if (num == 1){
        showA.src = "./assets/images/talpaesce.svg"; 
        setTimeout("hideMole()", 1000);               
    }else if(num == 2){
        showS.src = "./assets/images/talpaesce.svg";
        setTimeout("hideMole()", 1000);
    }else if(num == 3){
        showD.src = "./assets/images/talpaesce.svg";
        setTimeout("hideMole()", 1000);
    }
}

function hideMole() {
    
    if (num == 1){
        showA.src = "./assets/images/terreno3.svg";                
    }else if(num == 2){
        showS.src = "./assets/images/terreno3.svg";
    }else if(num == 3){
        showD.src = "./assets/images/terreno3.svg";
    }

}
// create a function that hide mole after some time


//create a function that confirm we hit the mole


//create a function that increase combo

//create a function that decrese the attempts and stop the game if we finish them