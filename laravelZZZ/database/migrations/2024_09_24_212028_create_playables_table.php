<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('playables', function (Blueprint $table) {
            $table->id();
            $table->string('agents_name');
            $table->string('birthdate');
            $table->text('profile');
            $table->string('specialty');
            $table->string('attribute');
            $table->string('agents_icon');
            $table->string('slug_factions');
            $table->string('slug_img');
            $table->unsignedBigInteger('bangboos_id');
            $table->unsignedBigInteger('gender_id');
            $table->unsignedBigInteger('rank_id');
            $table->timestamps();

            $table->foreign('bangboos_id')->references('id')->on('bangboos');
            $table->foreign('gender_id')->references('id')->on('gender');
            $table->foreign('rank_id')->references('id')->on('rank');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('playables');
    }
};
