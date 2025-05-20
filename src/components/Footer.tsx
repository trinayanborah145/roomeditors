import { FC } from 'react';
import { Instagram } from 'lucide-react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Room Editors</h3>
            <p className="text-gray-400 mb-6">
              traordinary interiors that inspire and transform everyday living.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/room.editors/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Concept Design',
                'TV Unit Design',
                'Semi Modular Design',
                'Full Modular Design',
                'Wallpaper Design',
                'Furniture Selection',
                'Color Consultation',
                'Commercial Design',
                'Complete Home Design'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p>CCMP+CG7, Joy Mangla</p>
              <p>Assam 781334</p>
              <p>
                <a href="tel:+916901598958" className="hover:text-amber-400 transition-colors duration-300">
                  +91 69015 98958
                </a>
              </p>
              <p>
                <a href="mailto:roomeditors1@gmail.com" className="hover:text-amber-400 transition-colors duration-300">
                  roomeditors1@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Room Editors.Designed by Tricone Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;