import React from 'react';

const ManagerList = ({dataManagers}) => {

    return(
        <section aria-labelledby="recent-hires-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                    <h2 className="text-base font-medium text-gray-900" id="recent-hires-title">
                    Contact your manager
                    </h2>
                    <div className="flow-root mt-6">
                        <ul className="-my-5 divide-y divide-gray-200">
                            {dataManagers.map((manager) => (
                            <li key={manager.name} className="py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-8 w-8 rounded-full" src={manager.avatar} alt={manager.name} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{manager.name}</p>
                                        <p className="text-sm text-gray-500 truncate">{manager.email}</p>
                                    </div>
                                    <div>
                                        <a
                                        href={manager.href}
                                        className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                        View
                                        </a>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManagerList;