/* This example requires Tailwind CSS v2.0+ */
import TextInput from '../components/TextInput';
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
    { name: 'Account Info', href: '/register/account-info', status: 'current' },
    { name: 'Theme', href: '/register/theme', status: 'upcoming' },
    { name: 'Overview', href: '/register/overview', status: 'upcoming' },
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

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Username
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                            app.picadon.io/
                                        </span>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>


                            <TextInput type="text" label="Company name*" name="companyName" error={props.errors?.companyName} register={props.register} />
                            <TextInput type="text" label="CVR*" name="cvr" error={props.errors?.cvr} register={props.register} />
                            <TextInput type="email" label="Email*" name="email" error={props.errors?.email} register={props.register} />
                            <TextInput type="tel" label="Phone number*" name="phoneNumber" error={props.errors?.phoneNumber} register={props.register} />
                            <TextInput type="password" label="Password*" name="password" error={props.errors?.password} register={props.register} />

                            <fieldset className="space-y-5">
                                <legend className="sr-only">Notifications</legend>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            name="terms"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            {...register("acceptTerms")}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                            I agree to Terms and Conditions and
                                        </label>
                                        <a className='text-blue-600' href="/privacy-policy" target="_blank" rel="noreferrer noopener">
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            name="notifications"
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
