<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class EditUserProfileRequest extends FormRequest
{
	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'name' => 'required|max:255',
		];
	}

	public function attributes()
	{
		return [
			'name' => __('frontend/auth.label.name'),
		];
	}
}
