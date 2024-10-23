import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsPencilSquare } from 'react-icons/bs';
import { btnclass, defaultStyleIconText } from '../styling/styles';
import { ButtonIcon } from './buttonIcon';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MouseEventHandler } from 'react';

export type Props = {
  type: string;
  btnType?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ButtonFactory = ({ type, btnType = 'button', onClick }: Props) => {
  if (type === 'add') {
    return ButtonIcon({
      type: btnType,
      ico: IoIosAddCircleOutline,
      btnClass: btnclass,
      icoClass: defaultStyleIconText.iconClass,
      size: defaultStyleIconText.size,
      onClick: onClick,
    });
  }
  if (type === 'edit') {
    return ButtonIcon({
      type: btnType,
      ico: BsPencilSquare,
      btnClass: btnclass,
      icoClass: defaultStyleIconText.iconClass,
      size: defaultStyleIconText.size,
      onClick: onClick,
    });
  }

  if (type === 'delete') {
    return ButtonIcon({
      type: btnType,
      ico: FaRegTrashAlt,
      btnClass: btnclass,
      icoClass: defaultStyleIconText.iconClass,
      size: defaultStyleIconText.size,
      onClick: onClick,
    });
  }

  if (type === 'search') {
    return ButtonIcon({
      type: btnType,
      ico: IoSearchOutline,
      btnClass: btnclass,
      icoClass: defaultStyleIconText.iconClass,
      size: defaultStyleIconText.size,
      onClick: onClick,
    });
  }
};

// let factory = ButtonFactory({type: 'add'});
