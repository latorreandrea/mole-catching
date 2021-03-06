//create an event listener that start game by pressing button StartGame!

let num = 0;            
let showA = document.getElementsByTagName('img')[1];
let showS = document.getElementsByTagName('img')[2];
let showD = document.getElementsByTagName('img')[3];
let isAlive = false;
let timeInterval = 1500;
let timeExpose = 1000;
let moleTimeOut = null;
let music = document.getElementById("music");
document.getElementsByClassName("start")[1].addEventListener('click', startGame);
let time = null;
//set a start game function that shows game area
 
function startGame(event) {
    isAlive = true;
    document.getElementById('game-area').style.display = "block";
    document.getElementById('combo').style.display = "block";
    document.getElementById('loading').style.display = "none";
    document.getElementById('score').innerText = 0;    
    document.getElementById('attempt').innerText = 3;
    document.getElementById('time-left').innerText = 120;
    music.play();    
    setTimeout(showMole, (timeInterval - score*10));
    time = setInterval(countDown, 1000);
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
    setTimeout(hideMole, (timeExpose - score*10));
    if (isAlive){
        moleTimeOut = setTimeout(showMole, (timeInterval - score*10));
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
    (num == 2) ? increaseScore() : decreseAttempts();
}

function countPointsD(){
    (num == 3) ? increaseScore() : decreseAttempts();
}

//create a shortcut to use keyboard key to play
document.addEventListener('keydown', function (event) {
    if(isAlive){
        if(event.key === 'a'){
            countPointsA();
        } else if (event.key === 's'){
            countPointsS();
        } else if (event.key === 'd'){
            countPointsD();
        }
    }
})

// create a game-over function 

function gameOver() {
    isAlive = false;
    document.getElementById('game-area').style.display = "none";
    document.getElementById('game-over').style.display = "block";
    document.getElementsByTagName("button")[3].addEventListener('click', restart);
    music.pause();
    clearInterval(time);
}

function restart() {    
    document.getElementById('game-area').style.display = "none";
    document.getElementById('combo').style.display = "none";
    document.getElementById('loading').style.display = "block";
    document.getElementsByClassName('tutorial')[0].style.display = "none";
    document.getElementById('game-over').style.display = "none";
    document.getElementsByTagName('h2')[0].style.display = "block";    
    clearTimeout(moleTimeOut);
    moleTimeOut = null;    
    score = 0;
    timeInterval = 1500;
    timeExpose = 1000;
    timeLeft = 120;
    
}

//show how to play function

document.getElementsByClassName("start")[0].addEventListener('click', tutorial);

function tutorial(event) {
    document.getElementsByTagName('h2')[0].style.display = "none";
    document.getElementsByClassName('tutorial')[0].style.display = "block";
}


//rate our game function

document.getElementsByClassName('start')[2].addEventListener('click',  rateGame)

function rateGame(){
    document.getElementById('feed-back').style.display = "flex";
    document.getElementById('game-area').style.display = "none";
    document.getElementById('combo').style.display = "none";
    document.getElementById('loading').style.display = "none";
}

let star5 = document.getElementById('rate-5');
let star4 = document.getElementById('rate-4');
let star3 = document.getElementById('rate-3');
let star2 = document.getElementById('rate-2');
let star1 = document.getElementById('rate-1');

star5.addEventListener('click',changeHeader5);
star4.addEventListener('click',changeHeader4);
star3.addEventListener('click',changeHeader3);
star2.addEventListener('click',changeHeader2);
star1.addEventListener('click',changeHeader1);

function changeHeader5(){
    document.getElementById('opinion').innerText = "I just love it!";
}

function changeHeader4(){
    document.getElementById('opinion').innerText = "I just like it!";
}

function changeHeader3(){
    document.getElementById('opinion').innerText = "It is awesome!";
}

function changeHeader2(){
    document.getElementById('opinion').innerText = "I don't like it!";
}

function changeHeader1(){
    document.getElementById('opinion').innerText = "I just hate it!";
}

//create a count down to the game over
let timeLeft = document.getElementById('time-left').innerText;

function countDown(){
    if (timeLeft == "0"){
        gameOver();
    }else{
        document.getElementById('time-left').innerText = --timeLeft;
    }    
}    
