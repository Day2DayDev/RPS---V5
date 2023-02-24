
function backgroundRdm1() {
    document.querySelector('.bodyBg').style.backgroundImage = "url(images/./mainbg1.png)";
}
function backgroundRdm2(){
    let random= Math.floor(Math.random() * 8) + 0;
    let bigSize = ["url(images/./belrogbg.jpg)",
                    "url(images/./dalsimbg.jpg",
                    "url(images/./vegabg.jpg)",
                    "url(images/./sagatbg.jpg)",
                    "url(images/./carbg.jpg)",
                    "url(images/./kenbg.jpg)",
                    "url(images/./ehondabg.jpg)",
                    "url(images/./ryubg.jpg)"];
    document.querySelector('.bodyBg').style.backgroundImage=bigSize[random];
  }


//jukebox
const audioArr = [
    new Audio('./audio/Theme-balrog.mp3'),
    new Audio('./audio/Theme-bison.mp3'),
    new Audio('./audio/Theme-blanka.mp3'),
    new Audio('./audio/Theme-chunli.mp3'),
    new Audio('./audio/Theme-dalsim.mp3'),
    new Audio('./audio/Theme-ehonda.mp3')
];

function playRandomAudio(){
    //Get a random index of the sound to be played
    const randomAudioIndex = Math.floor(Math.random() * (audioArr.length+1));
    //Play the selected sound
    audioArr[randomAudioIndex].play();  
}
function pauseRandomAudio(){
    audioArr.forEach(i=>i.pause());//this took me 3 hours to figure out...
}


   



 let timeleft = 60;
  const downloadTimer = setInterval(function(){
    
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("cntDown").innerHTML = "∞";
    } 
    else {
      document.getElementById("cntDown").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);


//setting up global variables
//these scores and rounds will go up, incrementally by 1 with the i++ method
const game = () => {
    let playerScore = 0;
    // I made the error of making these variavles Const - stumped me for hours!!
    let computerScore = 0;
    let moves = 0;


const playGame = () => {
    //we need to assign a function to each element(Rock,Paper,Scissors) button
    const rockBtn = document.querySelector('.rockEl');
    const paperBtn = document.querySelector('.paperEl');
    const scissorBtn = document.querySelector('.scissorEl');
    //we now need to create an array table for both the players/computers choices
    const  playerOptions = [rockBtn,paperBtn,scissorBtn];
    const pcOptions = ['rock','paper', 'scissors'];


//we are using for each to apply "addEventListener - click" to each element in the array.
playerOptions.forEach(option => {
    option.addEventListener('click', function(){


//now we need to be able populate the "movesLeft" text. 
//we can utilize "moves" in the global variables to be subtracted from the max moves, ie - 10 max moves.
//consts first assign a varaibel for "movesLeft".

    const movesLeft = document.querySelector('.movesLeft');
    moves++; //this will increase the global variable to +1 for every move.
    movesLeft.innerText = `Moves Left:  ${10-moves}`;


//we'll now be creating a random function for the computers choice. We can then call this function to be applied to the computers choice.
    const randomNumber = Math.floor(Math.random()*3);
    const pcChoice = pcOptions[randomNumber];//pcChoice is a newly assigned variable. "randomNumber" is being applied to "pcOptions" array. 

//we need to create a varaible which will capture the player/computers choices. This will then be called/reassigned in the if/else section. 

    winner(this.innerText, pcChoice)//will add notes about this one later - in my notebook.

    if (moves == 10){
        gameOver(playerOptions,movesLeft); //NEED TO REVISIT THIS TO MAKE SENSE OUT OF IT
      }
    })
  })
}

//CREATING GLOBAL VARIABLES AND FUNCTIONS FOR ACTUAL GAME
const winner = (player, computer) => {; //will add notes about this one after.
    const roundResult = document.querySelector('.roundResult');
    const playerScoreBoard = document.querySelector('.p-score');
    const computerScoreBoard = document.querySelector('.pc-score');
    player = player.toLowerCase();
    computer = computer.toLowerCase();

if (player == computer){
    roundResult.textContent = 'Round Results:  Tie Game';
    roundResult.style.color = "white";
}
    else if(player == 'rock'){
        if(computer == 'paper'){
        roundResult.textContent = 'Round Results: Computer Wins';
        roundResult.style.color = "orange";
        computerScore++;
        computerScoreBoard.textContent = 'Computers Score: ' + computerScore; 
        computerScoreBoard.style.transform = `scale(1.1)`
        computerScoreBoard.style.transition = `all 1s ease`  
        computerScoreBoard.style.color = "orange"
            }else{
                roundResult.textContent = 'Round Results: Player Wins';
                playerScore++;
                playerScoreBoard.textContent = "Player One Score: " + playerScore;
                playerScoreBoard.style.transform = `scale(1.1)`
                playerScoreBoard.style.transition = `all 1s ease`
                playerScoreBoard.style.color = "paleturquoise"
                roundResult.style.color = "paleturquoise";
            }
        }

    else if(player == 'paper'){
        if(computer == 'scissors'){
        roundResult.textContent = 'Round Results: Computer Wins';
        roundResult.style.color = "orange";

        computerScore++;
        computerScoreBoard.textContent = 'Computers Score: ' + computerScore;   
        computerScoreBoard.style.transform = `scale(1.1)`
        computerScoreBoard.style.transition = `all 1s ease` 
        computerScoreBoard.style.color = "orange"
            }else{
                roundResult.textContent = 'Round Results: Player Wins';
                playerScore++;
                playerScoreBoard.textContent = "Player One Score: " + playerScore;
                playerScoreBoard.style.transform = `scale(1.1)`
                playerScoreBoard.style.transition = `all 1s ease`
                playerScoreBoard.style.color = "paleturquoise"
                roundResult.style.color = "paleturquoise";
            }
        }

    else if(player == 'scissors'){
        if(computer == 'rock'){
        roundResult.textContent = 'Round Results: Computer Wins';
        roundResult.style.color = "orange";
        computerScore++;
        computerScoreBoard.textContent = 'Computers Score: ' + computerScore;  
        computerScoreBoard.style.transform = `scale(1.1)`
        computerScoreBoard.style.transition = `all 1s ease` 
        computerScoreBoard.style.color = "orange"
            }else{
                roundResult.textContent =  'Round Results: Player Wins';
                playerScore++;
                playerScoreBoard.textContent = "Player One Score:" + playerScore;
                playerScoreBoard.style.transform = `scale(1.1)`
                playerScoreBoard.style.transition = `all 1s ease`
                playerScoreBoard.style.color = "paleturquoise"
                roundResult.style.color = "paleturquoise";
   

                
                }
            }
        }
//adding sounds to buttons

document.querySelector('.chunliSound').addEventListener("click",function(){
    document.getElementById("myAudio").play();
  } );

    document.querySelector('.dalsimSound').addEventListener("click",function(){
    document.getElementById("myAudio2").play();
  } );

        document.querySelector('.ryuSound').addEventListener("click",function(){
        document.getElementById("myAudio3").play();
  } );
  
  document.querySelector('.mainBG').addEventListener("click",function(){
    document.getElementById("myAudio5").play();
  } );

  document.querySelector('.altBG').addEventListener("click",function(){
    document.getElementById("myAudio6").play();
  } );

  document.querySelector('.reload').addEventListener("click",function(){
    document.getElementById("myAudio7").play();
  } );




//We will now assign the functions and viaribles for when the game ends

    const gameOver = (playerOptions, movesLeft) => { //need to revisit this
        const chooseMove=document.querySelector('.move');
        const reloadBtn=document.querySelector('.reload');
        const result=document.querySelector('.roundResult');
        let lose = new Audio('/audio/lose.mp3');
        let lose2 = new Audio('/audio/lose2.mp3');
        let win = new Audio('/audio/win.mp3');
        let tie = new Audio('/audio/tie.mp3');
        

//We will now change the text "Choose your Move" within the '.move' element to "Game Over"
        chooseMove.innerText = "GAME OVER";

//Now it is time to create the if/else statements to declare the winner. The winn will be declared in the .roundResult element which currently states "ound Results:".

        

        if(playerScore > computerScore){
            clearInterval(downloadTimer);
            document.getElementById("cntDown").innerHTML = "∞";
           
            result.innerText = "Game Results: Player has won"
            result.style.color = "paleturquoise";
            win.play(); 
            movesLeft.style.display = 'none'; //this removes the oppotunity to keep playing, removing the "movesLeft" element.
            rockBtn.style.display = 'none'; 
            
            
        }
        
        else if (playerScore < computerScore){
            clearInterval(downloadTimer);
            document.getElementById("cntDown").innerHTML  = "∞";
            result.innerText = "Game Results: Computer has won";
            result.style.color = "orange";
            lose.play();  
            lose2.play();
            
        } 

        else {
            clearInterval(downloadTimer); 
            document.getElementById("cntDown").innerHTML = "∞";
            result.innerText = "Game Results: It is a tie game, try again?";
            result.style.color = "white";
            tie.play(); 
            
        }

//Now we need to trigger the buttons to restart the game.
        reloadBtn.innerText= "Insert Coin (1)";
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
            
        })
     }


const masterReload=document.querySelector('.masterreload');
    masterReload.addEventListener('click',() => {
    window.location.reload();  

    document.querySelector('.masterreload').addEventListener("click",function(){
        document.getElementById("myAudio4").play();
    } );
       //can't get this audo to work on purple reset button
})




//now to re-trigger or call the game, and the game function

         playGame();
    }

    game();



    //css styling

