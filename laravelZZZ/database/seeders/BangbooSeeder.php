<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BangbooSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('bangboos')->insert
        ([
            ['bangboos_name' => 'Officer Cui',
            'bangboos_img' => 'OfficerCui.png',
            'bangboos_detail' => 'Though it may be a Bangboo, it even more intimidating than a Security Canine!',
            'rank_id' => '1',
            ],

            ['bangboos_name' => 'Bagboo',
            'bangboos_img' => 'Bagboo.png',
            'bangboos_detail' => 'There a dark past hidden under that bag...',
            'rank_id' => '2',
            ],
        ]);
    }
}
