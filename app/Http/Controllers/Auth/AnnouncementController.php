<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;

class AnnouncementController extends Controller
{
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
