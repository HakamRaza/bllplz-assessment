<?php

use App\Http\Controllers\Password\PasswordController;
use App\Http\Controllers\Pizza\PizzaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


/**
 * Question 3 Route
 */
Route::get('credit-balance', function(){
    return Inertia::render('Credit/Balance');
});


/**
 * Question 4 Route
 */
Route::get('difference', function(){
    return Inertia::render('Difference/Difference');
});


/**
 * Question 5 Route
 */
Route::get('comment-likes', function(){
    return Inertia::render('Comment/Like');
});