/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'
import { useForm, Controller } from "react-hook-form";

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

const products = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
        price: '$256',
        description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
        options: '8 colors',
        imageSrc: 'https://www.sweetdeal.dk/media/catalog/product/cache/c1f503f03b36506d2320500471bc0a59/m/a/match-padel-160621-2.jpg',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://scm.dk/sites/default/files/styles/2400px/public/M%C3%A5ltidskasse_k%C3%B8kkenbord_2000x1400.jpg?itok=MPfjv_6j',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        price: '$32',
        description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
        options: 'Black',
        imageSrc: 'https://images.squarespace-cdn.com/content/v1/5e25a225fa5e9232be72c54d/1598951487682-RL588QVF05Q1GAHI05O6/espresso_roast_540x.png?format=500w',
        imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
]

const steps = [
    { name: 'Property information', href: '#', status: 'complete' },
    { name: 'Marketplace type', href: '#', status: 'complete' },
    { name: 'Tenant information', href: '#', status: 'complete' },
    { name: 'Welcome bonus', href: '#', status: 'complete' },
    { name: 'Welcome gift', href: '#', status: 'complete' },
    { name: 'Product preview', href: '#', status: 'complete' },
    { name: 'Gift configuration', href: '#', status: 'current' },
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
                                <h1 className="text-2xl font-semibold text-gray-900">Setup automatic gifts</h1>
                                <h2 className="text-l text-gray-500">Setup gifts that are automatically given on some occasion</h2>
                            </div>
                            <div className="max-w-6xl px-4 sm:px-6 md:px-20" >
                                <form className="space-y-8 divide-y divide-gray-200">
                                    <div className="pt-6 sm:pt-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                            <div>
                                                <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                                                    Welcome Gift
                                                </div>
                                                <Switch.Group as="div" className="mt-6 flex items-center">
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
                                                        <span className="text-sm font-medium text-gray-900">Activate</span>
                                                        {/* <span className="text-sm text-gray-500">(Save 10%)</span> */}
                                                    </Switch.Label>
                                                </Switch.Group>
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg space-y-4">
                                                    <div className="relative flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                                Option 1
                                                            </label>
                                                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="candidates"
                                                                    name="candidates"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label htmlFor="candidates" className="font-medium text-gray-700">
                                                                    Option 2
                                                                </label>
                                                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="offers"
                                                                    name="offers"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                                    Option 3
                                                                </label>
                                                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-6 sm:pt-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                            <div>
                                                <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                                                    Christmas Gift
                                                </div>
                                                <Switch.Group as="div" className="mt-6 flex items-center">
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
                                                        <span className="text-sm font-medium text-gray-900">Activate</span>
                                                        {/* <span className="text-sm text-gray-500">(Save 10%)</span> */}
                                                    </Switch.Label>
                                                </Switch.Group>
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg space-y-4">
                                                    <div className="relative flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                                Option 1
                                                            </label>
                                                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="candidates"
                                                                    name="candidates"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label htmlFor="candidates" className="font-medium text-gray-700">
                                                                    Option 2
                                                                </label>
                                                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="offers"
                                                                    name="offers"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                                    Option 3
                                                                </label>
                                                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-6 sm:pt-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                                            <div>
                                                <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                                                    Birthday Gift
                                                </div>
                                                <Switch.Group as="div" className="mt-6 flex items-center">
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
                                                        <span className="text-sm font-medium text-gray-900">Activate</span>
                                                        {/* <span className="text-sm text-gray-500">(Save 10%)</span> */}
                                                    </Switch.Label>
                                                </Switch.Group>
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:col-span-2">
                                                <div className="max-w-lg space-y-4">
                                                    <div className="relative flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                                Option 1
                                                            </label>
                                                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="candidates"
                                                                    name="candidates"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label htmlFor="candidates" className="font-medium text-gray-700">
                                                                    Option 2
                                                                </label>
                                                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input
                                                                    id="offers"
                                                                    name="offers"
                                                                    type="checkbox"
                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                                    Option 3
                                                                </label>
                                                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="mt-16 flex flex-row">
                                    <Link
                                        to={"/create-marketplace/product-preview"}
                                        className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Back
                                    </Link>
                                    <Link
                                        to={"/create-marketplace/overview"}
                                        className="ml-12 w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Next
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
