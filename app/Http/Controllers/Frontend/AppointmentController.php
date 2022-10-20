<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateAppointmentRequest;
use App\Models\Appointment;
use Illuminate\Support\Carbon;

class AppointmentController extends Controller
{
	public function index()
	{
		$calendar = Carbon::createFromDate(date("Y"), date("m"), 01);

		return view('frontend.index',
			compact('calendar')
		);
	}

	public function create()
	{
		return view('frontend.appointments.create');
	}

	public function store(CreateAppointmentRequest $request)
	{
		$input = $request->validated();

		// Prepend the minute with 0
		$input['from_minute'] = sprintf("%02d", $request->from_minute);

		$selectedDate = Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . $input['from_hour'] . ':' . $input['from_minute']);

		// Is it weekend?
		if ($selectedDate->isWeekend()) {
			return redirect(route('frontend.appointments'))->with('error', __('frontend/appointments.alert.error.weekend'));
		}

		$availableAppointments = Appointment::getByStatus(1)->get();

		// Loop through the available appointments and run the checks
		foreach ($availableAppointments as $appointment) {

			// Is the selected date in the available interval?
			if (
				$selectedDate->lt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '09:00')) OR
				$selectedDate->gt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '21:00')) OR
				(
					$selectedDate->gte(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '13:00')) AND
					$selectedDate->lt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '15:30'))
				)
			) {
				return redirect(route('frontend.appointments'))->with('error', __('frontend/appointments.alert.error.from_hour.in'));
			}

			// Is the selected date, including it's 60 minute length, intersecting any restricted time intervals?
			if (
				$selectedDate->copy()->addMinutes(config('appointments.length'))
					->gt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '13:00')) AND
				$selectedDate->lt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '15:30'))
			) {
				return redirect(route('frontend.appointments'))->with('error', __('frontend/appointments.alert.error.from_hour.in'));
			}

			if (
				$selectedDate->copy()->addMinutes(config('appointments.length'))
					->gt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '21:00')) AND
				$selectedDate->gt(Carbon::createFromFormat('Y-m-d H:i', $input['date'] . ' ' . '15:30'))
			) {
				return redirect(route('frontend.appointments'))->with('error', __('frontend/appointments.alert.error.from_hour.in'));
			}

			// Is the selected date between the existing appointments
			if ($selectedDate->between($appointment->from_date, $appointment->to_date)) {
				return redirect(route('frontend.appointments'))->with('error', __('frontend/appointments.alert.error.from_hour.in'));
			}

			// Is the appointment going to intersect with other appointments?
			if ($selectedDate->copy()->addMinutes(config('appointments.length') + config('appointments.break_between'))
					->gte($appointment->from_date) AND
				$selectedDate->copy()->addMinutes(config('appointments.length') + config('appointments.break_between'))
					->lte($appointment->to_date)
			) {
				return redirect(route('frontend.appointments'))->with('error', __('frontend/appointments.alert.error.from_hour.in'));
			}
		}

		$input['from_date'] = $selectedDate;
		$input['to_date'] = $selectedDate->copy()->addMinutes(config('appointments.length'));

		Appointment::create($input);

		// Other actions may be done here such as sending an email with the notification, etc.

		return redirect(route('frontend.appointments'))->with('success', __('frontend/appointments.alert.create.success'));
	}
}
