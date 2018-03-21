window.onload = function() {
    document.getElementsByTagName('video')[0].onclick = function(){
        var video = document.getElementsByTagName('video')[0];
        if(video.paused)
            video.play();
        else
            video.pause();
    }
    document.getElementById("pause").onclick = function() {
        document.getElementsByTagName('video')[0].pause();
    };

    document.getElementById("play").onclick = function() {
        document.getElementsByTagName('video')[0].play();
    };


    document.getElementById("stop").onclick = function() {
        document.getElementsByTagName('video')[0].currentTime=0;
        document.getElementsByTagName('video')[0].pause();
    };

};