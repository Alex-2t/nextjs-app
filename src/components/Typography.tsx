import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children: React.ReactNode;
  variant: 'regular' | 'bold' | 'emphasis' | 'heading-3' | 'heading-4';
}

export const Typography = (props: Props) => {
  return (
    <p
      className={twMerge(
        classNames(props.className, 'text-[14px] leading-5', {
          'font-medium': props.variant === 'emphasis',
          'font-normal': props.variant === 'regular',
          'font-semibold': props.variant === 'bold',
          'font-medium text-[20px] leading-[25px]': props.variant === 'heading-3',
          'font-medium text-[16px] leading-[23px]': props.variant === 'heading-4',
        }),
        props.className,
      )}
    >
      {props.children}
    </p>
  );
};
