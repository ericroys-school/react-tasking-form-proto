import { footerLinks } from '../config/data/navOptions';
import { StyledNav } from '../lib/styledNav';

export const Footer = () => {
  return (
    <footer className=' bg-blue text-center h-35 w-full'>
      <div className='flex justify-center'>
        <StyledNav links={footerLinks} />
      </div>
    </footer>
  );
};
