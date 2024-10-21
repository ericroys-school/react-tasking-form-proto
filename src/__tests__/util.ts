import { readFileSync } from 'node:fs';

const dir = import.meta.dirname;

/** Get the file contents from the current dir + passed
 * in path and return as string
 */
export const getFile = (path: string): string => {
  return readFileSync(dir + '/' + path, { encoding: 'utf8' });
};
