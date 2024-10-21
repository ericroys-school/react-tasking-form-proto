import { UseFormRegisterReturn } from 'react-hook-form';
import { inputclass } from '../styling/styles';
import { useEffect, useRef } from 'react';

export type Props = {
  register: UseFormRegisterReturn;
  className?: string;
};
export const RegisteredInput = ({ register, className }: Props) => {
  const fieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (fieldRef.current) fieldRef.current.focus();
  }, []);

  let { ref, ...clean } = register;

  return (
    <input
      ref={fieldRef}
      id={register.name}
      className={className ? className : inputclass}
      {...clean}
    />
  );
};
