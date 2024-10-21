import { IconType } from 'react-icons';
import { FaCircle } from 'react-icons/fa';
import StyledIcon from '../lib/styledIcon';
import { MouseEventHandler } from 'react';

export type Props = {
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  btnClass?: string;
  icoClass?: string;
  ico?: IconType;
  size?: number;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ButtonIcon = ({
  type = 'button',
  disabled = false,
  btnClass,
  ico,
  icoClass,
  size,
  onClick,
}: Props) => {
  return (
    <div className='flex justify-center'>
      <button
        disabled={disabled}
        className={btnClass}
        type={type}
        onClick={onClick}>
        <StyledIcon
          size={size}
          icon={ico ? ico : FaCircle}
          className={icoClass}
        />
      </button>
    </div>
  );
};
