twice = "";
bts = "";

function preload() {
    song = loadSound("BTS.mp3");
    song = loadSound("TWICE.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}