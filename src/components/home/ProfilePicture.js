import React from 'react';
import Image from 'next/image';
import secondPic from "../../../public/images/profile/JSOHeadshot2.jpg";
import GradientBorderCard from '@/components/GradientBorderCard';

const ProfilePicture = () => {
  return (
    <GradientBorderCard
      rounded="rounded-2xl"
      className="col-span-3 xl:col-span-4 md:order-1 md:col-span-8"
      innerClassName="p-8"
    >
      <Image
        src={secondPic}
        alt="Sebas Osorio"
        className='w-full h-auto rounded-2xl'
        priority
        unoptimized
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </GradientBorderCard>
  );
};

export default ProfilePicture;
