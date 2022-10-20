<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAppointmentRequest extends FormRequest
{
	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'date' => 'required|date_format:Y-m-d',
			'name' => 'required|max:255',
			'email' => 'required|email|max:255',
			'phone' => 'required|numeric|digits_between:10,15',
			'from_hour' => 'required|numeric|gte:0|lte:23',
			'from_minute' => 'required|numeric|gte:0|lte:59',
			'observations' => 'nullable',
		];
	}

	public function attributes()
	{
		return [
			'name' => __('frontend/appointments.label.name'),
			'email' => __('frontend/appointments.label.email'),
			'phone' => __('frontend/appointments.label.phone'),
			'from_hour' => __('frontend/appointments.label.from_hour'),
			'from_minute' => __('frontend/appointments.label.from_minute'),
			'observations' => __('frontend/appointments.label.observations')
		];
	}

	public function messages()
	{
		return [
			'from_hour.in' => __('frontend/appointments.alert.error.from_hour.in')
		];
	}
}