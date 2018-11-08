'use strict'

var paper = document.querySelector('#paper');
var rock = document.querySelector('#rock');
var scissors = document.querySelector('#scissors');
var output = document.querySelector('#output');
var random = Math.floor(Math.random()*3) + 1;
var score = document.querySelector('#score');
var humanScore = 0;
var computerScore = 0;
var game = document.querySelector('#new-game');
var question = 10;
var roundNumber = document.querySelector('#r-number');
var winner = Math.floor(question*50/100 +1);
var gameResult = document.querySelector('#g-result');
var isFinished = false;
var circleButton = document.querySelectorAll('.circle-btn')

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


//NEW GAME

game.addEventListener('click', function(){
  resetGame()
  question = window.prompt('How many round would you like to play?');
  if (isNaN(question)|| question.length < 1) {
      roundNumber.innerHTML='Please, write a number'
  }
  else {
      winner = Math.floor(question*50/100 +1);
      roundNumber.innerHTML = 'Number of round: ' + question + '  -   you will be a winner if you win ' + winner + ' rounds';
  };  
}); 

//RESET GAME

function resetGame(){
  humanScore = 0
  computerScore = 0
  score.innerHTML= humanScore + ' - ' + computerScore;
  gameResult.innerHTML= '';
  for (var i=0; i<circleButton.length; i ++){
            circleButton[i].classList.remove('circle');
      }
}; 







  
  
 
















//https://cdn.pixabay.com/photo/2012/04/25/01/30/alien-41615_960_720.png- remis
//https://cdn.pixabay.com/photo/2012/04/25/01/27/alien-41608_960_720.png - computer won
//https://cdn.pixabay.com/photo/2012/04/25/01/25/alien-41604_960_720.png - you won