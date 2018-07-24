var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");
var myHeading2 = document.querySelector("h2");

myHeading.textContent = "Hello world!";
myHeading2.textContent = "Bob";

// iceCreamの内容によってアラートの表示内容を変える
var iceCream = "Chocolate";
if (iceCream === 'Chocolate') {
    alert("Nice! I love Chocolate ice!");
} else {
    alert("Oops, but I love Chocolate...");
};

// define sample function
// function multiply(num1, num2) {
//     var result = num1 * num2;
//     return result;
// }

// create action by click on everywhere in page 
// document.querySelector("html").onclick = function() {
//     alert("Hey! don't click me!")
// }

// change a image by click
var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === '../src/img/sota01.jpg') {
        myImage.setAttribute('src', '../src/img/sota02.jpg');
    } else {
        myImage.setAttribute('src', '../src/img/sota01.jpg')
    }
}

// define a function for personalised greeting
function setUserName() {
    var myName = prompt("please fill in your name");
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + "! you are awesome!"
}


// initialization
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + "! you are awesome!"
}


// create event handler with click
myButton.onclick = function() {
    setUserName();
}