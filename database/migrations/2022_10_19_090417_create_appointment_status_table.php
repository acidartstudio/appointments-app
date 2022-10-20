<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentStatusTable extends Migration
{
	public function up()
	{
		Schema::create('appointment_status', function (Blueprint $table) {
			$table->id();
			$table->string('status');
		});
	}
	public function down()
	{
		Schema::dropIfExists('appointment_status');
	}
}
