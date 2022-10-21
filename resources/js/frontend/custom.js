$(document).ready(function() {
	var token = $('meta[name="csrf-token"]').attr('content');

	/* *** jQuery validate *** */
	/*  Create appointment form */
	$('.create-appointment-form').validate({
		rules: {
			name: 'required',
			phone: {
				required: true,
				digits: true
			},
			email: {
				required: true,
				email: true
			},
			from_hour: {
				required: true,
				digits: true
			},
			from_minute: {
				required: true,
				digits: true
			}
		}
	});
});