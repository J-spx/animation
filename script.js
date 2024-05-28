let canvas;
let ctx;
let incrementor = 0;
let decrementor = 520;

window.onload = function () {
    canvas = document.getElementById("creativeCoding");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    setInterval(drawBoxxy, 30);
}

function drawBoxxy() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Stadium divider Line
    ctx.beginPath();
    ctx.lineWidth = "8"
    ctx.strokeStyle = "white";
    ctx.moveTo(300, 0);
    ctx.lineTo(innerHeight, 60000);
    ctx.stroke();
    ctx.closePath();
    
    // Blue and red bar
    ctx.fillStyle = "blue";
    ctx.fillRect(50, incrementor++, 50, 200);
    ctx.fillStyle = "red";
    ctx.fillRect(550, decrementor--, 50, 200);

    // Ball
    ctx.beginPath();
    ctx.arc(decrementor--, decrementor-- + 80, 16, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}
