<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Rank;

class RankApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ranks = Rank::all();
            return response()->json([
            'rank' => $ranks
        ], 200);
    }

    public function show($id)
    {
     $ranks = Rank::find($id);
     if (!$ranks) {
         return response()->json([
             'message' => 'Rank not found!'
         ], 404);
     }
     return response()->json([
         'rank' => $ranks
     ], 200);
    }
}
