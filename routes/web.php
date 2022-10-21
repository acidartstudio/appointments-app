<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\AdminController;
use App\Http\Controllers\Backend\AppointmentController as BackendAppointmentController;
use App\Http\Controllers\Frontend\AppointmentController as FrontendAppointmentController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
| Backend
|--------------------------------------------------------------------------
*/

Route::middleware('auth', 'admin')->group(function () {
	// Admin
	Route::get('/admin', [AdminController::class, 'index'])
		->name('admin');


	// We'll save some code by not prefixing the route names in backend, only in frontend
	// Appointments
	Route::put('/admin/appointments/restore/{category}', [BackendAppointmentController::class, 'restore'])
		->name('appointments.restore');

	Route::get('/admin/appointments/search', [BackendAppointmentController::class, 'search'])
		->name('appointments.search');

	Route::get('/admin/appointments/trashed', [BackendAppointmentController::class, 'trashed'])
		->name('appointments.trashed');

	Route::resource('/admin/appointments', BackendAppointmentController::class, [
		'names' => 'appointments',
		'except' => ['create', 'store']
	]);
});

/*
| Frontend
|--------------------------------------------------------------------------
*/

// Appointments
Route::get('/', [FrontendAppointmentController::class, 'index'])
	->name('frontend.appointments');

Route::get('/appointments/{date}/create', [FrontendAppointmentController::class, 'create'])
	->name('frontend.appointments.create');

Route::post('/appointments/store', [FrontendAppointmentController::class, 'store'])
	->name('frontend.appointments.store');

require __DIR__.'/auth.php';