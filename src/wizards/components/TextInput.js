import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export default function TextInput(props) {
    let register = props.register
    return (
        <div className='my-4'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...register(props.name)}
                />
                {props.error ?
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div> : null}
            </div>
            <p className="mt-2 text-sm text-red-600" id="email-error">
                {props.error?.message}
            </p>
        </div>
    )
}
