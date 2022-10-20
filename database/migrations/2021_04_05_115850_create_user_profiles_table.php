<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserProfilesTable extends Migration
{
	public function up()
	{
		Schema::create('user_profiles', function (Blueprint $table) {
			$table->id();
			$table->integer('user_id')->default(0)->index();
			$table->string('name')->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::dropIfExists('user_profiles');
	}
}
