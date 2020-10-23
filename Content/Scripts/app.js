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
		showMenu: true
	});

	// $('#timeline-menu li a').on('click', () => {
	// 	console.log($(this).data);
	// 	//$("#myTimeline").scrollLeft($(e.attr('data-scroll')).position().left);
	// })

	$('#timeline-menu li a').each(function () {
	    var $this = $(this);
	    $this.on("click", function () {
	        $("#myTimeline").scrollLeft($($(this).data('scroll')).position().left);
	    });
	});

});




//$("#myTimeline").scrollLeft($('#y2020').position().left);