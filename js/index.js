'use strict';
var params ={
    paper: document.querySelector("#paper"),
    rock: document.querySelector("#rock"),
    scissors: document.querySelector("#scissors"),
    output: document.querySelector("#output"),
    random: Math.floor(Math.random()*3) + 1,
    score: document.querySelector("#score"),
    humanScore: 0,
    computerScore: 0,
    game: document.querySelector("#new-game"),
    question: 10,
    roundNumber: document.querySelector("#r-number"),
    //winner: Math.floor(question*50/100 +1),
    gameResult: document.querySelector("#g-result"),
    circleButton: document.querySelectorAll(".circle-btn"),
    playerPick: [], // 1-rock, 2-paper, 3-scissors
    //computerMove: 1-paper, 2-rock, 3-scissors
}

/*
//PAPER Click function ------------------------------ 

  paper.addEventListener('click', function(event){
    random = Math.floor(Math.random()*3) + 1;
    if (random==1){
      output.innerHTML='<h4>DRAW. You played PAPER, computer played PAPER.</h4>';
    }
    else if (random==2){
        output.innerHTML='<h4>YOU WON. You played PAPER, computer played ROCK.</h4>';
       humanScore ++;
       score.innerHTML= humanScore + ' - ' + computerScore;
       if (humanScore == winner) {
            gameResult.innerHTML= 'GAME OVER  - you won';
            for (var i=0; i<circleButton.length; i ++){
                circleButton[i].classList.add('circle');
            }
      }
      else {
           return; 
      } 
   }
      else {
          output.innerHTML='<h4>COMPUTER WON. You played PAPER, computer played SCISSORS.</h4>';
          computerScore ++;
          score.innerHTML= humanScore + ' - ' + computerScore;
          if (computerScore == winner) {
              gameResult.innerHTML= 'GAME OVER  - computer won';
              for (var i=0; i<circleButton.length; i ++){
                  circleButton[i].classList.add('circle');
              }
           }
           else {
              return; 
            }    
      }
  });

// ROCK Click function --------------------------------------------

 rock.addEventListener('click', function(event){
    random = Math.floor(Math.random()*3) + 1;
    if (random==1){
        output.innerHTML='<h4>COMPUTER WON. You played ROCK, computer played PAPER.</h4>';
        computerScore++;
        score.innerHTML= humanScore + ' - ' + computerScore;
        if (computerScore == winner) {
            gameResult.innerHTML= 'GAME OVER  - computer won';
            for (var i=0; i<circleButton.length; i ++){
                circleButton[i].classList.add('circle');
            }
        }
        else {
           return; 
        }  
  
    }
    else if (random==2){
        output.innerHTML='<h4>DRAW. You played ROCK, computer played ROCK</h4>';
      }
    else {
          output.innerHTML='<h4>YOU WON. You played ROCK, computer played SCISSORS</h4>';
          humanScore++;
          score.innerHTML= humanScore + ' - ' + computerScore;
          if (humanScore == winner) {
              gameResult.innerHTML= 'GAME OVER  - you won';
              for (var i=0; i< circleButton.length; i ++) {
                circleButton[i].classList.add('circle');
              }
          }
          else {
               return; 
           }      
    }
  });


// SCISSORS Click function

 scissors.addEventListener('click', function(event){
    random = Math.floor(Math.random()*3) + 1;
    if (random==1){
        output.innerHTML='<h4>YOU WON. You played SCISSORS, computer played PAPER</h4>';
        humanScore++;
        score.innerHTML= humanScore + ' - ' + computerScore;
        if (humanScore == winner) {
            gameResult.innerHTML= 'GAME OVER  - you won';
            for (var i=0; i< circleButton.length; i ++) {
                circleButton[i].classList.add('circle');
             }
          }
          else {
               return; 
           } 
      
    }
      else if (random==2){
        output.innerHTML='<h4>COMPUTER WON. You played SCISSORS, computer played ROCK</h4>';
        computerScore++;
         score.innerHTML= humanScore + ' - ' + computerScore;
          if (computerScore == winner) {
              gameResult.innerHTML= 'GAME OVER  - computer won';
              for (var i=0; i< circleButton.length; i ++) {
                circleButton[i].classList.add('circle');
              }
          }
          else {
               return; 
           }      
      }
      else {
          output.innerHTML='<h4>DRAW. You played SCISSORS, computer played SCISSORS</h4>';
      }     
  });
 */

function startGame(){
    var buttonList = document.querySelectorAll('.player-move');   
    
    for (let i=0; i < buttonList.length; i ++ ) {
        const buttonName = buttonList[i].getAttribute('data-move');

        buttonList[i].addEventListener('click', function() {
            playerMove(buttonName);
            //console.log('abc', playerMove(name));
        }    
        );

    }
} 

startGame();


var computerMove = function(){
    var random = Math.floor(Math.random()*3) + 1;
    if(random == 1) {
        return 'paper';
    } 
    else if (random == 2) {
        return 'rock';
    }
    else {
        return 'scissors';
    }   
};


function playerMove(name){
    console.log('playermove',name);
    var computerM = computerMove();
    console.log('computermove',computerMove());
    if ((name === 'rock' && computerM ==='paper')||
        (name === 'paper' && computerM==='scissors')||
        (name === 'scissors' && computerM==='rock')){
        params.computerScore++;
        params.score.innerHTML = params.humanScore + ' - ' + params.computerScore; 
        console.log('twoje punkty', params.humanScore); 
        console.log('punkty komputera', params.computerScore);
        params.output.inneHTML = 'COMPUTER WON. You played ' + name + ', computer played ' + computerMove();
        endRound(); 
    }
    else if ((name ==='rock' && computerM === 'scissors')||
            (name === 'scissors' && computerM === 'paper')||
            (name === 'paper' && computerM === 'rock')) {
            params.humanScore++;
            params.score.innerHTML = params.humanScore + ' - ' + params.computerScore;    
            params.output.inneHTML = 'YOU WON. You played ' + name + ', computer played ' + computerMove();
            endRound();
            }
    else {
            params.output.innerHTML = 'DRAW. You played ' + name + ', computer played ' + computerMove();
    }
}


/*SHOW MODAL 
function showModal() {
var allModals = document.querySelectorAll('.modal');
	    	for (var i = 0; i < allModals.length; i++) {
	          allModals[i].classList.remove('show');
	    	}
		document.querySelector('#modal-one').classList.add('show');
		document.querySelector('#modal-overlay').classList.add('show');
}
*/


//END ROUND
function endRound(){
    
    // display text  
    if (params.humanScore == params.winner) {
            params.gameResult.innerHTML = 'GAME OVER  - you won';
            for (var i=0; i< params.circleButton.length; i ++) {
            params.circleButton[i].classList.add('circle');
            showModal ();
            }
        }
    else if (params.computerScore == params.winner){
            params.gameResult.innerHTML = 'GAME OVER - computer won'; 
            for (var i=0; i< params.circleButton.length; i ++) {
            params.circleButton[i].classList.add('circle');
            showModal();
            }
        }
    else {
        return;
    }

    //hide modal 
    var hideModal = function(event){
		event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
        document.querySelector('#modal-one').classList.remove('show');
	};
	
    var closeButtons = document.querySelectorAll('.close');
    console.log('x-button-modal', closeButtons);  
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
    }
    // hide modal by click overlay

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    //stop propagation

    var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}


}

//NEW GAME

console.log(params.game);

   params.game.addEventListener('click', function(){
   resetGame();
   params.question = window.prompt('How many round would you like to play?');
   if (isNaN(params.question)|| params.question.length < 1) {
       params.roundNumber.innerHTML = 'Please, write a number';
   }
   else {
       params.winner = Math.floor(params.question*50/100 +1);
       params.roundNumber.innerHTML = 'Number of round: ' + params.question + '  -   you will be a winner if you win ' + params.winner + ' rounds';
   } 
 }); 



//RESET GAME

 function resetGame(){
   params.humanScore = 0;
   params.computerScore = 0;
   params.score.innerHTML= params.humanScore + ' - ' + params.computerScore;
   params.gameResult.innerHTML= '';
   for (var i=0; i<params.circleButton.length; i ++){
             params.circleButton[i].classList.remove('circle');
       }
 }







  
  
 
















//https://cdn.pixabay.com/photo/2012/04/25/01/30/alien-41615_960_720.png- remis
//https://cdn.pixabay.com/photo/2012/04/25/01/27/alien-41608_960_720.png - computer won
//https://cdn.pixabay.com/photo/2012/04/25/01/25/alien-41604_960_720.png - you won