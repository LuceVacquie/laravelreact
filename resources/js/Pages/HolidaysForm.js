import Authenticated from '@/Layouts/Authenticated';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HolidaysForm(props) {

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Request Time Off</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                            <div className="relative max-w-xl mx-auto">
                                <svg
                                className="absolute left-full transform translate-x-1/2"
                                width={404}
                                height={404}
                                fill="none"
                                viewBox="0 0 404 404"
                                aria-hidden="true"
                                >
                                <defs>
                                    <pattern
                                    id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                    >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                                </svg>
                                <svg
                                className="absolute right-full bottom-0 transform -translate-x-1/2"
                                width={404}
                                height={404}
                                fill="none"
                                viewBox="0 0 404 404"
                                aria-hidden="true"
                                >
                                <defs>
                                    <pattern
                                    id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                    >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                                </svg>
                                <div className="text-center">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Request Time Off</h2>
                                <p className="mt-4 text-lg leading-6 text-gray-500">
                                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                                    arcu.
                                </p>
                                </div>
                                <div className="mt-12">
                                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                                    <div className="sm:col-span-2">
                                        <label htmlFor="with_whom" className="block text-sm font-medium text-gray-700">
                                            Type of leave
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute w-full inset-y-0 left-0 flex items-center">
                                            <label htmlFor="type-of-leave" className="sr-only">
                                                Type of leave
                                            </label>
                                            <select
                                                id="type-of-leave"
                                                name="type-of-leave"
                                                className="h-full w-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                            >
                                                <option>Holidays</option>
                                                <option>Sick leave</option>
                                                <option>Other</option>
                                            </select>
                                            </div>
                                            <input
                                            type="text"
                                            name="with_whom"
                                            id="with_whom"
                                            className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                                            Start date
                                        </label>
                                        <div className="mt-1">
                                            <input
                                            id="start-date"
                                            name="start-date"
                                            type="date"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="sm:col-span-2 mr-4">
                                            <label htmlFor="full-day" className="block text-sm font-medium text-gray-700">
                                                Full day
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                id="full-day"
                                                name="type-of-day"
                                                type="radio"
                                                className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="half-day" className="block text-sm font-medium text-gray-700">
                                                Half day
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                id="half-day"
                                                name="type-of-day"
                                                type="radio"
                                                className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                

                                    <div className="sm:col-span-2">
                                        <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                                            End date
                                        </label>
                                        <div className="mt-1">
                                            <input
                                            id="end-date"
                                            name="end-date"
                                            type="date"
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                            Notes
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                            id="notes"
                                            name="notes"
                                            rows={4}
                                            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                            defaultValue={''}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Submit
                                    </button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}