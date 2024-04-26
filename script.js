let canvas;
let ctx;
let incrementor = -60;
let decrementor = 500;

window.onload = function () {
    canvas = document.getElementById("creativeCoding");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    setInterval(drawBoxxy, 50);
  };


function drawBoxxy() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    // Blue and red bar
    ctx.fillStyle = "blue";
    ctx.fillRect(50, incrementor++, 50, 200);
    ctx.fillStyle = "red";
    ctx.fillRect(550, decrementor--, 50, 200);
    // Ball
    ctx.beginPath();
    ctx.arc(decrementor--, decrementor--, 16, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();
}