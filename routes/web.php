<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
    ]);
});

//incluir las rutas de quienes somos
require __DIR__ . '/whoWeAreRoute.php';
require __DIR__ . '/ExecutiveTeamRoute.php';
