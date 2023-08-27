import Image from 'next/image';
import React from 'react';

type ButtonProps = {
  label: string;
  iconURL?: string;
};

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="button-icon"
          width={20}
          height={20}
          className="ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
