$(document)
  .ready(function() {
 	
  $('.menu .item')
  	.tab()
  ;

  $('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;
    
	$('.ui.sticky')
	  .sticky({
	    context: 'body',
      pushing: true
	  })
	;
  $('nav.ui.mobile_menu.grid.mobile.only .button')
  .popup({
    inline   : true,
    hoverable: true,
    position : 'bottom right',
    delay: {
      show: 100,
      hide: 800
    }
  })
;

  $('.ui.accordion')
    .accordion()
  ;


  })
;