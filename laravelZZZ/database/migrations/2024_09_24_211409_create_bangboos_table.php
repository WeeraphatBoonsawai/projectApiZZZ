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
        Schema::create('bangboos', function (Blueprint $table) {
            $table->id();
            $table->string('bangboos_name');
            $table->string('bangboos_img');
            $table->string('bangboos_detail');
            $table->unsignedBigInteger('rank_id');
            $table->timestamps();

            $table->foreign('rank_id')->references('id')->on('rank');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bangboos');
    }
};
