import React,  { useState } from 'react';
import { ChevronLeftIcon, PencilIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function EditProfileForm(props) {

    const [updatedInfo, setUpdatedInfo] = useState('')

    const onChange = ({target}) => {
        setUpdatedInfo(target)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.toggleEditMode();
    }

    return (
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            {/* Breadcrumb */}
            <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                    <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span>Directory</span>
                </a>
            </nav>

            <form action="submit" method="POST" onSubmit={(event) => handleOnSubmit(event)}>
            {/* Profile header */}
                <div>
                    <div>
                        <img className="h-32 w-full object-cover lg:h-48" src={props.auth.user.banner} alt="User banner" />
                    </div>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <img
                                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                    src={"/images/" + props.auth.user.avatar}
                                    alt="User avatar"
                                />
                            </div>
                            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                        <input type='text' name='first_name' placeholder={props.auth.user.first_name}/>
                                    </h1>
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                        <input type='text' name='last_name' placeholder={props.auth.user.last_name}/>
                                    </h1>
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
                                    name="job_role"
                                    id="job_role"
                                    placeholder={props.auth.user.job_role}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
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
                                    name="phone"
                                    id="phone"
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
                                    name="street_address"
                                    id="street_address"
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
                                    name="postcode"
                                    id="postcode"
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
                                    name="city"
                                    id="city"
                                    placeholder={props.auth.user.city}
                                    className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="sm:col-span-1">
                            <label htmlFor="date_of_birth" className="text-sm font-medium text-gray-500">Birthday</label>
                                <input 
                                    type="date"
                                    name="date_of_birth"
                                    id="date_of_birth"
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