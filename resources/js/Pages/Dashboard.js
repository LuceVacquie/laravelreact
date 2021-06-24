import Authenticated from '@/Layouts/Authenticated';
import ManagerList from '../Components/ManagerList.js';
import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';



  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Profile', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
    { name: 'Company Directory', href: '#', current: false },
    { name: 'Openings', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  const stats = [
    { label: 'Vacation days left', value: 12 },
    { label: 'Sick days left', value: 4 },
    { label: 'Personal days left', value: 2 },
  ]
  const actions = [
    {
      icon: ClockIcon,
      name: 'Request time off',
      href: `${route('holidays-form')}`,
      active: `${route().current('holidays-form')}`,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      icon: BadgeCheckIcon,
      name: 'Benefits',
      href: '#',
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      icon: UsersIcon,
      name: 'Schedule a one-on-one',
      href: `${route('one-to-one-form')}`,
      active: `${route().current('one-to-one-form')}`,
      iconForeground: 'text-light-blue-700',
      iconBackground: 'bg-light-blue-50',
    },
    { icon: CashIcon, 
        name: 'Payrolls', 
        href: `${route('payrolls')}`,
        active: `${route().current('payrolls')}`,
        iconForeground: 'text-yellow-700', 
        iconBackground: 'bg-yellow-50' 
    },
    {
      icon: ReceiptRefundIcon,
      name: 'Submit an expense',
      href: '#',
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      icon: AcademicCapIcon,
      name: 'Training',
      href: '#',
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
    },
  ]
  
  const announcements = [
    {
      id: 1,
      title: 'EURO: England-Germany',
      href: '#',
      preview: 'Tuesday 29/06 - Let\s support our favourite team together at 5.00pm!'
    },
    {
      id: 2,
      title: 'New password policy',
      href: '#',
      preview:
        'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
    },
    {
      id: 3,
      title: 'Office closed on July 2nd',
      href: '#',
      preview:
        'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
    },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Dashboard(props) {


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="min-h-screen bg-gray-100">
                            <Popover as="header" className="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600">
                                {({ open }) => (
                                <>
                                    <Transition.Root show={open} as={Fragment}>
                                    <div className="lg:hidden">
                                        <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        >
                                        <Popover.Overlay static className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                                        </Transition.Child>

                                        <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                        >
                                        <Popover.Panel
                                            focus
                                            static
                                            className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                                        >
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                            <div className="pt-3 pb-2">
                                                <div className="flex items-center justify-between px-4">
                                                <div>
                                                    <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                                                    alt="Workflow"
                                                    />
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                                </div>
                                                <div className="mt-3 px-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                    >
                                                    {item.name}
                                                    </a>
                                                ))}
                                                </div>
                                            </div>
                                            <div className="pt-4 pb-2">
                                                <div className="flex items-center px-5">
                                                <div className="flex-shrink-0">
                                                    <img className="h-10 w-10 rounded-full" src={props.auth.user.avatar} alt="User avatar" />
                                                </div>
                                                <div className="ml-3 min-w-0 flex-1">
                                                    <div className="text-base font-medium text-gray-800 truncate">{props.auth.user.first_name} {props.auth.user.last_name}</div>
                                                    <div className="text-sm font-medium text-gray-500 truncate">{props.auth.user.email}</div>
                                                </div>
                                                <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                                    <span className="sr-only">View notifications</span>
                                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                                </div>
                                                <div className="mt-3 px-2 space-y-1">
                                                {userNavigation.map((item) => (
                                                    <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                    >
                                                    {item.name}
                                                    </a>
                                                ))}
                                                </div>
                                            </div>
                                            </div>
                                        </Popover.Panel>
                                        </Transition.Child>
                                    </div>
                                    </Transition.Root>
                                </>
                                )}
                            </Popover>
                            <main className="-mt-24 pb-8">
                                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <h1 className="sr-only">Profile</h1>
                                {/* Main 3 column grid */}
                                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                                    {/* Left column */}
                                    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                                    {/* Welcome panel */}
                                    <section aria-labelledby="profile-overview-title">
                                        <div className="rounded-lg bg-white overflow-hidden shadow">
                                        <h2 className="sr-only" id="profile-overview-title">
                                            Profile Overview
                                        </h2>
                                        <div className="bg-white p-6">
                                            <div className="sm:flex sm:items-center sm:justify-between">
                                            <div className="sm:flex sm:space-x-5">
                                                <div className="flex-shrink-0">
                                                <img className="mx-auto h-20 w-20 rounded-full" src={"/images/" + props.auth.user.avatar} alt="User avatar" />
                                                </div>
                                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                                                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{props.auth.user.first_name} {props.auth.user.last_name}</p>
                                                <p className="text-sm font-medium text-gray-600">{props.auth.user.job_role}</p>
                                                </div>
                                            </div>
                                            <div className="mt-5 flex justify-center sm:mt-0">
                                                <a
                                                href={route('profile')} 
                                                active={route().current('profile')}
                                                className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                >
                                                View Profile
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                                            {stats.map((stat) => (
                                            <div key={stat.label} className="px-6 py-5 text-sm font-medium text-center">
                                                <span className="text-gray-900">{stat.value}</span>{' '}
                                                <span className="text-gray-600">{stat.label}</span>
                                            </div>
                                            ))}
                                        </div>
                                        </div>
                                    </section>

                                    {/* Actions panel */}
                                    <section aria-labelledby="quick-links-title">
                                        <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                                        <h2 className="sr-only" id="quick-links-title">
                                            Quick links
                                        </h2>
                                        {actions.map((action, actionIdx) => (
                                            <div
                                            key={action.name}
                                            className={classNames(
                                                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                                'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                                            )}
                                            >
                                            <div>
                                                <span
                                                className={classNames(
                                                    action.iconBackground,
                                                    action.iconForeground,
                                                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                                                )}
                                                >
                                                <action.icon className="h-6 w-6" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="mt-8">
                                                <h3 className="text-lg font-medium">
                                                <a href={action.href} className="focus:outline-none">
                                                    {/* Extend touch target to entire panel */}
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    {action.name}
                                                </a>
                                                </h3>
                                                <p className="mt-2 text-sm text-gray-500">
                                                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at
                                                blanditiis et quo et molestiae.
                                                </p>
                                            </div>
                                            <span
                                                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                                aria-hidden="true"
                                            >
                                                <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                >
                                                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                                </svg>
                                            </span>
                                            </div>
                                        ))}
                                        </div>
                                    </section>
                                    </div>

                                    {/* Right column */}
                                    <div className="grid grid-cols-1 gap-4">
                                    {/* Announcements */}
                                    <section aria-labelledby="announcements-title">
                                        <div className="rounded-lg bg-white overflow-hidden shadow">
                                        <div className="p-6">
                                            <h2 className="text-base font-medium text-gray-900" id="announcements-title">
                                            Announcements
                                            </h2>
                                            <div className="flow-root mt-6">
                                            <ul className="-my-5 divide-y divide-gray-200">
                                                {announcements.map((announcement) => (
                                                <li key={announcement.id} className="py-5">
                                                    <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                                    <h3 className="text-sm font-semibold text-gray-800">
                                                        <a href={announcement.href} className="hover:underline focus:outline-none">
                                                        {/* Extend touch target to entire panel */}
                                                        <span className="absolute inset-0" aria-hidden="true" />
                                                        {announcement.title}
                                                        </a>
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{announcement.preview}</p>
                                                    </div>
                                                </li>
                                                ))}
                                            </ul>
                                            </div>
                                            <div className="mt-6">
                                            <a
                                                href={route('announcements')} 
                                                active={route().current('announcements')}
                                                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            >
                                                View all
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </section>

                                        {/* Contact your manager */}
                                        <ManagerList/>
                                    </div>
                                </div>
                                </div>
                            </main>
                            <footer>
                                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                                <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
                                    <span className="block sm:inline">&copy; 2021 Tailwind Labs Inc.</span>{' '}
                                    <span className="block sm:inline">All rights reserved.</span>
                                </div>
                                </div>
                            </footer>
                            </div>
                        </div>
                    </div>
                </div>
        </Authenticated>
    );
}
