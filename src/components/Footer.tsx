import React from 'react';
import { MapPin, Phone, Star, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Rates', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Hotel Maheshwari</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience the warmth of Bihar hospitality at Hotel Maheshwari. 
              Your comfort is our commitment in the heart of Madhepura.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Ward No.-20, Jeevan Sadan Road, Madhepura, Bihar 852113
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:07070245422"
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors duration-200"
                >
                  070702 45422
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Comfortable Accommodation</li>
              <li>24-Hour Room Service</li>
              <li>Conference Facilities</li>
              <li>Airport Transfers</li>
              <li>Restaurant & Dining</li>
              <li>Tour Assistance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm text-gray-300 ml-2">4.1/5 Guest Rating</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-300">
                © 2025 Hotel Maheshwari. All rights reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="w-3 h-3 text-red-400" /> for Bihar Hospitality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a
          href="tel:07070245422"
          className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;