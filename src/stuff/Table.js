import React from 'react'
// import GlobalFilter from '../../shared/components/table component/GlobalFilter'
import { useTable, useGlobalFilter } from 'react-table'
import { useEffect } from 'react'
import { Switch } from '@headlessui/react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const GlobalFilter = ({ filter, setFilter }) => {
  return (
      <div>
          <div className="mt-1 relative flex items-center">
              <input
                  value={filter || ""}
                  placeholder="Search"
                  type="text"
                  name="search"
                  id="search"
                  className="shadow-sm  block w-full pr-12 sm:text-base text-xs border-gray-300 rounded-md"
                  onChange={e => {
                      setFilter(e.target.value);
                  }}
              />

          </div>
      </div>
  );
};

function Table({ columns, data, enabled, setEnabled }) {
  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    headerGroups,
  } = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter // useGlobalFilter!
  )
  const { globalFilter } = state


  return (
    <>
      <div className="flex justify-between gap-x-2">
        <GlobalFilter
          filter={globalFilter} setFilter={setGlobalFilter}
        />
        <div className="flex ">
          <span className="text-sm sm:text-base mr-3 text-right">{"something"}</span>          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? 'bg-gray-700' : 'bg-gray-200',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 '
            )}
          >

            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                ' pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            />
          </Switch>
        </div>
      </div>
      {/* table */}
      <div className="mt-4 flex flex-col text-sm md:text-base">
        <div className="-my-2 overflow-x-auto md:-mx-6 lg:-mx-8">
          <div className="py-2  inline-block min-w-full sm:px-6 lg:px-8">
            <div className="border border-gray-30	max-h-96 md:max-h-140 lg:max-h-128 overflow-y-scroll border-b border-gray-200 sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()} className="p-2 md:px-6 md:py-4 text-left ">{column.render("Header")}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200 "
                >
                  {!enabled ?
                    rows.map((row) => {
                      prepareRow(row);
                      if (!row.original.used) {
                        return (
                          <tr {...row.getRowProps()}
                            className=" hover:bg-gray-100"
                          >
                            {row.cells.map(cell => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="px-3 py-1 md:px-6 md:py-4 whitespace-nowrap"
                                >
                                  {cell.render('Cell')}
                                </td>
                              )
                            })}
                          </tr>
                        );
                      }
                    })
                    :
                    rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}
                          className=" hover:bg-gray-100"
                        >
                          {row.cells.map(cell => {
                            return (

                              <td
                                {...cell.getCellProps()}
                                className="px-3 py-1 md:px-6 md:py-4 whitespace-nowrap"
                              >
                                {cell.render('Cell')}
                              </td>
                            )
                          })}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Table;