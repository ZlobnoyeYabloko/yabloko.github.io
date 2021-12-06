var answers = ['Хто я', 'Я Зеленський','Привіт', 'Пліз прекратіть це', 'Хелп', 'Я так не думаю',
'Богдан', 'А може', 'Ваня', 'Нікіта', 'Духи так говорять', 'Молва така прошла', 'Ти хто', 'Я?', 'Ну ні я ж' ];
var think="Натисність для магії";
var content = document.createElement("div");
var img_ball = document.createElement("div");
var text_block = document.createElement("div");
var text = document.createElement("span");
var bpopUp=document.createElement("div");
var popUp=document.createElement("div");
var popUp_text=document.createElement("div");
var closew=document.createElement("a");
var popUp_input=document.createElement("input");
var value;
bpopUp.className="b-popup";
popUp.className="b-popup-content";
closew.className="b-popup-close";
popUp_text.textContent+="Що б отримати відповідь, необхідно поставити запитання, вголос або про себе, та натиснути на кулю. Якщо, все ж таки, ви хочете написати кулі, то можете зробити це тут:";
popUp_text.className="b-popup-text";
popUp_input.className="b-popup-input";
document.body.appendChild(bpopUp);
bpopUp.appendChild(popUp);
popUp.appendChild(closew);
popUp.appendChild(popUp_text);
popUp.appendChild(popUp_input);
popUp_input.setAttribute("type", "text");


document.body.onload = addElement;
function addElement(){
img_ball.className="img_ball";
content.className="content";
text_block.className="img_ball2";
text.className="text";
document.body.appendChild(content);
content.appendChild(img_ball);
img_ball.appendChild(text_block);
text_block.appendChild(text);
}

img_ball.onclick=function(){
    img_ball.classList.add("img_anim");
    setTimeout("img_ball.classList.remove('img_anim')", 500);
}
text.textContent+=think;
text_block.onclick = function(){
    value=answers[Math.floor(Math.random() * answers.length)];
    answers.push(value);
    text.innerHTML=value;
}
closew.onclick = function(){
    bpopUp.hidden = true;
    if(bpopUp.hidden = true){
        setTimeout("bpopUp.hidden = false", 10000);
    }
}
popUp_input.onmouseout=function(){
    if(popUp_input.value=="Привіт")
    {
        bpopUp.hidden = true;
    }
    if(bpopUp.hidden = true){
        setTimeout("bpopUp.hidden = false", 10000);
    }
}