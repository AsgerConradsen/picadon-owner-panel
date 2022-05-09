/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
    AcademicCapIcon,
    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
} from '@heroicons/react/outline'
import { Link, useParams, useLocation } from "react-router-dom";


const actions = [
    {
        title: 'Visit marketplace',
        href: 'https://picadon-marketplace.herokuapp.com/',
        icon: ClockIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
        description: "Check out your marketplace as your tenants see it."
    },
    {
        title: 'Gifts',
        href: 'gifts',
        icon: BadgeCheckIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
        description: "Configure automated gifts or give a one time gift."
    },
    {
        title: 'Current products',
        href: '/home/marketplaces/ExampleMarketplace/product-preview',
        icon: UsersIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
        description: "See the current products on your marketplace."
    },
    {
        title: 'Tenants',
        href: 'tenants',
        icon: CashIcon,
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
        description: "Get an overview of the tenants on your marketplace"
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    let location = useLocation();


    return (
        <div className="mt-7 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                    )}
                >
                    <div>
                        <span
                            className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'rounded-lg inline-flex p-3 ring-4 ring-white'
                            )}
                        >
                            <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium">
                            {/* <a href={location.pathname + action.href} className="focus:outline-none" target="_blank" rel="noopener noreferrer">
                                <span className="absolute inset-0" aria-hidden="true" />
                                {action.title}
                            </a> */}
                            <Link to={action.href} className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                {action.title}
                            </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            {action.description}
                        </p>
                    </div>
                    <span
                        className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>
            ))}
        </div>
    )
}
