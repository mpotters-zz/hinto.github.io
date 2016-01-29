$(document).ready(function(){

	console.log('\'Allo \'Allo!');


	$(function(){
	    // wrap all in init
	    var init = function() {
	      eventListeners();
	    };

	    // Listeners
	    function eventListeners() {

	    	// $('.heroImg').on('mouseMove', slideUp);


	    };

	    // Functionality
	   
	   $('.heroImg').mousemove(function(e){
	   		console.log("whaddap");
	   		e.preventDefault;
	   		$("#hero-unit").delay( 800 ).slideUp( 1000 );
	   });

	   $('#product-wrap').unslider({
	   		arrows: {
				//  Unslider default behaviour
				prev: '<a class="unslider-arrow prev"><img src="images/logos/HINTO-ARROW-SMALL.png" alt="arrow"></a>',
				next: '<a class="unslider-arrow next"><img src="images/logos/HINTO-ARROW-SMALL-NEXT.png" alt="arrow"></a>'
			}

	   });
	    
	    
   

	    //start JS engines
	    init();
	  });

});
