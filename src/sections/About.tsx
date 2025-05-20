import * as React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Award, Home, Users } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const stats = [
    { icon: <Home size={28} />, value: 300, text: 'Projects Completed', suffix: '+' },
    { icon: <Users size={28} />, value: 200, text: 'Happy Clients', suffix: '+' },
    { icon: <Award size={28} />, value: 15, text: 'Industry Recognition', suffix: '' },
  ];

  const team = [
    {
      name: 'Dimpu Baruah',
      role: 'Founder',
      image: '/images/Screenshot 2025-05-15 180225.png',
      bio: 'Popular Youtuber and Entrepreneur. With over 4+ years of experience, Dimpu Baruah brings a visionary approach to every project.',
    },
    {
      name: 'Kingkar Choudhury',
      role: 'Co-Founder & Managing Director',
      image: '/images/Screenshot 2025-05-15 175532.png',
      bio: 'Kingkar Choudhury specializes in creating functional spaces that blend beauty with practicality.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            About <span className="text-amber-500">Us</span>
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
            Room Editors was founded in 2022 by Dimpu Baruah and his talented team with a shared passion for thoughtful, impactful design. 
            
            We believe that well-designed spaces have the power to transform how people feel, interact, and live.

Our team blends creativity, technical expertise, and personal attention to craft spaces that are both aesthetically beautiful and highly functional. Whether residential or commercial, each project is approached with a commitment to timeless design principles and innovative solutions tailored to our clients' unique styles and needs.

In just a few years, Room Editors has built a strong reputation for delivering results that not only meet but exceed expectations. We're here to turn your vision into a space that truly feels like yours..
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative" data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg"
              alt="Interior Design Team"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-amber-400 rounded-full hidden md:block"></div>
          </div>
          <div>
            <h3
              className="text-2xl font-serif font-bold text-gray-800 mb-4"
              data-aos="fade-left"
            >
              Our Design Philosophy
            </h3>
            <p
              className="text-gray-600 mb-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              We believe that exceptional interior design begins with understanding our clients' visions and lifestyles. Our approach combines creativity, functionality, and attention to detail to create spaces that are both beautiful and livable.
            </p>
            <p
              className="text-gray-600 mb-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              From concept to completion, we collaborate closely with our clients, ensuring that each space reflects their unique personality while exceeding their expectations.
            </p>
            <a
              href="#services"
              className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center transform hover:translate-y-[-5px] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-amber-500 mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>

        <h3
          className="text-2xl font-serif font-bold text-gray-800 text-center mb-6"
          data-aos="fade-up"
        >
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-amber-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;