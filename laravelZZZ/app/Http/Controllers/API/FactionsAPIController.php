<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Factions;
use App\Models\Playables;

class FactionsAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $factions = Factions::all();
            return response()->json([
            'factions' => $factions
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'slug_factions' => 'required|string|max:255',
                'factions_img' => 'required|image',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        } else {

            try {

                $input = $request->all();
                if ($request->hasFile('factions_img')) {
                    $file = $request->file('factions_img');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $destinationPath = 'images/factions';
                    $file->move($destinationPath, $filename);
                    $input['factions_img'] = $filename;
                }

                if (Factions::create($input)) {
                    return response()->json(['status' => 200, 'message' => 'Add Faction successfully'], 200);
                } else {
                    return response()->json(['status' => 400, 'message' => 'Something went wrong!'], 400);
                }
            } catch (\Exception $e) {
                return response()->json(['message' => 'Something is really wrong!'], 500);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug_factions)
    {
        
        $playables = Playables::where('slug_factions', $slug_factions)->get();
        $factions = Factions::where('slug_factions', $slug_factions)->first();

        if (!$factions) {
            return response()->json([
                'massage' => 'Faction image not found!'
            ], 404);
        }
        return response()->json([
            'factions' => $factions,
            'playables' => $playables,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Factions $faction)
   {
    $validator = Validator::make(
        $request->all(),
        [
            'slug_factions' => 'required|string|max:255',
            'factions_img' => 'required|nullable|image',
        ]
    );

    if ($validator->fails()) {
        return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
    } else {

        try {

            if ($request->hasFile('factions_img')) {
                $destination = 'images/factions' . $faction->factions_img ;
                if (File::exists($destination)) {
                    File::delete($destination);
                }

                $file = $request->file('factions_img');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $destinationPath = 'images/factions';
                $file->move($destinationPath, $filename);
                $faction->factions_img = $filename;
            }
            $faction->update();
            if ($faction->fill($request->post())->save()) {
                return response()->json(['status' => 200, 'message' => 'Update Faction Successfully'], 200);
            } else {
                return response()->json(['status' => 400, 'message' => 'Something went wrong!'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'มีบางอย่างผิดพลาดจริงๆ!'], 500);
        }
    }
   }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $factions = Factions::find($id);
        if (!$factions) {
            return response()->json([
                'message' => "Faction not found"
            ], 404);
        }

        $factions->delete();

        return response()->json([
            'message' => "Faction successfully deleted."
        ], 200);
    }

    
}
