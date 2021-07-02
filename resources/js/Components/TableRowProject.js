import React from 'react'

const TableRow = ({colorUrgentProject, project, toggleEditMode}) => {
    return (
        <tr key={project.id} style={{backgroundColor: colorUrgentProject(project.due_date)}}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="text-sm text-gray-900">{project.title}</div>
                </div>
            </td>
        
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{project.client}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{project.author}</div>
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

            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={id => toggleEditMode(id)} className="text-indigo-600 hover:text-indigo-900">
                Edit
                </button>
            </td>
        </tr>
    )
}

export default TableRow;