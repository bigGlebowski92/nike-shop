'use client';

import Image from 'next/image';
import React from 'react';

type ShoeCardProps = {
  imageURL: {
    bigShoe: string;
  };
  changeBigShoeImage: any;
  bigShoeImage: string;
};
const ShoeCard = ({
  imageURL,
  changeBigShoeImage,
  bigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImage !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imageURL.bigShoe
          ? 'border-coral-red'
          : 'border-black-100'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-primary sm:w-40 sm:h40 rounded-xl max-sm:p-4">
        <Image src={imageURL.bigShoe} alt="shoe" width={127} height={103} />
      </div>
    </div>
  );
};

export default ShoeCard;
