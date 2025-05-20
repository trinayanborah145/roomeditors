import * as React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+91 69015 98958',
      link: 'tel:+91 69015 98958',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'roomeditors1@gmail.com',
      link: 'mailto:roomeditors1@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: 'CCMP+CG7, Joy Mangla, Assam 781334',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Get in <span className="text-amber-500">Touch</span>
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
            Ready to transform your space? Contact us today for a consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div 
            className="lg:col-span-1"
            data-aos="fade-right"
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="text-amber-500 mr-4">{item.icon}</div>
                    <div>
                      <h4 className="text-gray-900 font-bold mb-1">{item.title}</h4>
                      <a href={item.link} className="text-gray-600 hover:text-amber-500 transition-colors duration-300">
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-gray-900 font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/room.editors/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="lg:col-span-2"
            data-aos="fade-left"
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 transition-all duration-300"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'name' || formData.name
                          ? '-top-2.5 text-amber-500 text-sm bg-white px-1'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 transition-all duration-300"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'email' || formData.email
                          ? '-top-2.5 text-amber-500 text-sm bg-white px-1'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Your Email
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 transition-all duration-300"
                    />
                    <label
                      htmlFor="phone"
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'phone' || formData.phone
                          ? '-top-2.5 text-amber-500 text-sm bg-white px-1'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Phone Number (optional)
                    </label>
                  </div>
                  
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 transition-all duration-300 appearance-none"
                    >
                      <option value=""></option>
                      <option value="Residential Design">Residential Design</option>
                      <option value="Commercial Design">Commercial Design</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                    <label
                      htmlFor="subject"
                      className={`absolute left-4 transition-all duration-300 ${
                        focusedField === 'subject' || formData.subject
                          ? '-top-2.5 text-amber-500 text-sm bg-white px-1'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Service Interested In
                    </label>
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400 transition-all duration-300"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 ${
                      focusedField === 'message' || formData.message
                        ? '-top-2.5 text-amber-500 text-sm bg-white px-1'
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Your Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-amber-400 text-gray-900 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;