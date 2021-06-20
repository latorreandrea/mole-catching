//create an event listener that start game by pressing button StartGame!
document.getElementsByClassName("start")[0].addEventListener('click', startGame);

let num = Math.floor(Math.random()*3)+1;            
let showA = document.getElementsByTagName('img')[0];
let showS = document.getElementsByTagName('img')[1];
let showD = document.getElementsByTagName('img')[2];



//set a start game function that play initial animation and shows game area
//create a function that stop the game  when attempts are equal to 0 
function startGame(event) {
    document.getElementById('game-area').style.display = "block";
    document.getElementById('combo').style.display = "block";
    document.getElementById('loading').style.display = "none";
    document.getElementById("score").innerText = 0;
    document.getElementById('attempt').innerText = 3;
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

// create a function that hide mole 
function hideMole() {
    
    if (num == 1){
        showA.src = "./assets/images/terreno3.svg";                
    }else if(num == 2){
        showS.src = "./assets/images/terreno3.svg";
    }else if(num == 3){
        showD.src = "./assets/images/terreno3.svg";
    }

}
//create a function that increase combo

let score = document.getElementById('score').innerText;

function increaseScore() {    
    document.getElementById("score").innerText = ++score;
}

//create a function that decrese the attempts
function decreseAttempts() {
    let attempt = document.getElementById('attempt').innerText;
    document.getElementById('attempt').innerText = --attempt;
    if(document.getElementById('attempt').innerText == '0'){
        gameOver();
    }
}

//create a function that confirm we hit the mole or not

showA.addEventListener('click', countPointsA);
showS.addEventListener('click', countPointsS);
showD.addEventListener('click', countPointsD);

function countPointsA(){
    (num == 1) ? increaseScore() : decreseAttempts();    
}

function countPointsS(){
    (num == 2)? increaseScore() : decreseAttempts();
    }

function countPointsD(){
    (num == 3) ? increaseScore() : decreseAttempts();
    }


// create a game-over function

function gameOver() {
    alert('MOLES!!! MOLES EVERYWHERE!!!');
    restart();
}

function restart() {
    document.getElementById('game-area').style.display = "none";
    document.getElementById('combo').style.display = "none";
    document.getElementById('loading').style.display = "block";

}

//create a var to set the Interval for showMole and hideMole functions

let showTime = 1500 - score;
let hideTime = 1400 - score;
console.log(showTime);
console.log(hideTime);
