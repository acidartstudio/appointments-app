<?php

namespace App\Models;

class UserEmail extends BaseModel
{
	protected $table = 'users';

	protected $fillable = [
		'email'
	];
}
