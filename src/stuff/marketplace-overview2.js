/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import MarketplaceNav from './marketplace-nav'

const stats = [
    { name: 'Marketplace Visits', stat: '71,897' },
    { name: 'Visit Rate', stat: '58.16%' },
    { name: 'Purchases', stat: '789' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <>
            <div>
                <dl className="mt-1 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <MarketplaceNav />

            <div className='h-screen mt-7 bg-slate-100 px-5 py-5 rounded-lg'>
                <div className="h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">

                    <iframe className="w-full h-full object-center object-cover" src="https://picadon-marketplace.herokuapp.com/"></iframe>
                </div>
            </div>

        </>

    )
}
