const textBox =document.getElementById('myNumber');
const toFahr =document.getElementById('toFahr');
const toCels =document.getElementById('toCels');
const result =document.getElementById('result');
document.getSelection('dev').syles='hight:300px'
function convert(){
   if (toFahr.checked){
       let num=textBox.textContent;
        num=Number(num);
    //     result.value=(num * 1.8) + 32;
    result.textContent = `${(num * 1.8 + 32).toFixed(2)} °F`;
    document.querySelector('#dev').style.height = '300px';

    }else if (toCels.checked) {
        let num=textBox.textContent;
         num=Number(num);
        result.textContent = `${((num - 32) / 1.8).toFixed(2)} °C`;
        document.querySelector('div').style.height = '300px';
    }
    else{
    //     result="";
    //     console.log(num);
    //     result.value=(num - 32) / 1.8;
    }
}