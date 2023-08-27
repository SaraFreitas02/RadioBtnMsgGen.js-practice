// select the html elements
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const message = document.getElementById("message");

//select the elements to be created
const htmlMess = document.createElement("p");
htmlMess.textContent = "Basic... You are basic..."
const cssMess = document.createElement("p");
cssMess.textContent = "Ooooh... you like pretty things!";
const jsMess = document.createElement("p");
jsMess.textContent = "Aspiring programmer?"

//error handling
if (!html || !css || !js || !message) {
    cosole.error("Missing Elements");
}

//handle the choice "html"
html.addEventListener('change', function htmlAlert() {
    if (html.checked === true) {
        if (!message.contains(htmlMess)) {
            message.appendChild(htmlMess);
        }
        if (message.contains(cssMess)) {
            message.removeChild(cssMess);
        }
        if (message.contains(jsMess)) {
            message.removeChild(jsMess);
        }
    }
});

//handle the choice "css"
css.addEventListener('change', function cssAlert() {
    if (css.checked === true) {
        if (!message.contains(cssMess)) {
            message.appendChild(cssMess);
        }
        if (message.contains(htmlMess)) {
            message.removeChild(htmlMess);
        }
        if (message.contains(jsMess)) {
            message.removeChild(jsMess);
        }
    }
});

//handle the choice "js"
js.addEventListener('change', function jsAlert() {
    if (js.checked === true) {
        if (!message.contains(jsMess)) {
            message.appendChild(jsMess);
        }
        if (message.contains(htmlMess)) {
            message.removeChild(htmlMess);
        }
        if (message.contains(cssMess)) {
            message.removeChild(cssMess);
        }
    }
});