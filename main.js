//Note: Try landscaping mode for better code's visibility on your mobile.

//THE DEVICE'S BATTERY
//What will be the 'loading status' of this device?
var batteryStatus = [0],
    percentage = (99).toString(),
    isCharged = "?";

//Analysing Status
batteryStatus[percentage] = 100;
isCharged = (batteryStatus.length === 100) ?
"Device fully charged" : "Loading...";

if(isNaN(percentage))
       isCharged = "Discharged";


//What is the output of 'isCharged'?
////////////////////////////////
//YOUR OPTIONS:

//A) Discharged
//B) Device fully charged
//C) Loading...















































































































































































//You are a curious person hehe Perhaps you are here interested to know about the  self typing effect...cool, isn't it? (=

//Then here you can check it out
window.onload = function() {
    var probcaseTitle = "PROB CASE: Device's Battery",
    buttonOutput = document.getElementsByClassName("buttonOutput")[0];
    buttonOutput.addEventListener("click", showAnswer);

    function showAnswer() {
        setTimeout(function() {
            var messageIntro = "Tell me. Did you analyze the question and have the answer?\nThen you can click OK. Otherwise go solving the Prob Case!";
            var messageAnsw = probcaseTitle + "\noutput:\n" + isCharged + "\n\n\n\n\n I congratulate you if you got it right.\nOtherwise try other prob cases!";
            if(confirm(messageIntro)) {
                alert(messageAnsw);
            } else {
                //it does not exactly close on mobile.
                window.close();
            }
        }, 3000);
    }

    (function selfTyping() {
        var targetText = probcaseTitle, leng = targetText.length,
            targetElement = document.querySelector(".backgroundCode span"),
            indLetter = 0, speedLetter = 400;

        setInterval(function() {
            targetElement.innerHTML += targetText.charAt(indLetter);
            indLetter++;
            leng--;

            if(leng < 0) {
                clearInterval(this);
                return;
            }
        }, speedLetter); //milliseconds
    })();



};


/*
By: Luis Febro
Goal: MY JS PROB CASES - Creating some Practical Problems for honing and training programming skills, particularly for Javascript language.
Date: 03/17/19
*/