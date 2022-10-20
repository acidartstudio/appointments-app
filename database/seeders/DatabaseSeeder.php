<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	public function run()
	{
		$this->call([
			AppointmentStatusSeeder::class,
			UserSeeder::class,
			UserProfileSeeder::class
		]);
	}
}
