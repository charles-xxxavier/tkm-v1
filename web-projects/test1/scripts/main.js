var myimage = document.querySelector("img");

myimage.onclick = function () {
    var mysrc = myimage.getAttribute("src");
    if (mysrc === "images/firefox-icon.png"){
        myimage.setAttribute("src", "images/firefox2.png");
    }
    else {
        myimage.setAttribute("src", "images/firefox-icon.png");
    }
};

//ffffffffffffffffffffffffff


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Здарова, " + myName;
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Здарова", " + storedName;
}


myButton.onclick = function () {
    setUserName();
  };
  