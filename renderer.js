// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var convertButton = document.querySelector('#convert');

init();

function init () {
	convertButton.addEventListener('click', changeState);
}

function changeState () {
	convertButton.innerHTML = '<div class="loader">Loading...</div>';
}