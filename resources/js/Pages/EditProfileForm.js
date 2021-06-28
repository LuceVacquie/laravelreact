import React, {useState} from 'react';
import { ChevronLeftIcon, PencilIcon } from '@heroicons/react/solid';
import { useForm } from '@inertiajs/inertia-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EditProfileForm({ setEditMode, ...props }) {

    const [selectedImage, setSelectedImage] = useState('')

    const { data, setData, post } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        street_address: '',
        postcode: '',
        city: '',
        date_of_birth: '',
        avatar: '',
        banner:'',
    });

    const onHandleChange = ({target}) => {
        const {name, value} = target
        setData(name, value);
    };

    const selectImageHandler = ({target}) => {
        setSelectedImage(target.files[0]);
        console.log(target.files[0])
    }

    const submit = (e) => {
        e.preventDefault();
        setEditMode(false);
        post(route('edit-profile'));
    };

    return (
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb */}
            <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                    <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span>Directory</span>
                </a>
            </nav>

            <form action="submit" method="POST" onSubmit={submit}>
            {/* Profile header */}
                <div>
                    <div>
                        <img 
                            className="h-32 w-full object-cover lg:h-48" 
                            src={"/profile-banners/" + props.auth.user.banner} 
                            alt="User banner" 
                        />
                        
                    </div>

                    {/* <input 
                        type="file" 
                        // id="user-banner" 
                        name="banner"
                        // value={data.banner}
                        // autoComplete="banner"
                        onChange={selectImageHandler}
                    /> */}
                  
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <img
                                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                    src={"/profile-avatars/" + props.auth.user.avatar}
                                    alt="User avatar"
                                />
                                
                            </div>

                            <input 
                                type="file" 
                                // id="user-avatar" 
                                name="avatar"
                                // value={data.avatar}
                                // autoComplete="avatar"
                                onChange={selectImageHandler}
                            />

                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                    {/* <h1 className="text-2xl font-bold text-gray-900 truncate"> */}
                                        <input 
                                            type="text" 
                                            id="first_name" 
                                            name="first_name"
                                            value={data.first_name}
                                            autoComplete="first_name"
                                            onChange={onHandleChange}
                                            placeholder={props.auth.user.first_name}/>
                                    {/* </h1> */}
                                    {/* <h1 className="text-2xl font-bold text-gray-900 truncate"> */}
                                        <input 
                                            type="text" 
                                            id="last_name" 
                                            name="last_name"
                                            value={data.last_name}
                                            autoComplete="last_name"
                                            onChange={onHandleChange}
                                            placeholder={props.auth.user.last_name}/>
                                    {/* </h1> */}
                                </div>
                                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                    <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Save changes</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">{props.auth.user.first_name} {props.auth.user.last_name}</h1>
                        </div>
                    </div>
                </div>

                {/* Description list */}
                <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div>
                            <div className="sm:col-span-1">
                                <label htmlFor="job_role" className="text-sm font-medium text-gray-500">Job role</label>
                                <input 
                                    type="text" 
                                    id="job_role" 
                                    name="job_role"
                                    value={data.job_role}
                                    autoComplete="job_role"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.job_role}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email"
                                    value={data.email}
                                    autoComplete="email"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.email}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-500">Phone</label>
                                <input 
                                    type="text" 
                                    id="phone" 
                                    name="phone"
                                    value={data.phone}
                                    autoComplete="phone"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.phone}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                                <label htmlFor="street_address" className="text-sm font-medium text-gray-500">Street address</label>
                                <input 
                                    type="text" 
                                    id="street_address" 
                                    name="street_address"
                                    value={data.street_address}
                                    autoComplete="street_address"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.street_address}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                                <label htmlFor="postcode" className="text-sm font-medium text-gray-500">Postcode</label>
                                <input 
                                    type="text" 
                                    id="postcode" 
                                    name="postcode"
                                    value={data.postcode}
                                    autoComplete="postcode"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.postcode}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                                <label htmlFor="city" className="text-sm font-medium text-gray-500">City</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    name="city"
                                    value={data.city}
                                    autoComplete="city"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.city}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                            <label htmlFor="date_of_birth" className="text-sm font-medium text-gray-500">Birthday</label>
                                <input 
                                    type="text" 
                                    id="date_of_birth" 
                                    name="date_of_birth"
                                    value={data.date_of_birth}
                                    autoComplete="date_of_birth"
                                    onChange={onHandleChange}
                                    placeholder={props.auth.user.date_of_birth}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}