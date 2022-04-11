/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
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
import ThemeBox from './components/themeBox'
import { Link } from "react-router-dom";
import apiClient from "../../http-common"
import formApiClient from "../../http-form-data"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

const steps = [
    { name: 'Account Info', href: '#', status: 'complete' },
    { name: 'Theme', href: '#', status: 'current' },
    { name: 'Overview', href: '#', status: 'upcoming' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    const [url, setUrl] = useState("")
    const [image, setImage] = useState({})

    const { isLoading: isLoadingPut, isSuccess, isError: isErrorPut, data: dataPut, error: errorPut, mutate } = useMutation(
        async () => { return await formApiClient.put(url, image); });

    async function onImageChange(e) {
        setImage(e.target.files[0])
        let res = await apiClient.get("/presigned-upload-link");
        if (res.status != 200) {
            //todo handle
        }
        setUrl(res.data)
        mutate();
        const imageUrl = res.data.split('?')[0]
        props.setValue('logoUrl', imageUrl)
    }


    return (
        <>

            <div>
                {<Sidebar steps={steps} />}
                <div className="md:pl-72 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6 flex flex-col">
                            <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">
                                <h1 className="text-2xl font-semibold text-gray-900">Theme customization</h1>
                                <h2 className="text-l text-gray-500">Select a theme. If you can't find on that suits you brand - request a new one.</h2>
                            </div>
                            <form className="max-w-2xl px-4 sm:px-6 md:px-20">
                                <ThemeBox register={props.register} control={props.control} />


                                <h1 className=" mt-10 font-medium text-gray-700">Upload logo</h1>

                                
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                                    <div className="mt-1 sm:mt-0 sm:col-span-2">

                                        <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onImageChange} />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>






                                <div>
                                    <Link to={'/register/account-info'}>
                                        <span className='inline-block'>
                                            <div className='pt-8'>
                                                <button
                                                    type="button"
                                                    className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                                >
                                                    Back
                                                </button>
                                            </div>
                                        </span>
                                    </Link>
                                    <Link to={props.next}>
                                        <span className='ml-10 inline-block'>
                                            <div className='pt-8'>
                                                <button
                                                    type="button"
                                                    className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </span>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </main>
                </div>
            </div >
        </>
    )
}
