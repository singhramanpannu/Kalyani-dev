import React from 'react';
import img1 from '../assets/Banner-Images/image-1.jpg'

const services = [
  {
    id: 1,
    title: 'Design & Engineering',
    image: img1
  },
  {
    id: 2,
    title: 'Manufacturing',
    image:img1
  },
  {
    id: 3,
    title: 'Installation & Support',
    image: img1
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full min-h-screen py-20 flex flex-col items-center bg-white ">
      {/* Heading */}
      <div className="w-full mb-16 mt-7 flex justify-center">
        <h1 className="text-6xl font-bold text-center montserrat-bold">
          What We Do
        </h1>
      </div>

      {/* 3-Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 md:px-20 w-full ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center text-center h-[550px]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[500px]
               object-cover"
            />
            <h3 className="text-2xl text-[1.2rem] mt-2 montserrat-regular  text-left">{service.title}</h3>
          </div>
        ))}
      </div> 
    </section>
  );
}
