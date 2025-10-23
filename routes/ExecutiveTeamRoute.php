<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta simple y directa como en web.php
Route::get('/equipo-directivo', function () {
    return Inertia::render('ExecutiveTeam');
})->name('equipo-directivo');


