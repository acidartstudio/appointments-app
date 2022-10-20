<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\EditUserEmailRequest;
use App\Models\UserEmail;
use Illuminate\Support\Facades\Auth;

class UserEmailController extends Controller
{
	public function edit(UserEmail $user)
	{
		$user = UserEmail::findOrFail(Auth::id());

		return view('auth.edit-email',
			compact('user')
		);
	}

	public function update(EditUserEmailRequest $request, UserEmail $user)
	{
		$user->where('id', Auth::id())->update($request->validated());

		return $this->redirectWithStatus('frontend/auth', 'edit', $user, 'email');
	}
}