export const AboutPage = () => {
  return (
    <section className='text-center mt-6 flex flex-col align-middle '>
      <h1 className='text-4xl font-bold drop-shadow-abc'>About Us</h1>
      <article className='flex-col w-2/3 self-center drop-shadow-md grow mb-auto'>
        <p className='mt-6 text-pretty drop-shadow-xl'>
          This is an excercise in full stack development using React front-end
          with GraphQL/Node server and Aura graph database.
        </p>
        <p className='mt-6 text-pretty '>
          The project uses Typescript for more deliberate understanding and
          adding an additional level of error check. Zod is used for further
          validation for form submission.
        </p>
        <p className='mt-6 text-pretty '>
          As this is a proto-type, currently, more effort is expended on
          function over form. Ideally, the monotony of form building would be
          more dynamic, but for project timing, this will need to be done at a
          later date.
        </p>
      </article>
    </section>
  );
};
