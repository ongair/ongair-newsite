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
    selector    : {
      accordion : '.accordion',
      title     : '.title.accordion',
      content   : '.ui.tab.item',
  }

  })
;


  })
;