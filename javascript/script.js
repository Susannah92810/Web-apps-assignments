function setGreeting() {
    let now = new Date(); //Built in class in Javascript
    console.log("I am printing time: " + now.getHours());
    let greeting = "";

    if (now.getHours() < 12) {
       greeting = "Good Morning"
    }
    else if (now.getHours() < 18 && now.getHours() > 12) {
        greeting = "Good Afternoon"
    }
    else {
        greeting = "Good Evening"
    }
    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}
window.onload = function () {
    setGreeting();
}
function setButtonText(){
    document.getElementById("buttonClickText").textContent = "Hello";
}
function setTimeText(){
    let dateTime = new Date();
    document.getElementById("buttonDateText").textContent = dateTime;
}

function sum(){
    let x = parseInt(document.getElementById("firstInput").value);
    let y = parseInt(document.getElementById("secondInput").value);
    let sum = x+y;
    document.getElementById("sumText").textContent = sum;

}

function ILength(){
    let numLength = (document.getElementById("lengthInput").value).length;
    document.getElementById("lengthText").textContent = "The length of the text is: " + numLength;

}


function togglePassword(){
    let password = document.getElementById("passwordInput");
    if (password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}

function changeS(){
    let changeStuff = document.getElementById("changeText");
    changeStuff.style.color.#E35335;
}