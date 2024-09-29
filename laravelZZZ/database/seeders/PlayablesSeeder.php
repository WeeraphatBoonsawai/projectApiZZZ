<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlayablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('playables')->insert
        ([
            ['agents_name' => 'Ellen Joe',
            'birthdate' => 'January 4th',
            'profile' => 'New Eridu Citizen Verification Profile: Ellen, with a good aptitude for Ether, is authorized to perform basic tasks such as investigating and mining in identified Hollows (including Companion Hollows) within New Eridu. Note: The remaining information about Ellen is currently archived in a certain school in New Eridu.',
            'specialty' => 'Attack',
            'attribute' => 'Ice',
            'agents_icon' => 'EllenJoe.png',
            'slug_factions' => 'Victoria Housekeeping Co.',
            'slug_img' => 'EllenJoe-img',
            'bangboos_id' => '1',
            'gender_id' => '2',
            'rank_id' => '1',
            ],

            ['agents_name' => 'Corin Wickes',
            'birthdate' => 'June 2nd',
            'profile' => 'Corin is one of the maids working for Victoria Housekeeping Co. She is a highly obedient maid but lacks confidence and often fears being disliked by others. When in a rush, she becomes flustered and stutters. Corin is always apologizing no matter what happens.',
            'specialty' => 'Attack',
            'attribute' => 'Physical',
            'agents_icon' => 'CorinWickes.png',
            'slug_factions' => 'Victoria Housekeeping Co.',
            'slug_img' => 'CorinWickes-img',
            'bangboos_id' => '2',
            'gender_id' => '2',
            'rank_id' => '2',
            ],
        ]);
    }
}
