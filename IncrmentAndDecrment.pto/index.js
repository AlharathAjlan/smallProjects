const decrease=document.getElementById("decrease");
const increase=
document.getElementById("increase");
const reset =document.getElementById("reset");
const hnum=document.getElementById("num");
let count=0;
increase.onclick=function(){
    hnum.textContent=++count;
}
decrease.onclick=function(){
    hnum.textContent=--count;
}
reset.onclick=function(){
    hnum.textContent=(count=0);
}