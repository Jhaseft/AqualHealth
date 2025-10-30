<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/Productos-Quimicos', function () {
    return Inertia::render('ProductsChemicals');
})->name('productos-quimicos');


