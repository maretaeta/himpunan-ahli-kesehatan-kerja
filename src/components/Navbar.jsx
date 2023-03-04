import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import logo from '../assets/pakki.png'

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen z-20 bg-zinc-200 justify-between fixed drop-shadow-lg px-16 py-3'>
      <div className='flex justify-between items-center w-full'>
        <div className='w-20'>< img src={logo} alt="" /></div>
        <div>
          <ul className='hidden md:flex font-bold'>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to="support" smooth={true} offset={-50} duration={500}>News</Link></li>
            <li><Link to="event" smooth={true} offset={-100} duration={500}>Event</Link></li>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3 bg-green-500 border-green-500'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>
      <ul className={!nav ? 'hidden' : ' bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>News</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Event</Link></li>
         

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-green-500 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
