<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Playables;

class PlayablesAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $playables = Playables::with(['rank','gender','bangboos'])->get();
        // return Json Response
        return  response()->json([
            'playables' => $playables
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
                'agents_name' => 'required|string|max:255',
                'birthdate' => 'required|string|max:255',
                'profile' => 'required|string|max:1000',
                'specialty' => 'required|string|max:255',
                'attribute' => 'required|string|max:255',
                'agents_icon' => 'required|image',
                'slug_factions' => 'required|string|max:255',
                'slug_img' => 'required|string|max:255',
                'bangboos_id' => 'required|exists:bangboos,id',
                'gender_id' => 'required|exists:gender,id',
                'rank_id' => 'required|exists:rank,id',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        } else {

            try {

                $input = $request->all();
                if ($request->hasFile('agents_icon')) {
                    $file = $request->file('agents_icon');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $destinationPath = 'images/icon';
                    $file->move($destinationPath, $filename);
                    $input['agents_icon'] = $filename;
                }

                if (Playables::create($input)) {
                    return response()->json(['status' => 200, 'message' => 'Add Playable successfully'], 200);
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
        $playables = Playables::with(['rank','gender','bangboos'])->find($id);
        if (!$playables) {
            return response()->json([
                'massage' => 'Playables image not found!'
            ], 404);
        }
        return response()->json([
            'playables' => $playables
        ], 200);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Playables $playable)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'agents_name' => 'required|string|max:255',
                'birthdate' => 'required|string|max:255',
                'profile' => 'required|string|max:1000',
                'specialty' => 'required|string|max:255',
                'attribute' => 'required|string|max:255',
                'agents_icon' => 'required|nullable|image',
                'slug_factions' => 'required|string|max:255',
                'slug_img' => 'required|string|max:255',
                'bangboos_id' => 'required|exists:bangboos,id',
                'gender_id' => 'required|exists:gender,id',
                'rank_id' => 'required|exists:rank,id',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        } else {

            try {

                if ($request->hasFile('agents_icon')) {
                    $destination = 'images/icon' . $playable->agents_icon ;
                    if (File::exists($destination)) {
                        File::delete($destination);
                    }

                    $file = $request->file('agents_icon');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time() . '_' . uniqid() . '.' . $extension;
                    $destinationPath = 'images/icon';
                    $file->move($destinationPath, $filename);
                    $playable->agents_icon = $filename;
                }
                $playable->update();
                if ($playable->fill($request->post())->save()) {
                    return response()->json(['status' => 200, 'message' => 'Update Playable Successfully'], 200);
                } else {
                    return response()->json(['status' => 400, 'message' => 'Something went wrong!'], 400);
                }
            } catch (\Exception $e) {
                return response()->json(['message' => 'Something is really wrong!'], 500);
            }
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $playables = Playables::find($id);
        if (!$playables) {
            return response()->json([
                'message' => "Playables not found"
            ], 404);
        }

        $playables->delete();

        return response()->json([
            'message' => "Playables successfully deleted."
        ], 200);
    }

    public function Chart()
    {
        $gendercount = Playables::with('gender')->select('gender_id')->selectRaw('count(*) as count')->groupBy('gender_id')->get();
        return response()->json([
            'gendercount' => $gendercount
        ], 200);
    }

    public function RankChart()
    {
        $rankcount = Playables::with('rank')->select('rank_id')->selectRaw('count(*) as count')->groupBy('rank_id')->get();
        return response()->json([
            'rankcount' => $rankcount
        ], 200);
    }

    public function BangboosChart()
    {
        $bangbooscount = Playables::with('bangboos')->select('bangboos_id')->selectRaw('count(*) as count')->groupBy('bangboos_id')->get();
        return response()->json([
            'bangbooscount' => $bangbooscount
        ], 200);
    }
}
