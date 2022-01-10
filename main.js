x = 0;
y = 0;
draw_circle = "";
draw_rec = "";
draw_square="";

var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is Listening Please Speak...";
    recognition.start();
    recognition.onresult = function (event) {
        console.log(event);
        var content = event.results[0][0].transcript;
        document.getElementById("status").innerHTML = "The Speech Has Been Recognised as : " + content;

        if (content=="circle") {
            x=Math.floor(Math.random()*800);
            y=Math.floor(Math.random()*500);
          document.getElementById("status").innerHTML="Started Drawing Circle";
          draw_circle="set";  
        }

        if (content=="rectangle") {
            x=Math.floor(Math.random()*800);
            y=Math.floor(Math.random()*500);
            document.getElementById("status").innerHTML="Started Drawing Rectangle";
            draw_rec="set";  
          }

          if (content=="square") {
            x=Math.floor(Math.random()*800);
            y=Math.floor(Math.random()*500);
            document.getElementById("status").innerHTML="Started Drawing Square";
            draw_square="set";  
          }
    }
}

function setup() {
    canvas=createCanvas(800,600);
}

function draw() {
    if (draw_circle=="set") {
        radius=Math.floor(Math.random()*100)+5;
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is Drawn";
        draw_circle="";
    }

    if (draw_rec=="set") {
        width=Math.floor(Math.random()*100);
        height=Math.floor(Math.random()*80);
        rect(x,y,width,height);
        document.getElementById("status").innerHTML="Rectangle is Drawn";
        draw_rec="";
    }

    if (draw_square=="set") {
        side=Math.floor(Math.random()*100);
        rect(x,y,side,side);
        document.getElementById("status").innerHTML="Square is Drawn";
        draw_square="";
    }

}