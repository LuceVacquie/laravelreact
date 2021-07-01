import React, { useState} from "react";
import Authenticated from '@/Layouts/Authenticated';
import Input from "../Components/Input";
import { useForm } from "@inertiajs/inertia-react";

export default function Projects(props) {


    const [isAddProjectActive, setIsAddProjectActive] =
        useState(false);

    const { data, setData, post } = useForm({
        title: "",
        client: "",
        teammates: " ",
        status: "",
        type: "",
        due_date:"",
    });

    const projects = props.data;

    var sorted_projects = projects.sort((a,b) => {
        return new Date(b.due_date).getTime() - 
            new Date(a.due_date).getTime()
    }).reverse();

    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        setIsAddProjectActive(!isAddProjectActive);
        post(route("projects"));
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                        <div className="min-h-screen bg-gray-100">
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                            {/* Add a project */}
                                            {!isAddProjectActive && (
                                                <div className="my-4 w-full">
                                                    <h1 className="sr-only">
                                                        Add
                                                    </h1>
                                                    <div className="w-20 bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                                                        <button
                                                            onClick={() =>
                                                                setIsAddProjectActive(
                                                                    !isAddProjectActive
                                                                )
                                                            }
                                                        >
                                                            Add
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {isAddProjectActive && (
                                                        <form onSubmit={submit} className="flex items-baseline">
                                                            {Object.keys(data).map((key) => (
                                                                <div key={key} className="px-2 py-4 whitespace-nowrap">
                                                                    <Input
                                                                        type={key === "due_date" ? "date" : "text"}
                                                                        id={key + "-project"}
                                                                        name={key}
                                                                        value={
                                                                            data.key
                                                                        }
                                                                        placeholder={capitalizeFirstLetter(key)}
                                                                        autoComplete={capitalizeFirstLetter(key)}
                                                                        className="mt-4 w-full"
                                                                        isFocused={true}
                                                                        handleChange={
                                                                            onHandleChange
                                                                        }
                                                                        required
                                                                    />
                                                                </div>
                                                            ))}
                                                                
                                                                <button
                                                                    type="submit"
                                                                    className="h-1/2 relative p-3 border border-transparent rounded-md shadow-sm text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Add
                                                                </button>
                                                        </form>
                                                    )}

                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>

                                                        {Object.keys(data).map((key) =>  (
                                                            <th
                                                            key={key}
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            >
                                                                {capitalizeFirstLetter(key)}
                                                            </th>
                                                        ))}
                                                        
                                                        <th scope="col" className="relative px-6 py-3">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white divide-y divide-gray-200">
                                                {sorted_projects.map((project) => (
                                                    <tr key={project.id}>
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
                                                            <div className="text-sm text-gray-900">{project.teammates.concat(props.auth.user.name)}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.status}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.type}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.due_date}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                            Edit
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
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
  