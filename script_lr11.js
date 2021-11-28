var wordsEnglish = Array("Hello", "Hi", "Hah", "Dog", "Cat", "Card", "Table", "Lamp", "Computer", "Monitor");
var wordsTranslate = Array("привіт", "привіт", "хах", "собака", "кіт", "карта", "стіл", "лампа", "комп'ютер", "монітор");
var count=0;
$(function addColor() {
    $("body").css({
        textAlign: "center",
        backgroundColor: "#292929"
    });
    $("div").css({
        transform: "translate(-50%, -50%)",
        position: "absolute"
    });
    $("input").css({
        width: "20%",
        height: "2%",
        top:"37%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    });
    $("div:eq(0)").css({
        width: "20%",
        height: "12%",
        paddingTop: "4%",
        top:"15%",
        left: "50%",
        fontWeight:"bolder", 
        backgroundColor:"white",
        fontSize: "40px"
    });
    $("div:eq(1)").css({
        width: "10%",
        height: "5%",
        paddingTop: "1%",
        top:"30%",
        left: "50%",
        fontWeight:"bolder", 
        backgroundColor:"red",
    });
    $("div:eq(2)").css({
        width: "10%",
        height: "4%",
        top:"43%",
        left: "50%",
        fontWeight:"bolder", 
        backgroundColor:"White",
        paddingTop: "1.5%"
    });
    $("div:eq(3)").css({
        width: "15%",
        height: "4%",
        paddingTop: "1.5%",
        top:"52%",
        left: "65%",
        fontWeight:"bolder", 
        backgroundColor:"green",
    });
    $("div:eq(4)").css({
        width: "15%",
        height: "4%",
        paddingTop: "1.5%",
        top:"52%",
        left: "35%",
        fontWeight:"bolder", 
        backgroundColor:"red",
    });
    $("div:eq(5)").css({
        width: "10%",
        height: "4%",
        paddingTop: "1.5%",
        top:"52%",
        left: "50%",
        fontWeight:"bolder", 
        backgroundColor:"blueviolet",
    });
    $("div:eq(6)").css({
        width: "2%",
        height: "2%",
        top:"30%",
        left: "42%",
        fontWeight:"bolder", 
        backgroundColor:"blueviolet",
    });
    $("div:eq(7)").css({
        width: "2%",
        height: "2%",
        top:"30%",
        left: "58%",
        fontWeight:"bolder", 
        backgroundColor:"blueviolet",
        content: "&rArr"
    });
    let correctWord=0;
    let uncorrect=0;
    let i=0;
    $(function shuffles() {
    for (var j, x, y, i = wordsEnglish.length; i; j = parseInt(Math.random() * i), x = wordsEnglish[--i], wordsEnglish[i] = wordsEnglish[j], wordsEnglish[j] = x, y=wordsTranslate[i], wordsTranslate[i]=wordsTranslate[j], wordsTranslate[j]=y);
    });
    function shuffles2() {
        for (var j, x, y, i = wordsEnglish.length; i; j = parseInt(Math.random() * i), x = wordsEnglish[--i], wordsEnglish[i] = wordsEnglish[j], wordsEnglish[j] = x, y=wordsTranslate[i], wordsTranslate[i]=wordsTranslate[j], wordsTranslate[j]=y);
    }
    var j;
    function Show()
    {
        $('.Card').text(wordsEnglish[i]);
        console.log(wordsTranslate[i]);
        j = wordsTranslate[i];
        i++;
        $('.Words').text("Word: "+i+" From "+"10");
        if(i==10)
        {
            i=0;
            shuffles2();
            console.log("XAX");
        }
    }
    function Show_Back()
    {
        i--;
        $('.Card').text(wordsEnglish[i]);
        console.log(wordsTranslate[i]);
        j = wordsTranslate[i];
        $('.Words').text("Word: "+i+" From "+"10");
    }
    function correct()
    {
        var word=$('#login').val();
        if(word==j)
        {
            correctWord++;
            $('.Correct').text("Correct: "+correctWord);
            count++;
        }
        if(word=="")
        {
            console.log("A?");
            count++;
        }
        if(word!=j){
            uncorrect++;
            $('.Uncorrect').text("Uncorrect: "+uncorrect);
            count++;
        }
        if(count==10){
            if(correctWord==10 && uncorrect==0)
            {
                alert("Супердупер харош!");
                correctWord=0;
                uncorrect=0;
                count=0;
                $('.Uncorrect').text("Uncorrect: "+uncorrect);
                $('.Correct').text("Correct: "+correctWord);
            }
            if(correctWord<10 && uncorrect<4 && correctWord>7 && uncorrect>0)
            {
                alert("Супер харош!");
                correctWord=0;
                uncorrect=0;
                count=0;
                $('.Uncorrect').text("Uncorrect: "+uncorrect);
                $('.Correct').text("Correct: "+correctWord);
            }
            if(correctWord>4 && uncorrect<6 && correctWord<7 && uncorrect>3)
            {
                alert("Харош!");
                correctWord=0;
                uncorrect=0;
                count=0;
                $('.Uncorrect').text("Uncorrect: "+uncorrect);
                $('.Correct').text("Correct: "+correctWord);
            }
            if(correctWord>0 && uncorrect<9 && uncorrect>6 && correctWord<5)
            {
                alert("Почті крінж!");
                correctWord=0;
                uncorrect=0;
                count=0;
                $('.Uncorrect').text("Uncorrect: "+uncorrect);
                $('.Correct').text("Correct: "+correctWord);
            }
            if(correctWord==0 && uncorrect==10)
            {
                alert("Крінжанул!");
                correctWord=0;
                uncorrect=0;
                count=0;
                $('.Uncorrect').text("Uncorrect: "+uncorrect);
                $('.Correct').text("Correct: "+correctWord);
            }
        }
    }
    $(".Check").on('click',correct);    
    $(".Strelka_Forward").on('click', Show);
    $(".Strelka_Backward").on('click', Show_Back);

});
