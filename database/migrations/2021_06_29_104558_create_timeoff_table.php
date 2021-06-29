<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeoffTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timeoff', function (Blueprint $table) {
            $table->id();
            $table->string('user_id')->unique(); 
            $table->string('type_of_leave');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->string('type_of_day');
            $table->string('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timeoff');
    }
}
