/* justify or left-align text */

/* open variable */
var is_justified = false

function justify() {
	document.getElementById("main").style.textAlign = "justify";
}

function leftalign() {
	document.getElementById("main").style.textAlign = "left"
}


/* uncomment if you want a function that justifies and left-aligns with the same button

function justify() {

	if(is_justified == false) {
		document.getElementById("main").style.textAlign = "justify";
		// document.getElementById('align').src = "img/leftaligned-icon.svg";
		is_justified = true;
	} else {
		document.getElementById("main").style.textAlign = "left";
		// document.getElementById('align').src = "img/justified-icon.svg";
		is_justified = false;
	}



} */
