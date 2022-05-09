import { useLayoutEffect, useRef, useState, useMemo } from 'react'
import { useTable } from 'react-table'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
    data: any[]
}

export const TenantTable: React.FC<Props> = ({ data }) => {
    const checkbox = useRef(null)
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedPeople, setSelectedPeople] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < data.length
        setChecked(selectedPeople.length === data.length)
        setIndeterminate(isIndeterminate)
        checkbox.current!.indeterminate = isIndeterminate
    }, [selectedPeople])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : data)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    const columns = useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'Name', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'Email',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Tenants</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            {selectedPeople.length > 0 && (
                                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        Invite to marketplace
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        Delete all
                                    </button>
                                </div>
                            )}
                            <table {...getTableProps()} className="min-w-full table-fixed divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {/* <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                                ref={checkbox}
                                                checked={checked}
                                                onChange={toggleAll}
                                            />
                                        </th> */}
                                        {/* <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Title
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Role
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th> */}
                                    </tr>
                                    {// Loop over the header rows
                                        headerGroups.map(headerGroup => (
                                            // Apply the header row props
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                    <input
                                                        type="checkbox"
                                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                                        ref={checkbox}
                                                        checked={checked}
                                                        onChange={toggleAll}
                                                    />
                                                </th>
                                                {// Loop over the headers in each row
                                                    headerGroup.headers.map(column => (
                                                        // Apply the header cell props
                                                        <th {...column.getHeaderProps()} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            {// Render the header
                                                                column.render('Header')}
                                                        </th>
                                                    ))}
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        ))}
                                </thead>
                                <tbody {...getTableBodyProps()} className="divide-y divide-gray-200 bg-white">
                                    {// Loop over the table rows
                                        rows.map(row => {
                                            // Prepare the row for display
                                            prepareRow(row)
                                            return (
                                                // Apply the row props
                                                <tr {...row.getRowProps()} className={selectedPeople.includes(row) ? 'bg-gray-50' : undefined}>
                                                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                        {selectedPeople.includes(row) && (
                                                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                                        )}
                                                        <input
                                                            type="checkbox"
                                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                                            value={row.email}
                                                            checked={selectedPeople.includes(tenant)}
                                                            onChange={(e) =>
                                                                setSelectedPeople(
                                                                    e.target.checked
                                                                        ? [...selectedPeople, tenant]
                                                                        : selectedPeople.filter((p) => p !== tenant)
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    {// Loop over the rows cells
                                                        row.cells.map(cell => {
                                                            // Apply the cell props
                                                            return (
                                                                <td {...cell.getCellProps()}>
                                                                    {// Render the cell contents
                                                                        cell.render('Cell')}
                                                                </td>
                                                            )
                                                        })}
                                                </tr>
                                            )
                                        })}
                                    {/* {data.map((tenant) => (
                                        <tr key={tenant.email} className={selectedPeople.includes(tenant) ? 'bg-gray-50' : undefined}>
                                            <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                {selectedPeople.includes(tenant) && (
                                                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                                )}
                                                <input
                                                    type="checkbox"
                                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                                    value={tenant.email}
                                                    checked={selectedPeople.includes(tenant)}
                                                    onChange={(e) =>
                                                        setSelectedPeople(
                                                            e.target.checked
                                                                ? [...selectedPeople, tenant]
                                                                : selectedPeople.filter((p) => p !== tenant)
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td
                                                className={classNames(
                                                    'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                                    selectedPeople.includes(tenant) ? 'text-indigo-600' : 'text-gray-900'
                                                )}
                                            >
                                                {tenant.Name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tenant.title}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tenant.Email}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tenant.role}</td>
                                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit<span className="sr-only">, {tenant.Name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
