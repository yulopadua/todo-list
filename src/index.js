console.log('testing index.js webpack');

const contentDiv = document.querySelector(".content");
const testH1 = document.createElement("h1");
testH1.textContent = "Test from webpack index.js";
contentDiv.appendChild(testH1);