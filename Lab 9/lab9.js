$(function(){

    var blink;

    // Up
    $("#button1").on("click",function(){
        if (!blink)
        {
            $("#box").stop().animate({
                top: "0",
                bottom: ($("#container").innerHeight() - $("#box").innerHeight())
            }, 4000);  
            console.log("Up");
        }
        else
            console.log("Box is blinking!");
    });

    // Down
    $("#button2").on("click",function(){
        if (!blink)
        {
            $("#box").stop().animate({
                bottom: "0",
                top: ($("#container").innerHeight() - $("#box").innerHeight())
            }, 4000);
            console.log("Down");
        }
        else
            console.log("Box is blinking!");
    });

    // Left
    $("#button3").on("click",function(){
        if (!blink)
        {
            $("#box").stop().animate({
                left: "0",
                right: ($("#container").innerWidth() - $("#box").innerWidth())
            }, 4000);
            console.log("Left");
        }
        else
            console.log("Box is blinking!");
    });

    // Right
    $("#button4").on("click",function(){
        if (!blink)
        {
            $("#box").stop().animate({
                right: "0",
                left: ($("#container").innerWidth() - $("#box").innerWidth())
            }, 4000);
            console.log("Right");
        }
        else
            console.log("Box is blinking!");
    });

    // Fade Out
    $("#button5").on("click",function(){
        if (!blink)
        {
            $("#box").stop().fadeOut(2000);
            console.log("Fade Out");
        }
        else
            console.log("Box is blinking!");
    });

    // Fade In
    $("#button6").on("click",function(){
        if (!blink)
        {
            $("#box").stop().fadeIn(2000);
            console.log("Fade In");
        }
        else
            console.log("Box is blinking!");
    });

    // Blink
    $("#button7").on("click",function(){
        if (!blink)
        {
            $("#box").stop();
            blink = setInterval(function(){
                $("#box").fadeOut(500);
                $("#box").fadeIn(500);
            }, 1000);
            console.log("Blink");
        }
        else
            console.log("Box is blinking!");
    });

    // Reset
    $("#button8").on("click",function(){
        clearInterval(blink);
        blink = null;
        $("#box").stop();
        $("#box").removeAttr("style");
        console.log("Reset");
    });
})