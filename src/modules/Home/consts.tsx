'use client';

import { Investor } from '@/src/types';
import { Typography } from '@components/Typography';
import { Image } from '@components/Image';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<Investor>();

export const useColumns = () => {
  return [
    columnHelper.accessor('name', {
      header: () => <TableItemHeader text='Name' />,
      cell: (info) => {
        return (
          <div className='flex items-center gap-[10px] bg-white pl-[20px]'>
            <Image src={info.row.original.logos.app} alt={info.row.original.category} />
            <TableItemBody text={info.getValue()} />
          </div>
        );
      },
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor('category', {
      header: () => <TableItemHeader text='Category' />,
      cell: (info) => <TableItemBody text={info.getValue()} />,
      // footer: (info) => info.column.id,
    }),
    columnHelper.accessor('connector', {
      header: () => <TableItemHeader text='Connector' />,
      cell: (info) => <TableItemBody text={info.getValue()} />,
      // footer: (info) => info.column.id,
    }),
  ];
};

const TableItemBody = ({ text }: { text: string }) => {
  return (
    <Typography
      variant='regular'
      className='text-text-primary h-[60px] bg-white flex items-center first:pl-[20px]'
    >
      {text}
    </Typography>
  );
};

const TableItemHeader = ({ text }: { text: string }) => {
  return (
    <Typography
      variant='regular'
      className='text-text-primary text-start h-[60px] bg-white items-center flex first:pl-[20px]'
    >
      {text}
    </Typography>
  );
};
