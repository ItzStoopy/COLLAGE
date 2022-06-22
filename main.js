var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{

document.getElementById("camera").innerHTML="";
recognition.start();

}

recognition.onresult = function(event) {

console.log (event);
var Content = event.results[0][0].transcript;
console.log(Content);
if (Content == "take my selfie")
{
    console.log("taking selfie, please wait 5 seconds");
  speak();
}
document.getElementById("text").innerHTML=Content;
speak();

}

function speak(){

var synth = window.speechSynthesis;

save1 = "Taking your selfie in 5 seconds.";

var utterThis = new SpeechSynthesisUtterance(save1);
synth.speak (utterThis);
Webcam.attach(camera);
setTimeout(function()
{
    selfie();
    save();
},5000);
}

Webcam.set({

width: 360,
height: 250,
image_format:"png",
png_quality:90

});

camera = document.getElementById("webcam");


function selfie()
{

Webcam.snap (function(data_uri){
    document.getElementById("resultRow").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
});

}

function save ()
{

    link = document.getElementById("link");
image = document.getElementById("selfie_image").src;
link.href = image 
link.click();

}