<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class AppointmentStatusSeeder extends Seeder
{
	public function run()
	{
		DB::table('appointment_status')->insert([
			'status' => __('appointment_status.new'),
		]);

		DB::table('appointment_status')->insert([
			'status' => __('appointment_status.completed'),
		]);

		DB::table('appointment_status')->insert([
			'status' => __('appointment_status.canceled'),
		]);
	}
}
