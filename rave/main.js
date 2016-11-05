var thisHoldsThePaths = ["music/comehome.mp3", "music/lights.mp3","music/pumpedupkicks.mp3"];

var indexNumber = Math.floor(Math.random() * (thisHoldsThePaths.length));

var audio = new Audio(thisHoldsThePaths[indexNumber]);
audio.load();
audio.play();

