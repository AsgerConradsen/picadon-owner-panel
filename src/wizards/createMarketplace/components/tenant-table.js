/* This example requires Tailwind CSS v2.0+ */
const people = [
    { name: 'John Doe', title: '5, 2tv', email: 'john.doe@example.com', role: 'Tenant' },
    { name: 'Bo Doe', title: '5, 1tv', email: 'bo.doe@example.com', role: 'Tenant' },
    { name: 'Niels Doe', title: '5, 3th', email: 'niels.doe@example.com', role: 'Tenant' },
    { name: 'Nils Doe', title: '5, 2th', email: 'nils.doe@example.com', role: 'Tenant' },
    { name: 'Hans Doe', title: '5, 7th', email: 'hans.doe@example.com', role: 'Tenant' },
    { name: 'Troels Doe', title: '5, 7tv', email: 'troels.doe@example.com', role: 'Tenant' },
    { name: 'Poul Doe', title: '5, 4tv', email: 'poul.doe@example.com', role: 'Tenant' },
    { name: 'Linda Doe', title: '5, 4th', email: 'linda.doe@example.com', role: 'Tenant' },
    { name: 'Monika Doe', title: '5, 5tv', email: 'monika.doe@example.com', role: 'Tenant' },
    // More people...
]

export default function Example(props) {
    return (
        <div className="max-h-96 overflow-scroll">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {props.data.map((tenant) => (
                                        <tr key={tenant.address}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {tenant.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tenant.email}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tenant.phone}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tenant.address}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-red-600 hover:text-indigo-900">
                                                    Delete<span className="sr-only">, {tenant.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
