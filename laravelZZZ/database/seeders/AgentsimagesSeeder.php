<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgentsimagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('agentsimages')->insert
        ([
            ['slug_img' => 'EllenJoe-img',
            'agents_img' => 'EllenJoe1.png',
            ],

            ['slug_img' => 'EllenJoe-img',
            'agents_img' => 'EllenJoe2.png',
            ],

            ['slug_img' => 'EllenJoe-img',
            'agents_img' => 'EllenJoe3.png',
            ],

            ['slug_img' => 'CorinWickes-img',
            'agents_img' => 'CorinWickes1.png',
            ],

           
        ]);
    }
}
