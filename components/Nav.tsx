import { navLinks } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <Image
            src="/images/header-logo.svg"
            alt="logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/icons/hamburger.svg"
            alt="humburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
