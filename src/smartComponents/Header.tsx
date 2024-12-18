import Image from 'next/image';
import { routes } from '@consts/routes';
import { Route } from '@cusomTypes/index';
import classNames from 'classnames';
import { Typography } from '@components/Typography';

export const Header = () => {
  return (
    <div className='h-[52px] px-[24px] flex justify-between items-center bg-text-link sticky top-0'>
      <div className='flex h-full items-center'>
        <div className='flex relative w-[42px] h-full min-w-[80px]'>
          <Image src='/logo.png' alt='Logo' fill className='object-contain max-w-[42px]' />
        </div>
        {routes.map((route) => (
          <Item route={route} isActive={route.id === 'apps'} key={route.id} />
        ))}
      </div>

      <div className='flex gap-[12px] items-center'>
        <div className='flex relative w-[20px] h-[20px] min-w-[20px] min-h-[20px] rounded-full'>
          <Image src='/logo.png' alt='User Logo' fill className='object-cover' />
        </div>
        {/* TODO: Add Dropdown */}
        <Typography variant='bold'>Security-Demo 2 </Typography>

        {/* TODO: Add icon & hover state */}
        <Typography
          variant='bold'
          className='w-[16px] h-[16px] bg-white flex items-center justify-center rounded-full'
        >
          ?
        </Typography>
      </div>
    </div>
  );
};

const Item = ({ route, isActive }: { route: Route; isActive: boolean }) => {
  return (
    <div className='flex flex-col h-full cursor-pointer group'>
      <Typography
        variant={isActive ? 'emphasis' : 'regular'}
        className={classNames('grow px-[24px] items-center flex group-hover:opacity-50')}
      >
        {route.title}
      </Typography>
      {isActive && <div className='w-full h-[5px] bg-white' />}
    </div>
  );
};
