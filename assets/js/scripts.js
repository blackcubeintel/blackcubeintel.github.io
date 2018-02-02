
/**	1. PRELOADER
 *****************************************************/
$(window).load(function() {
	
	  setTimeout(function() {
		$('.socket').fadeOut("slow");
			
		  setTimeout(function() {
			$('#prelaoder').fadeOut(1000);
		  
			  setTimeout(function() {
				 $('#home-screen .content-block .container h1').addClass('animated fadeInUp');
				   
				   setTimeout(function() {
					 $('#home-screen .content-block .container p').addClass('animated fadeIn');
					 $('#footer').addClass('animated fadeIn');
					 
				  }, 1000);
			  }, 1100);
		  }, 1000);	  
	  }, 1000);	
  
});


/**	2. BACKGROUND
 *****************************************************/
$(document).ready( function(){
	
	$.backstretch('assets/img/1.jpg')
	setTimeout(function() {
	$.backstretch([
	   'assets/img/1.jpg'
	 , 'assets/img/2.jpg'
	 , 'assets/img/3.jpg'
	 , 'assets/img/4.jpg'
	 , 'assets/img/5.jpg'
	 , 'assets/img/6.jpg'
	 , 'assets/img/7.jpg'
	 , 'assets/img/9.jpg'
	 , 'assets/img/10.jpg'
	 , 'assets/img/11.jpg'
	 , 'assets/img/12.jpg'
	 , 'assets/img/13.jpg'
	 , 'assets/img/14.jpg'
	 , 'assets/img/15.jpg'
	 , 'assets/img/16.jpg'
	 , 'assets/img/17.jpg'
	 , 'assets/img/18.jpg'
	 	], {duration: 5000, fade: 1000});
    }, 5000);
	
});


/**	3. CYCLE
 *****************************************************/
$(document).ready( function(){
	
	$('#slider').cycle({
		fx : 'fade',
		delay: 5000,
		timeout: 5000,
		speed: 500,
		slides: '.slide',
	});
	
});


/**	3. FULLSCREEN
 *****************************************************/
$(document).ready( function(){

	$('#btn-fullscreen').click(function() {
		
		$(document).toggleFullScreen();
		
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
				  
	});	
	
});


/**	4. GOOGLE MAP
 *****************************************************/
$(document).ready( function(){
	
	
	
	var myLatlng = new google.maps.LatLng(41.891967, 12.477483);//SET YOUR COORDINATIONS
	
	function initialize() {
		
	  //OPTIONS
	  var mapOptions = {
	   zoom: 16,
	   center: myLatlng,
	   scrollwheel: false,
	   draggable: false,
	   mapTypeId: google.maps.MapTypeId.ROADMAP,
	   
	   styles: [
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
	  };
	  
	  map = new google.maps.Map(document.getElementById("map_canvas"),
				mapOptions); 
				
	    //MARKER
		var contentString = '<div class="marker-content">UNITY</div>';
	
			var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
;
	
			var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'CAPTURE_ESA'
		});
	
			google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	

	}
	google.maps.event.addDomListener(window, 'load', initialize);
});


/**	5. OVERLAY
 *****************************************************/
 $(document).ready( function(){
	
	
	//BASIC SETTINGS
	var fPageId =  ( '#front-page' );
	var overlayContainer = ( '.overlay .overlay-container' ); 
	var overlayCloseBtn = ( '.close-btn' ); 
	
	
	//BASIC VARIABLES
	var currentOverlayID;
	var windowSize = $(window).width();
	
	//BASIC FUNCTIONS
	function hideFrontPage() {
		$(fPageId).fadeOut('slow');	
	}
	
	function showFrontPage() {
		$(fPageId).fadeIn('slow');
	}
	
	function resizeGoogeMaps() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	}

	function includeRecache() {
		$('#home-screen .content-block .container h1').removeClass('animated fadeInDown');
		$('#home-screen .content-block .container h1').css('opacity','1');
	}
	
	
	//OPEN/CLOSE OVERLAY
	function openOverlay() {
		
		hideFrontPage();
		
		  setTimeout(function() {
			  $(currentOverlayID).fadeIn(300);
			  if(windowSize <= 480){
				   $('#header').css('display','none');
			  } 
			  setTimeout(function() {
				  $('.overlay h1').fadeIn('slow');
				  includeRecache();
				  
				  setTimeout(function() {
					   $(overlayContainer).addClass('animated fadeInUp');
					  
					   setTimeout(function() {
						   $(overlayCloseBtn).removeClass('animated fadeOutLeftBig').addClass('animated fadeInLeftBig');
						   $(overlayCloseBtn).fadeIn();
						   
							if(windowSize > 1330){
								 $(overlayCloseBtn).removeClass('animated fadeOutLeftBig').addClass('animated fadeInLeftBig');
							} else {
								 $(overlayCloseBtn).removeClass('animated fadeOutDownBig').addClass('animated fadeInUpBig');
							}
					  
					  }, 900);
				  }, 800);
			  }, 500);
		  }, 600);
			  
		  $(overlayCloseBtn).click(function() { 
		  
				$(overlayCloseBtn).fadeOut();
				if(windowSize > 1330){
					  $(overlayCloseBtn).removeClass('animated fadeInLeftBig').addClass('animated fadeOutLeftBig');
				} else {
					 $(overlayCloseBtn).removeClass('animated fadeInUpBig').addClass('animated fadeOutDownBig');
				}
				
			    setTimeout(function() {
					$(currentOverlayID).fadeOut(300);
					
					setTimeout(function() {
						$(overlayContainer).removeClass('animated fadeInUp');
						$('.overlay h1').fadeOut('slow');
						showFrontPage();
						 if(windowSize <= 480){
							   $('#header').css('display','block');
						  } 
						
					}, 200);
				}, 300);
			  
		  });
				
	}


	//OVERLAY MODUL ABOUT
	$('#btn-about').click(function() {
		
		currentOverlayID = ( '.overlay#about' );
		openOverlay();
			  
	});
	
	
	//OVERLAY MODUL CONTACT
	$('#btn-contact').click(function() {
		
		currentOverlayID = ( '.overlay#contact' );
		openOverlay();
		
		
		 // This will resize the google map to the right size
		 setTimeout(function() {
				resizeGoogeMaps();   
			  }, 600);
			  
	});
	
	//OVERLAY MODUL NEWS
	$('#btn-news').click(function() {
		
		currentOverlayID = ( '.overlay#news' );
		openOverlay();
			  
	});
	
	
 });


/**	6. AJAX SUBSCRIBE
 *****************************************************/
$(document).ready( function(){
	
	$('.subscribe-form').submit(function() {
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'assets/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('slow');
				  }
				  else {
					  $("input, textarea").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					   $('.status-message').fadeIn('slow');
				  }
			  }
			});
			return false;
		});
		
});


/**	7. AJAX CONTACT
 *****************************************************/
$(document).ready( function(){
	
	$('.contact-form form').submit(function() {
	
			$('.contact-form form .nameLabel').html('Name');
			$('.contact-form form .emailLabel').html('Email');
			$('.contact-form form .messageLabel').html('Message');
	
			var postdata = $('.contact-form form').serialize();
			$.ajax({
				type: 'POST',
				url: 'assets/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.contact-form .status-message-contact').addClass('animated fadeIn').html('EMAIL SENT SUCCESSFULLY.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			return false;
		});	
			
});