// NUMBER GUESSING GAME

const minNum = 1;
const maxNum=100; 
const answer=Math.floor(Math.random()*(maxNum - minNum + 1))+minNum;
let attempts=0;
let guess;
let running =true;

while (running){
    guess=window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess=Number(guess);
    if (answer === guess){
        alert(`Correct answer the number is ${answer} \n You have ${attempts} attempts `);
        running=false;
    }
    else if (guess >= maxNum || guess <= minNum ){
        alert(`You Shold Enter number between ${minNum} - ${maxNum}`);
    }
    else if (guess <= maxNum && guess >= minNum){
        massg=guess<=answer ?`It's bigger than ${guess}`:`It's smaller than ${guess}`;
        alert(massg);
    }   
    else if (typeof(guess) !=='number' ){
        alert(`You haven't entered number , please Enter Number between ${minNum} - ${maxNum} `);
    }
    else{
        
        alert(`Attempts number ${attempts} , Please Enter agian`)
    }
    attempts++;
}
    

