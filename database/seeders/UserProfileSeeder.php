<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class UserProfileSeeder extends Seeder
{
	public function run()
	{
		DB::table('user_profiles')->insert([
			'user_id' => 1,
			'name' => config('app.name'),
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
		]);
	}
}
