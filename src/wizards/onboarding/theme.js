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
import ImgDropzone from './components/imgDropzone'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ChromePicker } from 'react-color';

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

const steps = [
    { name: 'Generel information', href: '/register/account-info', status: 'complete' },
    { name: 'Design', href: '/register/theme', status: 'current' },
    { name: 'Oversigt', href: '/register/overview', status: 'upcoming' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    const [url, setUrl] = useState("")
    const [image, setImage] = useState({})
    const [color, setColor] = useState("#fff")

    let register = props.register

    const { isLoading: isLoadingPut, isSuccess, isError: isErrorPut, data: dataPut, error: errorPut, mutate } = useMutation(
        async () => { return await formApiClient.put(url, image); });

    const watchLogo = props.watch("logoUrl", "");
    const watchColor = props.watch("color");
    console.log(watchColor)

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

    const handleColorChange = (color, event) => {
        setColor(color)
        props.setValue("color", color.hex)
    }

    return (
        <>

            <div>
                {<Sidebar steps={steps} />}
                <div className="md:pl-72 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6 flex flex-col">
                            <div className="max-w-5xl px-4 py-8 sm:px-8 md:px-20">
                                <h1 className="text-2xl font-semibold text-gray-900">Vælg dit design</h1>
                                <h2 className="text-l text-gray-500">
                                    Her kan du vælge en farve, der matcher dit brand og uploade dit logo. Dine markedspladser vil automatisk blive stylet med disse.
                                    For at opnå et godt resultat, er det vigtigt, at du:
                                    <br></br>
                                    <br></br>
                                    1. Vælger en farve, hvorpå hvid tekst er tydelig.
                                    <br></br>
                                    2. Uploader et logo med gennemsigtigt baggrund.
                                    <br></br>
                                    <br></br>
                                    Hvis du har uploaded et logo med gennemsigtigt baggrund, vil du kunne se din valgte farve i baggrunden.
                                </h2>
                            </div>
                            <form className="max-w-5xl px-4 sm:px-6 md:px-20">
                                <div className='sm:grid sm:grid-cols-2'>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Farve*
                                        </label>
                                        <ChromePicker
                                            className=""
                                            color={color}
                                            onChangeComplete={handleColorChange}
                                            disableAlpha={true}
                                        />
                                    </div>
                                    <ImgDropzone color={color.hex} watch={watchLogo} setValue={props.setValue} label="Logo*" name="logoUrl" />
                                </div>

                                <div>
                                    <Link to={'/register/account-info'}>
                                        <span className='inline-block'>
                                            <div className='pt-8'>
                                                <button
                                                    type="button"
                                                    className="w-24 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                                >
                                                    Tilbage
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
                                                    Næste
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
