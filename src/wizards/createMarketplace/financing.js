/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

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
const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

const steps = [
    { name: 'Property information', href: '#', status: 'complete' },
    { name: 'Marketplace type', href: '#', status: 'complete' },
    { name: 'Tenant information', href: '#', status: 'complete' },
    { name: 'Wallets', href: '#', status: 'current' },
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
    const [enabled, setEnabled] = useState(false)
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
                                <h1 className="text-2xl font-semibold text-gray-900">Wallets</h1>
                                <h2 className="text-l text-gray-500">Configure wallets for your tenants</h2>
                            </div>



                            <form onSubmit={props.handleSubmit(props.onSubmit)} className="max-w-xl px-4 sm:px-6 md:px-20" >
                                <Switch.Group as="div" className="flex items-center mt-8">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                    <Switch.Label as="span" className="ml-3">
                                        <span className="text-sm font-medium text-gray-900">Enable wallets </span>
                                        {/* <span className="text-sm text-gray-500">(If this is not set, only current tenants will get the bonus)</span> */}
                                    </Switch.Label>
                                </Switch.Group>

                                <div className='py-2 mt-8'>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                        Welcome bonus amount
                                    </label>
                                    <select
                                        id="location"
                                        name="location"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        defaultValue="0€"
                                        {...register("test")}
                                    >
                                        <option>0€</option>
                                        <option>50€</option>
                                        <option>100€</option>
                                        <option>200€</option>
                                        <option>500€</option>
                                    </select>
                                </div>
                                <div className='py-2 mt-2'>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                        How do you want to notify the tenant?
                                    </label>
                                    <select
                                        id="location"
                                        name="location"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                        defaultValue="0€"
                                    >
                                        <option>I will handle the notifications myself</option>
                                        <option>I want Picadon to send an email notification</option>
                                    </select>
                                </div>




                                <Switch.Group as="div" className="flex items-center mt-8">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                    <Switch.Label as="span" className="ml-3">
                                        <span className="text-sm font-medium text-gray-900">Give automatically to new tenants </span>
                                        <span className="text-sm text-gray-500">(If this is not set, only current tenants will get the bonus)</span>
                                    </Switch.Label>
                                </Switch.Group>

                                <div className="mt-16 flex flex-row">
                                    <Link
                                        to={"/create-marketplace/tenant-info"}
                                        className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Back
                                    </Link>
                                    <Link
                                        to={"/create-marketplace/welcome-gift"}
                                        className="ml-12 w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Next
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
