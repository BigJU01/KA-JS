var smogX = 320;
var smogY = 195;
draw = function() {
    background(255, 0, 0);
    fill(199, 199, 199);
    textSize(50);
    text("Smog Absorber!", 10, 49);
    fill(9, 224, 9);
    textSize(16);
    text("compact! easy to use! derable! enviormental saviour!", 14, 113);
    fill(8, 8, 8);
    rect(0,182,122,26);
    fill(250, 250, 250);
    ellipse(70,195,15,15);
    fill(189, 185, 185);
    triangle(122,182,122,208,148,195);
    fill(255, 255, 255);
    ellipse(147,195,4,10);
    ellipse(smogX,smogY,10,10);
    ellipse(smogX+10,smogY,10,10);
    ellipse(smogX+6,smogY-7,10,10);
    ellipse(smogX+55,smogY,10,10);
    ellipse(smogX+65,smogY,10,10);
    ellipse(smogX+60,smogY-7,10,10);
    ellipse(smogX+110,smogY,10,10);
    ellipse(smogX+120,smogY,10,10);
    ellipse(smogX+115,smogY-7,10,10);
    smogX -= 3;
};
