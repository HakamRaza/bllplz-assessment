<?php

use App\Http\Controllers\Password\PasswordController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Billplz Assessment Routes
|--------------------------------------------------------------------------
|
|
*/

/**
 * Question 1 Route
 */
Route::get('password-generator', [PasswordController::class, 'view'])->name('billplz.password_generator');
Route::post('password-generator', [PasswordController::class, 'generate']);