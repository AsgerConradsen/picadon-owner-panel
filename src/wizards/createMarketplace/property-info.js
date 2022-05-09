
/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import Sidebar from '../components/sidebar'
import TextInput from "../components/TextInput";
import ImgDropzone from "../onboarding/components/imgDropzone";
import CancelCreateMarketplaceModal from "./components/CancelCreateMarketplaceModal";

const steps = [
    { name: 'Property information', href: '/create-marketplace/property-info', status: 'current' },
    { name: 'Marketplace type', href: '/create-marketplace/type', status: 'upcoming' },
    { name: 'Tenant information', href: '/create-marketplace/tenant-info', status: 'upcoming' },
    { name: 'Wallets', href: '/create-marketplace/wallets', status: 'upcoming' },
    { name: 'Overview', href: '/create-marketplace/overview', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    let register = props.register

    const watchSameContactPerson = props.watch("sameContactPerson");

    return (
        <>

            <div>
                <CancelCreateMarketplaceModal open={isModalOpen} setOpen={setIsModalOpen} />
                {<Sidebar steps={steps} />}

                <div className="md:pl-72 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6 flex flex-col">
                            <div className="max-w-7xl px-4 py-8 sm:px-8 md:px-20">

                                <h1 className="text-2xl font-semibold text-gray-900">Property Info</h1>
                                <h2 className="text-l text-gray-500">Basic information about the property</h2>
                            </div>
                            <form className="max-w-xl px-4 sm:px-6 md:px-20">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <div className="mt-1 sm:mt-0 sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Marketplace web address*
                                        </label>
                                        <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
                                            This is the address your tenants see. We recommend to use the name of your property with any spaces replaced by dashes. Only lower case letters are allowed.
                                        </label>
                                        <div className="max-w-lg flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                                app.picadon.io/
                                            </span>
                                            <input
                                                type="text"
                                                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                {...register("marketplaceWebAddress")}
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-red-600">
                                            {props.errors?.marketplaceWebAddress?.message}
                                        </p>
                                    </div>
                                </div>
                                <TextInput type="text" label="Property name*" name="name" error={props.errors?.name} register={props.register} />
                                <TextInput type="text" label="Address*" name="address" error={props.errors?.address} register={props.register} />
                                <TextInput type="text" label="Postal code*" name="postalCode" error={props.errors?.postalCode} register={props.register} />
                                <TextInput type="text" label="City*" name="city" error={props.errors?.city} register={props.register} />

                                {/* <ImgDropzone watch={watchLogo} setValue={props.setValue} label="Image 1*" name="logoUrl" /> */}

                                <div className="relative mt-10 mb-7">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="px-2 bg-white text-sm text-gray-500">Contact person</span>
                                    </div>
                                </div>

                                <fieldset className="space-y-5">
                                    <div className="relative flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                name="comments"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                {...register("sameContactPerson")}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                Same primary contact person for this building as for this account
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                {!watchSameContactPerson ?
                                    <>
                                        <TextInput type="text" label="Full name*" name="contactPersonFullName" error={props.errors?.contactPersonFullName} register={props.register} />
                                        <TextInput type="email" label="Email*" name="contactPersonEmail" error={props.errors?.contactPersonEmail} register={props.register} />
                                        <TextInput type="tel" label="Phone number*" name="contactPersonPhone" error={props.errors?.contactPersonPhone} register={props.register} />
                                    </>
                                    : null}


                                {/* <h1 className=" mt-10 font-medium text-gray-700">Upload propert picture</h1>
                                <div className="mt-4 max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div> */}
                                <div className='flex flex-row'>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        type="button"
                                        className="mt-8 w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                                    >
                                        Cancel
                                    </button>
 
                                        <Link
                                            to={"/create-marketplace/type"}
                                            className="ml-7 mt-8 w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Next
                                        </Link>
         

                                </div>
                                {/* <Link to="/create-marketplace/type">
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
        </>
    )
}
