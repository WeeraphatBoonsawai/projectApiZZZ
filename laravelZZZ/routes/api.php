<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\FlareClient\Api;
use App\Http\Controllers\API\PlayablesAPIController;
use App\Http\Controllers\API\FactionsAPIController;
use App\Http\Controllers\API\AgentsimagesAPIController;
use App\Http\Controllers\API\BangboosController;
use App\Http\Controllers\API\AgentsPageController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\RankApiController;
use App\Http\Controllers\API\GenderApiController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::resource('/playables',PlayablesAPIController::class);
Route::resource('/factions',FactionsAPIController::class);
Route::resource('/agentsimages',AgentsimagesAPIController::class);
Route::resource('/bangboos',BangboosController::class);
Route::resource('/ranks',RankApiController::class);
Route::resource('/genders',GenderApiController::class);

Route::get('/gender',[PlayablesAPIController::class, 'Chart']);
Route::get('/rank',[PlayablesAPIController::class, 'RankChart']);
Route::get('/bangbooschart',[PlayablesAPIController::class, 'BangboosChart']);

Route::get('/factions/detail/{slug_factions}',[FactionsAPIController::class, 'show']);
Route::get('/agentsimages/detail/{slug_img}',[AgentsimagesAPIController::class, 'show']);

Route::get('/playables/detail/{slug_img}',[AgentsPageController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user',[AuthController::class,'user']);
    Route::post('/logout',[AuthController::class,'logout']);
    });