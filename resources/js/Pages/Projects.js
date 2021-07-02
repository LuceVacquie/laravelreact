import React, { useState, useEffect } from "react";
import Authenticated from '@/Layouts/Authenticated';
import Input from "../Components/Input";
// import Search from "../Components/SearchTeammates";
import { useForm } from "@inertiajs/inertia-react";

export default function Projects(props) {


    const [isAddProjectActive, setIsAddProjectActive] =
        useState(false);

    const { data, setData, post } = useForm({
        title: "",
        client: "",
        author: props.auth.user.name,
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

    const submit = e => {
        e.preventDefault();
        setIsAddProjectActive(!isAddProjectActive);
        post(route("projects"));
    };

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const colorUrgentProject = () => {

        for(let i = 0 ; i < sorted_projects.length ; i++){

            // parse a date in yyyy-mm-dd format
            function parseDate(input) {
                var parts = input.match(/(\d+)/g);
                // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
                return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
            }

            let color;
            const setColor = () => {
                const date1 = parseDate(sorted_projects[i].due_date).getTime()
                const date2 = new Date().getTime()

                const diffTime = date1 - date2;
                const diffDate = diffTime / (1000 * 3600 * 24)

                if (diffDate < 15) {
                    color = "red";
                } else {
                    color = "blue"
                }
                console.log(diffDate)
                return setColor()
            }
        }
    }
    
    //Teammates search bar
    //1.Get all the user's name except auth user
    const [dataUsers, setDataUsers] = useState([])

    async function getUsersName (){
        const response = await fetch('dashboard/users')
        const data = await response.json()

        const usersName = data.map(item => {
            return item.name
        })
        return usersName;
    }

    useEffect(() => {
        const fetchData = async () => {
        setDataUsers(await getUsersName())
        }
        fetchData()
        return () => {
            setDataUsers([])
          };
    }, [])
    
    

    //2. Set the state
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredName, setFilteredname] = useState("")

    // const displayNames = dataUsers.map(user => {
    //     return (
    //         <li>{user}</li>
    //     )
    // })

    //3. Handle onChange input
    const handleSearch = ({target}) => {
        setSearchQuery(target.value)
        dataUsers.map(user => {
            if(user.includes(searchQuery)){
                setFilteredname(user)
            }
        })
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
                                            {/* <Search handleSearch={handleSearch}/>
                                            <ul>
                                                {filteredName}
                                            </ul> */}
                                            {/* <ul>
                                                {displayNames}
                                            </ul> */}
                                            
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
                                                                        handleChange={key === "teammates" ? handleSearch : onHandleChange}
                                                                        required
                                                                    />
                                                                    {data.key === "teammates" && (
                                                                        <ul>{filteredName}</ul>
                                                                    )}
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
                                                    <tr key={project.id} style={{backgroundColor: colorUrgentProject()}}>
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
  