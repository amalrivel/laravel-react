<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'saya',
            'username' => 'saya',
            'email' => 'saya@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'sport_id' => mt_rand(1, 2),
        ]);

        \App\Models\Post::factory(100)->create();

        \App\Models\Role::factory()->create([
            'name' => 'admin',
        ]);

        \App\Models\Role::factory()->create([
            'name' => 'superadmin',
        ]);

        \App\Models\Sport::factory(20)->create();

    }
}
