<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckIfRegistrationIsAllowed
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle(Request $request, Closure $next)
	{
		if (config('auth.allow_registration') == false) {
			return abort(404);
		}

		return $next($request);
	}
}
