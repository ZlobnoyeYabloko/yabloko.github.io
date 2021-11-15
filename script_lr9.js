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
var nicha=" Ніч'я"
closew=document.getElementById("Closew");
var red_imgs=new Array('lr9/6_red.png', 'lr9/7_red.png', 'lr9/8_red.png', 'lr9/9_red.png', 'lr9/10_red.png', 'lr9/valet_red.png', 'lr9/dama_red.png', 'lr9/king_red_2.png', 'lr9/tyz_red.png');
var black_imgs=new Array('lr9/6_black.png', 'lr9/7_black.png', 'lr9/8_black.png', 'lr9/9_black.png', 'lr9/10_black.png', 'lr9/valet_black.png', 'lr9/Dama_black.png', 'lr9/king_black.png', 'lr9/tyz_black.png');
var numbers=new Array(6, 7, 8, 9, 10, 2, 3, 4, 11);
let sproba=0;
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
    i=Math.floor(Math.random() * red_imgs.length);
    j=Math.floor(Math.random() * black_imgs.length);
    userNumber=numbers[i];
    compNumber=numbers[j];
    document.getElementById(`Wait`).hidden = false;
    console.log(userNumber);
    console.log(compNumber);
    setTimeout("document.getElementById(`rand_number_user2`).src=red_imgs[i]", 1000);
    setTimeout("document.getElementById(`rand_number_comp2`).src=black_imgs[j]", 1000);
    userScore+=userNumber;
    compScore+=compNumber;
    sproba++;
    setTimeout("document.getElementById(`resultUser`).innerHTML=userScore", 1000);
    setTimeout("document.getElementById(`resultComp`).innerHTML=compScore", 1000);
    setTimeout("document.getElementById(`Wait`).hidden = true", 1000);
    if(sproba>=3)//
    {
        if(userScore==21){
            setTimeout("document.getElementById(`Bpopup`).hidden = false", 1000);
            setTimeout("document.getElementById(`Text`).innerHTML=win", 1000);
        }
        else if(userScore>compScore){
        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1000);
        setTimeout("document.getElementById(`Text`).innerHTML=win", 1000);
        setTimeout("userScore=0", 1000);
        setTimeout("compScore=0", 1000);
        setTimeout("userNumber=0", 1000);
        setTimeout("compNumber=0", 1000);
        setTimeout("sproba=0", 1000);
        }
        if(compScore==userScore)
        {
        setTimeout("document.getElementById(`Bpopup`).hidden = nicha", 1000);
        setTimeout("document.getElementById(`Text`).innerHTML=fail", 1000);
        }
    }
    if(sproba>=3)//
    {
        if(compScore==21){
            setTimeout("document.getElementById(`Bpopup`).hidden = false", 1000);
            setTimeout("document.getElementById(`Text`).innerHTML=fail", 1000);
        }
        else if(userScore<compScore){
        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1000);
        setTimeout("document.getElementById(`Text`).innerHTML=fail", 1000);
        setTimeout("userScore=0", 1000);
        setTimeout("compScore=0", 1000);
        setTimeout("userNumber=0", 1000);
        setTimeout("compNumber=0", 1000);
        setTimeout("sproba=0", 1000);
        }
        if(compScore==userScore)
        {
        setTimeout("document.getElementById(`Bpopup`).hidden = nicha", 1000);
        setTimeout("document.getElementById(`Text`).innerHTML=fail", 1000);
        }
    }
}
function Closew(){
    document.getElementById("Bpopup").hidden = true;
}
