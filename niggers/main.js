var canvas = document.getElementById("googles");
var context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



function drawSquare(xval, yval, colorCodez, diameter){
    context.beginPath();
    context.arc(xval,yval,diameter,1, Math.PI * 2);
    context.fillStyle = colorCodez;
    context.fill();
    context.closePath(); 
}



canvas.addEventListener("mousemove", function(event){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawSquare(event.clientX, event.clientY,"#440b80", 5);

}
);