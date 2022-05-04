/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Switch } from '@headlessui/react'
import { useForm, Controller } from "react-hook-form";
import TenantImportMethodSelect from "./components/TenantImportMethodSelect";
import CsvDropzone from "./components/CsvDropzone";
import { tenantsSchema } from "./tenansSchema";

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
import TenantTable from './components/tenant-table'
import Modal from './components/tenant-info-modal'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

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
    { name: 'Property information', href: '#', status: 'complete' },
    { name: 'Marketplace type', href: '#', status: 'complete' },
    { name: 'Tenant information', href: '#', status: 'current' },
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
    const [enabled, setEnabled] = useState(false)
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    const [dataSet, setDataSet] = useState(false)

    const watchCsv = props.watch("tenants");

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
                    <main className="flex-1 py-6">
                        <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">
                            <h1 className="text-2xl font-semibold text-gray-900">Tenants</h1>
                            <h2 className="text-l text-gray-500">Review your tenant information</h2>
                        </div>
                        <div className="">



                            <div className="max-w-5xl px-4 sm:px-6 md:px-20" >
                                <TenantImportMethodSelect />

                                {/* TODO: only show if csv import selected  */}
                                <CsvDropzone className="justify-center" setDataSet={setDataSet} error={props.errors?.tenants} schema={tenantsSchema} setValue={props.setValue} watch={watchCsv} label="test1" name="tenants" />



                                {dataSet ? <TenantTable data={watchCsv} /> : null}


                                <div className="mt-16 flex flex-row">
                                    <Link
                                        to={"/create-marketplace/type"}
                                        className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                    >
                                        Back
                                    </Link>
                                    <Link
                                        to={"/create-marketplace/financing"}
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
