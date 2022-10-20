<?php

namespace App\View\Components\Backend\Partials;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\View\Component;

class Head extends Component
{
	public function render()
	{
		$module = __('modules.' . request()->segment(2));

		// Admin Homepage
		if (request()->segment(1) == 'admin' AND ! request()->segment(2)) {
			$module = config('app.name');
			$action = 'Admin';
		}
		// Auth
		elseif (request()->segment(1) == 'auth') {
			if (config('auth.layout') == 'layouts.auth') {
				$module = __('modules.' . request()->segment(1));

				// The auth lang/routes do not follow the backend pattern, so a manual assignment must be done
				$routesLang = config('auth.routes_to_lang');

				$action = __('frontend/auth.' . $routesLang[Route::currentRouteName()]);
			}
		}
		// Backend at least 2 segments and index routes, that are not visible in the URL segment array
		elseif ( ! request()->segment(3) and (last(explode('.', Route::currentRouteName())) == 'index')) {
			$action = __(Route::currentRouteName());
		}
		// Backend at least 3 segments and index routes, that are not visible in the URL segment array
		elseif ( ! request()->segment(4) AND (last(explode('.', Route::currentRouteName())) == 'index')) {
			$action = __(Str::replaceFirst('.', '/', Route::currentRouteName()));
		}
		// Backend all other routes (must be after the ones above, to satisfy the if clause)
		elseif ( ! request()->segment(4)) {
			$action = __(Route::currentRouteName());
		}
		elseif (request()->segment(4) == 'edit') {
			$action = __(Route::currentRouteName());
		}
		elseif (request()->segment(4)) {
			$action = __(Str::replaceFirst('.', '/', Route::currentRouteName()));
		}

		$title = $module . ' | ' . $action;

		return view('components.backend.partials.head',
			compact('title')
		);
	}
}