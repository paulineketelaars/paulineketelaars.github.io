// References to html
let myHTML = document.querySelector('html');
let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

// Change image function
function clickFunction() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/harry-potter.jpg") {
      myImage.setAttribute ('src','images/PSV.jpg');
    } else {
      myImage.setAttribute ('src',"images/harry-potter.jpg");
    }
}

myImage.onclick = clickFunction;

//Username function
function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {setUserName();
  }else {	
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Jij bent de beste, ' + myName;
  }
}

myButton.onclick = setUserName;

//Initialization code
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hallo daar, ' + storedName;
}
