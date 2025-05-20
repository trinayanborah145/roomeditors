import * as React from 'react';
import Slider from 'react-slick';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Deeplina Borgohain',
      position: 'Homeowner',
      quote: 'Working with Room Editorss was a dream come true. They transformed our outdated living space into a modern, functional home that perfectly reflects our style and needs.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
    {
      id: 2,
      name: 'Rahul Aggarwal',
      position: 'Restaurant Owner',
      quote: 'The team at Room Editorss understood our vision immediately and brought it to life beyond our expectations. Our customers constantly compliment the ambiance they created.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
      id: 3,
      name: 'Prachi Choudhury',
      position: 'Office Owner',
      quote: 'Our office redesign has dramatically improved both productivity and employee satisfaction. Room Editorss created a space that\'s both functional and inspiring.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    fade: true,
    arrows: false,
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-amber-400 transition-colors duration-300" />
    ),
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Client <span className="text-amber-500">Testimonials</span>
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
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="outline-none">
                <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm text-center">
                  <div className="mb-6 flex justify-center">
                    <Quote className="text-amber-400" size={48} />
                  </div>
                  <p className="text-gray-700 text-lg italic mb-8">"{testimonial.quote}"</p>
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 object-cover rounded-full mb-4"
                    />
                    <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                    <p className="text-amber-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;