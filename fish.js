var bubbles = function(centerX,centerY){
  fill(222, 219, 222);
  ellipse(centerX,centerY,15,15);
  fill(255, 255, 255);
  ellipse(centerX+2,centerY-2,5,5);
};
var drawFish = function(centerX,centerY,bodyLength,bodyHeight,bodyColor,tailWidth,eyeSize,tailColor){
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
fill(tailColor);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
background(57, 195, 237);

mouseClicked = function(){drawFish(random(0, 400),random(0, 400),random(0, 200),random(0, 200),color(random(0, 400), random(0, 400), random(0, 400)),random(0, 400),random(0, 400),color(random(0, 400),random(0, 400),random(0, 400)));

drawFish(random(0, 400),random(0, 400),random(0, 200),random(0, 200),color(random(0, 400), random(0, 400), random(0, 400)),random(0, 400),random(0, 400),color(random(0, 400),random(0, 400),random(0, 400)));

drawFish(random(0, 400),random(0, 400),random(0, 200),random(0, 200),color(random(0, 400), random(0, 400), random(0, 400)),random(0, 400),random(0, 400),color(random(0, 400),random(0, 400),random(0, 400)));

drawFish(random(0, 400),random(0, 400),random(0, 200),random(0, 200),color(random(0, 400), random(0, 400), random(0, 400)),random(0, 400),random(0, 400),color(random(0, 400),random(0, 400),random(0, 400)));

drawFish(random(0, 400),random(0, 400),random(0, 200),random(0, 200),color(random(0, 400), random(0, 400), random(0, 400)),random(0, 400),random(0, 400),color(random(0, 400),random(0, 400),random(0, 400)));

bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
bubbles(random(0, 400),random(0, 400));
};
