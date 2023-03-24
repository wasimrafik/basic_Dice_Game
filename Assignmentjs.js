    var user1 = document.getElementById("player1");
    var user2 = document.getElementById("player2");
    
    var count = 0;
    var count2 = 0;



    function start(){
     var section1 = document.getElementById("sec1");
     var section2 = document.getElementById("sec2");
     section1.style.display = "none";
     section2.style.display = "block"

}



function roll1() {
    var input1 = document.getElementById("user1").value;
    var input2 = document.getElementById("user2").value;
    var img1 = document.getElementById("imgholder1");
    var img2 = document.getElementById("imgholder2");
    var roll1 = Math.floor(Math.random()*6 +1);
    var roll2 = Math.floor(Math.random()*6 +1);
    img1.style = "background-image: url(Dice"+roll1+".jpg)";
    console.log(img1)
    img2.style = "background-image: url(Dice"+roll2+".jpg)";
    console.log(img2)
    console.log(roll1);
    if(roll1>roll2)
            {
                count++;
                console.log(count)
                document.getElementById("won").innerHTML = "Player1 Won The Match";
            }else if(roll1==roll2){
                document.getElementById("won").innerHTML = "Match is Draw";
            }
            else{
                count2++;
                console.log(count2)
                document.getElementById("won").innerHTML = "Player2 Won The Match";
            }
            document.getElementById("player1").innerHTML = input1+" : "+count;
            document.getElementById("player2").innerHTML = input2+" : "+count2;
}


  function rest(){
    document.getElementById("imgholder1").innerHTML = "";
    document.getElementById("imgholder2").innerHTML = "";
    document.getElementById("won").innerHTML = "";
    document.getElementById("player1").innerHTML = "";
    document.getElementById("player2").innerHTML = "";
    count = 0;
    count2 = 0;
    var img1 = document.getElementById("imgholder1");
    var img2 = document.getElementById("imgholder2");
    img1.style = "background-image: url(Dice1.jpg);";
    img2.style = "background-image: url(Dice1.jpg);";
  }