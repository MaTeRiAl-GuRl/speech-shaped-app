function setup(){
    canvas = createCanvas(900,600);
}

x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
   
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById('status').innerHTML = "The speech has been recognized as: " + content;
    if(content =="Circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content =="rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
    if(content =="Square")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square";
        draw_square = "set";
    }
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }
    
    if(draw_rect == "set"){
        rect(x,y,60,40);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
   
    if(draw_square == "set"){
        rect(x,y,40,40);
        document.getElementById("status").innerHTML = "Square is drawn.";
        draw_square = "";
    }
}