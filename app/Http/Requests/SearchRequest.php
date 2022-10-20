<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SearchRequest extends FormRequest
{
	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'search_term' => 'required|max:255',
		];
	}

	public function attributes()
	{
		return [
			'search_term' => __('defaults.search')
		];
	}
}