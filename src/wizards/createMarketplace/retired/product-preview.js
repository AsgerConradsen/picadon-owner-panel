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
        name: 'Padel tennis 2-tur klippekort',
        href: '#',
        price: '350 DKK',
        description: 'Prøv den nye populære sport padel tennis med et klippekort til 2x baneleje inkl. udstyr ',
        options: '8 colors',
        imageSrc: 'https://www.sweetdeal.dk/media/catalog/product/cache/c1f503f03b36506d2320500471bc0a59/m/a/match-padel-160621-2.jpg',
        imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
        id: 2,
        name: 'Aarstiderne Børnefamiliekassen',
        href: '#',
        price: '300 DKK',
        description: 'Med denne måltidskasse får du....',
        options: 'Black',
        imageSrc: 'https://scm.dk/sites/default/files/styles/2400px/public/M%C3%A5ltidskasse_k%C3%B8kkenbord_2000x1400.jpg?itok=MPfjv_6j',
        imageAlt: 'Front of plain black t-shirt.',
    },
    {
        id: 3,
        name: '3 poser Espresso Roast',
        href: '#',
        price: '100 DKK',
        description: 'Prøv denne fantastiske kaffe fra Damned good coffee company.',
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
    { name: 'Product preview', href: '#', status: 'current' },
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
                                <h1 className="text-2xl font-semibold text-gray-900">Preview first product lineup</h1>
                                <h2 className="text-l text-gray-500">These are the 3 starting products on your marketplace. We rotate them every month</h2>
                            </div>
                            <div className="max-w-6xl px-4 sm:px-6 md:px-20" >
                                <section aria-labelledby="product-heading" className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                                    <h2 id="product-heading" className="sr-only">
                                        Products
                                    </h2>

                                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                                        {products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                                            >
                                                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-80">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                                    />
                                                </div>
                                                <div className="flex-1 p-4 space-y-2 flex flex-col">
                                                    <h3 className="text-sm font-medium text-gray-900">
                                                        <a href={product.href}>
                                                            <span aria-hidden="true" className="absolute inset-0" />
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                    <p className="text-sm text-gray-500">{product.description}</p>
                                                    <div className="flex-1 flex flex-col justify-end">
                                                        <p className="text-base font-medium text-gray-900">{product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <div className="mt-16 flex flex-row">
                                    <Link
                                        to={"/create-marketplace/welcome-gift"}
                                        className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Back
                                    </Link>
                                    <Link
                                        to={"/create-marketplace/gift-config"}
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
