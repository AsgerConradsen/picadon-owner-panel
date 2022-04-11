
/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";

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
import {
    ArrowNarrowLeftIcon,
} from '@heroicons/react/solid'
import Sidebar from '../components/sidebar'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

const steps = [
    { name: 'Property information', href: '#', status: 'current' },
    { name: 'Marketplace type', href: '#', status: 'upcoming' },
    { name: 'Tenant information', href: '#', status: 'upcoming' },
    { name: 'Welcome bonus', href: '#', status: 'upcoming' },
    { name: 'Welcome gift', href: '#', status: 'upcoming' },
    { name: 'Product preview', href: '#', status: 'upcoming' },
    { name: 'Gift configuration', href: '#', status: 'upcoming' },
    { name: 'Overview', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    let register = props.register

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div>
                {<Sidebar steps={steps} />}

                <div className="md:pl-72 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6 flex flex-col">
                            <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">

                                <h1 className="text-2xl font-semibold text-gray-900">Property Info</h1>
                                <h2 className="text-l text-gray-500">Basic information about the property</h2>
                            </div>
                            <form className="max-w-xl px-4 sm:px-6 md:px-20">
                                <div className='py-2'>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Property name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder=""
                                            {...register("example")}
                                        />
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="street, nr."
                                            {...register("example")}
                                        />
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Postal code
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="cvr"
                                            id="cvr"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className='py-2'>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <fieldset className="space-y-5">
                                    <legend className="sr-only">Notifications</legend>
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="comments"
                                                aria-describedby="comments-description"
                                                name="comments"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                Same primary contact person for this building as for this account
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <h1 className=" mt-10 font-medium text-gray-700">Upload propert picture</h1>
                                <div className="mt-4 max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                                <Link to="/create-marketplace/type">
                                    <span className='block'>
                                        <div className='pt-8'>
                                            <button
                                                type="button"
                                                className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </span>
                                </Link>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
