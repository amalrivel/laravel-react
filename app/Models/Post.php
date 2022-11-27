<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
        'timestamps',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function sport()
    {
        return $this->belongsTo(Sport::class);
    }
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
