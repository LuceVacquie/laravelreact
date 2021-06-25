<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Http\Controllers\Controller;

class AnnouncementController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Announcement');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
        ]);

        $announcement = Announcement::create([
            'title' => $request->title,
            'category' => $request->category,
            'description' => $request->description,
        ]);

        event(new Registered($announcement));
    }
}
