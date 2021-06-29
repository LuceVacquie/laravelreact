<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'phone' => $this->faker->phone(),
            'street_address' => $this->faker->street_address(),
            'postcode' => $this->faker->postcode(),
            'city' => $this->faker->city(),
            'date_of_birth' => $this->faker->date_of_birth(),
            'avatar' => $this->faker->avatar(),
            'banner' => $this->faker->banner(),
            'job_role' => $this->faker->job_role(),
            'start_date' => $this->faker->start_date(),
            'total_holidays' => $this->faker->total_holidays(),
            'manager' => $this->faker->manager(),
            'admin' => $this->faker->admin(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
