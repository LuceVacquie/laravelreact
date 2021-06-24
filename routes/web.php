<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisteredUserController;

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

// Views
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//User dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//User profile
Route::get('/profile', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');

//Edit profile form
Route::get('/edit-profile-form', function () {
    return Inertia::render('EditProfileForm');
})->middleware(['auth', 'verified'])->name('edit-profile-form');

//Schedule a one-to-one
Route::get('/one-to-one-form', function () {
    return Inertia::render('OneToOneForm');
})->middleware(['auth', 'verified'])->name('one-to-one-form');

//Requet time off
Route::get('/holidays-form', function () {
    return Inertia::render('HolidaysForm');
})->middleware(['auth', 'verified'])->name('holidays-form');

//Access user payroll
Route::get('/payrolls', function () {
    return Inertia::render('Payrolls');
})->middleware(['auth', 'verified'])->name('payrolls');

require __DIR__.'/auth.php';

