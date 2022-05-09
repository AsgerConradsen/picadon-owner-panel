import { Link, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useState } from "react";

/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
        name: 'Example property',
        title: 'Regular marketplace',
        department: 'Optimization',
        email: 'Example street, 25',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    // More people...
]

export default function Example() {
    const [marketplaces, setMarketplaces] = useState([])
    let location = useLocation();

    console.log(location)

    let navigate = useNavigate();

    const { isLoading: isLoadingTutorials } = useQuery(
        "get items",
        async () => {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id");


            if (!token || !user_id) {
                alert("Session expired. Please login again")
                navigate("/")
                return
            }

            let decoded = jwtDecode(token)

            if (decoded.exp * 1000 < Date.now()) {
                alert("Session expired. Please login again")
                navigate("/")
                return
            }


            // return await  apiClient.get(`/sellers/${localStorage.getItem("user_id")}/products`);
            return axios.get(`https://picadon-server-1.herokuapp.com/owners/${localStorage.getItem("user_id")}/marketplaces`, {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        {
            onSuccess: (data, variables, context) => {
                console.log(data.data)
                // setGiftItems(data.data)
                setMarketplaces(data.data)
            },
            onError: (err) => {
                // setGetResult(fortmatResponse(err.response?.data || err));
            },
        }
    );



    return (
        <div className="px-4 mt-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Marketplaces</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        An overview of all you marketplaces
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        to={"/create-marketplace/property-info"}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Create Marketplace
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Navn
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Link
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {marketplaces.map((marketplace) => (
                                        <tr key={marketplace.name}>
                                            <td className="whitespace-nowrap py-4 pr-3 text-sm ">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
                                                    </div>
                                                    <div className="ml-2">
                                                        <div className="font-medium text-gray-900">{marketplace.Name}</div>
                                                        {/* <div className="text-gray-500">{person.email}</div> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">app.picadon.io/{marketplace.WebAddress}</div>
                                                {/* <div className="text-gray-500">{person.department}</div> */}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Active
                                                </span>
                                            </td>
                                            {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td> */}
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                {/* <a href="/home/marketplaces/ExampleMarketplace" className="text-indigo-600 hover:text-indigo-900">
                                                    Manage
                                                </a> */}

                                                <Link className="text-indigo-600 hover:text-indigo-900" to={marketplace.ID}> Manage </Link>
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
    )
}
