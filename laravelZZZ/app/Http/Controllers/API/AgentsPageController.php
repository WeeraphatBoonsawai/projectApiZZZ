<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Playables;
use App\Models\Agentsimages;

class AgentsPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $playables = Playables::with(['rank','gender'])->get();
        return  response()->json([
            'playables' => $playables
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug_img)
    {
        $playables = Playables::with(['rank','gender','bangboos'])->where('slug_img', $slug_img)->first();
        $agentsimages = Agentsimages::where('slug_img', $slug_img)->get();

        if (!$playables) {
            return response()->json([
                'massage' => 'Agents Image image not found!'
            ], 404);
        }
        return response()->json([
            'agentsimages' => $agentsimages,
            'playables' => $playables,
        ], 200);
    }
}
