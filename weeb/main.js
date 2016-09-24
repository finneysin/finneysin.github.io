var thisHoldsThePaths = ["music/badapple.mp3", "music/heartbreak.mp3"];

var indexNumber = Math.floor(Math.random() * (thisHoldsThePaths.length));

var audio = new Audio(thisHoldsThePaths[indexNumber]);
audio.load();
audio.play();