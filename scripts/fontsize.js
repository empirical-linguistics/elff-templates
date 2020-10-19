
/* initial fontsize */
var fontsize = 13;
var pixel    = "px";


/* document.querySelector('#increase').addEventListener('click', increaseFontSize);


document.querySelector('#decrease').addEventListener('click', decreaseFontSize); */

/* increase fontsize */
function incrfont() {
	fontsize = fontsize + 1;
	document.body.style.fontSize = fontsize + pixel;
	
}

/* decrease fontsize */
function decrfont() {
	fontsize = fontsize - 1;
	document.body.style.fontSize = fontsize + pixel;
}

