<?php

use App\Http\Controllers\Password\PasswordController;
use App\Http\Controllers\Pizza\PizzaController;
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


/**
 * Question 2 Route
 */
Route::get('pizza-ordering', [PizzaController::class, 'view'])->name('billplz.pizza_ordering');
Route::post('pizza-ordering', [PizzaController::class, 'addPizza']);
