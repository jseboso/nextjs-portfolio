import React from 'react';
import Image from 'next/image';
import secondPic from "../../../public/images/profile/JSOHeadshot2.jpg";

const ProfilePicture = () => {
  return (
    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
      bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
      <Image
        src={secondPic}
        alt="Sebas Osorio"
        className='w-full h-auto rounded-2xl'
        priority
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ProfilePicture;
