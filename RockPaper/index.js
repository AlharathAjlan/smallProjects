const choices=["rock","paper","scissors"];
let playerChoices=document.querySelectorAll(".threeMoves");   
const player=document.getElementById('player');
const computer=document.getElementById('computer');
const result=document.getElementById('result');
const playerScore=document.getElementById('playerScore');
const computerScore=document.getElementById('computerScore');
let computerGet=0
let playerGet=0
playerChoices.forEach(playerchoice=>{
    playerchoice.addEventListener('click',event=>{
       let computerChoices=choices[Math.floor(Math.random()*(choices.length))];
        computer.textContent=" Computer : " + computerChoices;
        player.textContent ="Player : "+ (playerchoice.id.startsWith("rock")?"rock":playerchoice.id.startsWith("paper")?"paper":playerchoice.id.startsWith("scissors")?"scissors":"");
        if(playerchoice.id.startsWith(computerChoices)){
            result.style.color="black";
            result.textContent="tie";
        }//
        else if(
             (playerchoice.id.startsWith("rock")&&(computerChoices==="scissors"))
             ||(playerchoice.id.startsWith("paper")&&(computerChoices==="rock"))
             ||(playerchoice.id.startsWith("scissors")&&(computerChoices==="paper"))
            ){
             playerGet++;
             result.style.color="green";
             result.textContent="You Won! 🥳";
        }//
        else{
            computerGet++;
            result.style.color="red";
            result.textContent="You lost 😞😭";
        }
        playerScore.textContent=`Player Score : ${playerGet}`;
             computerScore.textContent=`Computer Score : ${computerGet}`;
    });
});