$(document).ready(function() {
	var op;

	function appendTxt() {
		$('#calc').removeAttr('readonly');
		$('#calc').val(op);
		$('#calc').delay(2000).prop('readonly', true);
	}

	function clear() {
		$('#calc').val('0.');
	}

	//For appending value to calc display
	$('.btn-group button').on('click', function() {
		if ( $(this).text() != '=' && $(this).text() != 'C' ) {
			if ( $('#calc').val() == 0 ) {
				op = $(this).text();
				appendTxt();
			} else {
				op += $(this).text();
				appendTxt();
			}
		}
	});

	//Display result
	$('#result').on('click', function() {
		var result = eval($('#calc').val());
		$('#calc').val(result);
		op = result;
	});

	// Clear data
	$('.clear').on('click', function() {
		clear();
	});
});
