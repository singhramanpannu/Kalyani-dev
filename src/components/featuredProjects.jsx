import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/Banner-Images/image-1.jpg';
import img2 from '../assets/Banner-Images/Image-2.jpg';
import img3 from '../assets/Banner-Images/Image-3.jpg';
import img4 from '../assets/Banner-Images/Image-4.jpg';
import img5 from '../assets/Banner-Images/Image-5.jpg';
import img6 from '../assets/Banner-Images/Image-6.jpg';
import '../css/fonts.css';

const projects = [
  { name: 'Modern Interior', image: img1 },
  { name: 'Rustic Living', image: img2 },
  { name: 'Urban Office', image: img3 },
  { name: 'Luxury Lounge', image: img4 },
  { name: 'Luxury Lounge', image: img5 },
  { name: 'Luxury Lounge', image: img6 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function FeaturedProjects() {
  return (
    <section className="w-full px-8 md:px-20 py-16 bg-white flex flex-col justify-center align-center">
      <motion.div
        className="flex align-center justify-between w-full px-9 py-4 h-[300px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="flex flex-col w-[60%]" custom={1} variants={fadeInUp}>
          <h2 className="text-3xl md:text-5xl montserrat-regular font-semibold text-gray-800 mb-4 text-left">
            Featured Projects
          </h2>
          <p className="text-[1.2rem] h-[90%] montserrat-light text-gray-500">
            Each project that we undertake has a story to tell. One that is actualised by our expertise,
            aesthetics, and attention to detail. While each project has the inimitable EA signature, they
            are all distinctive in their inception, design, and execution, all bearing a version of luxury
            that's unique to that space.
          </p>
        </motion.div>

        <motion.div className="flex w-[30%] py-4 px-2 justify-center" custom={2} variants={fadeInUp}>
          <button className="h-[70px] w-[50%] border-2 border-gray-800 px-6 py-2 text-gray-800 uppercase tracking-wide font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 montserrat-light">
            See More
          </button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full h-[600px] flex flex-col mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 1}
            variants={fadeInUp}
          >
            <div
              className="bg-cover bg-center h-[550px] w-full  transition-transform duration-300 "
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="py-4 text-lg font-medium text-gray-900 text-center border-t flex justify-between roboto-mono-light">
              {project.name}
              <span className="text-sm text-gray-500">Check out</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
