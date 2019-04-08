var xPositions = [];
var yPositions = [];
var colour = [];
for(var i = 0; i < 8; i++){
    xPositions.push(random(0,400));
    yPositions.push(0);
    colour.push(color(random(0,255),random(0,255),random(0,255)));
    
}
mouseClicked = function(){
    xPositions.push(mouseX);
    yPositions.push(0);
    colour.push(color(random(0,255),random(0,255),random(0,255)));
};
draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colour[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        image(getImage("cute/GemBlue"),xPositions[i]-13, yPositions[i]+40,30,30);
        yPositions[i] += 5;
        if(yPositions[i]>400){
            yPositions[i]=0;
            xPositions[i]=random(0,400);
            colour =[color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255)),color(random(0,255),random(0,255),random(0,255))];
        }
    }
};
