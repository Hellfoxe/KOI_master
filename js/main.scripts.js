

// $('#click').click(function() {
//   var overlayMenu = $('#overlay-menu'),
//     menuIconLines = $('#mclick .menu-icon'),
//     menuBurger = $('#menu-burger');
//
//   if (overlayMenu.hasClass('open')) {
//     overlayMenu.removeClass('open');
//     menuIconLines.removeClass('open');
//     menuBurger.removeClass('open');
//   } else {
//     overlayMenu.addClass('open');
//     // menuIconLines.addClass('open');
//     // menuBurger.addClass('open');
//   };
//
//
// });









// Anchor
$(document).ready(function() {
	$("a.ancLinks").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1000 );
		return false;
	});
});




/*Scroll------->Slide02*/

$('.slide-03_dropDown').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 1300){
	$('.slide-03_dropDown').css({opacity: "1"});
$('.slide-03_dropDown').animate({top: "-200"},{ duration: 1000, easing: 'easeOutCirc' });
}

});


jQuery.easing.def = "easeInBounce";
// Slide-02
$('.slide-02_image').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 420){
	$('.slide-02_image').css({opacity: "1"});
$('.slide-02_image').animate({left: "0"},{ duration: 1500, easing: 'easeOutCirc' });
}

});

$('.slide-02_content').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 460){
	$('.slide-02_content').css({opacity: "1"});
$('.slide-02_content').animate({bottom: "+100"},{ duration: 1000, easing: 'easeOutCirc' });
}

});


$('#oldLogo').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 420){
	$('#oldLogo').css({opacity: "1"});
$('#oldLogo').animate({bottom: "+200"},{ duration: 1000, easing: 'easeOutCirc' });
}

});


$('.dropDownNomber02').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 2500){
	$('.dropDownNomber02').css({opacity: "1"});
$('.dropDownNomber02').animate({top: "-10"},{ duration: 1000, easing: 'easeOutCirc' });
}

});





// Slowmotion

    $(document).ready(function() {
            $("body").css("display", "none");
      	    $("body").fadeIn(900);
    });


// Animatix\
// slide_01



// Pluse minus change 01------------------






//
// $('document').ready(function () {
// 	var triggerFirst = $('.click-01'),
// 			isClosedFirst = true;
// 	triggerFirst.click(function () {
// 		$('.dropDown-01').slideToggle("slow");
// 		// 02
// 		 $('.dropDown-02').hide();
// 		 $('.click-02').css('color','#1c1c1c');
// 			 $('.dropDownNomber02').animate({left: "-10"}, "slow");
// 					 $('.pluse_dropDown-02').css({opacity: "1"}); //+_01
// 				 $('.minus_dropDown-02').css({opacity: "0"}); //-_01
//
// 		pluseTime();
// 	});
// 	function pluseTime() {
// 		if (isClosedFirst === true) {
// 			$('.click-01').css('color','#ba1717');
// 				$('.dropDownNomber01').animate({left: "+10"}, "slow");
// 				$('.pluse_dropDown-01').css({opacity: "0"}); //+_01
// 			$('.minus_dropDown-01').css({opacity: "1"}); //-_01
//
//
// 	isClosedFirst = false;
// 		} else {
// 			$('.click-01').css('color','#1c1c1c');
// 				$('.dropDownNomber01').animate({left: "-10"}, "slow");
// 						$('.pluse_dropDown-01').css({opacity: "1"}); //+_01
// 					$('.minus_dropDown-01').css({opacity: "0"}); //-_01
//
// 			isClosedFirst = true;
// 		}
// 	}
//
// });


// Pluse minus change 01------------------

$('document').ready(function () {
	var trigger = $('.click-01'),
			isClosed = true;
			$('.dropDown-01').slideToggle();
			$('.dropDownNomber01').css({opacity: "1"});
						 $('.pluse_dropDown-01').css({opacity: "0"}); //+_01
					 $('.minus_dropDown-01').css({opacity: "1"}); //-_01
					 $('.click-01').css('color','#ba1717');
			// 01
			trigger.click(function () {
				$('.click-01').css('color','#1c1c1c');
				$('.dropDown-01').slideToggle();
				$('.dropDownNomber01').css({opacity: "1"});
							 $('.pluse_dropDown-01').css({opacity: "0"}); //+_01
						 $('.minus_dropDown-01').css({opacity: "1"}); //-_01

				pluseTime();
			});
			function pluseTime() {
				if (isClosed === true) {
			$('.click-01').css('color','#1c1c1c');
			$('.dropDownNomber01').animate({left: "+10"}, "slow");
					$('.pluse_dropDown-01').css({opacity: "1"}); //+_01
				$('.minus_dropDown-02').css({opacity: "0"}); //-_01
			isClosed = false;
				} else {
				$('.click-01').css('color','#ba1717');
						$('.dropDownNomber01').animate({left: "-10"}, "slow");
								$('.pluse_dropDown-01').css({opacity: "0"}); //+_01
							$('.minus_dropDown-01').css({opacity: "1"}); //-_01
					isClosed = true;
				}
			}

			// FALSE

});

// Pluse minus change 02------------------

$('document').ready(function () {
	var trigger = $('.click-02'),
			isClosed = true;
			// 01
			trigger.click(function () {
				$('.dropDown-02').slideToggle();
				$('.dropDownNomber02').css({opacity: "1"});
							 $('.pluse_dropDown-02').css({opacity: "1"}); //+_01
						 $('.minus_dropDown-02').css({opacity: "0"}); //-_01

				pluseTime();
			});
			function pluseTime() {
				if (isClosed === true) {
		$('.click-02').css('color','#ba1717');
			$('.dropDownNomber02').animate({left: "+10"}, "slow");
					$('.pluse_dropDown-02').css({opacity: "0"}); //+_01
				$('.minus_dropDown-02').css({opacity: "1"}); //-_01
			isClosed = false;
				} else {
					$('.click-02').css('color','#1c1c1c');
						$('.dropDownNomber02').animate({left: "-10"}, "slow");
								$('.pluse_dropDown-02').css({opacity: "1"}); //+_01
							$('.minus_dropDown-02').css({opacity: "0"}); //-_01
					isClosed = true;
				}
			}

			// FALSE

});

// Pluse minus change 03------------------

$('document').ready(function () {
	var trigger = $('.click-03'),
			isClosed = true;
			// 01
			trigger.click(function () {
				$('.dropDown-03').slideToggle();
				$('.dropDownNomber03').css({opacity: "1"});
							 $('.pluse_dropDown-03').css({opacity: "1"}); //+_01
						 $('.minus_dropDown-03').css({opacity: "0"}); //-_01

				pluseTime();
			});
			function pluseTime() {
				if (isClosed === true) {
		$('.click-03').css('color','#ba1717');
			$('.dropDownNomber03').animate({left: "+10"}, "slow");
					$('.pluse_dropDown-03').css({opacity: "0"}); //+_01
				$('.minus_dropDown-03').css({opacity: "1"}); //-_01
			isClosed = false;
				} else {
					$('.click-03').css('color','#1c1c1c');
						$('.dropDownNomber03').animate({left: "-10"}, "slow");
								$('.pluse_dropDown-03').css({opacity: "1"}); //+_01
							$('.minus_dropDown-03').css({opacity: "0"}); //-_01
					isClosed = true;
				}
			}

			// FALSE

});


// / Pluse minus change 03------------------


// $(document).ready(function(){
// $('.click-02').click(function(){
//
// 	$('.dropDown-02').slideToggle();
// 		$('.dropDown-01' && '.dropDown-03').hide(200);
// 		$('.click-01').css('color','#1c1c1c');
// 				$('.dropDownNomber01').animate({left: "-10"}, "slow");
// 						$('.pluse_dropDown-01').css({opacity: "1"}); //+_01
// 					$('.minus_dropDown-01').css({opacity: "0"}); //-_01
// 					$('.pluse_dropDown-02').css({opacity: "0"}); //+_01
// 				$('.minus_dropDown-02').css({opacity: "1"}); //-_01
//
//
// });











// slide-02
// $('.dropDown-02').hide();
// $('.click-02').click(function(){
// 	$('.dropDown-02').slideToggle();
//
// 	$('.dropDown-01').hide(200);
// 		$('.dropDown-03').hide(200);
// 		$('.click-02').css('color','#ba1717');
// 			$('.click-01').css('color','#1c1c1c');
// 				$('.click-03').css('color','#1c1c1c');
// 				// $('.pluse_dropDown-01').css({opacity: "1"});
//
// 		$('.dropDownNomber02').animate({left: "+10"}, "slow");
// 		$('.dropDownNomber01').animate({left: "-10"}, "slow");
// 		$('.dropDownNomber03').animate({left: "-10"}, "slow");
//
//
// });

// slide-03
// $('.dropDown-03').hide();
// $('.click-03').click(function(){
// 	$('.dropDown-03').slideToggle();
//
// 	$('.dropDown-01').hide(200);
// 	$('.dropDown-02').hide(200);
// 	$('.click-03').css('color','#ba1717');
// 		$('.click-01').css('color','#1c1c1c');
// 			$('.click-02').css('color','#1c1c1c');
// 	$('.dropDownNomber03').animate({left: "+10"}, "slow");
// 	$('.dropDownNomber01').animate({left: "-10"}, "slow");
// 	$('.dropDownNomber02').animate({left: "-10"}, "slow");
//
//
// });
// });






// Logo
$('.logo-red').hide();
$(window).scroll(function() {
if ($(this).scrollTop() > 720){
$('.logo-white').hide(0);
$('.logo-red').show(0);
}
// else{
// // $('.logo-red').show('fast');
// }
});


$('.logo-red').hide();
$(window).scroll(function() {
if ($(this).scrollTop() < 720){
$('.logo-white').show(0);
$('.logo-red').hide(0);
}
// else{
// // $('.logo-red').show('fast');
// }
});
