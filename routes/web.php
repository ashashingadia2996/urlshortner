<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UrlShortenerController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('index');

Route::post('/shorten', [UrlShortenerController::class, 'shorten'])->name('shorten');

Route::get('totalclicks/{code}', function (Request $request, $code) {
    $controller = new UrlShortenerController();
    $totalCount = $controller->getClickCount($code);

    return Inertia::render('TotalClicks', [
        'shortcode' => $code,
        'totalcount' => $totalCount,
        'requestUrl' => $request->url(),
    ]);
})->name('totalclicks');

Route::get('trackclick', function () {
    return Inertia::render('TrackClicks', []);
})->name('trackclick');


Route::get('shorturl/{code}', [UrlShortenerController::class, 'redirect'])->name('redirect');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Fallback route to catch all other requests
Route::fallback(function () {
    return redirect('/');
});

require __DIR__.'/auth.php';
