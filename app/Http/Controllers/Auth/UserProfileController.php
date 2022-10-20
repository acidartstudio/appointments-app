<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\EditUserProfileRequest;
use App\Models\UserProfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
	public function edit(UserProfile $user, Request $route)
	{
		$route->session()->flash('redirect', session('redirect'));

		$user = UserProfile::getByUser(Auth::id())->first();

		return view('auth.edit-profile',
			compact('user')
		);
	}

	public function update(EditUserProfileRequest $request, UserProfile $user)
	{
		$user->where('user_id', Auth::id())->update($request->validated());

		$redirect = session()->has('redirect') ? session('redirect') : route('profile.edit');

		return redirect($redirect)
			->with('success', __('frontend/auth.alert.edit.success'));
	}
}