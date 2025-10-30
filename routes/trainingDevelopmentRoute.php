<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/Capacitacion-Entrenamiento', function () {
    return Inertia::render('TrainingDevelopment');
})->name('capacitacion-entrenamiento');


