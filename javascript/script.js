//Checks date and time to display a greeting
function setGreeting() {
    let now = new Date(); //Built in class in Javascript
    console.log("I am printing time: " + now.getHours());
    let greeting = "";
    // If statement  to detremine the output
    if (now.getHours() < 12) {
       greeting = "Good Morning"
    }
    else if (now.getHours() < 18 && now.getHours() > 12) {
        greeting = "Good Afternoon"
    }
    else {
        greeting = "Good Evening"
    }
    console.log(greeting); //Prints greeting in console
    document.getElementById("greetingOutput").textContent = greeting;//Fins html element and displays greeting on their
}
//Runs function automatically
window.onload = function () {
    setGreeting();
}
//Changes a specific element to display hello when a button is clicked
function setButtonText(){
    document.getElementById("buttonClickText").textContent = "Hello";
}
//Displays date and time
function setTimeText(){
    let dateTime = new Date();
    document.getElementById("buttonDateText").textContent = dateTime;
}

//Gets two numbers from the html and adds them together
function sum(){
    let x = parseInt(document.getElementById("firstInput").value); //Takes the input from a text box
    let y = parseInt(document.getElementById("secondInput").value);
    let sum = x+y; //Add the two numbers together
    document.getElementById("sumText").textContent = sum; //Pushes back to be displayed on the html

}

//Gets the  length of an input
function ILength(){
    let numLength = (document.getElementById("lengthInput").value).length; //Takes the length of an input pulled from a text box
    document.getElementById("lengthText").textContent = "The length of the text is: " + numLength;//Pushes back to be displayed on the html

}

//Allows user to toggle the passowrd
function togglePassword(){
    let password = document.getElementById("passwordInput");
    if (password.type === "password"){ //If statement to determine what to assign the password type
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}

//Function allows the user to change  some text
 function changeS(){
     let changeStuff = document.getElementById("changeText"); //Takes the text
     changeStuff.style.color = "#E35335"; //Change the color of the text
     changeStuff.style.fontSize = "24px"; //Change the size if the text
     changeStuff.style.fontStyle = "italic"; //Make the text italic
     document.getElementById("changeText").value.textContent =  changeStuff; //Pushes text back into html
 }

 //Function allows the user to hide and show text
 function hideShow(){
    let hideS = document.getElementById("hideShowText")
        if (hideS.hidden === true){ //If statement checks if the hidden function of the element is on and checks accoridngly
        hideS.hidden = false;
    }
        else{
        hideS.hidden = true;
    }


 }