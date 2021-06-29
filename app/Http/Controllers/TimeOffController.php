<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use App\Models\TimeOff;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class TimeOffController extends Controller
{

    public function index()
    {
        return Inertia::render('HolidaysForm', ['data' => TimeOff::all()]);
    }

    public function store(Request $request)
    
    {
        $request->validate([
            'user_id' => 'required|string|max:255',
            'type_of_leave' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'date',
            'type_of_day' => 'required|string|max:255',
            'notes' => 'string|max:1000',
        ]);

        $timeoff = TimeOff::create([
            'user_id' => auth()->id(),
            'type_of_leave' => $request->type_of_leaves,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'type_of_day' => $request->type_of_day,
            'notes' => $request->notes,
        ]);

        return redirect(RouteServiceProvider::HOME);
    }
}
