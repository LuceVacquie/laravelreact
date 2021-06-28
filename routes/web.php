<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\Auth\ProfileController;

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

//Main navigation
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/calendar', function () {
    return Inertia::render('Calendar');
})->middleware(['auth', 'verified'])->name('calendar');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->middleware(['auth', 'verified'])->name('projects');

Route::get('/team', function () {
    return Inertia::render('Team');
})->middleware(['auth', 'verified'])->name('team');


//Dashboard navigation
Route::get('/profile', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');

Route::get('/edit-profile', function () {
    return Inertia::render('EditProfileForm');
})->middleware(['auth', 'verified'])->name('edit-profile');

Route::get('/one-to-one-form', function () {
    return Inertia::render('OneToOneForm');
})->middleware(['auth', 'verified'])->name('one-to-one-form');

Route::get('/holidays-form', function () {
    return Inertia::render('HolidaysForm');
})->middleware(['auth', 'verified'])->name('holidays-form');

Route::get('/payrolls', function () {
    return Inertia::render('Payrolls');
})->middleware(['auth', 'verified'])->name('payrolls');

Route::get('/other-user-profile', function () {
    return Inertia::render('OtherUserProfile');
})->middleware(['auth', 'verified'])->name('other-user-profile');




// Announcements
Route::post('/announcements', [AnnouncementController::class, 'store'])->middleware(['auth', 'verified'])->name('announcements');

Route::get('/announcements', [AnnouncementController::class, 'index'])->middleware(['auth', 'verified'])->name('announcements');


require __DIR__.'/auth.php';


