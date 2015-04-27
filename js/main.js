$(document)
  .ready(function() {

  	
  $('.menu .item')
  	.tab()
  ;


	$('.ui.sticky')
	  .sticky({
	    context: '.topbar',

	  })
	;

  $('.ui.accordion')
  .accordion(
    
  { 
    selector    : {
    accordion : '.accordion',
    title     : '.title',
    content   : '.tab'
    }

  })
;


  })
;