/* openNav and closeNav */

/* open variable */
var is_nav_open = false
 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  is_nav_open = true
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  is_nav_open = false
}


/* open or close depending on status */
function toggleNav() {
	if(is_nav_open == false) {
	   is_nav_open = true;
		openNav();
	} else {
		is_nav_open = false;
		closeNav();
	}
}

/* also show sidebar when mouse approaches left-hand side of page */
$(window).on('mousemove', mouseMoveHandler);

function mouseMoveHandler(e) {
    if (e.pageX < 20 & is_nav_open == false) {
		openNav();
	}
}