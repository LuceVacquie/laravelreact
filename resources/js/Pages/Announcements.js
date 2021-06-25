import { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Input from '../Components/Input';
import {
  ChatAltIcon,
  PlusIcon,
  ShareIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid';
import { FireIcon, HomeIcon, TrendingUpIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Trending', href: '#', icon: TrendingUpIcon, current: false },
]

const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body:
      '\n          <p>\n            Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.\n          </p>\n          <p>\n            Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;\n          </p>\n        ',
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Announcements(props) {

    const [isAddAnnouncementActive, setIsAddAnnouncementActive] = useState(false)
    const [isDropdownActive, setIsDropdownActive] = useState(false)

    const handleOnSubmit = (event) => {
        event.preventDefault()
        setIsAddAnnouncementActive(false)
    }

    const getAnnouncements = () => {
        fetch()
    }

    useEffect(()=>{
        getAnnouncements()
    }, [])

  return (
    <Authenticated
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="min-h-screen bg-gray-100">
                        <div className="min-h-screen bg-gray-100">

                            <div className="py-10">
                                {/* <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"> */}
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                                    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                                        <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                                            <div className="pb-8 space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50',
                                                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                    <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                    />
                                                    <span className="truncate">{item.name}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </nav>
                                    </div>
                                    <main className="lg:col-span-9 xl:col-span-6">
                                        {/* Announcement button filters */}
                                        <div className="px-4 sm:px-0">
                                            <div className="sm:hidden">
                                                <label htmlFor="question-tabs" className="sr-only">
                                                Select a tab
                                                </label>
                                                <select
                                                id="question-tabs"
                                                className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                                                defaultValue={tabs.find((tab) => tab.current).name}
                                                >
                                                    {tabs.map((tab) => (
                                                        <option key={tab.name}>{tab.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="hidden sm:block">
                                                <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                                                    {tabs.map((tab, tabIdx) => (
                                                        <a
                                                        key={tab.name}
                                                        href={tab.href}
                                                        aria-current={tab.current ? 'page' : undefined}
                                                        className={classNames(
                                                            tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                                            tabIdx === 0 ? 'rounded-l-lg' : '',
                                                            tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                                            'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                                                        )}
                                                        >
                                                            <span>{tab.name}</span>
                                                            <span
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                tab.current ? 'bg-rose-500' : 'bg-transparent',
                                                                'absolute inset-x-0 bottom-0 h-0.5'
                                                                )}
                                                            />
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>

                                        {/* Add an announcement */}
                                        <div className="mt-4">
                                            <h1 className="sr-only">Add an announcement</h1>
                                            <div className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                                                <button
                                                    onClick={() => setIsAddAnnouncementActive(!isAddAnnouncementActive)}>
                                                    <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                                                    Something to say?
                                                </h2>
                                                </button>
                                                {isAddAnnouncementActive && 
                                                    <form onSubmit={(event) => handleOnSubmit(event)}>
                                                    <Input 
                                                        type="text" 
                                                        id="title-announcement" 
                                                        name="title-announcement"
                                                        placeholder="Title"
                                                        className="mt-4 w-full"
                                                    />
                                                    {/* <div className="relative inline-block mt-4 w-full">
                                                        <button 
                                                            className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                                                            onClick={() => setIsDropdownActive(!isDropdownActive)}>
                                                                Category
                                                        </button>
                                                        {
                                                            isDropdownActive && 
                                                            <div name="categories" id="categories" className="absolute bg-white w-full border-gray-300">
                                                                <p className="hover:bg-indigo-300">Social events</p>
                                                                <p className="hover:bg-indigo-300">Projects</p>
                                                                <p className="hover:bg-indigo-300">Clients</p>
                                                                <p className="hover:bg-indigo-300">Fun facts</p>
                                                            </div>   
                                                        }
                                                         
                                                    </div> */}
                                                    <Input 
                                                        type="text" 
                                                        id="description-announcement" 
                                                        name="description-announcement" 
                                                        placeholder="Write your announcement here..."
                                                        className="mt-4 w-full h-32"
                                                    />
                                                    
                                                    <button 
                                                        type="submit"
                                                        className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Submit
                                                    </button>

                                                    </form>
                                                }
                                            </div>
                                        </div>

                                        {/* Display announcements */}
                                        <div className="mt-4">
                                        <h1 className="sr-only">Announcements</h1>
                                        <ul className="space-y-4">
                                        <li key={question.id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                                                <article aria-labelledby={props.announcement.title}>
                                                <div>
                                                    <div className="flex space-x-3">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={props.auth.user.avatar} alt="" />
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                <a href="#" className="hover:underline">
                                                                    {props.auth.announcements.created_by}
                                                                </a>
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                <a href="#" className="hover:underline">
                                                                    <time dateTime={props.auth.announcements.created_at}>{props.auth.announcements.created_at}</time>
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h2 id={props.auth.announcements.id} className="mt-4 text-base font-medium text-gray-900">
                                                        {props.auth.announcements.title}
                                                    </h2>
                                                </div>
                                                <div
                                                    className="mt-2 text-sm text-gray-700 space-y-4"
                                                    dangerouslySetInnerHTML={{ __html: props.auth.announcements.description }}
                                                />
                                                <div className="mt-6 flex justify-between space-x-8">
                                                    <div className="flex space-x-6">
                                                    <span className="inline-flex items-center text-sm">
                                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900"></span>
                                                        <span className="sr-only">likes</span>
                                                        </button>
                                                    </span>
                                                    <span className="inline-flex items-center text-sm">
                                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900"></span>
                                                        <span className="sr-only">replies</span>
                                                        </button>
                                                    </span>
                                                    </div>
                                                    <div className="flex text-sm">
                                                    <span className="inline-flex items-center text-sm">
                                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900">Share</span>
                                                        </button>
                                                    </span>
                                                    </div>
                                                </div>
                                                </article>
                                            </li>
                                            
                                            {questions.map((question) => (
                                            <li key={question.id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                                                <article aria-labelledby={'question-title-' + question.id}>
                                                <div>
                                                    <div className="flex space-x-3">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={question.author.imageUrl} alt="" />
                                                        </div>
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium text-gray-900">
                                                                <a href={question.author.href} className="hover:underline">
                                                                    {question.author.name}
                                                                </a>
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                <a href={question.href} className="hover:underline">
                                                                    <time dateTime={question.datetime}>{question.date}</time>
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
                                                    {question.title}
                                                    </h2>
                                                </div>
                                                <div
                                                    className="mt-2 text-sm text-gray-700 space-y-4"
                                                    dangerouslySetInnerHTML={{ __html: question.body }}
                                                />
                                                <div className="mt-6 flex justify-between space-x-8">
                                                    <div className="flex space-x-6">
                                                    <span className="inline-flex items-center text-sm">
                                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900">{question.likes}</span>
                                                        <span className="sr-only">likes</span>
                                                        </button>
                                                    </span>
                                                    <span className="inline-flex items-center text-sm">
                                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900">{question.replies}</span>
                                                        <span className="sr-only">replies</span>
                                                        </button>
                                                    </span>
                                                    </div>
                                                    <div className="flex text-sm">
                                                    <span className="inline-flex items-center text-sm">
                                                        <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                                        <span className="font-medium text-gray-900">Share</span>
                                                        </button>
                                                    </span>
                                                    </div>
                                                </div>
                                                </article>
                                            </li>
                                            ))}
                                        </ul>
                                        </div>
                                    </main>

                                    <aside className="hidden xl:block xl:col-span-4">
                                        <div className="sticky top-4 space-y-4">
                                            <section aria-labelledby="who-to-follow-heading">
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="p-6">
                                                        <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                                                        Who to follow
                                                        </h2>
                                                        <div className="mt-6 flow-root">
                                                            <ul className="-my-4 divide-y divide-gray-200">
                                                                {whoToFollow.map((user) => (
                                                                <li key={user.handle} className="flex items-center py-4 space-x-3">
                                                                    <div className="flex-shrink-0">
                                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                                    </div>
                                                                    <div className="min-w-0 flex-1">
                                                                        <p className="text-sm font-medium text-gray-900">
                                                                            <a href={user.href}>{user.name}</a>
                                                                        </p>
                                                                        <p className="text-sm text-gray-500">
                                                                            <a href={user.href}>{'@' + user.handle}</a>
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                                                        >
                                                                            <PlusIcon className="-ml-1 mr-0.5 h-5 w-5 text-rose-400" aria-hidden="true" />
                                                                            <span>Follow</span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-6">
                                                            <a
                                                                href="#"
                                                                className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                            >
                                                                View all
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section aria-labelledby="trending-heading">
                                                <div className="bg-white rounded-lg shadow">
                                                    <div className="p-6">
                                                        <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                                                        Trending
                                                        </h2>
                                                        <div className="mt-6 flow-root">
                                                            <ul className="-my-4 divide-y divide-gray-200">
                                                                {trendingPosts.map((post) => (
                                                                <li key={post.id} className="flex py-4 space-x-3">
                                                                    <div className="flex-shrink-0">
                                                                        <img className="h-8 w-8 rounded-full" src={post.user.imageUrl} alt={post.user.name} />
                                                                    </div>
                                                                    <div className="min-w-0 flex-1">
                                                                        <p className="text-sm text-gray-800">{post.body}</p>
                                                                        <div className="mt-2 flex">
                                                                            <span className="inline-flex items-center text-sm">
                                                                                <button className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                                                    <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    <span className="font-medium text-gray-900">{post.comments}</span>
                                                                                </button>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-6">
                                                        <a
                                                            href="#"
                                                            className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                        >
                                                            View all
                                                        </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Authenticated>
  )
}