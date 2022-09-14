x=0;
y=0;
draw_circ=""
draw_rec=""


var SpeechRecognition=window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("status").innerHTML="system is listening please speak now"
    recognition.start()
}
recognition.onresult=function(event) {
    console.log(event)
    var content=event.results[0] [0].transcript
    console.log(content)
    document.getElementById("status").innerHTML="speech is recognized as: " + content
    if (content=="circle") {
        draw_circ="set"
        x=Math.floor(Math.random()*800)
        y=Math.floor(Math.random()*500)
    }
    if (content=="rectangle") {
        draw_rec="set"
        x=Math.floor(Math.random()*800)
        y=Math.floor(Math.random()*500)
    }
}
function setup() {
    canvas = createCanvas(900, 600)
}
function draw() {
    fill("black")
    stroke("red")
    if (draw_circ== "set") {
        circle(x, y, 73)
        draw_circ=""
        document.getElementById("status").innerHTML="circle drawn :)"
    }
    if (draw_rec== "set") {
        rect(x, y, 73, 20)
        draw_rec=""
        document.getElementById("status").innerHTML="rectangle drawn :.("
    }
}