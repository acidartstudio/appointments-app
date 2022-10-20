<?php

namespace App\Observers;

use Illuminate\Support\Facades\Auth;
use App\Models\Appointment;

class AppointmentObserver
{
	public function updating(Appointment $appointment)
	{
		$appointment->updated_by = Auth::id();
	}

	public function deleted(Appointment $appointment)
	{
		$appointment->deleted_by = Auth::id();
	}
}