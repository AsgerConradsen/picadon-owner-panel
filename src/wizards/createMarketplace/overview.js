/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import Sidebar from '../components/sidebar'
import { Link } from "react-router-dom";
import apiClient from "../../http-common"
import formApiClient from "../../http-form-data"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const steps = [
    { name: 'Property information', href: '#', status: 'complete' },
    { name: 'Marketplace type', href: '#', status: 'complete' },
    { name: 'Tenant information', href: '#', status: 'complete' },
    { name: 'Welcome bonus', href: '#', status: 'complete' },
    { name: 'Welcome gift', href: '#', status: 'complete' },
    { name: 'Product preview', href: '#', status: 'complete' },
    { name: 'Gift configuration', href: '#', status: 'complete' },
    { name: 'Overview', href: '#', status: 'current' },
]

export default function Example() {
    return (

        <div>
            {<Sidebar steps={steps} />}
            <div className="md:pl-72 flex flex-col flex-1">
                <main className="flex-1">
                    <div className="py-6 flex flex-col">
                        <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">
                            <h1 className="text-2xl font-semibold text-gray-900">Preview</h1>
                            <h2 className="text-l text-gray-500">Preview you account information before you create.</h2>
                        </div>
                    </div>
                    <form className="mt-16 flex flex-row">
                        <Link
                            to={"/create-marketplace/gift-config"}
                            className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Back
                        </Link>
                        <Link
                            to={"/home/marketplaces"}
                            className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                            Next
                        </Link>

                        {/* <div className='pt-8'>
                            <button
                                type="submit"
                                className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                                Create
                            </button>
                        </div> */}
                    </form>
                </main>
            </div>
        </div >
    )
}
