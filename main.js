Webcam.set ({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:110 
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" style="height: 270; width: 350px;" src="'+data_uri+'"/>';
    });
}

console.log('ml5 seconds until your computer DOESNT blow up: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Fl6kGkY1M/model.json', modelLoaded);

function modelLoaded() {
    console.log('ready to burst into NOT flames?? (๑•̀ㅂ•́)و✧');
}
function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction - " + prediction_1;
    speak_data_2 = "second prediction - " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speal_data_1 + speak_data_2);
    synth.speak(utterThis);
} 


function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction - " + prediction_1;
    speak_data_2 = "second prediction - " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
        console.log("your coding is..... intresting")
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "thumbs up") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "heart") {
            document.getElementById("update_emoji").innerHTML = "&#10084;";
        }
        if(results[0].label == "victory symbol/peace symbol") {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "rock :)") {
            document.getElementById("update_emoji").innerHTML = "&#129311;";
        }
        if(results[0].label == "hand") {
            document.getElementById("update_emoji").innerHTML = "&#128400;";
        }
        if(results[1].label == "thumbs up") {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if(results[1].label == "heart") {
            document.getElementById("update_emoji2").innerHTML = "&#10084;";
        }
        if(results[1].label == "victory symbol/peace symbol") {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";
        }
        if(results[1].label == "rock :)") {
            document.getElementById("update_emoji2").innerHTML = "&#129311;";
        }
        if(results[1].label == "hand") {
            document.getElementById("update_emoji2").innerHTML = "&#128400;";
        }
    }
}
