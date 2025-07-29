
const display=document.getElementById('display');
function appanValue(entered){
    display.value += entered;
    
}

function clearDisplay(){
    display.value="";
     console.log(`value:${display.value}`);

}

function result(){
    try{
        display.value=eval(display.value)
    }catch(error){
        display.value='Error';
    }
}