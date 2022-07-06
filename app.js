const submit = document.getElementById("checkButton");
console.log(submit);
var randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);
var text;
var live=10;
const lives = document.getElementById("attemptCount");
console.log(lives);
const message = document.getElementById("message");
console.log(message);
submit.onclick = () =>{
    var inputvalue = document.getElementById("textBox").value;
    console.log(inputvalue)
    live--;
    if(inputvalue==randomNumber){
        location.href = `./win.html`;
    }
    else if(live === 0){
        location.href = `./lose.html`;
    }
    else if(inputvalue > randomNumber){
        text = `GUESSED NUMBER IS BIG`;
    }
    else if(inputvalue < randomNumber){
        text = `GUESSED NUMBER IS SMALL`;
    }
console.log(live);
console.log(text);
message.style.display = "inherit";
message.innerHTML = text;
lives.innerHTML = live;
}