<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/quienes-somos', function () {
    return Inertia::render('WhoWeAre');
})->name('quienes-somos');


