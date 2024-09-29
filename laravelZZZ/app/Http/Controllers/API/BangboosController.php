<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Bangboos;

class BangboosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bangboos = Bangboos::with('rank')->get();
        return  response()->json([
            'bangboos' => $bangboos
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
                'bangboos_name' => 'required|string|max:255',
                'bangboos_img' => 'required|image',
                'bangboos_detail' => 'required|string|max:255',
                'rank_id' => 'required|exists:rank,id',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        } else {

            try {

                $input = $request->all();
                if ($request->hasFile('bangboos_img')) {
                    $file = $request->file('bangboos_img');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $destinationPath = 'images/bangboo';
                    $file->move($destinationPath, $filename);
                    $input['bangboos_img'] = $filename;
                }

                if (Bangboos::create($input)) {
                    return response()->json(['status' => 200, 'message' => 'Add Bangboo successfully'], 200);
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
    public function show(string $id)
    {
        $bangboos = Bangboos::with('rank')->find($id);
        if (!$bangboos) {
            return response()->json([
                'massage' => 'Bangboo image not found!'
            ], 404);
        }
        return response()->json([
            'bangboos' => $bangboos
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bangboos $bangboo)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'bangboos_name' => 'required|string|max:255',
                'bangboos_img' => 'nullable',
                'bangboos_detail' => 'required|string|max:255',
                'rank_id' => 'required|exists:rank,id',
            ]
        );
    
        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        } else {
    
            try {
    
                if ($request->hasFile('bangboos_img')) {
                    $destination = 'images/bangboo' . $bangboo->bangboos_img ;
                    if (File::exists($destination)) {
                        File::delete($destination);
                    }
    
                    $file = $request->file('bangboos_img');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $destinationPath = 'images/bangboo';
                    $file->move($destinationPath, $filename);
                    $bangboo->bangboos_img = $filename;
                }
                $bangboo->update();
                if ($bangboo->fill($request->post())->save()) {
                    return response()->json(['status' => 200, 'message' => 'Update Bangboo Successfully'], 200);
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
        $bangboos = Bangboos::find($id);
        if (!$bangboos) {
            return response()->json([
                'message' => "Bangboo not found"
            ], 404);
        }

        $bangboos->delete();

        return response()->json([
            'message' => "Bangboo successfully deleted."
        ], 200);
    }
}
