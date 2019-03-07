//Hide content

//Show content

//Change style and text

//Change content

//Add an element

//Remove an element

//ChangeShape

//Unobstrusive js using button 1 (anonymous)
//Unobstrusive js using button 2 (regular function)

window.onload = function(){
    //Write all DOM code here or inside a function
    //All DOM function calls go here

    // Add event listeners to button
    var button1 = document.getElementById("button1");
    button1.addEventListener("click", HideContent);

    var button2 = document.getElementById("button2");
    button2.addEventListener("click", ShowContent);

    var buttonChg = document.getElementById("button-chg");
    buttonChg.addEventListener("click", function(){ChangeStyle(this);});

    var buttonDel = document.getElementById("delete");
    buttonDel.addEventListener("click", Remove);

    //Add event listener to a collection of elements
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        links[i].addEventListener("mouseover", function(){ChangeLinkStyle(this)});
    }

    //Add event listener to a collection of elements
    for(var i = 0; i < links.length; i++)
    {
        links[i].addEventListener("mouseout", function(){ResetLinkStyle(this)});
    }
}

function ResetLinkStyle(myLink)
{
    myLink.style.fontSize = "1em";
    myLink.style.backgroundColor = "";
    myLink.style.fontWeight = "normal";
}

function ChangeLinkStyle(myLink)
{
    myLink.style.fontSize = "1.5em";
    myLink.style.backgroundColor = "yellow";
    myLink.style.fontWeight = "bold";
}

function Remove(){
    var button1 = document.getElementById("button1");
    button1.removeEventListener("click", HideContent);
}

function HideContent()
{
    var elem = document.getElementById("div1");
    
    //To hide content, set visibility to hidden
    elem.style.visibility = "hidden"; //display: none
}

function ShowContent()
{
    var elem = document.getElementById("div1");
    
    //To show content, set visibility to visible
    elem.style.visibility = "visible"; //display: none
}

function ChangeStyle(myElem)
{
    console.log(myElem.id);
    myElem.style.fontSize = "1.2em";
}

function ChangeContent()
{
    var elem = document.getElementById("div3");
    elem.innerHTML = "This is a dynamic content that I am adding";

    //Change div4 also
    //Change google link to read "Click here to go to Tri-c"
    // and point to http://www.tri-c.edu

    var link = document.getElementById("mylink1");
    link.href = "http://www.tri-c.edu";
    link.innerHTML = "Click here to go to Tri-C";

}

function AddAnElement()
{
    var para = document.createElement("p");
    para.innerHTML = "This is a brand new para that I created dynamically";
    para.id="newpara";
    var parent = document.getElementById("contentContainer3");
    parent.appendChild(para);

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