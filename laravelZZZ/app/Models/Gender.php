<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Playables;

class Gender extends Model
{
    use HasFactory;
    protected $table = 'gender';
    protected $fillable = ['gender_name'];

    public function playables()
    {
        return $this->hasMany(Playables::class, 'gender_id');
    }
}
