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

	/* *** Submit an appointment form, via ajax *** */
	// $(".create-appointment-form").submit(function (e) {
	// 	e.preventDefault(); // avoid to execute the actual submit of the form.

	// 	var form = $(this);
	// 	var url = form.attr('action');

	// 	$.ajax({
	// 		type: "POST",
	// 		url: url,
	// 		data: form.serialize(),
	// 		success: function (data) {
	// 			$('.create-appointment-form').prepend(
	// 				'<div class="alert alert-success">' +
	// 					'Programarea a fost trimisă cu succes.' +
	// 				'</div>'
	// 			);
	// 		},
	// 		error: function (data) {
	// 			$('.create-appointment-form').prepend(
	// 				'<div class="alert alert-danger">' +
	// 					'A intervenit o eroare la trimiterea programării. Te rugăm asigură-te că ai completat câmpurile obligatorii.' +
	// 				'</div>'
	// 			);
	// 		}
	// 	});
	// });
});