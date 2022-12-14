<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsAdminToUsersTable extends Migration
{
	public function up()
	{
		Schema::table('users', function (Blueprint $table) {
			$table->boolean('is_admin')->after('remember_token')->default(false);
		});
	}

	public function down()
	{
		Schema::table('users', function (Blueprint $table) {
			//
		});
	}
}
