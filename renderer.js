// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {dialog} = require('electron').remote
const fs = require('fs');

let convertButton = getElement('#convert');
let chooseButton = getElement('#choose');
let filePath = '';

init();

function getElement (selector) {
	return document.querySelector(selector);
}

function init () {
	convertButton.addEventListener('click', convert);
	chooseButton.addEventListener('click', openDialog)
}

function renderComponent (selector, attrs, children) {

	const component = getElement(selector);

	for(let prop in attrs) {

		if(prop == 'disabled') {
			component[prop] = attrs[prop];
		} else {
			component.setAttribute(prop, attrs[prop]);
		}
	}

	if(children) {
		component.innerHTML = children;
	}

}

function convert () {
	startLoading()
}

function stopLoading () {
	
	renderComponent('#convert', {
		'data-state':'normal',
		'disabled': true
	} ,'convert');

}

function startLoading () {

	
	renderComponent('#convert', {
		'data-state':'loading',
		'disabled': true
	} ,'<div class="loader">Loading...</div>');

}

function openDialog () {
	dialog.showOpenDialog({
		properties: ['openFile', 'openDirectory']
	}, (filePath) => {

		filePath = filePath;

		renderComponent('#convert', {
			'disabled': false
		});


	})
}