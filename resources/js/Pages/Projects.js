import React, { useState, useEffect } from "react";
import Authenticated from '@/Layouts/Authenticated';
import Input from "../Components/Input";
import Search from "../Components/SearchTeammates";
import { useForm } from "@inertiajs/inertia-react";
import TableRow from '../Components/TableRowProject';
import TableRowEdit from "@/Components/TableRowProjectEdit";


export default function Projects(props) {


    const [isAddProjectActive, setIsAddProjectActive] =
        useState(false);

    
    
    //Post the projects data to projects_table
    const { data, setData, post } = useForm({
        title: "",
        client: "",
        author: "",
        teammates: "",
        status: "",
        type: "",
        due_date:"",
    });
    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        setData(name, value);
    };

    const submit = e => {
        e.preventDefault();
        setIsAddProjectActive(!isAddProjectActive);
        post(route("projects"));
    };

    //Get the projects data from projects_table 
    //and sort them by due date
    const projects = props.data;

    var sorted_projects = projects.sort((a,b) => {
        return new Date(b.due_date).getTime() - 
            new Date(a.due_date).getTime()
    }).reverse();



    //Get the input's placeholder to have a capital first letter
    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


    //Project line will be red if the project is due in less than 2 weeks
    const colorUrgentProject = (projectDate) => {

        // parse a date in yyyy-mm-dd format
        function parseDate(input) {
            var parts = input.match(/(\d+)/g);
            // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
            return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
        }

        const date1 = parseDate(projectDate).getTime()
        const date2 = new Date().getTime()

        const diffTime = date1 - date2;
        const diffDate = diffTime / (1000 * 3600 * 24)

        if (diffDate < 15) {
            let color;
            return color = "red";
        }
        
    }
    


    //Teammates search bar
    //1.Get all the user's name except auth user
    const [usersNames, setUsersNames] = useState([])

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
            setUsersNames(await getUsersName())
        }
        fetchData()
        return () => {
            setUsersNames([])
          };
    }, [])

    //2. Set the state
    const [searchQuery, setSearchQuery] = useState("")


    //3. Handle onChange input
    const editSearchQuery = ({target}) => {
        setSearchQuery(target.value)
    }

    const handleSearch = () => {
        return usersNames.filter(name => {
            name.toLowerCase().includes(searchQuery.toLowerCase())
        })

    }


    //Edit a project
    const [inEditMode, setInEditMode] =
        useState({
            status: false,
            rowKey: null
        });
    
    const toggleEditMode = (id) => {
        setInEditMode({
            status: true,
            rowKey: id
        })
    }
    
    const submitUpdate = (e) => {
        e.preventDefault();
        setInEditMode(false);
        post(route('projects.update'));
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
                                                                        value={key === "teammates" ? searchQuery : data.key}
                                                                        placeholder={capitalizeFirstLetter(key)}
                                                                        autoComplete={capitalizeFirstLetter(key)}
                                                                        className="mt-4 w-full"
                                                                        isFocused={true}
                                                                        handleChange={key === "teammates" ? editSearchQuery : onHandleChange}
                                                                        required
                                                                    />
                                                                    
                                                                    <Search filteredNames={handleSearch()}/>
                                                                    
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

                                            <form onSubmit={submitUpdate}>
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
                                    
                                                            {sorted_projects.map((project) => {
                                                                {return inEditMode.status && inEditMode.rowKey === project.id ?
                                                                    <TableRowEdit project={project} onHandleChange={onHandleChange}/>
                                                                    :
                                                                    <TableRow project={project} colorUrgentProject={colorUrgentProject} toggleEditMode={toggleEditMode}/>
                                                                }
                                                            })}
                                                    
                                                    </tbody>
                                                </table>
                                            </form>
                                            
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
  