const slider = document.getElementById('scrollbar-container');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
    mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



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


function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(23.04974206415296, 72.50157402091503),
        zoom: 10,
    };
    var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    var marker = new google.maps.Marker({
        position: {
            lat: 23.04974206415296,
            lng: 72.50157402091503
        },
        map: map,
    });
}