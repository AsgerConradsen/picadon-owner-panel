/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'
import Logo from '../../logos/Logo-dark-grey.svg'

export default function Example(props) {
    return (
        < div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0" >
            {/* Sidebar component, swap this element with another sidebar if you like */}
            < div className="flex-1 flex flex-col min-h-0 bg-slate-100" >
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto center">
                    <div className="flex-shrink-0 self-center mt-10 mb-10">
                        <img
                            className="w-36"
                            src={Logo}
                            alt="Workflow"
                        />
                    </div>

                    <div className="py-12 px-4 sm:px-6 lg:px-8">
                        <nav className="flex justify-center" aria-label="Progress">
                            <ol role="list" className="space-y-6">
                                {props.steps.map((step) => (
                                    <li key={step.name}>
                                        {step.status === 'complete' ? (
                                            <a href={step.href} className="group">
                                                <span className="flex items-start">
                                                    <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                                        <CheckCircleIcon
                                                            className="h-full w-full text-indigo-600 group-hover:text-indigo-800"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                    <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                                        {step.name}
                                                    </span>
                                                </span>
                                            </a>
                                        ) : step.status === 'current' ? (
                                            <a href={step.href} className="flex items-start" aria-current="step">
                                                <span className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                                                    <span className="absolute h-4 w-4 rounded-full bg-indigo-200" />
                                                    <span className="relative block w-2 h-2 bg-indigo-600 rounded-full" />
                                                </span>
                                                <span className="ml-3 text-sm font-medium text-indigo-600">{step.name}</span>
                                            </a>
                                        ) : (
                                            <a href={step.href} className="group">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center" aria-hidden="true">
                                                        <div className="h-2 w-2 bg-gray-300 rounded-full group-hover:bg-gray-400" />
                                                    </div>
                                                    <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                                                </div>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div >
        </div >
    )
}
