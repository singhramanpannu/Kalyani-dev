import React from 'react';
import { Link,useLocation } from 'react-router-dom';

export default function AboutUsButton(){
    const location = useLocation();

    return(
    <section className='w-full bg-white h-[60px] flex justify-center align-center '>
    <div className='w-[12%] border-2 border-gray-700 h-30px bg-white hover:bg-black flex justify-center align-center]'>
    <NavLink name='About us' path ='/about'></NavLink>
    </div>
    </section>
    );

}

const NavLink = ({ name, path}) => (
  <Link
    to={path}
    className={`transition-colors text-[1.2rem] duration-200
  
         w-full
         flex
         justify-center
         text-center
         align-center
         py-3.5
         px-1
         uppercase
         text-black
         hover:text-white
         `}
  >
    {name}
  </Link>
);