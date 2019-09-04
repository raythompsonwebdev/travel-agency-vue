
$(document).ready(function() {

	var $mainmenu = $('button#toggle-menu');

	$mainmenu.on('click', function(event){

		event.preventDefault();

		$('nav ul').slideToggle(250).css('display', 'block');

	});


});

