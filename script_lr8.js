var userNumber;
var compNumber;
var userScore=0;
var compScore=0;
let user_name = prompt('Enter your name');
var win="You win!";
var fail="You failed!";
let closew;
var score = " score";
var number=" number";
closew=document.getElementById("Closew");
window.onload=function(){
    document.getElementById("name_user").innerHTML=user_name;
    document.getElementById("user-score").innerHTML=user_name+score;
    document.getElementById("user-number").innerHTML=user_name+number;
    document.getElementById("Bpopup").hidden = true;
    document.getElementById("Wait").hidden = true;
}
function Generate(){
    document.getElementById("Bpopup").hidden = true;
    document.getElementById("Wait").hidden = true;
    userNumber=Math.floor(Math.random() * 10);
    compNumber=Math.floor(Math.random() * 10);
    document.getElementById(`Wait`).hidden = false;
    setTimeout("document.getElementById(`numberUser`).innerHTML=userNumber", 1000);
    setTimeout("document.getElementById(`numberComp`).innerHTML=compNumber", 1000);
    if(userNumber>compNumber)
    {
        userScore++;
    }
    if(userNumber<compNumber){
        compScore++;
    }
    setTimeout("document.getElementById(`resultUser`).innerHTML=userScore", 1000);
    setTimeout("document.getElementById(`resultComp`).innerHTML=compScore", 1000);
    setTimeout("document.getElementById(`Wait`).hidden = true", 1000);
    if(userScore>=3)
    {
        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1000);
        setTimeout("document.getElementById(`Text`).innerHTML=win", 1000);
        setTimeout("userScore=0", 1000);
        setTimeout("compScore=0", 1000);
        setTimeout("userNumber=0", 1000);
        setTimeout("compNumber=0", 1000);
    }
    if(compScore>=3)
    {
        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1000);
        setTimeout("document.getElementById(`Text`).innerHTML=fail", 1000);
        setTimeout("userScore=0", 1000);
        setTimeout("compScore=0", 1000);
        setTimeout("userNumber=0", 1000);
        setTimeout("compNumber=0", 1000);
    }
}
function Closew(){
    document.getElementById("Bpopup").hidden = true;
}
