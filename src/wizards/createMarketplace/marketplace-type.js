/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
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


const product = {
    name: 'Everyday Ruck Snack',
    href: '#',
    price: '$220',
    description:
        "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
    breadcrumbs: [
        { id: 1, name: 'Travel', href: '#' },
        { id: 2, name: 'Bags', href: '#' },
    ],
    sizes: [
        { name: 'Regular', description: 'With this, you get the full marketplace, including a white-labelled storefront for your tenants and API.' },
        { name: 'API only', description: 'With this, you only get the API.' },
    ],
}

const steps = [
    { name: 'Property information', href: '/create-marketplace/property-info', status: 'complete' },
    { name: 'Marketplace type', href: '/create-marketplace/type', status: 'current' },
    { name: 'Tenant information', href: '/create-marketplace/tenant-info', status: 'upcoming' },
    { name: 'Wallets', href: '/create-marketplace/wallets', status: 'upcoming' },
    { name: 'Overview', href: '/create-marketplace/overview', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    let register = props.register
    const [enabled, setEnabled] = useState(false)
    const [enabled2, setEnabled2] = useState(false)
    const [enabled3, setEnabled3] = useState(false)
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])

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
                                <h1 className="text-2xl font-semibold text-gray-900">Marketplace type</h1>
                                <h2 className="text-l text-gray-500">Choose a type for the marketplace. Reach out to us if you are not sure.</h2>
                            </div>
                            <form onSubmit={props.handleSubmit(props.onSubmit)} className="mt-8 max-w-3xl px-4 sm:px-6 md:px-20" >
                                <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">Type</RadioGroup.Label>
                                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {product.sizes.map((size) => (
                                            <RadioGroup.Option
                                                as="div"
                                                key={size.name}
                                                value={size}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'relative block border border-gray-300 rounded-lg p-14 cursor-pointer focus:outline-none'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                                            {size.name}
                                                        </RadioGroup.Label>
                                                        <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                                            {size.description}
                                                        </RadioGroup.Description>
                                                        <div
                                                            className={classNames(
                                                                active ? 'border' : 'border-2',
                                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                                'absolute -inset-px rounded-lg pointer-events-none'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>

                                <Switch.Group as="div" className="flex items-center mt-8">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                        // {...register("giftsEnabled")}
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
                                        <span className="text-sm font-medium text-gray-900">Enable gifts module.&nbsp;&nbsp;</span>
                                        <span className="text-sm text-gray-500">This allows you to send gifts and setup automated gifts for occassions such as move-in and birthdays.</span>
                                    </Switch.Label>
                                </Switch.Group>
                                <Switch.Group as="div" className="flex items-center mt-8">
                                    <Switch
                                        checked={enabled2}
                                        onChange={setEnabled2}
                                        className={classNames(
                                            enabled2 ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled2 ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                    <Switch.Label as="span" className="ml-3">
                                        <span className="text-sm font-medium text-gray-900">Enable 'Essentials' module.&nbsp;&nbsp;</span>
                                        <span className="text-sm text-gray-500">With this, your tenants will have access to essential services that make their daily lives easier.</span>
                                    </Switch.Label>
                                </Switch.Group>
                                <Switch.Group as="div" className="flex items-center mt-8">
                                    <Switch
                                        checked={enabled3}
                                        onChange={setEnabled3}
                                        className={classNames(
                                            enabled3 ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabled3 ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                    <Switch.Label as="span" className="ml-3">
                                        <span className="text-sm font-medium text-gray-900">Enable 'Experiences' module.&nbsp;&nbsp;</span>
                                        <span className="text-sm text-gray-500">With this, your tenants will have access to fun local experiences and events.</span>
                                    </Switch.Label>
                                </Switch.Group>


                                <div className="mt-16 flex flex-row">
                                    <Link
                                        to={"/create-marketplace/property-info"}
                                        className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Back
                                    </Link>
                                    <Link
                                        to={"/create-marketplace/tenant-info"}
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
