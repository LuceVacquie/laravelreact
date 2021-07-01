import Authenticated from '@/Layouts/Authenticated';
import ManagerList from '../Components/ManagerList';
import AnnouncementsDashboard from '../Components/AnnouncementsDashboard';
import React, {useState, useEffect} from 'react';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';


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
      iconForeground: 'text-green-700',
      iconBackground: 'bg-green-50',
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


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Dashboard(props) {

    //Get all the users
    const [dataUsers, setDataUsers] = useState([])

    async function getUsersData (){
        const response = await fetch('dashboard/users')
        const data = await response.json()
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
        setDataUsers(await getUsersData())
        }
        fetchData()
        return () => {
            setDataUsers([])
          };
    }, [])

    //Get the managers (where admin = 1)
    const [dataManagers, setDataManagers] = useState([])

    async function getManagersData (){
        const response = await fetch('dashboard/managers')
        const data = await response.json()
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
        setDataManagers(await getManagersData())
        }
        fetchData()
    }, [])

    //Get the announcements
    const [dataAnnouncements, setDataAnnouncements] = useState([])

    async function getAnnouncementsData (){
        const response = await fetch('dashboard/announcements')
        const data = await response.json()
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
        setDataAnnouncements(await getAnnouncementsData())
        }
        fetchData()
    }, [])



    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                        <div className="min-h-screen bg-gray-100">
                            <div className="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600"></div>
                            <main className="-mt-24 pb-8">
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
                                                <img className="mx-auto h-20 w-20 rounded-full" src={props.auth.user.avatar} alt="User avatar" />
                                                </div>
                                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                                                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{props.auth.user.name}</p>
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
                                        <AnnouncementsDashboard dataAnnouncements={dataAnnouncements}/>

                                        {/* Contact your manager */}
                                        <ManagerList dataManagers={dataManagers}/>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
    </Authenticated>
    );
}
