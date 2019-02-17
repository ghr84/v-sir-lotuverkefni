


// Rent type 


var types = document.querySelectorAll('.type');

for (var i = 0; i < types.length; i++ ) {
	var type = types[i];
	type.addEventListener('click', function() {
		this.classList.toggle('type-1-alt');
	})
}


// Where/Hvar nav

const lis = document.querySelectorAll('.zone li')

for ( let i = 0; i < lis.length; i++ ) {
	var li = lis[i];
	
	li.addEventListener('click', function(event) { 
		event.stopPropagation();
		this.classList.toggle('active');
		this.parentNode.classList.toggle('active');
	});
}


// Price/Size slider Double slider

function getVals(){

	// Get slider values
	
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
      var slide1 = parseFloat( slides[0].value );
	  var slide2 = parseFloat( slides[1].value );
	  
	// Neither slider will clip the other, so make sure we determine which is larger
	
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    var displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = slide1 + " - " + slide2;
  }
  
  window.onload = function(){

	// Initialize Sliders
	
    var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
          var sliders = sliderSections[x].getElementsByTagName("input");
          for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
			  sliders[y].oninput = getVals;
			  
			  // Manually trigger event first time to display values
			  
              sliders[y].oninput();
            }
          }
        }
  }


// Slick slider - Carousel

$(document).ready(function(){
		$('.carousel, .carousel-selected').slick({
			Type: Boolean,
			Default: false,
		});
		$('#exampleModal').on('shown.bs.modal', function (e) {
			$('.carousel-selected').slick('setPosition');
		})
	});




// Rooms/Herbergi 

var rooms = document.querySelectorAll('.room');

for ( var i = 0; i < rooms.length; i++ ) {
	var room = rooms[i];
	room.addEventListener('click', function() {
		this.classList.toggle('room-clicked');
	})
}







// Jquery version of rooms

// $('.room').on('click', function() {
// 	$(this).toggleClass('room-clicked');
// })




// Double slider


// Jquery price/Size slider

// $( function() {
// 	$( '.ju-slider' ).each(function() {
// 		var slider = $(this);

// 		slider.find( ".slider-range" ).slider({
// 			range: true,
// 			min: 0,
// 			max: 500,
// 			values: [ 75, 300 ],
// 			slide: function( event, ui ) {
// 				slider.find( ".amount" ).val( slider.data('unit') + ui.values[ 0 ] + " - " + slider.data('unit') + ui.values[ 1 ] );
// 			}
// 		});

// 		slider.find( ".amount" ).val( slider.data('unit') + slider.find( ".slider-range" ).slider( "values", 0 ) +
// 			" - " + slider.data('unit') + slider.find( ".slider-range" ).slider( "values", 1 ) );

// 	})
// });


/* <div class="ju-slider" data-unit="m2" data-unit-position="after">
<p>
		<h3>Til/Frá</h3>
		<input type="text" class="amount" readonly style="border:0; color:#053878; font-weight:bold;">
</p>   
<div class="slider-range"></div>
</div>  */