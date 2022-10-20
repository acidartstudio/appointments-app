<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
	public function up()
	{
		Schema::create('appointments', function (Blueprint $table) {
			$table->id();
			$table->string('name');
			$table->string('email');
			$table->string('phone');
			$table->string('observations')->nullable();
			$table->datetime('from_date');
			$table->datetime('to_date');
			$table->integer('status')->default(1)->index();
			$table->integer('updated_by')->nullable()->index();
			$table->integer('deleted_by')->nullable()->index();
			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::dropIfExists('appointments');
	}
}