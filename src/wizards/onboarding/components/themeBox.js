/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm, Controller } from "react-hook-form";

const steps = [
    { name: 'Account Info', href: '#', status: 'complete' },
    { name: 'Theme', href: '#', status: 'current' },
    { name: 'Overview', href: '#', status: 'upcoming' },
]

const product = {
    name: 'Aarstiderne Børnefamiliekassen',
    href: '#',
    price: '480kr',
    description:
        "BørnefamilieKassen er nemme, velkendte retter, der appellerer til hele familien – store som små. Måltiderne er sunde og varierede, og de fleste retter kan laves på 30-40 minutter. En gang imellem vil der dog være retter, som kræver lidt længere tid (typisk dem, der passer sig selv i ovnen).",
    imageSrc: 'https://scm.dk/sites/default/files/styles/2400px/public/M%C3%A5ltidskasse_k%C3%B8kkenbord_2000x1400.jpg?itok=MPfjv_6j',
    imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
    breadcrumbs: [
    ],
    sizes: [
        { name: '1', description: '', color: 'bg-emerald-900' },
        { name: '2', description: '', color: 'bg-yellow-600' },
        { name: '3', description: '', color: 'bg-blue-700' },
        { name: '4', description: '', color: 'bg-indigo-800' },
        { name: '5', description: '', color: 'bg-slate-700' },
        { name: '6', description: '', color: 'bg-orange-700' },
    ]
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0])
    let register = props.register


    return (
        <Controller
            control={props.control}
            defaultValue=""
            name="selectedSize"
            render={({ field: { onChange } }) => (
                <RadioGroup value={selectedSize} onChange={(e) => {onChange(e); setSelectedSize(e);}}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">Theme</RadioGroup.Label>
                    <div className="mt-1 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {product.sizes.map((size) => (
                            <RadioGroup.Option
                                as="div"
                                key={size.name}
                                value={size}
                                className={({ active }) =>
                                    classNames(
                                        'h-16 w-52',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                                    )
                                }
                            // {...register("test")}
                            >
                                {({ active, checked }) => (
                                    <>

                                        <div
                                            className={classNames(
                                                size.color, '',
                                                active ? 'border' : 'border-2',
                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                'absolute -inset-px rounded-lg pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>)}
        />
    )
}
