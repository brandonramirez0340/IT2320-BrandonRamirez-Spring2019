$(document).ready(function(){
    Warmup();
});

function Warmup(){
    var wrapper = $("#wrapper");
    console.log(wrapper);
    wrapper.html("This is a div");
    wrapper.css("background-color", "blue");
}