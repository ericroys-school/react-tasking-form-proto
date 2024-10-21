import { StyledIconText } from '../types/styledIconTxt';
import IconWithText from './styledIconText';

export type Props = {
  buttons: StyledIconText[];
};

export const ButtonBar = ({ buttons }: Props) => {
  return (
    <div className='flex flex-col items-center w-full justify-center'>
      <div
        className='flex mt-3 rounded-md drop-shadow-custom-m-gray items-center justify-center text-center 
        mr-1 p-2 '>
        {buttons?.map((b, idx) => (
          <IconWithText
            key={idx}
            icon={b.icon}
            iconClass={b.iconClass}
            text={b.text}
            txtClass={b.txtClass}
            onClick={b.onClick}
            size={b.size}
          />
        ))}
      </div>
    </div>
  );
};
