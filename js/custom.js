$(document).ready(function() {
	var one, two, op, result;

	//For calculation
	$('.btn-group button').on('click', function() {
		op = $(this).attr('class');
		one = $('#one').val();
		two = $('#two').val();

		switch (op) {
		case 'plus':
			result = parseInt(one) + parseInt(two);
			break;
		case 'minus':
			result = one - two;
			break;
		case 'divide':
			result = one / two;
			break;
		case 'multiply':
			result = one * two;
			break;
		case 'percent':
			result = (one / two)*100;
			break;
		default :
			result = 0;
		}
		$('#result').val(result);
	});

	//Click event for fork me
	$('selector').action

	jQuery('selector').action
	$('.fork-me img').on('click', function() {
		window.location.href = "http://github.com/RaajNadar/SimpleCalculator";
	});
});
