<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/announcement', function () {
    return \App\Models\Announcement::all();
})->name('announcement');

//Example
// Route::middleware(['auth:sanctum', 'verified'])->get('/testing', function () {
//     return \App\Models\Organisation::all();
// })->name('testing');