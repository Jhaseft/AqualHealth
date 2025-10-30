<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/Plantas-Equipos', function () {
    return Inertia::render('PlantsEquipment');
})->name('plantas-equipos');


