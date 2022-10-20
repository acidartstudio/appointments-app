<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends Controller
{
	/**
	 * Display the registration view.
	 *
	 * @return \Illuminate\View\View
	 */
	public function create()
	{
		return view('auth.register');
	}

	/**
	 * Handle an incoming registration request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\RedirectResponse
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function store(Request $request)
	{
		// $request->validate([
		// 	'name' => 'required|string|max:255',
		// 	'email' => 'required|string|email|max:255|unique:users',
		// 	'password' => 'required|string|confirmed|min:8',
		// ]);

		$rules = [
			'name' => 'required|string|max:255',
			'email' => 'required|string|email|max:255|unique:users',
			'password' => 'required|string|confirmed|min:8',
			'terms_of_use'	=> 'accepted',
			'g-recaptcha-response' => 'required|captcha'
		];

		$attributeNames = [
			'name' => __('frontend/auth.label.name'),
			'email' => __('frontend/auth.label.email'),
			'password' => __('frontend/auth.label.password'),
			'terms_of_use' => __('frontend/defaults.label.terms_of_use'),
		];

		$request->validate($rules, [], $attributeNames);

		Auth::login($user = User::create([
			'name' => $request->name,
			'email' => $request->email,
			'password' => Hash::make($request->password),
		]));

		event(new Registered($user));

		return redirect()->route('admin');
	}
}
