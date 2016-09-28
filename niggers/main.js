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

var track1 = new Audio('music/choose.mp3');
track1.play();
var currentTrack = 0;

track1.onended = function(){playtrack2()};
function playtrack2() {
    switch (currentTrack) {
        case 0:
        track1 = new Audio('music/desire.mp3');
        track1.play();
        break;
        
        case 1:
        track1 = new Audio('music/caramell.mp3');
        track1.play();
        break;
    }
    currentTrack++;
}

