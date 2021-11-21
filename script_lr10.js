var numbers=new Array(1,2,3,4,5,6,7,8,9);
var images=new Array('lr10/Vishna.png', 'lr10/Pizza.png','lr10/Pivo.png', 'lr10/Kukuruza.png','lr10/Kapusta.png', 'lr10/Burger.png','lr10/Banana.png', 'lr10/Avokado.png', 'lr10/Ananas.png');
let count=0;
let user_name = prompt('Enter your name');
let count_win=0;
window.onload=function(){
    document.getElementById("Bpopup").hidden = true;
    document.getElementById("Wait").hidden = true;
    document.getElementById("name_user").innerHTML=user_name;
}
function Generate()
{
    i1=Math.floor(Math.random() * numbers.length);
    f1=Math.floor(Math.random() * numbers.length);
    g1=Math.floor(Math.random() * numbers.length);
    i2=Math.floor(Math.random() * numbers.length);
    f2=Math.floor(Math.random() * numbers.length);
    g2=Math.floor(Math.random() * numbers.length);
    i3=Math.floor(Math.random() * numbers.length);
    f3=Math.floor(Math.random() * numbers.length);
    g3=Math.floor(Math.random() * numbers.length);
    while(i1===g1 || g1===f1 || i1===f1)
    {
        g1=Math.floor(Math.random() * (numbers.length));
        f1=Math.floor(Math.random() * (numbers.length));
    }
    while(i2===g2 || g2===f2 || i2===f2)
    {
        g2=Math.floor(Math.random() * (numbers.length));
        f2=Math.floor(Math.random() * (numbers.length));
    }
    while(i3===g3 || g3===f3 || i3===f3)
    {
        g3=Math.floor(Math.random() * (numbers.length));
        f3=Math.floor(Math.random() * (numbers.length));
    }

    if(i1!=g1 && i2!=g2 && i3!=g3)
    {
        if(i1!=f1 && i2!=f2 && i3!=f3)
        {
            if(f1!=g1 && f2!=g2 && f3!=g3)
            {
                console.log("ok");
                console.log(f1+" F1 "+i1+" i1 "+g1+" g1 ");
                console.log(f2+" F2 "+i2+" i2 "+g2+" g2 ");
                console.log(f3+" F3 "+i3+" i3 "+g3+" g3 ");

                setTimeout("document.getElementById(`Icons`).src=images[i1]", 750);
                setTimeout("document.getElementById(`Icons2`).src=images[i2]", 750);
                setTimeout("document.getElementById(`Icons3`).src=images[i3]", 750); 
                setTimeout("document.getElementById(`Icons4`).src=images[f1]", 1000);
                setTimeout("document.getElementById(`Icons5`).src=images[f2]", 1000);
                setTimeout("document.getElementById(`Icons6`).src=images[f3]", 1000); 
                setTimeout("document.getElementById(`Icons7`).src=images[g1]", 1250);
                setTimeout("document.getElementById(`Icons8`).src=images[g2]", 1250);
                setTimeout("document.getElementById(`Icons9`).src=images[g3]", 1250); 
                count++;
                document.getElementById("count").innerHTML="Count:"+count+" From 3";
                if(f1===f2 && f3===f2 && f1===f3)
                {
                    count_win++;
                    console.log("1 win");
                }
                if(i1===i2 && i3===i2 && i1===i3)
                {
                    count_win++;
                    console.log("2 win");
                }
                if(g1===g2 && g3===g2 && g1===g3)
                {
                    count_win++;
                    console.log("3 win");
                }
                if(count>=3)
                {
                    if(count_win==1)
                    {
                        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1750);
                        setTimeout("document.getElementById(`Text`).innerHTML=`Харош`", 1750);
                        count_win=0;
                    }
                    if(count_win==2)
                    {
                        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1750);
                        setTimeout("document.getElementById(`Text`).innerHTML=`Мега Харош`", 1750);
                        count_win=0;
                    }
                    if(count_win==3)
                    {
                        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1750);
                        setTimeout("document.getElementById(`Text`).innerHTML=`СуперДуперМега Харош`", 1750);
                        count_win=0;
                    }
                    if(count_win<1)
                    {
                        setTimeout("document.getElementById(`Bpopup`).hidden = false", 1750);
                        setTimeout("document.getElementById(`Text`).innerHTML=`Не харош`", 1750);
                        count_win=0;
                    }
                    count=0;
                }
            }
        }

    }
}
function Closew(){
    document.getElementById("Bpopup").hidden = true;
}
