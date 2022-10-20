<?php

namespace App\Models;

class UserProfile extends BaseModel
{
	protected $table = 'user_profiles';

	protected $fillable = [
		'user_id',
		'name',
	];

	public static function getByUser($id)
	{
		return self::where('user_id', '=', $id);
	}
}
