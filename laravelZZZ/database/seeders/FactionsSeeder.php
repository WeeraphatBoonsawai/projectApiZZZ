<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FactionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('factions')->insert
        ([
            ['slug_factions' => 'Victoria Housekeeping Co.',
            'factions_img' => 'victoria_housekeeping_co.png',
            ],
            

        ]);
    }
}
