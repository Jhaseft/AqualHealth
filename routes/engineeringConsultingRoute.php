<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/Ingenieria-Consultoria', function () {
    return Inertia::render('EngineeringConsulting');
})->name('ingenieria-consultoria');


