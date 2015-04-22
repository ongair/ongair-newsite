$(document)
  .ready(function() {
  $('.menu .item')
  	.tab()
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