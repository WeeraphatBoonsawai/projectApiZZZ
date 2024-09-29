<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Playables;

class Agentsimages extends Model
{
    use HasFactory;
    protected $table = 'agentsimages';
    protected $fillable = ['slug_img',
                        'agents_img'
                            ];

    public function agentsimages()
      {
        return $this->belongsTo(Agentsimages::class, 'slug_img');
      }
}
