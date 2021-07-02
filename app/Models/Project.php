<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'client',
        'author',
        'teammates',
        'status',
        'type',
        'due_date',
    ];

    //Define user_project relationship
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
