<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
  
    public function index()
    {
        return Inertia::render('Announcements', ['data' => Announcement::all()]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'created_by' => 'required|string|max:255',
        ]);

        $announcement = Announcement::create([
            'title' => $request->title,
            'category' => $request->category,
            'description' => $request->description,
            'created_by' => $request->created_by,
        ]);

        return redirect(route('announcements'));
    }
}
