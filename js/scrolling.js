$(function() {
      $(window).on('load resize', function() {
        $('.fill-screen').css("height", window.innerHeight);
      });

      /* form-wall plugin
      $('#video-wallpaper').wallpaper({
        source: {
          mp4: 'images/sample.mp4'
        }
      });
		*/

	  //carousel
	  $('#carousel').carousel();

	  //add Bootstrap scrollspy
	  $('body').scrollspy({
	  	target: '.navbar',
	  	offset: 160
	  });


	  //jquery easing for smooth scrolling
	  $('.nav a, .down-button a').bind('click', function() {
	  	$('html, body').stop().animate({
	  		scrollTop: $($(this).attr('href')).offset().top - 90
	  	},
	  	1500, 'easeInOutExpo');
	  	event.preventDefault();
	  });

	  //stellar plugin
	  $(window).stellar();

	  //initialize WOW element animation
	  new WOW().init();

	  //nano gallery
	  $(document).ready(function () {
	      $("#nanoGallery3").nanoGallery();
	  });
        
    });