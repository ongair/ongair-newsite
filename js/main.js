$(document)
  .ready(function() {
 	
  $('.menu .item')
  	.tab()
  ;

	$('.ui.sticky')
	  .sticky({
	    context: 'body'

	  })
	;

  $('.ui.accordion')
  .accordion( 
  {
    exclusive   : true,
    selector    : {
      accordion : '.accordion',

  }

  })
;


  })
;