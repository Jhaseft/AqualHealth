<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/Armo-Quimica', function () {
    return Inertia::render('ArmoChemical');
})->name('armo-quimica');


