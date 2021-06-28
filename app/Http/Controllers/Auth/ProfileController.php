<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
 
    const FIELDS = ['phone', 'job_role', 'manager', 'start_date', 'street_address', 'postcode', 'city', 'date_of_birth'];

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
        $imageAvatar = $request->file('avatar');

        if($imageAvatar) {
            if($user->avatar) {
                Storage::delete($user->avatar);
            }

            $image_new_name = date('dmy_H_s_i').'_'.$user->id.'_'.$imageAvatar->getClientOriginalName();
            $imageAvatar->storeAs('public/profile-avatars', $image_new_name);
            $user->avatar = Storage::url('public/profile-avatars/'.$image_new_name);
        }

        $imageBanner = $request->file('banner');

        if($imageBanner) {
            if($user->banner) {
                Storage::delete($user->banner);
            }

            $image_new_name = date('dmy_H_s_i').'_'.$user->id.'_'.$imageBanner->getClientOriginalName();
            $imageBanner->storeAs('public/profile-banners', $image_new_name);
            $user->banner = Storage::url('public/profile-banners/'.$image_new_name);
        }

        $user->save();

        return redirect(route('profile'));
    }
}
