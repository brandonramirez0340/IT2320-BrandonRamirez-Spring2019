//Include jQuery in your code
//All jQuery code would reside within $(document).ready() 
//Demo will include:
//jQuery element selector by id, tagName, className
//jQuery get and set
//jQuery hide, show and toggle
//jQuery event listener
//jQuery passing "this" to a function
//jQuery passing data to a function
//jQuery add and remove elements

$(document).ready(function(){
    //Write all jQuery code here or inside a function
    //Commented code is DOM equivalent of below code

        console.log("hello");
        //var elem = document.getElementById("contentContainer");
        var elem = $("#contentContainer");
        //console.log(elem.innerHTML);
        console.log(elem.html());
        
        //var elem2 = document.getElementById("buttonContainer");
        var elem2 = $("#buttonContainer");
        //console.log(elem2.innerHTML);
        console.log(elem2.html());
        
        //var elem3 = document.getElementById("zoom");
        var elem3 = $("#zoom");
        //console.log(elem3.innerHTML);
        console.log(elem3.html());
        console.log(elem3.html("Zoom (changed)"));

        //var elem4 = document.getElementById("mylink1");
        var elem4 = $("#mylink1");
        //console.log(elem4.href);
        console.log(elem4.attr("href"));
        console.log(elem4.attr("id"));

        //var button1 = document.getElementById("button1");
        var button1 = $("#button1");
        //button1.addEventListener("click", HideContent);
        button1.on("click", HideContent);
        //button1.click(HideContent); //also works

        var button2 = $("#button2");
        button2.on("click", {content: "I am modifying content", id: "Random"}, ShowContent);

        var button2a = $("#button2a");
        button2a.on("click", ToggleContent);

        var button_chg = $("#button-chg");
        button_chg.on("click", function(){ChangeStyle($(this));});

        var button3 = $("#button3");
        button3.on("click", ChangeContent);

        var button6 = $("#button6");
        button6.on("click", AddAnElement);

        var button7 = $("#button7");
        button7.on("click", RemoveAnElement);

        var buttons = document.getElementsByClassName("button-a");
        console.log(buttons.length);
        console.log(buttons[0].id, buttons[0].innerHTML);
        console.log(buttons[1].id, buttons[1].innerHTML);
        console.log(buttons[2].id, buttons[2].innerHTML);

});

function HideContent()
{
    //var elem = document.getElementById("div1");
    var elem = $("#div1");
    //elem.style.visibility = "hidden";
    elem.hide();
}

function ShowContent(event)
{
    //var elem = document.getElementById("div1");
    var elem = $("#div1");
    //elem.style.visibility = "visible";
    elem.show();

    console.log(event.data.id);
    console.log(event.data.content);
    elem.html(event.data.content);
}

function ToggleContent()
{
    var elem = $("#div1");
    elem.toggle();
}

function ChangeStyle(myElem)
{
    console.log(myElem.id);
    //myElem.style.fontSize = "1.2em";
    myElem.css("font-size", "1.2em"); //single style change => .css();

    myElem.removeClass("button-a"); //multiple style change => .removeClass(); and addClass();
    myElem.addClass("biggerbutton");
}

function ChangeContent()
{
    //var elem = document.getElementById("div3");
    var elem = $("#div3");
    //elem.innerHTML = "This is a dynamic content that I am adding";
    elem.html("This is a dynamic content that I am adding");

    //var link = document.getElementById("mylink1");
    var link = $("#mylink1");
    //link.href = "https://www.tri-c.edu";
    link.attr("href", "https://www.tri-c.edu");
    //link.innerHTML = "Click here to go to Tri-C";
    link.html("Click here to go to Tri-C");

}

function AddAnElement()
{
    //var para = document.createElement("p");
    var para = $("<p></p>");
    //var parent = document.getElementById("contentContainer3");
    var parent = $("contentContainer3");
    //para.innerHTML = "This is a brand new para that I created dynamically";
    //para.id="newpara";
    //parent.appendChild(para);

    //Add a link - same parent - www.yahoo.com
    var link = document.createElement("a");
    link.innerHTML="New link";
    link.id = "newlink";
    link.href="http://www.yahoo.com";
    parent.appendChild(link);

}

function RemoveAnElement()
{
    var elem = document.getElementById("para-a");
    var parent = document.getElementById("contentContainer3");
    parent.removeChild(elem);

    var elem = document.getElementById("newpara");
    var parent = document.getElementById("contentContainer3");
    parent.removeChild(elem);

    var elem = document.getElementById("newlink");
    var parent = document.getElementById("contentContainer3");
    parent.removeChild(elem);
}