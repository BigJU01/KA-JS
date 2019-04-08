var book = [
    {
        title: "The Giver",
        stars: 3,
        authour: "bill",
        color: color(255, 0, 0),
        good: false
    },
    {
        title: "hunger games",
        stars: 4,
        authour: "jill",
        color: color(0, 255, 0),
        good: true
    },
    {
        title: "harry potter",
        stars: 5,
        authour: "dill",
        color: color(0, 0, 255),
        good: true
    },
    {   
        title: "school",
        stars: 2,
        authour: "vill",
        color: color(100, 100, 255),
        good: false
    },
    {
        title: "The Giver",
        stars: 3,
        authour: "bill",
        color: color(255, 0, 0),
        good: false
    },
    {
        title: "hunger games",
        stars: 4,
        authour: "jill",
        color: color(0, 255, 0),
        good: true
    },
    {
        title: "harry potter",
        stars: 5,
        authour: "dill",
        color: color(0, 0, 255),
        good: true
    },
    {   
        title: "school",
        stars: 2,
        authour: "vill",
        color: color(100, 100, 255),
        good: false
    }
];
var y=110;
var bookX=3;
var bookY=20;
// draw shelf
fill(173, 117, 33);
rect(0, y, width, 10);
for(var i = 0;i<book.length;i++){
    if(i%4===0&&i!==0){
        bookY+=110;
        y+=110;
        bookX=3;
        fill(173, 117, 33);
        rect(0, y, width, 10);
    }

// draw book
    fill(book[i].color);
    rect(bookX, bookY, 90, 90);
    bookX+=96;
    fill(0, 0, 0);
    text("titile: "+book[i].title, bookX+-83, bookY+12, 70, 100);
    text("authour: "+book[i].authour, bookX+-89, bookY+50, 66, 100);
    if(book[i].good===true){
        image(getImage("creatures/Hopper-Cool"), bookX+-27, bookY+61, 20, 27);
    }
    
    for (var j = 0; j < book[i].stars; j++) {
    image(getImage("cute/Star"), 5+j*11 + bookX-100, bookY+57, 21, 34);
    }
}
