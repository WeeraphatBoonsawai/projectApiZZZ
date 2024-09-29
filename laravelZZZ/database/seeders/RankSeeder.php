<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rank')->insert
        ([
            ['rank_name' => 'S',
            'rank_icon' => 'Srank.png',
            ],

            ['rank_name' => 'A',
            'rank_icon' => 'Arank.png',
            ],
           
        ]);
    }
}
