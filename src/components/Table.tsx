/* eslint-disable react/button-has-type */
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

interface Props<T> {
  columns: ColumnDef<T>[];
  data: T[];
  // TODO: Take a look if there exists native react-table solutions
  onRowClick?: (row: Row<T>) => void;
  rowsAmount: number;
}

// TODO: Migrade to display grid instead of table
export const Table = <T,>({ columns, data, onRowClick }: Props<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const thClassName = 'border-none p-0';
  const tdClassName = 'border-none p-0';
  const trClassName = 'border-b-[1px] border-solid border-border-static';

  return (
    <>
      <table className='w-full'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={trClassName}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={thClassName}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={trClassName} onClick={() => onRowClick?.(row)}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={tdClassName}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id} className={trClassName}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} className={thClassName}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className='flex items-center gap-2 justify-center'>
        <button
          className='border-0 rounded p-1 text-tertiary'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <span className='flex items-center gap-1 text-tertiary'>
          <strong>
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <button
          className='border-0 rounded p-1 text-tertiary'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>

        <select
          className='text-tertiary'
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
