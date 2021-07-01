<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects', ['data' => Project::all()]);
    }

    public function projectsList()
    {
        return Project::all();
    }

    public function store (Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:255',
            'client' => 'required|string|max:255',
            'teammates' => 'string|max:1000',
            'status' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'due_date' => 'required|date',
        ]);


        $project = Project::create([
            'title' => $request->title,
            'client' => $request->client,
            'teammates' => $request->teammates,
            'status' => $request->status,
            'type' => $request->type,
            'due_date' => $request->due_date,
        ]);

        $user = User::findOrFail(auth()->id());
        $project->users()->attach($user);
        
        return redirect(route('projects'));
    }

    public function getProjectUser()
    {
        return $users = Project::findOrFail(auth()->id())->users()->get();
    }
}
