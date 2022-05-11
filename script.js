let buttonStatus = 'play';

function toggleDrawer() {
    let drawer = document.getElementById("nav-list-div");
    console.log(drawer.className);
    drawer.classList.remove("nav-list-div");
    if (drawer.className === "navHide" || drawer.className === "") {
        drawer.classList.add("navShow");
        drawer.classList.remove("navHide");
    } else {
        drawer.classList.add("navHide");
        drawer.classList.remove("navShow");
    }
}

function playFunction(){
    let myVideo = document.getElementById("video1");
    myVideo.play();
    let playBtn = document.getElementById("play-btn");
    playBtn.classList.add("play-btn-toggle");
    let pauseBtn = document.getElementById("pause-btn");
    pauseBtn.classList.remove("play-btn-toggle");
    buttonStatus = 'pause';
}

function pauseFunction(){
    let myVideo = document.getElementById("video1");
    myVideo.pause();
    let playBtn = document.getElementById("play-btn");
    playBtn.classList.remove("play-btn-toggle");
    let pauseBtn = document.getElementById("pause-btn");
    pauseBtn.classList.add("play-btn-toggle");
    buttonStatus = 'play';
}

function hoverVideo(){
    if(buttonStatus == 'play'){
        let playBtn = document.getElementById("play-btn");
        playBtn.classList.remove("play-btn-toggle");
    }
    else if(buttonStatus == 'pause'){
        let pauseBtn = document.getElementById("pause-btn");
        pauseBtn.classList.remove("play-btn-toggle");
    }
}

function hoverOut(){
    let playBtn = document.getElementById("play-btn");
    playBtn.classList.add("play-btn-toggle");
    let pauseBtn = document.getElementById("pause-btn");
    pauseBtn.classList.add("play-btn-toggle");
}