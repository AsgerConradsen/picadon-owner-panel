import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'
import { NotFoundErrorPage } from './errorPages/NotFoundErrorPage'
import { validateToken } from '../TokenValidation'
import appConfig from '../appConfig.json'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import _, { map } from 'underscore';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const schema = yup.object().shape({
    // companyName: yup.string().required("Company name is a required field"),
    // cvr: yup.string().matches(/^[0-9]+$/, "Must be only digits").min(8, 'Must be exactly 8 digits').max(8, 'Must be exactly 8 digits').required(),
    // email: yup.string().email().required(),
    // phoneNumber: yup.string().phone("DK", true).required(),
    // password: yup.string().matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ).required(),
    // acceptTerms: yup.boolean().oneOf([true], 'This field must be checked'),

})

export default function Example() {
    const [availableGifts, setAvailableGifts] = useState([])
    const [giftConfig, setGiftConfig] = useState({})
    const [valuesSet, setValuesSet] = useState(false)
    const [isError, setIsError] = useState(false)
    let { marketplaceId } = useParams();
    let navigate = useNavigate();

    const { getValues, setValue, register, handleSubmit, watch, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            welcomeGiftsChosen: [],
            welcomeGiftMessage: "",
            welcomeGiftActivated: false
        },
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "welcomeGiftsChosen", // unique name for your Field Array
    });

    const watchWelcomeGiftMessage = watch("welcomeGiftMessage")
    const watchWelcomeGiftsChosen = watch("welcomeGiftsChosen")
    const watchWelcomeGiftActivated = watch("welcomeGiftActivated")

    const onSubmit = data => mutation.mutate(data);

    const mutation = useMutation(formData => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");

        validateToken(navigate, token, user_id)

        return axios.put(`${appConfig.SERVER_URL}/marketplaces/${marketplaceId}/giftConfiguration`, formData, {
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
    },
        {
            onError: (error, variables, context) => {
                console.log("did not work")

            },
            onSuccess: (data, variables, context) => {
                console.log("worked")
            },
        }
    );

    const { isLoading: isLoadingTutorials } = useQuery(
        "get available gifts",
        async () => {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id");

            validateToken(navigate, token, user_id)

            return axios.get(`${appConfig.SERVER_URL}/marketplaces/${marketplaceId}/availableGifts`, {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        {
            onSuccess: (data) => {
                console.log(data.data)
                setAvailableGifts(data.data)
            },
            onError: (err) => {
                setIsError(true)
            },
            retry: false,
        },
    );

    const giftConfigQuery = useQuery(
        "get gift config",
        async () => {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id");

            validateToken(navigate, token, user_id)

            return axios.get(`${appConfig.SERVER_URL}/marketplaces/${marketplaceId}/giftConfiguration`, {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        {
            onSuccess: (data) => {
                console.log(data.data)
                setGiftConfig(data.data)
                if (!valuesSet) {
                    setValue("welcomeGiftsChosen", data.data.WelcomeGiftsChosen)
                    setValue("welcomeGiftActivated", data.data.WelcomeGiftActivated)
                    setValue("welcomeGiftMessage", data.data.WelcomeGiftMessage)
                    setValuesSet(true)
                }
            },
            onError: (err) => {
                setIsError(true)
            },
            retry: false,
        },
    );

    if (isError) {
        return (<NotFoundErrorPage link={"/"} />)
    }

    function updateStateList(e, value) {
        if (e.target.checked) {
            append(value)
        } else {
            remove(value)
        }

    }

    return (
        <div className="bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>


                <Switch.Group as="div" className="max-w-xl flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                        <Switch.Label as="span" className="text-sm font-medium text-gray-900" passive>
                            Aktiver indflyttergaver
                        </Switch.Label>
                        <Switch.Description as="span" className="text-sm text-gray-500">
                            Alle lejere du har inviteret vil modtage en gave på deres indflytningsdato
                        </Switch.Description>
                    </span>
                    <Controller
                        control={control}
                        defaultValue={false}
                        name="welcomeGiftActivated"
                        render={({ field: { onChange, value } }) => (
                            <Switch
                                checked={value}
                                onChange={onChange}
                                className={classNames(
                                    value ? 'bg-indigo-600' : 'bg-gray-200',
                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                )}
                            >
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        value ? 'translate-x-5' : 'translate-x-0',
                                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                    )}
                                />
                            </Switch>
                        )} />
                </Switch.Group>

                <div className="mt-14 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {availableGifts.map((availableGift, index) => (
                        <div
                            key={availableGift.ID}
                            className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                        >
                            <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none sm:h-96">
                                <img
                                    src={availableGift.ImageUrl}
                                    alt={""}
                                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                                />
                            </div>
                            <div className="flex-1 p-4 space-y-2 flex flex-col">
                                <h3 className="text-sm font-medium text-gray-900">
                                    {availableGift.Name}
                                    {/* <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                    </a> */}
                                </h3>
                                <p className="text-sm text-gray-500">{availableGift.Description}</p>
                                <div className="flex-1 flex flex-col justify-end">
                                    {/* <p className="text-sm italic text-gray-500">{product.options}</p> */}
                                    <p className="text-base font-medium text-gray-900">{0}</p>
                                </div>
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    // checked={giftConfig.WelcomeGiftsChosen.includes(availableGift.ID)}
                                    defaultChecked={giftConfig.WelcomeGiftsChosen.includes(availableGift.ID)}
                                    className="absolute inset-y-2  focus:ring-indigo-500 h-6 w-6 text-indigo-600 border-gray-300 rounded-full"
                                    onClick={(e) => updateStateList(e, availableGift.ID)}
                                // {...register(`welcomeGiftsChosen.${index}`)} 
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Add your comment
                    </label>
                    <div className="mt-1">
                        <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            // defaultValue={giftConfig.WelcomeGiftMessage}
                            {...register("welcomeGiftMessage")}
                        />
                    </div>
                </div>

                {/* !_.isEqual(giftConfig.WelcomeGiftActivated.sort(), watchWelcomeGiftsChosen.sort()) */}
                {(watchWelcomeGiftMessage !== giftConfig.WelcomeGiftMessage || watchWelcomeGiftActivated !== giftConfig.WelcomeGiftActivated || !_.isEqual(watchWelcomeGiftsChosen.sort(), giftConfig.WelcomeGiftsChosen.sort())) ?
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Gem ændringer
                    </button>
                    :
                    null //TODO disabled button
                }




            </form>
        </div>
    )
}
