name1 = localStorage.getItem("player1name");
name2 = localStorage.getItem("player2name");

score1 = 0;
score2 = 0;

document.getElementById("player_1").innerHTML = name1 + " : " + score1;
document.getElementById("player_2").innerHTML = name2 + " : " + score2;

document.getElementById("qt").innerHTML = "Question turn : "+ name1;
document.getElementById("at").innerHTML = "Answer turn : "+ name2;

function send(){
    uq = document.getElementById("user_q").value;
    question = uq.toUpperCase();

    letter1 = question.charAt(1);

    nol = question.length;

    letter2 = question.charAt(nol-2);

    middle = Math.floor(nol/2);

    letter3 = question.charAt(middle);

    letter4 = question.charAt(middle+1);

    r1 = question.replace(letter1, " _ ");

    r2 = r1.replace(letter2, " _ ");

    r3 = r2.replace(letter3, " _ ");

    r4 = r3.replace(letter4, " _ ");


    document.getElementById("output").style.display = "inline-block";
    document.getElementById("question").innerHTML = r4;
    document.getElementById("user_q").value = "";
}

qt = "p1";
at = "p2";

function check()
{
    ua = document.getElementById("user_answer").value;
    answer = ua.toUpperCase();

    if(answer == question){
        if(at == "p1")
        {
            score1 = score1 + 1;
        document.getElementById("player_1").innerHTML = name1 + " : " + score1;
    }
    
    else if(at == "p2")
    {
        score2 = score1 + 1;
        document.getElementById("player_2").innerHTML = name2 + " : " + score2;
    }
    }
    
    else{
        window.alert("Better luck next time :(")
    }

    if(qt == "p1"){
        qt = "p2"
        document.getElementById("qt").innerHTML = "Question turn : "+ name2;
    }

    else if(qt == "p2"){
        qt = "p1"
        document.getElementById("qt").innerHTML = " Question turn : "+ name1;
    }



    if(at == "p1"){
        at = "p2"
        document.getElementById("at").innerHTML = " Answer turn : "+ name2;
    }

    else if(at == "p2"){
        at = "p1"
        document.getElementById("at").innerHTML = " Answer turn : "+ name1;
    }

    document.getElementById("output").style.display = "none";
    
    
}