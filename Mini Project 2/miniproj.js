$(function(){
    // Variables used by the game
    var i1; // First card
    var i2; // Second card
    var active = false; // Game state
    var matches = 0; // Matches found
    var cards = 12; // Total number of cards

    // Adds functionality to the 'new game' button
    $("#newGame").on("click", function(){
        newGame();
    });

    // Adds functionality to all cards
    $("#1").on("click", function(){
        play(this.id);
    });

    $("#2").on("click", function(){
        play(this.id);
    });

    $("#3").on("click", function(){
        play(this.id);
    });

    $("#4").on("click", function(){
        play(this.id);
    });

    $("#5").on("click", function(){
        play(this.id);
    });

    $("#6").on("click", function(){
        play(this.id);
    });

    $("#7").on("click", function(){
        play(this.id);
    });

    $("#8").on("click", function(){
        play(this.id);
    });

    $("#9").on("click", function(){
        play(this.id);
    });

    $("#10").on("click", function(){
        play(this.id);
    });

    $("#11").on("click", function(){
        play(this.id);
    });

    $("#12").on("click", function(){
        play(this.id);
    });

    function play(id){ // Completed every time a card is clicked

        id = "#" + id;
        console.log("Clicked card " + id);
    
        if(!active){ // Check if the game isn't active
            console.log("ERROR: Game is not active!")
        }
    
        else if($(id).hasClass("disabled")){ // Check if the card has already been clicked or matched
            console.log("ERROR: Card has already been clicked or matched!")
        }
    
        else{ // If game is active and card is enabled...

            if(!i1){ //Check if the first card has already been selected

                flipCard(id);
                i1 = id; // Set first card selection
                console.log("First card: " + i1);

            }

            else if(!i2){ //Check if the second card has already been selected

                flipCard(id);
                i2 = id; // Set second card selection
                console.log("Second card: " + i2);
                setTimeout(function(){checkMatch()}, 1500); // Wait for card to finish appearing before checking for matches

            }
        }
    }
    
    function flipCard(id){ // Flip specified card and disable it
        
        $(id).addClass("disabled"); // Disable card

        $(id).css({ // Rotate card
            transform: "rotate(360deg)",
            transition: "transform 1.5s linear"
        });
    
        $(id + " img").animate({opacity: 1}, 1500, function(){ // Fade in image and end rotation animation
            $(id).removeAttr("style");
        });

    }
    
    function checkMatch(){ // Check for a match

        console.log("Comparing cards " + i1 + " and " + i2 + "...");
    
        if($(i1 + " img").attr("src") == $(i2 + " img").attr("src")){ // Check if cards match
    
            matches++; // Increase match count
            console.log("Match found! Total: " + matches + "/" + (cards / 2));

            if(matches == (cards / 2)){ // Check if all matches have been found
    
                $("#messages").animate({opacity: 0}, 500, function(){ // Game end message
                    $("#messages").html("All matches found. Game over!!!");
                })
                    .animate({opacity: 1}, 500);
    
                active = false; // End game
                console.log("Game over");
            }

            else{ // If not all matches have been found...

                $("#messages").animate({opacity: 0}, 500, function(){ // Match found message
                    $("#messages").html("Hurray!!! Match found...");
                })
                    .animate({opacity: 1}, 500);

            }

            i1 = null; // Reset selected cards
            i2 = null;

        }

        else{ // If cards don't match...
    
            $("#messages").animate({opacity: 0}, 500, function(){ // Match not found message
                $("#messages").html("Oops!!! Please try again...");
            })
                .animate({opacity: 1}, 500, function(){
                    i1 = null; // Reset selected cards
                    i2 = null;
                });
    
            $(i1 + " img, " + i2 + " img").animate({opacity: 0}, 1500); // Hide selected cards
    
            $(i1 + ", " + i2).removeClass("disabled"); // Reenable selected cards
    
            console.log("No match found!");

        }
    }
    
    function newGame(){ // Starts a new game

        active = false; // Temporarily deactivate the game
    
        console.log("Started new game");
    
        $("#container div").removeClass("disabled"); // Enables any disabled cards
    
        matches = 0; // Reset match count
        i1 = null; // Reset selected cards
        i2 = null;
    
        $("#messages").animate({opacity: 0}, 500, function(){ // Starting message
            $("#messages").html("Let's begin!!! Remember the cards...");
        })
            .animate({opacity: 1}, 500);
    
        $("img").animate({opacity: 1}, 3000) // Show all cards
            .animate({opacity: 0}, 2000);
    
        setTimeout(function(){ 
            $("#messages").animate({opacity: 0}, 500, function(){ // Waiting message
                $("#messages").html("Click on any 2 cards to find a match!");
            })
                .animate({opacity: 1}, 500);
                
            active = true; // Reactivate the game after all cards disappear
        }, 5000);

    }
});