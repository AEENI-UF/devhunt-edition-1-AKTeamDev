<?php

use Illuminate\Support\Facades\Route;

//use App\Http\Controllers\testController;
//use App\Http\Controllers\EtudiantController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*** Routes pour l'étudiant ***/
//Route::get('/foo','\App\Http\Controllers\testControllers@foo'); 
//Route::get('/bar','\App\Http\Controllers\testControllers@bar');
Route::post('/api/devhunt/etudiant/add', [App\Http\Controllers\EtudiantController::class, 'store']);
Route::get('/api/devhunt/etudiants', [App\Http\Controllers\EtudiantController::class, 'show']);
Route::get('/api/devhunt/etudiants/{id}', [App\Http\Controllers\EtudiantController::class, 'edit']);
Route::delete('/api/devhunt/etudiants/{id}', [App\Http\Controllers\EtudiantController::class, 'destroy']);
Route::get('/importation_fichiers', [App\Http\Controllers\EtudiantController::class, 'importerExcelView']);
Route::post('/import', [App\Http\Controllers\EtudiantController::class, 'import']);

/*** Routes pour le compte ***/
Route::get('/api/devhunt/test', [App\Http\Controllers\AdminController::class, 'index']);
Route::get('/api/devhunt/comptes', [App\Http\Controllers\CompteController::class, 'index']);
Route::post('/api/devhunt/comptes', [App\Http\Controllers\CompteController::class, 'store']);
Route::delete('/api/devhunt/comptes/{id}', [App\Http\Controllers\CompteController::class, 'destroy']);
Route::get('/api/devhunt/comptes/{id}', [App\Http\Controllers\CompteController::class, 'edit']);
Route::post('/api/devhunt/update_comptes', [App\Http\Controllers\CompteController::class, 'update']);

/*** Route pour les administrateur ***/
Route::get('/api/devhunt/test', [App\Http\Controllers\AdminController::class, 'index']);

Route::post('/api/devhunt/utilisateurs', [App\Http\Controllers\AdminController::class, 'store']);
Route::get('/api/devhunt/utilisateurs', [App\Http\Controllers\AdminController::class, 'show']);
Route::get('/api/devhunt/utilisateurs/{id}', [App\Http\Controllers\AdminController::class, 'edit']);
Route::post('/api/devhunt/update_utilisateurs', [App\Http\Controllers\AdminController::class, 'update']);
Route::delete('/api/devhunt/utilisateurs/{id}', [App\Http\Controllers\AdminController::class, 'destroy']);


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
