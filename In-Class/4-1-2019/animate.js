
//Animation using jQuery
//hide & show + Toggle
//hide, show & toggle

//slideUp slideDown slideToggle   
//fadeIn fadeOut fadeToggle 
//chaining
    
//animate 
//queueing => multiple animations on a single element
//queueing => multiple animations on a single element
//animate with call back function
//stop animation

$(function(){
    $(".section-a").on("click", function(){
        $(this).children().toggle(4000, function(){
            console.log("toggle complete");
        });
     });

     $(".section-b h2").on("click", function(){
        $(this).siblings("div").slideToggle(4000, function(){
            console.log("slide toggle complete");
            $(this).siblings("p").css("fontSize", "1.2em")
        });
     });

    $(".section-c").on("click", function(){
        $(this).children("div").fadeToggle(4000, function(){
            console.log("fade toggle complete");
        });
        $(this).children("h2").slideToggle(4000, function(){
            console.log("slide toggle complete");
        });
     });

     $(".section-d").on("click", function(){
        $(this).children().hide(1000)
                            .show(2000, function(){
                                $(this).css("color", "green");
                            })
                            .fadeOut(3000)
                            .slideDown(1000, function(){
                                $(this).css("color", "orange");
                            })
                            .slideUp(2000);
    });

    $("#btnStop").on("click", function(){
        $("#box").stop();
    });

    $("#btn1").on("click", function(){
        $("#box").css("background-color", "green");
        $("#box").animate({
            width: "toggle",
            height: "toggle",
            opacity: "toggle"
        }, 2000, function(){
            $(this).css("background-color", "blue");
        });
    });

    $("#btn2").on("click", function(){
        $("#box").animate({
            width: "1000px"
        }, 2000);
    });

    $("#btn3").on("click", function(){
        $("#box").animate({
            borderRadius: "50%"
        }, 2000);
    });
});
