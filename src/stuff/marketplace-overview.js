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

            <div className='mt-8 grid grid-cols-2 gap-5'>


                <MarketplaceNav />


                {/* <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img
                        src={"https://images.unsplash.com/photo-1624204386084-dd8c05e32226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                        alt="img"
                        className="w-full h-full object-center object-cover"
                    />
                </div> */}

                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    {/* <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        View
                    </button> */}

                    <iframe className="w-full h-full object-center object-cover" src="https://picadon-marketplace.herokuapp.com/"></iframe>
                </div>


            </div>
        </>

    )
}
