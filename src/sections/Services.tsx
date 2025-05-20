import * as React from 'react';
import { PenTool, Layout as LayoutPlanSplit, Sofa, Palette, Building2, Home, Tv, Box, Boxes } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Tv size={36} />,
      title: 'TV Unit Design',
      description: 'Custom TV unit designs that blend functionality with modern aesthetics, tailored to your space and storage needs.'
    },
    {
      icon: <Box size={36} />,
      title: 'Semi Modular Design',
      description: 'Flexible semi-modular solutions that combine custom and pre-fabricated elements for a perfect balance of form and function.'
    },
    {
      icon: <Boxes size={36} />,
      title: 'Full Modular Design',
      description: 'Completely customizable modular solutions designed to maximize space utilization and adapt to your evolving needs.'
    },
    {
      icon: <PenTool size={36} />,
      title: 'Concept Design',
      description: 'We create custom design concepts tailored to your vision, lifestyle, and space requirements.'
    },
    {
      icon: <LayoutPlanSplit size={36} />,
      title: 'Space Planning',
      description: 'Strategic arrangement of fixtures, furniture, and features to maximize your space efficiently.'
    },
    {
      icon: <Sofa size={36} />,
      title: 'Furniture Selection',
      description: 'Curated selection of furniture pieces that complement your space and reflect your personal style.'
    },
    {
      icon: <Palette size={36} />,
      title: 'Color Consultation',
      description: 'Expert guidance on color schemes that create the perfect atmosphere for your space.'
    },
    {
      icon: <Building2 size={36} />,
      title: 'Commercial Design',
      description: 'Specialized design services for offices, retail spaces, restaurants, and other commercial venues.'
    },
    {
      icon: <Home size={36} />,
      title: 'Complete Home Design',
      description: 'Comprehensive design service covering every aspect of your residential space from concept to completion.'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Our <span className="text-amber-500">Services</span>
          </h2>
          <div
            className="h-1 w-20 bg-amber-400 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We offer a comprehensive range of interior design services to transform your space into a beautiful, functional environment that reflects your personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-amber-500 mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;