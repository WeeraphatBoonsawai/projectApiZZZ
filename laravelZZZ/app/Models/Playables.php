<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Rank;
use App\Models\Gender;
use App\Models\Bangboos;
use App\Models\Factions;
use App\Models\Agentsimages;

class Playables extends Model
{
    use HasFactory;
    protected $table = 'playables';
    protected $fillable = ['agents_name',
                        'birthdate',
                        'profile',
                        'specialty',
                        'attribute',
                        'agents_icon',
                        'slug_factions',
                        'slug_img',
                        'bangboos_id',
                        'gender_id',
                        'rank_id',
                            ];

    public function rank()
      {
         return $this->belongsTo(Rank::class);
      }

      public function gender()
      {
         return $this->belongsTo(Gender::class, 'gender_id');
      }

      public function bangboos()
      {
         return $this->belongsTo(Bangboos::class);
      }


      public function factions()
      {
        return $this->belongsTo(Factions::class, 'slug_factions','slug_factions');
      }

      public function agentsimages()
      {
        return $this->belongsTo(Agentsimages::class, 'slug_img','slug_img');
      }
}
