/*!
 * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function ($) {
	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop: target.offset().top - 70,
					},
					1000,
					"easeInOutExpo"
				);
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$(".js-scroll-trigger").click(function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$("body").scrollspy({
		target: "#mainNav",
		offset: 100,
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// Functionality for swapping out images on mouseover

$("#showcase").on({
	mouseenter: function () {
		this.setAttribute("src", "assets/img/burger-color.png");
	},
	mouseleave: function () {
		this.setAttribute("src", "assets/img/burger-bw.png");
	},
});

$("#project1").on({
	mouseenter: function () {
		this.setAttribute("src", "assets/img/mtg-color.png");
	},
	mouseleave: function () {
		this.setAttribute("src", "assets/img/mtg-bw.png");
	},
});

$("#project2").on({
	mouseenter: function () {
		this.setAttribute("src", "assets/img/weather-color.png");
	},
	mouseleave: function () {
		this.setAttribute("src", "assets/img/weather-bw.png");
	},
});

$("#search-form").on("submit", function (event) {
	event.preventDefault();
	// var date = new Date();
	var video = {
		startdate: parseInt($("#startdate").val().replace(/-/g, "")),
		enddate: parseInt($("#enddate").val().replace(/-/g, "")),
		region: $("#region").val(),
		type: $("#videotype").val(),
	};
	console.log(video);

	$.ajax({
		url:
			"https://nos36vuttb.execute-api.us-east-1.amazonaws.com/dev/api/getvideos",
		type: "GET",
		data: video,
	}).then(function (req, res) {
		console.log(res);
	});
});

$("#submit-form").on("submit", function (event) {
	event.preventDefault();
	var data = {
		date: parseInt($("#date").val().replace(/-/g, "")),
		region: $("#region").val(),
		type: $("#videotype").val(),
	};
	console.log(data);
	$.ajax({
		type: "POST",
		url:
			"https://arn:aws:lambda:us-east-1:980614374108:function:ASGM-WFU-dev-api",
		crossDomain: true,
		data: data,
		dataType: "json",
		contentType: "application/json",
	}).then(function () {
		console.log("successful upload!");
	});
});
