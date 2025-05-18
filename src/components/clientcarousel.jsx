import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/logo/sample1.jpg';
import img2 from '../assets/logo/sample2.png';
import img3 from '../assets/logo/sample3.jpg';
import img4 from '../assets/logo/sample4.png';
import img5 from '../assets/logo/sample6.png';
import img6 from '../assets/logo/sample7.avif';

export default function ClientCarousel() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  const partnerLogos = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="w-full bg-white text-black flex flex-col items-center py-12">
      <div className="w-full max-w-screen-xl px-6 mb-10">
        <h2 className="text-4xl font-semibold montserrat-regular text-center">Our Trusted Partners</h2>
      </div>

      <div className="w-full max-w-screen-xl px-6">
        <Slider {...settings}>
          {partnerLogos.map((src, index) => (
            <div
              key={index}
              className=" h-40 px-6 bg-gray-300 border-2 border-black flex items-center justify-center px-auto py-auto " // fixed height
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-28 object-cover" // consistent height
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
