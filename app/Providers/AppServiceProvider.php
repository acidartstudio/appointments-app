<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use App\Http\Middleware\CheckLocale;
use Illuminate\Routing\Router;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{

	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		Paginator::defaultView('components.global.partials.pagination');
		// Is necessary to override the failed_jobs error, while importing in the production server
		Schema::defaultStringLength(191);

		// Setting the locale to all requests
		$router = $this->app->make(Router::class);
		$router->pushMiddlewareToGroup('web', CheckLocale::class);
	}
}