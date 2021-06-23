

 //increase quantity by DAY
function pluse() {
  let qnty = +$('.qnty').val();
  let price = parseFloat($('#price').val());
  qnty = qnty + 1;
  let subtotal = price * qnty;
  $('.qnty').val(qnty);
  $('#subtotal').val(subtotal.toFixed(2));
}

//decrease quantity by DAY
function minus() {
  let qnty = +$('.qnty').val();
  let price = +$('#price').val();
  if (qnty > 1) {
    let newQnty = qnty - 1;
    let NewSubtotal = newQnty * price;
    $('.qnty').val(newQnty);
    $('#subtotal').val(NewSubtotal.toFixed(2));
  }
}


(function ($) {
	"use strict";

// data - background for flexslider banner
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

$("[data-bg-color]").each(function () {
	$(this).css("background", $(this).attr("data-bg-color"))
});




// mainSlider
function mainSlider() {
	var BasicSlider = $('.flexslider--active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.flexslider-single:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.flexslider-single[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		speed: 1000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: "<i class='flexslider__prev-arrow far fa-long-arrow-left'></i>",
		nextArrow: "<i class='flexslider__next-arrow far fa-long-arrow-right'></i>",
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// Header Sticky
  $(window).scroll(function(){
        if ($(this).scrollTop() > 44) {
            $('.header-sticky').addClass('sticky');
        } else {
            $('.header-sticky').removeClass('sticky');
        }
    });



})(jQuery);