'use client';

import { Table } from '@components/Table';
import { Typography } from '@components/Typography';
import { useColumns } from './consts';
import { getInvestories } from '@/src/api/getInvestories';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { inventoryListSelector, selectedInvetorAtom, setInvestorCb } from '@/src/store/investors';
import { useEffect } from 'react';
import { Detail } from './Detail';

export const Home = () => {
  const columns = useColumns();

  const investors = useRecoilValue(inventoryListSelector);
  const [selectedId, setSelectedId] = useRecoilState(selectedInvetorAtom);
  const setInvestors = useRecoilCallback(setInvestorCb);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getInvestories();
      setInvestors(data);
    };

    fetchData();
  }, []);

  // ! TODO: Handle Loading state
  return (
    <>
      <div className='flex flex-col gap-[27px]'>
        <Typography variant='heading-3' className='text-tertiary'>
          App Inventory
        </Typography>
        <div className='users-tabel'>
          <Table
            // @ts-expect-error TODO: Find out later how to define react-table columns interface
            columns={columns}
            data={investors}
            onRowClick={(row) => {
              setSelectedId(row.original.appId);
            }}
          />
        </div>
      </div>
      {/* TODO: Add animation */}
      {selectedId !== null && <Detail onClose={() => setSelectedId(null)} appId={selectedId} />}
    </>
  );
};
