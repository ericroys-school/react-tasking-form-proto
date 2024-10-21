import { IoIosAddCircleOutline } from 'react-icons/io';
import { ButtonIconText } from './buttonIconText';
import { btnclass, defaultStyleIconText } from '../styling/styles';

export type Props = {
  type: string;
  text?: string;
};

export const ButtonTextFactory = ({ type, text = '' }: Props) => {
  if (type === 'add') {
    return ButtonIconText({
      ico: IoIosAddCircleOutline,
      btnText: text,
      btnClass: btnclass,
      icoClass: defaultStyleIconText.iconClass,
      icoTxtClass: defaultStyleIconText.txtClass,
      size: defaultStyleIconText.size,
    });
  }
};

// let factory = ButtonFactory({type: 'add'});
