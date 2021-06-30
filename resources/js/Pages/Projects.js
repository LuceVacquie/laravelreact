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
        teammates: "",
        status: "",
        type: "",
        due_date:"",
    });

    const projects = props.data;

    var sorted_projects = projects.sort((a,b) => {
        return new Date(a.due_date).getTime() - 
            new Date(b.due_date).getTime()
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
                                            <div className="mt-4">
                                                <h1 className="sr-only">
                                                    Add
                                                </h1>
                                                <div className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
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

                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Project
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Client
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Teammate
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Status
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            Type
                                                        </th>
                                                        <th scope="col" className="relative px-6 py-3">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {isAddProjectActive && (
                                                        <tr>
                                                            <form onSubmit={submit} className="flex">
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <Input
                                                                        type="text"
                                                                        id="title-project"
                                                                        name="title"
                                                                        value={
                                                                            data.title
                                                                        }
                                                                        placeholder="Title"
                                                                        autoComplete="title"
                                                                        className="mt-4 w-full"
                                                                        isFocused={true}
                                                                        handleChange={
                                                                            onHandleChange
                                                                        }
                                                                        required
                                                                    />
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <Input
                                                                        type="text"
                                                                        id="client-project"
                                                                        name="client"
                                                                        value={
                                                                            data.client
                                                                        }
                                                                        placeholder="Client"
                                                                        autoComplete="client"
                                                                        className="mt-4 w-full"
                                                                        isFocused={true}
                                                                        handleChange={
                                                                            onHandleChange
                                                                        }
                                                                        required
                                                                    />
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <Input
                                                                        type="text"
                                                                        id="status-project"
                                                                        name="status"
                                                                        value={
                                                                            data.status
                                                                        }
                                                                        placeholder="Status"
                                                                        autoComplete="status"
                                                                        className="mt-4 w-full h-32"
                                                                        isFocused={true}
                                                                        handleChange={
                                                                            onHandleChange
                                                                        }
                                                                        required
                                                                    />
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <Input
                                                                        type="text"
                                                                        id="type-project"
                                                                        name="type"
                                                                        value={
                                                                            data.type
                                                                        }
                                                                        placeholder="Type"
                                                                        autoComplete="type"
                                                                        className="mt-4 w-full h-32"
                                                                        isFocused={true}
                                                                        handleChange={
                                                                            onHandleChange
                                                                        }
                                                                        required
                                                                    />
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <Input
                                                                        type="date"
                                                                        id="due_date-project"
                                                                        name="due_date"
                                                                        value={
                                                                            data.due_date
                                                                        }
                                                                        placeholder="Due date"
                                                                        autoComplete="due_date"
                                                                        className="mt-4 w-full h-32"
                                                                        isFocused={true}
                                                                        handleChange={
                                                                            onHandleChange
                                                                        }
                                                                        required
                                                                    />
                                                                </td>

                                                                <button
                                                                    type="submit"
                                                                    className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Add project
                                                                </button>
                                                            </form>
                                                        </tr>
                                                    )}
                                                {sorted_projects.map((project) => (
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
                                                            <p></p>
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
  