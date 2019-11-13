var options = ["rock", "paper", "scissors"];
var userChoice;

function chooseGesture()
    {
    var radios = document.getElementsByName('choice');

    for (var i = 0; i < radios.length; i++) 
        {
        if (radios[i].checked) 
            {
            userChoice = radios[i].value;
            }
        } 

    document.getElementById("userOutput").innerHTML = 
        "You chose " + options[userChoice] + ".<br>";

    var computerChoice = Math.floor(Math.random() * 3);

    document.getElementById("computerOutput").innerHTML = 
        " The computer chose " + options[computerChoice] + ".<br>";

    if ((userChoice == 0 && computerChoice == 2) ||
        (userChoice == 1 && computerChoice == 0) ||
        (userChoice == 2 && computerChoice == 1))
            {
            document.getElementById("result").innerHTML =
                "  You won!";
            }
    else if ((userChoice == 0 && computerChoice == 1) ||
        (userChoice == 2 && computerChoice == 0) ||
        (userChoice == 1 && computerChoice == 2))
            {
            document.getElementById("result").innerHTML =
                "  You lose!";
            }
    else
            {
            document.getElementById("result").innerHTML = 
                "  It is a tie!";
            }
    }

    
    