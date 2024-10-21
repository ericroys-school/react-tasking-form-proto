import { errclass } from '../styling/styles';

export type Props = {
  error?: string;
};
export const ErrorPage = ({ error }: Props) => {
  return (
    <section className='flex flex-col items-center w-full justify-center mt-10'>
      <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
        It's a sad day
      </h1>
      <h4 className='text-2xl font-bold drop-shadow-custom-m-gray'>
        Something went wrong in the handling of your request.
      </h4>
      <div className={errclass}>{error || ''}</div>
    </section>
  );
};
