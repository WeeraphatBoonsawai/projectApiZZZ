<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Playables;
use App\Models\Bangboo;

class Rank extends Model
{
    use HasFactory;
    protected $table = 'rank';
    protected $fillable = ['rank_name',
                            'rank_icon'
                        ];

    public function playables()
    {
        return $this->hasMany(Playables::class);
    }

    public function bangboos()
    {
        return $this->hasMany(Bangboo::class);
    }
}
