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

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

// const steps = [
//     { name: 'Create account', href: '#', status: 'complete' },
//     { name: 'Profile information', href: '#', status: 'current' },
//     { name: 'Theme', href: '#', status: 'upcoming' },
//     { name: 'Preview', href: '#', status: 'upcoming' },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const steps = [
    { name: 'Account Info', href: '#', status: 'current' },
    { name: 'Theme', href: '#', status: 'upcoming' },
    { name: 'Overview', href: '#', status: 'upcoming' },
]


export default function Example(props) {
    let register = props.register

    return (
        <div>
            {<Sidebar steps={steps} />}
            <div className="md:pl-72 flex flex-col flex-1">
                <main className="flex-1">
                    <div className="py-6 flex flex-col">
                        <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">
                            <h1 className="text-2xl font-semibold text-gray-900">Account Info</h1>
                            <h2 className="text-l text-gray-500">Tell us who you are</h2>
                        </div>
                        <form className="max-w-xl px-4 sm:px-6 md:px-20">
                            <div className='py-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Company name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company-name"
                                        id="company-name"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                        {...register("companyName")}
                                    />
                                </div>
                            </div>
                            <div className='py-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    CVR
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="cvr"
                                        id="cvr"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                        {...register("cvr")}
                                    />
                                </div>
                            </div>
                            <div className='py-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                        {...register("email")}
                                    />
                                </div>
                            </div>
                            <div className='py-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Phone number
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="tel"
                                        name="tel-nr"
                                        id="tel-nr"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                        {...register("phoneNr")}
                                    />
                                </div>
                            </div>
                            <div className='py-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder=""
                                        {...register("password")}
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
                                            {...register("acceptTerms")}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                            I agree to Terms and Conditions and Privacy Policy
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="candidates"
                                            aria-describedby="candidates-description"
                                            name="candidates"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            {...register("acceptNotifications")}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="candidates" className="font-medium text-gray-700">
                                            I agree to receive notifications
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <Link to={props.next}>
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

    )
}
