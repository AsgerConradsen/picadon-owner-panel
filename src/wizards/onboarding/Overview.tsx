import Sidebar from '../components/sidebar'
import { Link } from "react-router-dom";
import { AccountCreatedModal } from './components/AccountCreatedModal';
import { FieldValues, FormState, UseFormHandleSubmit, UseFormWatch } from 'react-hook-form';

const steps = [
    { name: 'Generel information', href: '/register/account-info', status: 'complete' },
    { name: 'Design', href: '/register/theme', status: 'complete' },
    { name: 'Oversigt', href: '/register/overview', status: 'current' },
]

interface Props {
    errors: {[x: string]: any;},
    handleSubmit: UseFormHandleSubmit<FieldValues>,
    onSubmit: (data: any) => void,
    modalOpen: boolean,
    watch: UseFormWatch<FieldValues>,
}

export const Overview: React.FC<Props> = (props) =>  {
    const watchCompanyName = props.watch("companyName", "");
    const watchCVR = props.watch("cvr", "");
    const watchEmail = props.watch("email", "");
    const watchPhoneNumber = props.watch("phoneNumber", "");
    return (
        <div>
            <AccountCreatedModal open={props.modalOpen} />
            {<Sidebar steps={steps} />}
            <div className="md:pl-72">
                <div className="max-w-7xl px-4 py-12 sm:px-8 md:px-20">
                    <h1 className="text-2xl font-semibold text-gray-900">Oversigt over din information</h1>
                    <h2 className="max-w-2xl text-l text-gray-500">Venligst check at alt er korrekt, før du opretter din konto</h2>
                </div>
                <div className="max-w-4xl px-4 sm:px-6 md:px-20">
                    <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Company name</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{watchCompanyName}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <Link
                                        to="/register/account-info"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Rediger
                                    </Link>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">CVR</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{watchCVR}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <Link
                                        to="/register/account-info"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Rediger
                                    </Link>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{watchEmail}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <Link
                                        to="/register/account-info"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Rediger
                                    </Link>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">{watchPhoneNumber}</span>
                                <span className="ml-4 flex-shrink-0">
                                    <Link
                                        to="/register/account-info"
                                        className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    >
                                        Rediger
                                    </Link>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Payment information</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Aftales med Picadon efter oprettelse</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        disabled={true}
                                        className="bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Rediger
                                    </button>
                                </span>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Fulfilment informatiom</dt>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className="flex-grow">Aftales med Picadon efter oprettelse</span>
                                <span className="ml-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        disabled={true}
                                        className="bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Rediger
                                    </button>
                                </span>
                            </dd>
                        </div>
                    </dl>

                </div>
                {Object.keys(props.errors).length === 0 ?
                    null
                    :
                    <p className="ml-8 sm:ml-20 mt-8 text-sm text-red-600" id="email-error">

                        The following fields are missing or have invalid inputs: {Object.keys(props.errors).map((key) => key + ", ")}. Edit these fields to continue
                    </p>
                }
                <form onSubmit={props.handleSubmit(props.onSubmit)} className='flex flex-row ml-8 sm:ml-20'>
                    <Link
                        to={"/register/theme"}
                        type="button"
                        className="mt-4 w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    >
                        Tilbage
                    </Link>
                    {Object.keys(props.errors).length === 0 ?
                        <button
                            type="submit"
                            className="ml-7 mt-4 w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Opret
                        </button>
                        :

                        <button
                            type="button"
                            disabled={true}
                            className="ml-7 mt-4 w-24 flex justify-center py-2 px-4 border border-transparent opacity-40 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Opret
                        </button>
                    }
                </form>
            </div>
        </div >
    )
}
