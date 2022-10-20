<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditAppointmentRequest extends FormRequest
{
	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'status' => 'required|exists:appointment_status,id',
		];
	}

	public function attributes()
	{
		return [
			'status' => __('appointment_status.status'),
		];
	}

	public function messages()
	{
		return [
			'status.exists' => __('appointment_status.alert.error.status.exists')
		];
	}
}