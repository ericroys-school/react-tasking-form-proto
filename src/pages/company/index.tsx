import { inputclass } from '../../components/styling/styles';
import { CompanyList } from '../../components/company/companyList';
import { useState } from 'react';
import StyledIconText from '../../lib/styledIconText';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const CompanyPage = () => {
  //use 2x use states to have search results only display
  //after press search otherwise too many queries to server
  const [s, setS] = useState<string>('');
  const [t, setT] = useState<string>('______');

  return (
    <section className='flex flex-col items-center w-full justify-center'>
      <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
        <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
          Company
        </h1>
        <div
          id='search'
          className='mt-10 w-3/4 rounded-md flex justify-between'>
          <input
            className={inputclass + ' text-center mr-2'}
            onChange={(e) => setS(e.currentTarget.value)}
            placeholder='Enter search name here'></input>
          <StyledIconText
            icon={IoSearch}
            text=''
            onClick={() => setT(s)}
            size={30}
            iconClass='drop-shadow-custom-sm-blue flex items-center'
          />
        </div>
        <span>Not finding what you are looking for?</span>
        <Link
          className='text-blue font-bold '
          to={'/comcreate'}>{`-> Create Company <-`}</Link>
      </article>
      <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
        <CompanyList search={t} />
      </article>
    </section>
  );
};
