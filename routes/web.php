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


