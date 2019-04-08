background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 205);
for(var y=129;y<=292;y+=40){
    for(var x=60;x<=300;x+=47){
        image(getImage("cute/StoneBlock"),x         ,y,47,67);
        }
    }
fill(120, 80, 19);
rect(180, 280, 40, 77);
for(var x = 80; x < 339; x+=65) {
    fill((x+random(214))%255, (x+random(214))%255, (x+random(214))%255);
    rect(x, 172, 43, 68);
    line(x+20, 172, x+20, 240);
    line(x, 207, x+44, 207);
    }
for(var x = 10; x < 400; x+=71) {
    fill(10, 102, 27);
    noStroke();
    ellipse(x, 393, 43, 68);
    ellipse((x+20), 393, 43, 68);
    ellipse(x+10, 386, 43, 68);
    fill(189, 21, 21);
    ellipse(x+5, 370, 10, 10);
    ellipse(x+8, 374, 10, 10);
    ellipse(x+10, 370, 10, 10);
    ellipse(x+22, 388, 10, 10);
    ellipse(x+28, 388, 10, 10);
    ellipse(x+25, 393, 10, 10);
    fill(0, 0, 0);
    ellipse(x+25, 390, 5, 5);
    ellipse(x+8, 373, 5, 5);
    }
