import { useEffect, useRef } from 'react';

export const useAutoFocus = () => {
  const fieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (fieldRef.current) fieldRef.current.focus();
  }, []);
  return fieldRef;
};
