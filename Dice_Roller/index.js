function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceImage=document.getElementById("diceImage");
    const diceResult=document.getElementById("diceResult");
    const values=[];
    const images=[];
    for(let i=0; i<numOfDice;i++){
        const value =Math.floor( Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_roller/${value}.png" alt="Dice ${value}">`)
    }
    diceResult.textContent=`dice: ${values.join(', ')}`;
    diceImage.innerHTML =images;
}
