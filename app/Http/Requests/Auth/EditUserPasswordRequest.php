<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EditUserPasswordRequest extends FormRequest
{
	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'password' => 'required|string|confirmed|min:8',
			'current_password' => ['required', function ($attribute, $value, $fail) {
				if (!Hash::check($value, Auth::user()->password)) {
					return $fail(__('frontend/auth.alert.current_password'));
				}
			}],
		];
	}

	public function attributes()
	{
		return [
			'password' => __('frontend/auth.label.password'),
		];
	}
}