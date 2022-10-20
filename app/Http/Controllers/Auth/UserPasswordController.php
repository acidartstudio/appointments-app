<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\EditUserPasswordRequest;
use App\Models\UserPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserPasswordController extends Controller
{
	public function edit()
	{
		return view('auth.edit-password');
	}

	public function update(EditUserPasswordRequest $request, UserPassword $user)
	{
		$user->where('id', Auth::id())->update([
			'password' => Hash::make($request->password)
		]);

		return $this->redirectWithStatus('frontend/auth', 'edit', $user, 'password');
	}
}