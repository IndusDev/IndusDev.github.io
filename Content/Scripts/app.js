$(document).ready(function(){
  	new Glider(document.querySelector('.glider'), {
	  slidesToShow: 1,
	  dots: document.querySelector('.dots'),
	  draggable: true
	});

	new Glider(document.querySelector('.indvidual-glider'), {
	  slidesToShow: 1,
	  dots: document.querySelector('.individual-dots'),
	  draggable: true
	});

	$('#myTimeline').albeTimeline(data, {
		effect: "zoomIn",
		showMenu: false
	});
});