<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
        'timestamps',
    ];

    public function user()
    {
        return $this->hasMany(User::class);
    }
    public function getRouteKeyName()
    {
        return 'name';
    }
}
