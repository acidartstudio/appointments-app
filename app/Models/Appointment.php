<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends BaseModel
{
	use SoftDeletes;

	protected $fillable = [
		'name',
		'email',
		'phone',
		'observations',
		'from_date',
		'to_date',
		'status'
	];

	public static function getAppointments()
	{
		return self::with(['user', 'appointment_status'])
			->orderBy('created_at', 'desc');
	}

	public static function getByStatus($status)
	{
		return self::getAppointments()
			->where('status', $status);
	}

	public static function restoreAppointment($id)
	{
		return tap(Appointment::withTrashed()->findOrFail($id))->restore();
	}

	public static function search($searchTerm)
	{
		if (!$searchTerm) {
			return self::query();
		}

		return self::getAppointments()
			->where('name', 'LIKE', "%{$searchTerm}%")
			->orWhere('email', 'LIKE', "%{$searchTerm}%");
	}

	public function appointment_status()
	{
		return $this->hasOne(AppointmentStatus::class, 'id', 'status');
	}
}
