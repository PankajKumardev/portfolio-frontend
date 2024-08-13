import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#08090A] p-4 fixed top-0 left-0 w-full z-50 text-[#F8EDED] md:bg-opacity-30 backdrop-blur-md ">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl mt-4 md:pb-2" >
        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-8 text-xl xl:text-3xl flex-grow justify-center ">
          <a
            className="hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="#Home"
            cursor-pointer
          >
            Home
          </a>
          <a
            className="hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="#About"
            cursor-pointer
          >
            About
          </a>
          <a
            className="hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="#Project"
            cursor-pointer
          >
            Projects
          </a>
          <a
            className="hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="#Skill"
            cursor-pointer
          >
          Skills
          </a>
          <a
            className="hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            href="#Contact"
            cursor-pointer
          >
            Contact </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          cursor-pointer
        >
          ☰
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#08090A] p-4 cursor-pointer`}>
        <a
          className="block text-xl mb-4 hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="#Home"
        >
          Home
        </a>
        <a
          className="block text-xl mb-4 hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="#About"
        >
          About
        </a>
        <a
          className="block text-xl mb-4 hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="#Project"
        >
          Projects
        </a>

        <a
          className="block text-xl mb-4 hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="#Skill"
        >
         Skills
        </a>
    
        <a
          className="block text-xl hover:text-slate-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="#Contact"
        >
        Contact
        </a>
      </div>
    </div>
  );
};
