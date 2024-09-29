<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Agentsimages;
use App\Models\Playables;

class AgentsimagesAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $agentsimages = Agentsimages::all();
            return response()->json([
            'agentsimages' => $agentsimages
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
                'slug_img' => 'required|string|max:255',
                'agents_img' => 'required|image',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        } else {

            try {

                $input = $request->all();
                if ($request->hasFile('agents_img')) {
                    $file = $request->file('agents_img');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $destinationPath = 'images/gallery';
                    $file->move($destinationPath, $filename);
                    $input['agents_img'] = $filename;
                }

                if (Agentsimages::create($input)) {
                    return response()->json(['status' => 200, 'message' => 'Add Image successfully'], 200);
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
    public function show(string $slug_img)
    {
        $playables = Playables::where('slug_img', $slug_img)->get();
        $agentsimages = Agentsimages::where('slug_img', $slug_img)->first();

        if (!$agentsimages) {
            return response()->json([
                'massage' => 'Agents Image image not found!'
            ], 404);
        }
        return response()->json([
            'agentsimages' => $agentsimages,
            'playables' => $playables,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Agentsimages $agentsimage)
   {
    $validator = Validator::make(
        $request->all(),
        [
            'slug_img' => 'required|string|max:255',
            'agents_img' => 'required|nullable|image',
        ]
    );

    if ($validator->fails()) {
        return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
    } else {

        try {

            if ($request->hasFile('agents_img')) {
                $destination = 'images/gallery' . $agentsimage->agents_img ;
                if (File::exists($destination)) {
                    File::delete($destination);
                }

                $file = $request->file('agents_img');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $destinationPath = 'images/gallery';
                $file->move($destinationPath, $filename);
                $agentsimage->agents_img = $filename;
            }
            $agentsimage->update();
            if ($agentsimage->fill($request->post())->save()) {
                return response()->json(['status' => 200, 'message' => 'Update Image Successfully'], 200);
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
        $agentsimages = Agentsimages::find($id);
        if (!$agentsimages) {
            return response()->json([
                'message' => "Image not found"
            ], 404);
        }

        $agentsimages->delete();

        return response()->json([
            'message' => "Image successfully deleted."
        ], 200);
    }
}
