import React from 'react';

const Biography = () => {
  return (
    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
      <h2 className='mb-4 text-3xl md:text-2xl font-bold text-primary dark:text-primaryDark'>Biography</h2>
      <p className='font-medium text-xl'>
        {`Hi, I'm Jon (Sebas) Osorio, a full-stack software engineer with a passion for creating beautiful, functional,
        and user-centered digital experiences. With over 3 years of experience in the field. I am always looking for
        new and innovative ways to bring my clients' visions to life.`}
      </p>
      <p className='my-4 font-medium text-xl'>
        {`I believe that design is about more than just making things look pretty - it's about solving problems and
        creating intuitive, enjoyable experiences for users.`}
      </p>
      <p className='font-medium text-xl'>
        {`Whether I'm working on a website, mobile app, or
        other digital product, I bring my commitment to design excellence and user-centered thinking to
        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.`}
      </p>
    </div>
  );
};

export default Biography;
