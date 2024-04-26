
const magicnumber = Math.floor(Math.random()*101)
document.getElementById('guesssubmit').addEventListener("click",checkguess);
function checkguess() {
    let guesssubmit = document.getElementById("numberinput").value;
    if(guesssubmit < magicnumber) {
        document.getElementById('feedback').innerText = "too low";
    }
    else if (guesssubmit > magicnumber) {
        document.getElementById('feedback').innerText = "too high";
    }    
    else {
        document.getElementById('feedback').innerText = "you did it";

    }
}
document.getElementById('squaredSubmit').addEventListener("click",numberSquared);

function numberSquared() {
    let squaredSubmit = document.getElementById("squaredNumberInput").value;
        document.getElementById('squaredFeedback').innerText = squaredSubmit*squaredSubmit;
}
