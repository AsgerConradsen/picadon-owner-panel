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
import CancelOnboardingModal from './components/CancelOnboardingModal';
import { useState } from 'react';


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
    { name: 'Generel information', href: '/register/account-info', status: 'current' },
    { name: 'Design', href: '/register/theme', status: 'upcoming' },
    { name: 'Oversigt', href: '/register/overview', status: 'upcoming' },
]




export default function Example(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    let register = props.register

    const watchAcceptTerms = props.watch("acceptTerms");
    return (
        <div>
            <CancelOnboardingModal open={isModalOpen} setOpen={setIsModalOpen} />
            {<Sidebar steps={steps} />}
            <div className="md:pl-72 flex flex-col flex-1">
                <main className="flex-1">
                    <div className="py-6 flex flex-col">
                        <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">
                            <h1 className="text-2xl font-semibold text-gray-900">Generel information</h1>
                            <h2 className="text-l text-gray-500">Om din virksomhed og kontakt information</h2>
                        </div>
                        <form className="max-w-xl px-4 sm:px-6 md:px-20">
                            <TextInput type="text" label="Firmanavn*" name="companyName" error={props.errors?.companyName} register={props.register} />
                            <TextInput type="text" label="CVR*" name="cvr" error={props.errors?.cvr} register={props.register} />
                            <TextInput type="email" label="Email*" name="email" error={props.errors?.email} register={props.register} />
                            <TextInput type="tel" label="Tlf nr*" name="phoneNumber" error={props.errors?.phoneNumber} register={props.register} />
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
                                            Jeg accepterer Terms and Conditions og {' '}
                                        </label>
                                        <a className='text-blue-600' href="/privacy-policy" target="_blank" rel="noreferrer noopener">
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>
                            </fieldset>
                            <div className='flex flex-row'>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    type="button"
                                    className="mt-8 w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                                >
                                    Cancel
                                </button>
                                {watchAcceptTerms ?
                                 <Link
                                    to={props.next}
                                    className="ml-7 mt-8 w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Næste
                                </Link> 
                                : 
                                <button
                                    disabled={true}
                                    className="opacity-40 ml-7 mt-8 w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Næste
                                </button>}
                                
                            </div>
                            {/* <Link to={props.next}>
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
                            </Link> */}
                        </form>
                    </div>
                </main>
            </div>
        </div>

    )
}
