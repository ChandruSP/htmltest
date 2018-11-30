$(document).ready(function(){

	var ismobile = (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
	var isiPad = navigator.userAgent.match(/iPad/i) != null;	

	//Selectbox script
	if ($('.selectpicker').length){
		$('.selectpicker').selectpicker();
	}

	$('.navbar-toggle').click(function (e) {
		if ($(this).hasClass('expand')) {
			$('.menu-section').addClass('push-left');
			$('.navbar-toggle').addClass('active');
			setTimeout(function () {
				$('.navbar-toggle').removeClass('expand');
				$('.navbar-toggle').addClass('collapse');
			}, 500);
		}
		if ($(this).hasClass('collapse')) {
			$('.menu-section').removeClass('push-left');    
			$('.navbar-toggle').removeClass('active');    
			setTimeout(function () {
				$('.navbar-toggle').removeClass('collapse');
				$('.navbar-toggle').addClass('expand');
			}, 500);
		}
		return false;
	});
	$('.close-menuicon').click(function(e){
		$('.menu-section').removeClass('push-left');    
		$('.navbar-toggle').removeClass('active');    
		setTimeout(function () {
			$('.navbar-toggle').removeClass('collapse');
			$('.navbar-toggle').addClass('expand');
		}, 500);
	});

	$(document).mouseup(function (e){
		var menucontainer = $('.menu-section');
		if(!menucontainer.is(e.target) && menucontainer.has(e.target).length === 0){
			menucontainer.removeClass('push-left');
			$('.navbar-toggle').removeClass('active'); 
			setTimeout(function () {
				$('.navbar-toggle').removeClass('collapse');
				$('.navbar-toggle').addClass('expand');
			}, 500);
		}
	});

	$('.menu-section ul li a').click(function(e){
		e.stopPropagation();
	});

	$(".arrow-right").bind("click", function (event) {
		event.preventDefault();
		$(".vid-list-container").stop().animate({
			scrollLeft: "+=124"
		}, 750);
	});
	$(".arrow-left").bind("click", function (event) {
		event.preventDefault();
		$(".vid-list-container").stop().animate({
			scrollLeft: "-=124"
		}, 750);
	});

	$('.video-playbtn').on('click', function(ev) {		
        $("#vid_frame")[0].src += "&autoplay=1";
		$(this).hide();
        ev.preventDefault();
    });
	$('.vid-item').on('click', function(ev){
		$('.video-playbtn').hide();
	});

	$('.gallery-sec ul li').click(function(){	
		$('.gallery-sec ul li').removeClass('active');
		$(this).addClass('active');
		
		var tmp_div = $(this).attr('data-href');
		if(tmp_div == 'img-section'){
			$('.img-section').show();
			$('.video-section').hide();
		}else{
			$('.img-section').hide();
			$('.video-section').show();
		}						
		return false;
	});

	if($('body').hasClass('arabic')){
		var calrtlfunction = true;
	}else{
		var calrtlfunction = false;
	}

	if ($('#calendar').length){
		$('#calendar').fullCalendar({
			defaultDate: new Date(),
			editable: true,
			eventLimit: true,
			contentHeight: 'auto',
			aspectRatio: 2,
			isRTL:calrtlfunction,
			header: {
				left: 'prevYear,prev',
				center: 'title',
				right: 'next,nextYear'
			},
			buttonText: {		
				prevYear: parseInt(new Date().getFullYear(), 10) - 1,
				nextYear: parseInt(new Date().getFullYear(), 10) + 1
			}
		});
	}
	$('.fc-nextYear-button').click(function(){
		var get_month= $('#calendar').fullCalendar('getDate');
		    monthtext = get_month.format('YYYY');
		console.log(monthtext);
		$('.fc-nextYear-button').text(parseInt(monthtext) + 1);
		$('.fc-prevYear-button').text(parseInt(monthtext) - 1);
	});
	$('.fc-prevYear-button').click(function(){
		var get_month= $('#calendar').fullCalendar('getDate');
			monthtext = get_month.format('YYYY');
		console.log(monthtext);
		$('.fc-prevYear-button').text(parseInt(monthtext) - 1);
		$('.fc-nextYear-button').text(parseInt(monthtext) + 1);
	});

	$('.owl-carousel').owlCarousel({
		items:1,
		margin:0,
		dots:false,
		nav:true
	});

});
function inputfocus(input){
	input.className = 'form-control focussed';
}
function inputblur(input){
	if(input.value == ''){
		input.className = 'form-control';
	}
}
$.fn.isOnScreen = function(){
	
	var win = $(window);
	
	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	
	var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
	
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	
};