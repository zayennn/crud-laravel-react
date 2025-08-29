<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Testing\Fluent\Concerns\Has;

class Mahasiswa extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'email', 'no_hp', 'alamat'];
}
