<?php

namespace App\Models;

class UserPassword extends BaseModel
{
	protected $table = 'users';

	protected $fillable = [
		'password'
	];
}
