'use strict';

var roundScore, activePlayer, globalScore, gamePlaying;

// Initialize Game
initGame();

// Button Roll
document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
    // Generate Random numbers
        var randNo = Math.floor(Math.random()*6)+1;

    // Show dice
        var diceDOM = document.querySelector('.dice'); 
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + randNo + '.png';

    // Update Current
        if(randNo !== 1){
            roundScore += randNo;
            document.getElementById('current--' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
    }
});

// Creating Hold Function
document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        // Setting Global Score
        globalScore[activePlayer] += roundScore;

        // Updating Global Score
        document.getElementById('score--' + activePlayer).textContent = globalScore[activePlayer];

        // Showing Winner
        if(globalScore[activePlayer] >= 20){
            gamePlaying = false;
            document.getElementById('name--' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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
    
    document.querySelector('.dice').style.display = 'none';
    
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
    document.querySelector('.dice').style.display = 'none';
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
