fill(0, 0, 0);
ellipse(200, 200, 375, 375);
var answer = floor(random(1, 5));
if (answer === 1) {
    fill(112, 61, 109);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You will", 176, 200);
    text("get a promotion", 159, 229); 
}
else if (answer === 2) {
    fill(17, 219, 17);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You will go", 173, 200);
    text("on a trip", 177, 229); 
}
else if (answer === 3) {
    fill(166, 166, 15);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You'll get ", 176, 200);
    text("bank next pay", 164, 229); 
}
else{
    fill(6, 80, 207);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("Your time will", 165, 204);
    text("expire in 3 days", 159, 229); 
}
