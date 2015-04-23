$(document)
  .ready(function() {
  $('.menu .item')
  	.tab()
  ;


	$('.ui.sticky')
	  .sticky({
	    context: '.wrapper',

	  })

	;

  $('.ui.accordion')
  .accordion({
    selector: {
      accordion : '.center.aligned.column.row',
	  title     : '.title',
	  content   : '.content',
    }
  })
;


  })
;