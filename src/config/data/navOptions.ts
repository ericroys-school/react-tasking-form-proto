import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosHome } from 'react-icons/io';
import { StyledNavLink } from '../../lib/types/styledNavLink';

export const links: StyledNavLink[] = [
  { name: 'About Us', href: '/about', icon: FaRocket },
  { name: 'Home', href: '/', icon: IoIosHome },
];

export const footerLinks: StyledNavLink[] = [
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/eric-roys-8689524',
    icon: FaLinkedin,
  },
  { name: 'Email', href: 'mailto:eric.roys@gmail.com', icon: MdEmail },
  {
    name: 'GitHub',
    href: 'https://github.com/ericroys-school?tab=repositories',
    icon: FaGithub,
  },
];
