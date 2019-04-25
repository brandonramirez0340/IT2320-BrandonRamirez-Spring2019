var ctx; // this is a global variable and is available to all methods


window.onload=function(){

    var myCanvas = document.getElementById("myCanvas"); // get the canvas first
    ctx = myCanvas.getContext("2d"); // returns all the methods for drawing on the canvas

    document.getElementById("path").addEventListener("click", function(){
        drawPath();
    });

    document.getElementById("rectangle").addEventListener("click", function(){
        drawRectangles();
    });

    document.getElementById("circle").addEventListener("click", function(){
        drawCircle();
    });

    document.getElementById("arc").addEventListener("click", function(){
        drawArc();
    });

}


function drawPath()
{
    
    /* 1st set of lines */
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.beginPath();
    ctx.moveTo(20, 20); // Starting point
    ctx.lineTo(100, 100); // Define a line from the starting point
    ctx.lineTo(200, 50); // Define a line from the previous point
    ctx.lineTo(120, 75);
    ctx.closePath(); // Completes the shape
    ctx.stroke(); // Draws the path
    ctx.fill(); // Fills the shape

    /* 2nd set of lines (open) */
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(220, 20);
    ctx.lineTo(400, 200);
    ctx.lineTo(400, 20);
    ctx.lineTo(420, 25);
    ctx.stroke();

    /* 3rd set of lines (triangle) */
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 3;
    ctx.fillStyle = "yellow";

    ctx.beginPath();
    ctx.moveTo(500, 20);
    ctx.lineTo(550, 100);
    ctx.lineTo(550, 50);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}

function drawRectangles()
{

    /* 1st rectangle */
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "blue";

    ctx.rect(10, 10, 100, 200); // rect(start x, start y, width, height);
    ctx.stroke();
    ctx.fill();

    /* 2nd rectangle */
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 6;

    ctx.strokeRect(150, 10, 100, 20);

    /* 3rd rectangle */
    ctx.fillStyle = "lightblue";

    ctx.fillRect(270, 10, 150, 120);

    /* 4th rectangle */
    ctx.clearRect(290, 50, 50, 50);

}



function drawCircle()
{

    /* 1st circle */
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10;
    ctx.fillStyle = "teal";

    ctx.beginPath();
    ctx.arc(300, 300, 200, 0, 2*Math.PI, false); // arc(center x, center y, radius, start angle, end angle, counterclockwise(t/f))
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    /* 2nd circle */
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.fillStyle = "lightgreen";
    
    ctx.beginPath();
    ctx.arc(300, 300, 100, 0, Math.PI, true);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    /* 3rd circle */
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 2;
    ctx.fillStyle = "pink";
    
    ctx.beginPath();
    ctx.arc(300, 350, 50, 0, Math.PI, false);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

}

function drawArc()
{

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 20);
    ctx.arcTo(150, 20, 150, 70, 50); // arcTo(start x, start y, end x, end y, radius)
    ctx.lineTo(150, 120);
    ctx.stroke();

}


