import { StyledIcon } from './styledIcon.js';

export type StyledIconText = StyledIcon & {
  text: string;
  txtClass?: string;
  onClick?: <T>() => T | void | Promise<void>;
};
