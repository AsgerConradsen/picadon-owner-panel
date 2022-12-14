import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import Logo from './logos/Logo-dark-grey.svg'
import { Link, Navigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import apiClient from "./http-common"
import jwtDecode from 'jwt-decode';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

export default function Example() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false)


    const mutation = useMutation(formData => { return apiClient.post("/owner-panel/login", formData); },
        {
            onError: (error, variables, context) => {
                setIsLoginError(true)
                // An error happened!
                console.log(`rolling back optimistic update with id ${context.id}`)
            },
            onSuccess: (data, variables, context) => {
                localStorage.setItem("token", data.data.token)
                localStorage.setItem("logoUrl", data.data.config.logoUrl) 
                localStorage.setItem("color", data.data.config.color) 

                let decoded = jwtDecode(data.data.token)
                localStorage.setItem("userType", decoded.userType)
                localStorage.setItem("user_id", decoded.user_id)
                setIsLoggedIn(true)
            },
        }
    );


    const { setValue, register, handleSubmit, watch, control, formState: { errors } } = useForm();
    // const onSubmit = data => mutate(data);
    async function onSubmit(formData) {
        mutation.mutate(formData);
    }

    if (isLoggedIn) {
        return <Navigate to='/home' />
    }

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-20 w-auto"
                            src={Logo}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log ind som udlejer</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            eller{' '}
                            <a href="/register/account-info" className="font-medium text-indigo-600 hover:text-indigo-500">
                                klik her for at oprette en konto
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    {...register("password")}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="mb-3 self-center text-sm text-red-600" id="email-error">
                                {isLoginError ? "Incorrect password or email" : null}
                            </p>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Glemt dit kodeord?
                                </a>
                            </div>
                        </div>

                        {/* <Link to="/home/marketplaces">
                            <span className='block mt-4'> */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Log ind
                            </button>
                        </div>
                        {/* </span>
                        </Link> */}
                    </form>
                </div>
            </div>
        </>
    )
}
