<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;

class UserSeeder extends Seeder
{
	public function run()
	{
		DB::table('users')->insert([
			'email' => config('mail.from.address'),
			'password' => Hash::make('EK8ThI4rVkekcIlGKrVL'),
			'is_admin' => true,
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
		]);
	}
}
