import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsPencilSquare } from 'react-icons/bs';
import { btnclass, defaultStyleIconText } from '../styling/styles';
import { ButtonIcon } from './buttonIcon';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MouseEventHandler } from 'react';
import { CiSaveUp1 } from 'react-icons/ci';
import { ImCancelCircle } from 'react-icons/im';
import { IconType } from 'react-icons';
import { ButtonIconText } from './buttonIconText';

export type Props = {
  type: ButtonFlavor;
  btnType?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  text?: string;
};

type ButtonFlavor = 'add' | 'edit' | 'delete' | 'search' | 'save' | 'cancel';
type ButtonType = 'submit' | 'reset' | 'button';
type ButtonBase = {
  type: ButtonType;
  btnClass: string;
  icoClass: string;
  size: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  btnText?: string;
  icoTextClass?: string;
};

const buildBase = (base: ButtonBase, icon: IconType) => {
  return base.btnText
    ? ButtonIconText({
        ico: icon,
        ...base,
      })
    : ButtonIcon({
        ico: icon,
        ...base,
      });
};

export const ButtonFactory = ({
  type,
  btnType = 'button',
  onClick,
  text,
}: Props) => {
  const defaultBtn = {
    type: btnType,
    btnClass: btnclass,
    icoClass: defaultStyleIconText.iconClass,
    size: defaultStyleIconText.size,
    onClick: onClick,
    btnText: text,
    icoTextClass: defaultStyleIconText.txtClass,
  };

  if (type === 'add') {
    return buildBase({ ...defaultBtn, btnText: text }, IoIosAddCircleOutline);
  }
  if (type === 'edit') {
    return buildBase({ ...defaultBtn, btnText: text }, BsPencilSquare);
  }

  if (type === 'delete') {
    return buildBase({ ...defaultBtn, btnText: text }, FaRegTrashAlt);
  }

  if (type === 'search') {
    return buildBase({ ...defaultBtn, btnText: text }, IoSearchOutline);
  }
  if (type === 'save') {
    return buildBase({ ...defaultBtn, btnText: text || 'Save' }, CiSaveUp1);
  }

  if (type === 'cancel') {
    return buildBase(
      { ...defaultBtn, btnText: text || 'Cancel' },
      ImCancelCircle
    );
  }
};
