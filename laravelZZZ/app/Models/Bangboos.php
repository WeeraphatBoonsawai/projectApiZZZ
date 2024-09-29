<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Playables;
use App\Models\Rank;

class Bangboos extends Model
{
    use HasFactory;
    protected $table = 'bangboos';
    protected $fillable = ['bangboos_name',
                        'bangboos_img',
                        'bangboos_img',
                        'bangboos_detail',
                        'rank_id',
                            ];

   public function playables()
      {
      return $this->hasMany(Playables::class);
     }

     public function rank()
      {
         return $this->belongsTo(Rank::class);
      }
}
