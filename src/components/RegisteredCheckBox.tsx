import { UseFormRegisterReturn } from 'react-hook-form';
import { inputclass, lblClassDark } from '../styling/styles';

export type Props = {
  register: UseFormRegisterReturn;
  className?: string;
  label?: string;
  labelClassName?: string;
  value?: boolean | undefined;
};
export const RegisteredCheckBox = ({
  register,
  className,
  label,
  labelClassName,
  value,
}: Props) => {
  const defaultSpace = ' mr-2 ';
  let iclass = className ? className : inputclass;
  const lclass = labelClassName ? labelClassName : lblClassDark;
  if (label) iclass += defaultSpace;
  return (
    <div>
      <input
        type='checkbox'
        id={register.name}
        className={iclass}
        defaultChecked={value}
        {...register}
      />
      {label ? (
        <label className={lclass} htmlFor={register.name}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
