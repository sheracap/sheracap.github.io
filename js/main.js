$(document).ready(function(){
	$(".scroll-down-button").click(function(){
		$("html, body").animate({
	        scrollTop: $(".adventures-block").offset().top
	    }, 1500);
	});

	// MOBILE-PAN

	$(".menu-btn .menu-btn-in").click(function(){
		$(".mobile-panel-wr").addClass("opened");
		$(".mobile-panel").animate({
			"left": 0
		}, 500);
	});

	$(".close-btn").click(function(){
		$(".mobile-panel").animate({
			"left": "-100%"
		}, {
			duration: 300,
			complete: function() {
		      $(".mobile-panel-wr").removeClass("opened");
		    }
		});
	});

	$(document).click(function(event){
		if ( $(event.target).closest('.mobile-panel, .menu-btn').length ) {
			return true;
		}
		
		$(".close-btn").click();
	});

	// MOBILE-MENU

	var cloneMenu = $(".top-menu-wr .top-menu").clone();
	var cloneSoc = $(".soc-networks").clone();

	$(".mobile-panel").append(cloneMenu);
	$(".mobile-panel").append(cloneSoc);
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        })
});