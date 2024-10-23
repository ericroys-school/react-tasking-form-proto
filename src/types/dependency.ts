export type DependencyInjector = (
  dependencies: { [key: string]: symbol },
  Component: React.ElementType
) => any;

export type ResolveDependencies = {
  [key: string]: object;
};
