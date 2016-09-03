var oniichan
var oniichan = new Audio ("nuggets.mp3")
oniichan.play();

function sayoniichan() {
    var oniichan = new Audio("nuggets.mp3")
    oniichan.play();
}

$("#onii").on("click", sayoniichan);

jQuery(function($) {
    $("#bgAudio").prop("volume", 0.2);

    window.setVolume = function(bgAudio, vol) {
        sounds[bgAudio].volume = vol;
    }
});