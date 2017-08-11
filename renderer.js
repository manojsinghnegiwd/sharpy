// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {dialog} = require('electron').remote

const convertButton = document.querySelector('#convert');
const chooseButton = document.querySelector('#choose');

init();

function init () {
	convertButton.addEventListener('click', changeState);
	chooseButton.addEventListener('click', openDialog)
}

function changeState () {
	convertButton.innerHTML = '<div class="loader">Loading...</div>';
}

function openDialog () {
	dialog.showOpenDialog({
		properties: ['openFile', 'openDirectory']
	}, (filePaths) => {

		console.log(filePaths);

	})
}