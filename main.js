function login(){
    name1 = document.getElementById("input1").value;
    name2 = document.getElementById("input2").value;

    localStorage.setItem("player1name" ,name1);
    localStorage.setItem("player2name" ,name2);

    window.location = "gamePage.html";

}