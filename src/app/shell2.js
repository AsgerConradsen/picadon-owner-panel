/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, UserCircleIcon, GiftIcon } from '@heroicons/react/outline'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
    useNavigate,
    Navigate
} from 'react-router-dom';

import MarketplaceList from './marketplaces'
import MarketplaceOverview from './marketplace-overview2'
import Breadcrumbs from './breadCrumbs'
import ProductPreview from './product-preview'
import { ReactSVG } from 'react-svg'
import { TenantPage } from './TenantPage';
import EventsCatalogue from './EventsCatalogue';
import GiftsCatalogue from './GiftConfiguration';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Markedspladser', href: '/home/marketplaces', current: true },
    // { name: 'Events', href: '/home/events', current: false },
]
// const userNavigation = [
//     { name: 'Your Profile', href: '#' },
//     { name: 'Settings', href: '#' },
//     { name: 'Sign out', href: '/' },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Example() {
    let navigate = useNavigate();

    const userNavigation = [
        { name: 'Sign out', action: () => { localStorage.clear(); navigate("/") } },
        { name: 'AccountPage', action: () => { navigate('/home/account-page'); } }
    ]


    return (
        <>

            <div className="min-h-full">
                <Disclosure as="nav" style={{ backgroundColor: localStorage.getItem("color") ? localStorage.getItem("color") : "#4b5563" }}>
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-auto"
                                                src={localStorage.getItem("logoUrl")}
                                                alt="Logo"
                                            />


                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item, index) => (
                                                    <NavLink
                                                        key={index}
                                                        to={item.href}
                                                        className={({ isActive }) => classNames(isActive
                                                            ? 'border-white inline-flex border-b-2'
                                                            : 'border-transparent hover:border-gray-100 inline-flex border-b',
                                                            'px-1 pt-1 pb-1 text-sm font-medium items-center text-white')}
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* <button
                                                type="button"
                                                className="p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button> */}

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-white">
                                                        <span className="sr-only">Open user menu</span>
                                                        <UserCircleIcon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={item.action}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-8 pt-2 pb-3 space-y-1 sm:px-10">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'border-b-2 text-white'
                                                    : 'text-white hover:bg-opacity-75',
                                                'block px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t">
                                    {/*  */}
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="button"
                                                onClick={item.action}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>




                {/* 

                <Routes>
                    <Route path="/marketplaces" element={null} />
                    <Route path="/marketplaces/:marketplaceId" element={
                        <header className="bg-white shadow-sm">
                            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                                <Breadcrumbs />
                            </div>
                        </header>
                    } />
                </Routes> */}



                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <Routes>
                            <Route path="/marketplaces" element={<MarketplaceList />} />
                            <Route path="/marketplaces/:marketplaceId" element={<MarketplaceOverview />} />
                            <Route path="/marketplaces/:marketplaceId/gifts" element={<GiftsCatalogue />} />
                            <Route path="/marketplaces/:marketplaceId/product-preview" element={<ProductPreview />} />
                            <Route path="/marketplaces/:marketplaceId/tenants" element={<TenantPage />} />
                            <Route path="/events" element={<EventsCatalogue />} />

                            <Route
                                path="*"
                                element={<Navigate to="/home/marketplaces" replace />}
                            />
                        </Routes>
                    </div>
                </main>
            </div>
        </>
    )
}

