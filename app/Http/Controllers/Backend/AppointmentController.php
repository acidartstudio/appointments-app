<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\EditAppointmentRequest;
use App\Http\Requests\SearchRequest;
use App\Models\Appointment;
use App\Models\AppointmentStatus;

class AppointmentController extends Controller
{
	public function index()
	{
		$appointments = Appointment::getAppointments()->paginate(config('pagination.per_page.appointments'));

		return view('backend.appointments.index',
			compact('appointments')
		);
	}

	public function trashed()
	{
		$appointments = Appointment::onlyTrashed()->paginate(config('pagination.per_page.appointments'));

		return view('backend.appointments.index',
			compact('appointments')
		);
	}

	public function edit(Appointment $appointment)
	{
		$appointmentStatus = AppointmentStatus::all();

		return view('backend.appointments.edit',
			compact(
				'appointment',
				'appointmentStatus'
			)
		);
	}

	public function update(EditAppointmentRequest $request, Appointment $appointment)
	{
		$appointment->update($request->validated());

		// No need to redirect, this is an ajax submit
		// return redirect(route('appointments.index'))->with('success', __('appointments.alert.edit.success'));
	}

	public function show(Appointment $appointment)
	{
		return view('backend.appointments.show',
			compact('appointment')
		);
	}

	public function destroy(Appointment $appointment)
	{
		$appointment->delete();

		return redirect(route('appointments.index'))->with('success', __('appointments.alert.destroy.success'));
	}

	public function restore($id)
	{
		$page = Appointment::restoreAppointment($id);

		return redirect(route('appointments.index'))->with('success', __('appointments.alert.restore.success'));
	}

	public function search(SearchRequest $request)
	{
		$appointments = Appointment::search($request->search_term)
			->paginate(config('pagination.per_page.appointments'))
			->appends(array('search_term' => $request->search_term));

		return view('backend.appointments.index',
			compact('appointments')
		);
	}
}
