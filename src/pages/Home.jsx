import React, { useState } from 'react';
import profileImage from '../assets/1695982209520.jpg';
export const Home = () => {
  const [isWaving, setIsWaving] = useState(false);

  const handleWave = () => {
    setIsWaving(true);
    setTimeout(() => {
      setIsWaving(false);
    }, 600); 
  };

  return (
    <div className="h-full pt-36 flex flex-col items-center" id='Home'>
      <div className="flex flex-col items-center text-center">
        <div className='flex'>
          <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold mt-4 flex items-center justify-center">
          Hi, I'm <span className='ml-3 '>Pankaj</span>
        </h1>
        <span 
          onClick={handleWave} 
          className={`mt-2 inline-block origin-[70%_70%] text-3xl sm:text-4xl md:text-6xl cursor-pointer ${isWaving ? 'animate-wave' : ''}`}
        >
          👋
        </span>
        </div>
        <img 
          src={profileImage} 
          alt="Profile" 
          className="h-32 mt-14 rounded-full border-4 border-transparent hover:border-[#eff1ed] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </div>
      <div className="flex flex-col text-slate-300 items-center text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
        <div className="space-y-2">
          <p className="text-base mt-8 sm:text-lg md:text-md">
            👨‍💻 Full Stack Developer passionate about coding and
          </p>
          <p className="text-base sm:text-lg md:text-md">
            technology. I enjoy building robust applications and
          </p>
          <p className="text-base sm:text-lg md:text-md">
            exploring new tech trends. Always eager to learn and
          </p>
          <p className=" mt-96 text-base sm:text-lg md:text-">
            Let’s build something amazing together! 🚀
          </p>
        </div>
        <div className="box-border  p-4 mt-8 border-2 cursor-pointer border-gray-300 rounded-lg shadow-md hover:bg-white transition duration-300 ease-in-out w-28 h-13 text-slate-100 hover:text-black flex items-center justify-center" 
        id = "About"
        >
                        <a href="#Resume" className="font-semibold " >Resume</a>
                    </div>
      </div>
    </div>
  );
};
