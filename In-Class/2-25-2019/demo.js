window.onload = function() //creates unnamed function that is run after html is loaded
{
    console.log("hello");

    var elem = document.getElementById("contentContainer");
    console.log(elem.id);

    var elem2 = document.getElementById("buttonContainer")
    console.log(elem2.innerHTML);

    var elem3 = document.getElementById("zoom");
    console.log(elem3.innerHTML);

    var elem4 = document.getElementById("mylink1");
    console.log(elem4.href);

    var buttons = document.getElementsByClassName("button-a");
    console.log(buttons.length);
    console.log(buttons[0].id, buttons[0].innerHTML);
    console.log(buttons[1].id, buttons[1].innerHTML);
    console.log(buttons[2].id, buttons[2].innerHTML);
}

function HideContent()
{
    var elem1 = document.getElementById("div1");
    var elem2 = document.getElementById("div2");

    elem1.style.visibility = "hidden"; //makes content invisible
    elem2.style.visibility = "hidden";
}

function ShowContent()
{
    var elem1 = document.getElementById("div1");
    var elem2 = document.getElementById("div2");

    elem1.style.visibility = "visible"; //makes content visible
    elem2.style.visibility = "visible";
}

function ChangeStyle(elem)
{
    elem.style.fontSize = "1.2em";
}

function ChangeContent(elem)
{
    elem.innerHTML = "This content was changed!";
}

function ChangeLink(elem)
{
    elem.innerHTML = "Click here to go to Tri-C";
    elem.href = "https://www.tri-c.edu";
}

function AddParagraph()
{
    var para = document.createElement("p");
    para.innerHTML = "This is a new paragraph!";
    para.id = "newpara";

    var parent = document.getElementById("contentContainer3");
    parent.appendChild(para);
}

function AddLink()
{
    var link = document.createElement("a");
    link.innerHTML = "Click here to go to Yahoo";
    link.href = "https://www.yahoo.com";
    link.id = "newlink";

    var parent = document.getElementById("contentContainer3");
    parent.appendChild(link);
}

function RemoveAnElement()
{
    //var elem1 = document.getElementById("para-a");
    var elem2 = document.getElementById("newpara");
    var elem3 = document.getElementById("newlink");

    var parent = document.getElementById("contentContainer3");
    //parent.removeChild(elem1);
    parent.removeChild(elem2);
    parent.removeChild(elem3);
}

function ChangeShape()
{

}