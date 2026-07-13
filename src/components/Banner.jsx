import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full block relative overflow-hidden">
      <Image
        src="/banner.jfif"
        alt="TAHDITH - The Organic Way of Life Banner"
        width={1920}
        height={640}
        priority 
        sizes="100vw"
        // 'h-auto' keeps the vertical proportions intact relative to the width, preventing top/bottom cropping
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Banner;