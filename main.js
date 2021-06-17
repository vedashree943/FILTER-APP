function preload() {
    
}
function setup(p) {
Canvas=createCanvas(640,480);
Canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";
}
function draw() {
    image(video,0,0,640,480);
    tint(tint_color);
    
}
function take_snapshot() {
    save("download.png");
    
}
function filter_tint() {
    tint_color=document.getElementById("colour_name").value;
}