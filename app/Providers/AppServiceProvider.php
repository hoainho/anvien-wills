<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use URL;
// use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if (env(key: 'APP_ENV') === 'local' && request()->server(key: 'HTTP_X_FORWARDED_PROTO') === 'https') {
            URL::forceScheme(scheme: 'https');
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(\Illuminate\Http\Request $request): void
    {
        if ($request->server->has('HTTP_X_ORIGINAL_HOST')) {
            $this->app['url']->forceRootUrl($request->server->get('HTTP_X_FORWARDED_PROTO').'://'.$request->server->get('HTTP_X_ORIGINAL_HOST'));
        }
    }
}
