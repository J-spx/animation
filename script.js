let canvas;
let ctx;
let incrementor = 0;
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
  
    ctx.fillStyle = "blue";
    ctx.fillRect(1, incrementor++, 50, 200);
    ctx.fillStyle = "green";
    ctx.fillRect(decrementor--, decrementor--, 50, 50);
    ctx.fillStyle = "red";
    ctx.fillRect(601, decrementor--, 50, 200);
}