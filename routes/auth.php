<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\UserEmailController;
use App\Http\Controllers\Auth\UserPasswordController;
use App\Http\Controllers\Auth\UserProfileController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::get('/auth/register', [RegisteredUserController::class, 'create'])
	->middleware('guest', 'allow_registration')
	->name('register');

Route::post('/auth/register', [RegisteredUserController::class, 'store'])
	->middleware('guest', 'allow_registration');

Route::get('/auth/login', [AuthenticatedSessionController::class, 'create'])
	->middleware('guest')
	->name('login');

Route::post('/auth/login', [AuthenticatedSessionController::class, 'store'])
	->middleware('guest');

Route::get('/auth/forgot-password', [PasswordResetLinkController::class, 'create'])
	->middleware('guest')
	->name('password.request');

Route::post('/auth/forgot-password', [PasswordResetLinkController::class, 'store'])
	->middleware('guest')
	->name('password.email');

Route::get('/auth/reset-password/{token}', [NewPasswordController::class, 'create'])
	->middleware('guest')
	->name('password.reset');

Route::post('/auth/reset-password', [NewPasswordController::class, 'store'])
	->middleware('guest')
	->name('password.update');

Route::get('/auth/verify-email', [EmailVerificationPromptController::class, '__invoke'])
	->middleware('auth')
	->name('verification.notice');

Route::get('/auth/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
	->middleware(['auth', 'signed', 'throttle:6,1'])
	->name('verification.verify');

Route::post('/auth/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
	->middleware(['auth', 'throttle:6,1'])
	->name('verification.send');

Route::get('/auth/confirm-password', [ConfirmablePasswordController::class, 'show'])
	->middleware('auth')
	->name('password.confirm');

Route::post('/auth/confirm-password', [ConfirmablePasswordController::class, 'store'])
	->middleware('auth');

Route::post('/auth/logout', [AuthenticatedSessionController::class, 'destroy'])
	->middleware('auth')
	->name('logout');


// Edit email
Route::get('/auth/email/edit', [UserEmailController::class, 'edit'])
	->middleware('auth')
	->name('email.edit');

Route::post('/auth/email/update', [UserEmailController::class, 'update'])
	->middleware('auth')
	->name('email.update');


// Edit password
Route::get('/auth/password/edit', [UserPasswordController::class, 'edit'])
	->middleware('auth')
	->name('password.edit');

Route::post('/auth/password/update', [UserPasswordController::class, 'update'])
	->middleware('auth')
	->name('password.change');


// Edit profile
Route::get('/auth/profile/edit', [UserProfileController::class, 'edit'])
	->middleware('auth')
	->name('profile.edit');

Route::post('/auth/profile/update', [UserProfileController::class, 'update'])
	->middleware('auth')
	->name('profile.update');
