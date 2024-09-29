<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Playables;

class Factions extends Model
{
    use HasFactory;
    protected $table = 'factions';
    protected $fillable = ['slug_factions',
                        'factions_img'
                            ];

    public function factions()
      {
        return $this->belongsTo(Factions::class, 'slug_factions');
      }
}
