// Toggles console logging
var verbose = true;

// Used for ending the game
var active = true;
var moves = 0;

function PopulateSquare(mySquare)
{
    if (mySquare.innerHTML == "" && active == true) // Checks if square is empty and game is active
    {
        if (verbose == true)
            console.log("USER placed X at position " + mySquare.id)

        mySquare.innerHTML = "X"; // Sets square to X
        moves++; // Increases move count

        CheckWinner(); // Checks for winner and ends game if necessary

        ComputerPopulate(); // Proceeds to computer's turn
    }
    else
    {
        if (verbose == true && active == true)
        {
            console.log("**ERROR** (USER) Could not place X at position " + mySquare.id + " (Position already occupied)");
            console.log("USER's turn...");
        }

        if (verbose == true && active == false)
            console.log("**ERROR** (USER) Could not place X at position " + mySquare.id + " (Game is not active)");
    }
}

function CheckWinner()
{
    if (verbose == true)
        console.log("Checking for winner...");

    var result = document.getElementById("result");
    var winner;

    // Retrieves and stores content of all squares
    var s1 = document.getElementById("1").innerHTML;
    var s2 = document.getElementById("2").innerHTML;
    var s3 = document.getElementById("3").innerHTML;
    var s4 = document.getElementById("4").innerHTML;
    var s5 = document.getElementById("5").innerHTML;
    var s6 = document.getElementById("6").innerHTML;
    var s7 = document.getElementById("7").innerHTML;
    var s8 = document.getElementById("8").innerHTML;
    var s9 = document.getElementById("9").innerHTML;
    
    // Horizontal checks
    if(s1 != "" && s1 == s2 && s1 == s3)
    {
        if (s1 == "X")
        {
            winner = "X";
        }
        if (s1 == "O")
        {
            winner = "O";
        }

        document.getElementById("1").style.backgroundColor = "yellow";
        document.getElementById("2").style.backgroundColor = "yellow";
        document.getElementById("3").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (1-2-3): " + winner);
    }
    if(s4 != "" && s4 == s5 && s4 == s6)
    {
        if (s4 == "X")
        {
            winner = "X";
        }
        if (s4 == "O")
        {
            winner = "O";
        }

        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("6").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (4-5-6): " + winner);
    }
    if(s7 != "" && s7 == s8 && s7 == s9)
    {
        if (s7 == "X")
        {
            winner = "X";
        }
        if (s7 == "O")
        {
            winner = "O";
        }

        document.getElementById("7").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";
        document.getElementById("9").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (7-8-9): " + winner);
    }

    //Vertical checks
    if(s1 != "" && s1 == s4 && s1 == s7)
    {
        if (s1 == "X")
        {
            winner = "X";
        }
        if (s1 == "O")
        {
            winner = "O";
        }

        document.getElementById("1").style.backgroundColor = "yellow";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("7").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (1-4-7): " + winner);
    }
    if(s2 != "" && s2 == s5 && s2 == s8)
    {
        if (s2 == "X")
        {
            winner = "X";
        }
        if (s2 == "O")
        {
            winner = "O";
        }

        document.getElementById("2").style.backgroundColor = "yellow";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (2-5-8): " + winner);
    }
    if(s3 != "" && s3 == s6 && s3 == s9)
    {
        if (s3 == "X")
        {
            winner = "X";
        }
        if (s3 == "O")
        {
            winner = "O";
        }

        document.getElementById("3").style.backgroundColor = "yellow";
        document.getElementById("6").style.backgroundColor = "yellow";
        document.getElementById("9").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (3-6-9): " + winner);
    }

    //Diagonal checks
    if(s1 != "" && s1 == s5 && s1 == s9)
    {
        if (s1 == "X")
        {
            winner = "X";
        }
        if (s1 == "O")
        {
            winner = "O";
        }

        document.getElementById("1").style.backgroundColor = "yellow";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("9").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (1-5-9): " + winner);
    }
    if(s3 != "" && s3 == s5 && s3 == s7)
    {
        if (s3 == "X")
        {
            winner = "X";
        }
        if (s3 == "O")
        {
            winner = "O";
        }

        document.getElementById("3").style.backgroundColor = "yellow";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("7").style.backgroundColor = "yellow";

        if (verbose == true)
            console.log("Winner found (3-5-7): " + winner);
    }
    
    // Results
    if (winner != null) // Returns winner and ends game
    {
        result.innerHTML = winner + " is the winner!";
        active = false;
    }
    else // Allows game to continue
    {
        if (verbose == true)
            console.log("Winner could not be determined");

        result.innerHTML = "Game in progress...";
    }

    if (active == true && moves == 5) // Checks for tie and ends game
    {
        if (verbose == true)
            console.log("Board has been filled. Ending game...");

        result.innerHTML = "Tie!";
        active = false;
    }
}

function ComputerPopulate()
{
    if (verbose == true && active == true)
        console.log("COMPUTER's turn...");

    var board = ["1", "2", "3", "4", "5", "6", "7" ,"8", "9"]; // Stores IDs associated with squares
    var rSquare = board[Math.floor(Math.random() * board.length)]; // Selects and stores random square ID
    var square = document.getElementById(rSquare);

    if (square.innerHTML == "" && active == true) // Checks if square is unoccupied, place O and check for winner
    {
        if (verbose == true)
            console.log("COMPUTER placed O at position " + rSquare);

        square.innerHTML = "O";
        CheckWinner();

        if (verbose == true && active == true)
            console.log("USER's turn...");
    }
    else if (active == true) // Retries computer's turn if square is occupied
    {
        if (verbose == true)
            console.log("**ERROR** (COMPUTER) Could not place O at position " + rSquare + " (Position already occupied)");

        ComputerPopulate();
    }
}

function ResetBoard()
{
    if (verbose == true)
        console.log("Board reset");

    var result = document.getElementById("result");
    var board = document.getElementsByClassName("square");

    for (var i = 0; i < board.length; i++) // Resets squares
    {
        board[i].innerHTML = "";
        board[i].style.backgroundColor = "white";
    }

    result.innerHTML = "New game"; // Resets results

    active = true; // Resets game status
    moves = 0; // Resets move count
}