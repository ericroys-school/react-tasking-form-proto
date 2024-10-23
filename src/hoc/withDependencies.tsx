import { ComponentProps, ElementType } from 'react';
import { diContainer } from '../dependencies';
import { ResolveDependencies } from '../types/dependency';

export const WithDependency = (
  Component: ElementType,
  dependencies: { [key: string]: symbol }
) => {
  const resdeps: ResolveDependencies = {};
  Object.keys(dependencies).forEach((k) => {
    const dk = Object.getOwnPropertyDescriptor(dependencies, k);
    if (dk?.value) {
      Object.defineProperty(resdeps, k, {
        value: diContainer.get(dk.value),
        enumerable: true,
      });
    } else {
      throw new Error(`Dependency ${k} not found`);
    }
  });

  return (props: ComponentProps<typeof Component>) => (
    <Component {...props} {...resdeps} />
  );
};
