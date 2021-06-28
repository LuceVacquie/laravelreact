<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use App\Models\User;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
 
    const FIELDS = ['phone', 'job_role', 'street_address', 'postcode', 'city', 'date_of_birth'];

    public function update(Request $request)
    {
        $user = User::first();

        foreach (self::FIELDS as $field) {
            if($request -> $field) {
                $user->$field = $request->$field;
                $user->save();
            }
        }

        //handle images 
        $image = $request->file('avatar');

        if($image) {
            if($user -> avatar) {
                Storage::delete('public/profile-avatars/'.$user->avatar);
            }

            $image_new_name = date('dmy_H_s_i').'_'.$user->id.'_'.$image->getClientOriginalName();
            $image->storeAs('profile-avatars', $image_new_name, 'public');
            $user->avatar_url = 'storage/profile-avatars'.$image_new_name;
            $user->avatar = $image_new_name;
            $user->save();
        }

        return redirect(route('profile'));
    }
}
