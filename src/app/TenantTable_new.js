import React, { useMemo } from 'react'
import { useTable, useRowSelect, usePagination } from 'react-table'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import axios from 'axios'
import appConfig from '../appConfig.json'
import { useParams } from 'react-router-dom'
import { list } from 'postcss'


const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
        )
    }
)


function convertRowsToIds(rows) {
    let data = list.map((obj) => obj.id);
}

export default function TenantTable(props) {
    let data = props.data
    let { marketplaceId } = useParams();

    const mutation = useMutation(formData => {
        return axios.post(appConfig.SERVER_URL + `/marketplaces/${marketplaceId}/invitations`, formData, {
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

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'Name', // accessor is the "key" in the data
            },
            {
                Header: 'Email',
                accessor: 'Email',
            },
            {
                Header: 'Address',
                accessor: 'Address',
            },
            {
                Header: 'Status',
                accessor: 'Status',
            },
        ],
        []
    )
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        prepareRow,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds },
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 15 },
        },
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox className="rounded border-gray-400" {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox className="rounded border-gray-400" {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    // Render the UI for your table
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Tenants</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the tenants you registered for this marketplace.
                    </p>
                </div>
                {selectedFlatRows.length > 0 ?
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            onClick={() => mutation.mutate({ "tenant_ids": (selectedFlatRows.map(d => d.original)).map(obj => obj.ID) })}//mutation.mutate({ "tenant_ids" : selectedFlatRows.map((row) => row.ID) })}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Invite selected
                        </button>
                    </div>
                    : null}
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full table-fixed divide-y divide-gray-300" {...getTableProps()}>
                                <thead className="bg-gray-50">
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" {...column.getHeaderProps()}>{column.render('Header')}</th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white" {...getTableBodyProps()}>
                                    {page.map((row, i) => {
                                        prepareRow(row)
                                        return (
                                            <tr className={row.isSelected ? 'bg-gray-50' : undefined} {...row.getRowProps()}>
                                                {row.cells.map(cell => {
                                                    return <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="mt-5">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="rounded border border-gray-400">
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage} className="rounded border border-gray-400">
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage} className="rounded border border-gray-400">
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="rounded border border-gray-400">
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedRowIds: selectedRowIds,
                            'selectedFlatRows[].original': selectedFlatRows.map(
                                d => d.original
                            ),
                        },
                        null,
                        2
                    )}
                </code>
            </pre> */}
        </div>
    )
}


