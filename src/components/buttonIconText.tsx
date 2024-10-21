import { IconType } from 'react-icons';
import IconWithText from '../lib/styledIconText';
import { FaCircle } from 'react-icons/fa';

export type Props = {
  btnText?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  btnClass?: string;
  icoClass?: string;
  icoTxtClass?: string;
  ico?: IconType;
  size?: number;
};

export const ButtonIconText = ({
  type = 'button',
  disabled = false,
  btnClass,
  ico,
  icoClass,
  icoTxtClass,
  btnText,
  size,
}: Props) => {
  return (
    <div className='flex justify-center'>
      <button disabled={disabled} className={btnClass} type={type}>
        <IconWithText
          size={size}
          icon={ico ? ico : FaCircle}
          iconClass={icoClass}
          text={btnText ? btnText : ''}
          txtClass={icoTxtClass}
        />
      </button>
    </div>
  );
};
