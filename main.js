var timer_counter=0;
var timer_check="";
var drawn_sketch="";
var answer_holder="";
score=0;

function preload(){
    classify = ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    canvas = mouseReleased(classify.canvas)
    synth = window.speechSynthesis
    background("white")
}

function clear_canvas(){
    background("white")
}

function draw(){
    stroke-weight(12)
    stroke(0)
    if (mouseIsPressed){
        line(pMouseX, pMouseY, mouseX, mouseY)
    }
}

function classifyCanvas(){
classify.classify(canvas, gotResult)
}

function gotResult(error, results){
if (error){
    console.error(error)
}
}

{
    console.log(results)
    document.getElementById("label").innerHTML = "label"+results[0].label
    document.getElementById("confidence").innerHTML = "confidence"+Math.round(results[0].confidence*100)+"%"
    utterThis = new SpeechSynthesisUtterance(results[0].label)
    synth.speak(utterThis)

}
