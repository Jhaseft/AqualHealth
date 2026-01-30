<?php


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactoController;

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

Route::get('/ingenieria-&-consultoria', function () {
    return Inertia::render('IngenieriaConsultoria', []);
});

Route::get('/plantas-&-equipos', function () {
    return Inertia::render('PlantasEquipos', []);
});

Route::get('/armo-quimica', function () {
    return Inertia::render('ArmoQuimica', []);
});

Route::get('/productos-quimicos', function () {
    return Inertia::render('ProductosQuimicos', []);
});

Route::get('/capacidad-&-entretenimiento', function () {
    return Inertia::render('CapacitacionEntrenamiento', []);
});


//ruta para mandar email desde contacto
Route::post('/contacto', [ContactoController::class, 'enviar']);

//incluir las rutas de quienes somos
require __DIR__ . '/whoWeAreRoute.php';
require __DIR__ . '/ExecutiveTeamRoute.php';
