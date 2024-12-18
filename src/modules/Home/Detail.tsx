'use client';

import { Typography } from '@components/Typography';
import { InvestorId } from '@/src/types';
import { getInvestorDetailsById } from '@/src/api/getInvestorDetail';
import { useQuery } from 'react-query';

interface Props {
  appId: InvestorId;
  onClose: () => void;
}

export const Detail = ({ onClose, appId }: Props) => {
  const { data, isFetching } = useQuery(['investorDetails', appId], () =>
    getInvestorDetailsById(appId),
  );

  return (
    // TODO: Move header height(52px) to const
    <div className='drawer fixed right-0 h-[100dvh] bg-color2 p-[30px] flex flex-col gap-[10px] min-w-[600px] top-[52px]'>
      <Typography variant='heading-4' className='text-tertiary'>
        App overview
      </Typography>

      {isFetching ? <div>loading</div> : <div>{data?.name}</div>}
      {/* TODO: Add Icon */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className='absolute top-[20px] right-[20px] text-tertiary w-fit cursor-pointer'
        onClick={onClose}
      >
        X
      </div>
    </div>
  );
};
