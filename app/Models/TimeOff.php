<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeOff extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'type_of_leave',
        'start_date',
        'end_date',
        'type_of_day',
        'notes',
    ];
}
