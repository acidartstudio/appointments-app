<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
	use HasFactory;

	public function user()
	{
		return $this->hasOne(UserProfile::class, 'id', 'user_id');
	}

	public function getUserNameAttribute()
	{
		return $this->user->name;
	}
}
