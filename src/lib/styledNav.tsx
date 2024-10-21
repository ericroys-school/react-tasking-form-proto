import { NavLink } from 'react-router-dom';
import StyledIcon from '../lib/styledIcon';
import { LinkProps } from '../types/styledNavLink';

export const StyledNav = ({ links }: LinkProps) => {
  return (
    <>
      <ul className='flex  flex-wrap mr-4'>
        {links.map((n) => {
          return (
            <li key={n.name} className='flex pr-5'>
              <StyledIcon
                icon={n.icon}
                className='fill-redish inline mb-1 ml-4 mr-2 translate-y-1 drop-shadow-custom-sm-blue'
              />
              <NavLink
                className='font-bold pl-2 hover:shadow-md hover:shadow-blue rounded-md text-black bg-white pr-2'
                to={n.href}>
                <span className='drop-shadow-custom-m-gray'>
                  {n.name.toString()}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
