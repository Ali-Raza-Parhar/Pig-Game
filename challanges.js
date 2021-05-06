'use strict';

var roundScore, activePlayer, globalScore, gamePlaying, prevScore;

// Initialize Game
initGame();

// Button Roll
document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
    // Generate Random numbers
        var randNo = Math.floor(Math.random()*6)+1;
        var randNo1 = Math.floor(Math.random()*6)+1;

    // Show dice
        var diceDOM = document.querySelector('.dice--0'); 
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + randNo + '.png';
        var diceDOM1 = document.querySelector('.dice--1'); 
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + randNo1 + '.png';
    // Same Dice Six
        // if(randNo == 1 || randNo1 == 1){
        //     // Set scores to zero
        //     prevScore = 0;
        //     globalScore[activePlayer] = 0;
        //     document.getElementById('score--' + activePlayer).textContent = '0';
        //     nextPlayer();
        // }
       // Update Current
        if(randNo !== 1 && randNo1 !== 1){
            roundScore += (randNo+randNo1);
            document.getElementById('current--' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();   
        }
        prevScore = randNo;
    }
});

// Creating Hold Function
document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        // Setting Global Score
        globalScore[activePlayer] += roundScore;

        // Updating Global Score
        document.getElementById('score--' + activePlayer).textContent = globalScore[activePlayer];
        
        // Accept input from input field
        var input = document.querySelector('.final-score').value;
        var finalScore;

        if(input) {
            finalScore = input;
        }
        else {
            finalScore = 100;
        }

        // Showing Winner
        if(globalScore[activePlayer] >= finalScore){
            gamePlaying = false;
            document.getElementById('name--' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice--0').style.display = 'none';
            document.querySelector('.dice--1').style.display = 'none';
            document.getElementById('name--' + activePlayer).classList.add('player--winner');
        }
        else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; 

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    document.querySelector('.dice--0').style.display = 'none';
    document.querySelector('.dice--1').style.display = 'none';
    
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');


};

// New Game 
document.querySelector('.btn--new').addEventListener('click', initGame);

function initGame(){    
    globalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.dice--0').style.display = 'none';
    document.querySelector('.dice--1').style.display = 'none';
    document.getElementById('name--0').classList.remove('player--winner');
    document.getElementById('name--1').classList.remove('player--winner');
    document.getElementById('score--0').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}











