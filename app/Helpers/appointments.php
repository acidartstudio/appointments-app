<?php

/**
 * Build a calendar
 * @author https://gist.github.com/Vinze/808ec88217729290adca4a06579a55b9
 *
 */

if ( ! function_exists('renderCalendar')) {
	function renderCalendar($dt) {
		// Make sure to start at the beginnen of the month
		$dt->startOfMonth();

		// Set the headings (weeknumber + weekdays)
		$headings = [
			__('frontend/appointments.week_number'),
			__('frontend/appointments.monday'),
			__('frontend/appointments.tuesday'),
			__('frontend/appointments.wednesday'),
			__('frontend/appointments.thursday'),
			__('frontend/appointments.friday'),
			__('frontend/appointments.saturday'),
			__('frontend/appointments.sunday'),
		];

		// Create the table
		$calendar = '<table class="calendar table table-bordered">';
		// $calendar .= '<caption>' . $dt->format('F Y') . '</caption>';
		$calendar .= '<tr>';

		// Create the calendar headings
		foreach ($headings as $heading) {
			$calendar .= '<th class="header text-center" width="12%">' . $heading . '</th>';
		}

		// Create the rest of the calendar and insert the weeknumber
		$calendar .= '</tr><tr>';
		$calendar .= '<td class="text-center py-3">' . $dt->weekOfYear . '</td>';

		// Day of week isn't monday, add empty preceding column(s)
		if ($dt->format('N') != 1) {
			$calendar .= '<td class="text-center py-3" colspan="' . ($dt->format('N') - 1) . '">&nbsp;</td>';
		}

		// Get the total days in month
		$daysInMonth = $dt->daysInMonth;

		// Go over each day in the month
		for ($i = 1; $i <= $daysInMonth; $i++) {
			// Monday has been reached, start a new row
			if ($dt->format('N') == 1) {
				$calendar .= '</tr><tr>';
				$calendar .= '<td class="text-center py-3">' . $dt->weekOfYear . '</td>';
			}
			// Append the column
			$calendar .= '<td class="day text-center py-3" rel="' . $dt->format('Y-m-d') . '">' . '<a href="' . route('frontend.appointments.create', $dt->format('Y-m-d')) . '">' . $dt->day . '</a>' . '</td>';

			// Increment the date with one day
			$dt->addDay();
		}

		// Last date isn't sunday, append empty column(s)
		if ($dt->format('N') != 7) {
			$calendar .= '<td colspan="' . (8 - $dt->format('N')) . '">&nbsp;</td>';
		}

		// Close table
		$calendar .= '</tr>';
		$calendar .= '</table>';

		// Return calendar html
		return $calendar;
	}
}