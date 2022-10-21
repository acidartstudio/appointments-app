$(document).ready(function() {
	/* Hack to allow dropdowns in responsive tables */
	$('.table-responsive').on('show.bs.dropdown', function () {
		$('.table-responsive').css("overflow", "inherit");
	});
	$('.table-responsive').on('hide.bs.dropdown', function () {
		$('.table-responsive').css("overflow", "auto");
	})

	/* *** Remember the last tab on page refresh *** */
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		localStorage.setItem('activeTab', $(e.target).attr('href'));
	});

	var activeTab = localStorage.getItem('activeTab');
	if (activeTab) {
		$('.nav-tabs a[href="' + activeTab + '"]').tab('show');
	}

	/* *** Remember the last collapse on page refresh *** */
	/* ! There is an issue on targeting a selector. If I click on the anchor element, the local storage will be undefined */
	$('#sidebar-nav>li>a').on('click', function (e) {
		localStorage.setItem('activeCollapseGroup', $(e.target.parentNode).attr('id'));
	});

	$('#sidebar-nav>li>ul>li>a').on('click', function (e) {
		localStorage.setItem('activeCollapseSubmenuGroup', $(e.target.parentNode).attr('id'));
	});

	var activeCollapseGroup = localStorage.getItem('activeCollapseGroup');
	var activeCollapseSubmenuGroup = localStorage.getItem('activeCollapseSubmenuGroup');

	if (activeCollapseGroup) {
		$(this).find('#' + activeCollapseGroup).addClass('nav-item-open');
		$(this).find('#' + activeCollapseGroup + '>ul').css('display', 'block');
	}

	if (activeCollapseSubmenuGroup) {
		$(this).find('#' + activeCollapseSubmenuGroup).addClass('nav-item-open');
		$(this).find('#' + activeCollapseSubmenuGroup + '>ul').css('display', 'block');
	}

	/* *** Change the status of an appointment form, via ajax *** */
	$(".edit-appointment-form").submit(function (e) {
		e.preventDefault(); // avoid to execute the actual submit of the form.

		var form = $(this);
		var url = form.attr('action');

		$.ajax({
			type: "POST",
			url: url,
			data: form.serialize(),
			success: function (data) {
				$('.edit-appointment-form').prepend(
					'<div class="alert alert-success">' +
					'Statusul a fost modificat cu succes.' +
					'</div>'
				);
			},
			error: function (data) {
				$('.create-appointment-form').prepend(
					'<div class="alert alert-danger">' +
					'A intervenit o eroare la modificarea statusului. Te rugăm asigură-te că ai completat câmpurile obligatorii.' +
					'</div>'
				);
			}
		});
	});
});