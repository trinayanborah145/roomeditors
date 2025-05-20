import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Modern Living Spaces',
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      title: 'Luxury Interior Design',
    },
    {
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      title: 'Elegant Solutions',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Sliding background images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Transforming Spaces Into <br />
          <ReactTyped
            strings={['Beautiful Experiences', 'Timeless Designs', 'Dream Interiors']}
            typeSpeed={80}
            backSpeed={50}
            loop
            className="text-amber-400"
          />
        </h1>
        <p 
          className="text-white text-lg md:text-xl max-w-2xl mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We create unique interiors that tell your story through thoughtful design and meticulous attention to detail.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-amber-400 text-gray-900 font-medium rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Our Work
          </a>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-amber-400' : 'bg-white bg-opacity-60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animation-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;