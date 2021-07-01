import React from 'react';


const ProjectSection = ({dataProjects}) => {
    const tableHeaders = ['Title', 'Client', 'Teammates', 'Status', 'Type', 'Due date']
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>

                        {tableHeaders.map((key) =>  (
                            <th
                            key={key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {key}
                            </th>
                        ))}
                        
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                {dataProjects.map((project) => (
                    <tr key={project.title}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="text-sm text-gray-900">{project.title}</div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.client}</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            {/* <img src={project.teammate} alt="Main Dev"/> */}
                            <div className="text-sm text-gray-900">{project.teammates}</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.status}</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.type}</div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{project.due_date}</div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a 
                href={route('projects')} 
                active={route().current('projects')}>
                    View all projects
            </a>
        </div>
    )
}

export default ProjectSection;