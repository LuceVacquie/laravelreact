import React from 'react';
import Input from './Input';

const TableRowEdit = ({project, onHandleChange}) => {

    return (
        <tr key={project.id}>

                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.title}
                    </Input>
                </td>
            
                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.client}
                    </Input>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.author}
                    </Input>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.teammates}
                    </Input>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.status}
                    </Input>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.type}
                    </Input>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <Input 
                        handleChange={onHandleChange} 
                        className="text-sm text-gray-900">
                            {project.due_date}
                    </Input>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button type="submit" className="text-indigo-600 hover:text-indigo-900">
                        Save
                    </button>
                </td>
        </tr>
        
    )
}

export default TableRowEdit;