img = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);

    fill("#ff0000");
    text("Cat", 320, 100);
    noFill();
    stroke("#ff0000");
    rect(300, 70, 270, 320);

    fill("#ff0000");
    text("bowl", 290, 320);
    noFill();
    stroke("#ff0000");
    rect(280, 305, 120, 100);
}