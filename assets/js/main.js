/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center',
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);



$(".read-more-content").addClass("hide")
$(".read-more-show, .read-more-hide").removeClass("hide")

$(".read-more-show").on("click",function(e){
	$(this).next(".read-more-content").removeClass("hide");
	$(this).addClass("hide");
	e.preventDefault();
});
$(".read-more-hide").on("click",function(e){
	var p = $(this).parent(".read-more-content");
	p.addClass("hide");
	p.prev(".read-more-show").removeClass("hide");
	e.preventDefault();
});


function initMap() {
	var uluru = {lat: 53.0091, lng: -2.1761};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 14,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}


let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const output = document.getElementById("userLocation");

var map;
var infowindow;

function success(pos) {
	
	let latitude  = pos.coords.latitude;
    let longitude = pos.coords.longitude;
	let accuracy = pos.coords.accuracy;

   // output.innerHTML = `Latitude is ${latitude} and Longitude is ${longitude}. More or less ${accuracy} metres.`;
	
	var pyrmont = {lat: latitude, lng: longitude};
	map = new google.maps.Map(document.getElementById("userMap"), {
		center: pyrmont,
		zoom: 14
	});
	
	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: pyrmont,
		radius: 5000,
		type: ["train_station"]
	}, callback);
}
function callback(results, status){
	if(status === google.maps.places.PlacesServiceStatus.OK){
		for(var i = 0; i < results.length; i++){
			createMarker(results[i]);
		}
	}
}
function createMarker(place, text, label){
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map:map,
		position: place.geometry.location,
	});
	google.maps.event.addListener(marker, "click",function(){
		infowindow.setContent(place.name);
		infowindow.open(map,this);
	});
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

function loadUpScreen(param){
	var time = param;
	setTimeout(function(){
		$("#loader-wrapper").hide();
	},time);
}



var emailAdd = document.getElementById("email");

emailAdd.addEventListener("keyup", function (event) {
  if (emailAdd.validity.typeMismatch) {
    emailAdd.setCustomValidity("Please input a valid email address");
  } else {
    emailAdd.setCustomValidity("");
  }
});
