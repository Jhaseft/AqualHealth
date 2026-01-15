<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
    ]);
});
Route::get('/Historia', function () {
    return Inertia::render('Historia', [
    ]);
});
Route::get('/Politicas', function () {
    return Inertia::render('Politicas', [
    ]);
});

Route::get('/CasosDeExito', function () {
    return Inertia::render('CasosExito', [
    ]);
});

Route::get('/Contacto', function () {
    return Inertia::render('Contacto', [
    ]);
});

//incluir las rutas de quienes somos
require __DIR__ . '/whoWeAreRoute.php';
require __DIR__ . '/ExecutiveTeamRoute.php';
