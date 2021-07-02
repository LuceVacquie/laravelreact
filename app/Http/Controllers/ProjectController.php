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
            'author' => 'string|max:255',
            'teammates' => 'string|max:1000',
            'status' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'due_date' => 'required|date',
        ]);

        dd('hello');
        $project = Project::create([
            'title' => $request->title,
            'client' => $request->client,
            'author' => $request->author,
            'teammates' => $request->teammates,
            'status' => $request->status,
            'type' => $request->type,
            'due_date' => $request->due_date,
        ]);

        $user = User::findOrFail(auth()->id());
        $project->users()->attach($user);

        return redirect(route('projects'));
    }

    public function getUserProjects()
    {
        return $projects = User::findOrFail(auth()->id())->projects()->get();
    }

    public function getProjectUsers($id)
    {
        return $users = Project::findOrFail($id)->users()->get();
    }

    const FIELDS = ['title', 'client', 'author', 'teammates', 'status', 'type', 'due_date'];

    public function update(Request $request)
    {
        $user = User::findOrFail(auth()->id());

        foreach (self::FIELDS as $field) {
            if($request -> $field) {
                $user->$field = $request->$field;
                $user->save();
            }
        }
        return redirect(route('projects'));
    }

}
