import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsPencilSquare } from 'react-icons/bs';
import { btnclass, defaultStyleIconText } from '../styling/styles';
import { ButtonIcon } from './buttonIcon';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MouseEventHandler } from 'react';
import { CiSaveUp1 } from 'react-icons/ci';
import { ImCancelCircle } from 'react-icons/im';

export type Props = {
  type: 'add' | 'edit' | 'delete' | 'search' | 'save' | 'cancel';
  btnType?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const ButtonFactory = ({ type, btnType = 'button', onClick }: Props) => {
  const defaultBtn = {
    type: btnType,
    btnClass: btnclass,
    icoClass: defaultStyleIconText.iconClass,
    size: defaultStyleIconText.size,
    onClick: onClick,
  };
  if (type === 'add') {
    return ButtonIcon({
      ico: IoIosAddCircleOutline,
      ...defaultBtn,
    });
  }
  if (type === 'edit') {
    return ButtonIcon({
      ico: BsPencilSquare,
      ...defaultBtn,
    });
  }

  if (type === 'delete') {
    return ButtonIcon({
      ico: FaRegTrashAlt,
      ...defaultBtn,
    });
  }

  if (type === 'search') {
    return ButtonIcon({
      ico: IoSearchOutline,
      ...defaultBtn,
    });
  }
  if (type === 'save') {
    return ButtonIcon({
      ico: CiSaveUp1,
      ...defaultBtn,
    });
  }

  if (type === 'cancel') {
    return ButtonIcon({
      ico: ImCancelCircle,
      ...defaultBtn,
    });
  }
};
