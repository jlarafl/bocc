var myNav = document.getElementById("navbar");
var logo = document.getElementById("logo");
var links = document.querySelectorAll("#navbar-a a"); // selects all <a> inside #lista
var navlink1 = document.getElementById("navlink1")
var navlink2 = document.getElementById("navlink2")
var navlink3 = document.getElementById("navlink3")
var navlink4 = document.getElementById("navlink4")

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("navbarScroll");
	logo.classList.add("logo-scroll");
    links.forEach((link)=>link.style.color = "white"); 
    navlink1.classList.add("navbar-a");
    navlink2.classList.add("navbar-a");
    navlink3.classList.add("navbar-a");
    navlink4.classList.add("navbar-a");
  } else {
    myNav.classList.remove("navbarScroll");
	logo.classList.remove("logo-scroll");
    links.forEach((link)=>link.style.color = "#283618");
    navlink1.classList.remove("navbar-a");
    navlink2.classList.remove("navbar-a");
    navlink3.classList.remove("navbar-a");
    navlink4.classList.remove("navbar-a");
  }
};






var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
	containerWidth = container.offsetWidth;
	setParams(containerWidth);
}

function setParams(w) {
	if (w < 551) {
		slidesPerPage = 1;
	} else {
		if (w < 901) {
			slidesPerPage = 2;
		} else {
			if (w < 1101) {
				slidesPerPage = 3;
			} else {
				slidesPerPage = 4;
			}
		}
	}
	slidesCount = slides - slidesPerPage;
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage;
	};
	currentMargin = - currentPosition * (100 / slidesPerPage);
	slider.style.marginLeft = currentMargin + '%';
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
	if (currentPosition >= slidesCount) {
		buttons[1].classList.add('inactive');
	}
}

setParams();

function slideRight() {
	if (currentPosition != 0) {
		slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
		currentMargin += (100 / slidesPerPage);
		currentPosition--;
	};
	if (currentPosition === 0) {
		buttons[0].classList.add('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
};

function slideLeft() {
	if (currentPosition != slidesCount) {
		slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
		currentMargin -= (100 / slidesPerPage);
		currentPosition++;
	};
	if (currentPosition == slidesCount) {
		buttons[1].classList.add('inactive');
	}
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
};

