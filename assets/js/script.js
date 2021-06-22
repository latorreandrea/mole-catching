
//create an event listener that start game by pressing button StartGame!


let num = 0;            
let showA = document.getElementsByTagName('img')[0];
let showS = document.getElementsByTagName('img')[1];
let showD = document.getElementsByTagName('img')[2];
let isAlive = false;
let timeInterval = 1500;
let timeExpose = 1000;
let moleTimeOut = null;
let loadingMusic = document.getElementById("loading-music");

document.getElementsByClassName("start")[0].addEventListener('click', startGame);

//set a start game function that play initial animation and shows game area
//create a function that stop the game  when attempts are equal to 0 
function startGame(event) {
    isAlive = true;
    document.getElementById('game-area').style.display = "block";
    document.getElementById('combo').style.display = "block";
    document.getElementById('loading').style.display = "none";
    document.getElementById("score").innerText = 0;    
    document.getElementById('attempt').innerText = 3;
    pauseAudio();
    setTimeout(showMole, (timeInterval - score*2));

}
function playAudio() {
  loadingMusic.play();
}

function pauseAudio() {
  loadingMusic.pause();
}


//create a function that randomly showing a mole

function showMole() {
    num = Math.floor(Math.random()*3)+1;        
if (num == 1){
        showA.src = "./assets/images/talpaesce.svg";
    }else if(num == 2){
        showS.src = "./assets/images/talpaesce.svg";
    }else if(num == 3){
        showD.src = "./assets/images/talpaesce.svg";
    }
    setTimeout(hideMole, (timeExpose - score*2));
    if (isAlive){
        moleTimeOut = setTimeout(showMole, (timeInterval - score*2));
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

//create a visu

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
//create a shortcut to use keyboard key to play
document.addEventListener('keydown', function (event) {
    if(event.key === 'a'){
        countPointsA();
    } else if (event.key === 's'){
        countPointsS();
    } else if (event.key === 'd'){
        countPointsD();
    }
})

// create a game-over function

function gameOver() {
    isAlive = false;
    alert('MOLES!!! MOLES EVERYWHERE!!!');
    restart();
}

function restart() {    
    document.getElementById('game-area').style.display = "none";
    document.getElementById('combo').style.display = "none";
    document.getElementById('loading').style.display = "block";
    playAudio();    
    clearTimeout(moleTimeOut);
    moleTimeOut = null;
    score = 0;
    timeInterval = 1500;
    timeExpose = 1000;
}