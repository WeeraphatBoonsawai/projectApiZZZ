<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Gender;

class GenderApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $genders = Gender::all();
            return response()->json([
            'gender' => $genders
        ], 200);
    }

    public function show($id)
    {
     $genders = Gender::find($id);
     if (!$genders) {
         return response()->json([
             'message' => 'Gender not found!'
         ], 404);
     }
     return response()->json([
         'gender' => $genders
     ], 200);
    }
}
