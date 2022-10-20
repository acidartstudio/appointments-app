<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class EditUserEmailRequest extends FormRequest
{
	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'email' => 'required|string|email|unique:users|max:255'
		];
	}

	public function attributes()
	{
		return [
			'name' => __('frontend/auth.label.email'),
		];
	}
}