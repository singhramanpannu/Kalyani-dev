import React from "react";
import { Link,useLocation } from 'react-router-dom';

export default function FollowUs(){
    return(
        <section className="w-full h-[40vh] bg-white flex justify-between px-24 py-10">
        <h1>Follow us on Instagram</h1>
        <div className='w-[12%] h-[50px] border-2 border-gray-700 h-30px bg-white hover:bg-black flex justify-center items-center]'>
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
         items-center
         
         uppercase
         text-black
         hover:text-white
         `}
  >
    {name}
  </Link>
);