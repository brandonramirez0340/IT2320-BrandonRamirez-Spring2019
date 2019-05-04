var ctx; // this is a global variable and is available to all methods

window.onload=function(){

    var myCanvas = document.getElementById("myCanvas"); // get the canvas first
    ctx = myCanvas.getContext("2d"); // returns all the methods for drawing on the canvas

    /* ROUNDED RECTANGULAR HOUSE */
    ctx.beginPath();
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "brown";
    ctx.lineJoin = "round";
    ctx.lineWidth = 20;
    ctx.rect(200, 200, 300, 250);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    /* ROUNDED TRIANGULAR ROOF */
    ctx.beginPath();
    ctx.strokeStyle = "darkslategray";
    ctx.fillStyle = "darkslategray";
    ctx.lineJoin = "round";
    ctx.lineWidth = 20;
    ctx.moveTo(350, 40);
    ctx.lineTo(600, 200);
    ctx.lineTo(100, 200);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    /* ROUND WINDOW */
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(350, 150, 50, 0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fill();
    /* HORIZONTAL LINE */
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.rect(348, 100, 4, 100);
    ctx.closePath();
    ctx.fill();
    /* VERTICAL LINE */
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.rect(300, 148, 100, 4);
    ctx.closePath();
    ctx.fill();
    
    /* RECTANGULAR WINDOW */
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(225, 300, 100, 75);
    ctx.closePath();
    ctx.fill();
    /* HORIZONTAL LINE */
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.rect(272, 300, 4, 75);
    ctx.closePath();
    ctx.fill();
    /* VERTICAL LINE */
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.rect(225, 337, 100, 4);
    ctx.closePath();
    ctx.fill();

    /* RECTANGULAR DOOR */
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(375, 300, 100, 150);
    ctx.closePath();
    ctx.fill();
    /* DOORKNOB */
    ctx.beginPath();
    ctx.fillStyle = "gold";
    ctx.arc(390, 375, 5, 0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fill();
}