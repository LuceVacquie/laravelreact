import Authenticated from '@/Layouts/Authenticated';
import React,  { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon, PencilIcon } from '@heroicons/react/solid';

import EditProfileForm from './EditProfileForm';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Profile( props ) {

    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard - Profile</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="h-screen flex overflow-hidden bg-white">
                            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">

                                <div className="lg:hidden">
                                    <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-pink-500.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                                                onClick={() => setSidebarOpen(true)}
                                            >
                                                <span className="sr-only">Open sidebar</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 relative z-0 flex overflow-hidden">

                                    {!editMode ? 

                                        //Edit mode = false
                                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                                        {/* Breadcrumb */}
                                        <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                                        <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                                            <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Directory</span>
                                        </a>
                                        </nav>

                                        <article>
                                        {/* Profile header */}
                                        <div>
                                            <div>
                                            <img className="h-32 w-full object-cover lg:h-48" src={"/profile-banners/" + props.auth.user.banner} alt="User banner" />
                                            </div>
                                            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                <div className="flex">
                                                <img
                                                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                    src={props.auth.user.avatar}
                                                    alt="User avatar"
                                                />
                                                </div>
                                                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                    <h1 className="text-2xl font-bold text-gray-900 truncate">{props.auth.user.first_name} {props.auth.user.last_name}</h1>
                                                </div>
                                                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                    <button
                                                        onClick={toggleEditMode}
                                                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    >
                                                    <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    <span>Edit</span>
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
                                                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                        <div>
                                                            <div className="sm:col-span-1">
                                                                <dt className="text-sm font-medium text-gray-500">Job role</dt>
                                                                <dd className="mt-1 text-sm text-gray-900">{props.auth.user.job_role}</dd>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="sm:col-span-1">
                                                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                                                <dd className="mt-1 text-sm text-gray-900">{props.auth.user.email}</dd>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="sm:col-span-1">
                                                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                                <dd className="mt-1 text-sm text-gray-900">{props.auth.user.phone}</dd>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="sm:col-span-1">
                                                                <dt className="text-sm font-medium text-gray-500">Address</dt>
                                                                <dd className="mt-1 text-sm text-gray-900">{props.auth.user.street_address} {props.auth.user.postcode} {props.auth.user.city}</dd>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="sm:col-span-1">
                                                                <dt className="text-sm font-medium text-gray-500">Birthday</dt>
                                                                <dd className="mt-1 text-sm text-gray-900">{props.auth.user.date_of_birth}</dd>
                                                            </div>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </article>
                                        </main>

                                    :

                                    //Edit mode = true
                                        <EditProfileForm setEditMode={setEditMode} auth={props.auth}/>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}