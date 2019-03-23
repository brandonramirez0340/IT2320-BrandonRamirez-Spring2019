$(document).ready(function(){

        var btn1 = $("#btn1");
        btn1.on("click", Toggle);

        var btn2 = $("#btn2");
        btn2.on("click", ChessBoard);

        var wd = $(".wrapperDiv");
        wd.mouseover(function(){
            $(this).addClass("active");
            $(this).removeAttr("style");
        });
        wd.mouseout(function(){
            $(this).removeClass("active");
        })

});

function Toggle()
{
    var elem = $(".wrapperDiv");
    elem.toggle();
}

function ChessBoard()
{
    var a = $("#1");
    var b = $("#2");
    var c = $("#3");
    var d = $("#4");

    a.html("one");
    b.html("two");
    c.html("three");
    d.html("four");

    a.css("background-color", "black");
    c.css("background-color", "black");

    b.css("background-color", "white");
    d.css("background-color", "white");

    a.css("color", "white");
    c.css("color", "white");

    b.css("color", "black");
    d.css("color", "black");
}