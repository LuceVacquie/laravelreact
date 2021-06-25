import Authenticated from '@/Layouts/Authenticated';
import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon, ThumbUpIcon, CheckIcon, PencilIcon } from '@heroicons/react/solid';
import KarlAvatar from '../../../public/assets/team_karl.jpg';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Profile( props ) {
    
    const otherUser = {
        name: "Karl Nuttall",
        job_role: "Creative Director",
        email: "karl@reachstudios.co.uk",
        date_of_birth: "01/01/1989",
        street_address: "1 Ladybug Rd",
        postcode: "S60 1AA",
        city: "Rotherham",
        phone: "01234567",
        avatar: KarlAvatar,

    }

    const eventTypes = {
        // applied: { icon: otherUser.avatar, bgColorClass: 'bg-gray-400' },
        advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
        completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
    }

    const timeline = [
        {
          id: 1,
          type: eventTypes.advanced,
          content: 'Applied to',
          target: 'Front End Developer',
          date: 'Sep 20',
          datetime: '2020-09-20',
        },
        {
          id: 2,
          type: eventTypes.advanced,
          content: 'Advanced to phone screening by',
          target: 'Bethany Blake',
          date: 'Sep 22',
          datetime: '2020-09-22',
        },
        {
          id: 3,
          type: eventTypes.completed,
          content: 'Completed phone screening with',
          target: 'Martha Gardner',
          date: 'Sep 28',
          datetime: '2020-09-28',
        },
        {
          id: 4,
          type: eventTypes.advanced,
          content: 'Advanced to interview by',
          target: 'Bethany Blake',
          date: 'Sep 30',
          datetime: '2020-09-30',
        },
        {
          id: 5,
          type: eventTypes.completed,
          content: 'Completed interview with',
          target: 'Katherine Snyder',
          date: 'Oct 4',
          datetime: '2020-10-04',
        },
    ]

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard - Profile</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-grey-100 overflow-hidden sm:rounded-lg">
                        <div className="h-screen flex overflow-hidden bg-grey-100">
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
                                    <main className="flex-1 relative z-0 overflow-y-auto xl:order-last">
                                    {/* Breadcrumb */}
                                        <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                                            <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                                                <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span>Directory</span>
                                            </a>
                                        </nav>
                                        <div className="grid grid-cols-1 gap-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                                            
                                            <div className="bg-white space-y-6 lg:col-start-1 lg:col-span-2 shadow-sm sm:rounded-lg">
                                            {/* Page header */}
                                                <div>
                                                    <img className="h-32 w-full object-cover lg:h-48" src={props.auth.user.banner} alt="User banner" />
                                                </div>
                                                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                        <div className="flex">
                                                            <img
                                                                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                src={otherUser.avatar}
                                                                alt="User avatar"
                                                            />
                                                        </div>
                                                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                            <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                                <h1 className="text-2xl font-bold text-gray-900 truncate">{otherUser.name}</h1>
                                                            </div>
                                                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                                                <a
                                                                    href={"mailto:" + otherUser.email}
                                                                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                                >
                                                                    <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                    <span>Contact teammate</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                                        <h1 className="text-2xl font-bold text-gray-900 truncate">{otherUser.name}</h1>
                                                    </div>
                                                </div>

                                                <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                                                    {/* Description list*/}
                                                    <div className="my-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                            <div>
                                                                <div className="sm:col-span-1">
                                                                    <dt className="text-sm font-medium text-gray-500">Job role</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900">{otherUser.job_role}</dd>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="sm:col-span-1">
                                                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900">{otherUser.email}</dd>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="sm:col-span-1">
                                                                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900">{otherUser.phone}</dd>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="sm:col-span-1">
                                                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900">{otherUser.street_address}, {otherUser.postcode} {otherUser.city}</dd>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="sm:col-span-1">
                                                                    <dt className="text-sm font-medium text-gray-500">Birthday</dt>
                                                                    <dd className="mt-1 text-sm text-gray-900">{otherUser.date_of_birth}</dd>
                                                                </div>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                                                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                                                    <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
                                                        Recent activity
                                                    </h2>

                                                {/* Activity Feed */}
                                                    <div className="mt-6 flow-root">
                                                        <ul className="-mb-8">
                                                            {timeline.map((item, itemIdx) => (
                                                                <li key={item.id}>
                                                                    <div className="relative pb-8">
                                                                        {itemIdx !== timeline.length - 1 ? (
                                                                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                                                        ) : null}
                                                                        <div className="relative flex space-x-3">
                                                                            <div>
                                                                                <span
                                                                                    className={classNames(
                                                                                        item.type.bgColorClass,
                                                                                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                                                                    )}
                                                                                >
                                                                                    <item.type.icon className="w-5 h-5 text-white" aria-hidden="true" />
                                                                                </span>
                                                                            </div>
                                                                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                                                <div>
                                                                                    <p className="text-sm text-gray-500">
                                                                                        {item.content}
                                                                                        <a href="#" className="font-medium text-gray-900">
                                                                                        {item.target}
                                                                                        </a>
                                                                                    </p>
                                                                                </div>
                                                                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                                                    <time dateTime={item.datetime}>{item.date}</time>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-6 flex flex-col justify-stretch">
                                                        <button
                                                        type="button"
                                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                        >
                                                        View all
                                                        </button>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}