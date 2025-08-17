import React from 'react';
import { MapPin, Train, Star, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury Hotel Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        <div className="mb-6">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-amber-200 font-medium">4.1/5 Rating</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Welcome to
            <span className="block text-amber-400">Hotel Maheshwari</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your Home Away from Home in Madhepura
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
            Experience comfort, hospitality, and convenience at Hotel Maheshwari, strategically located 
            in the heart of Madhepura, Bihar. Perfect blend of modern amenities and traditional warmth.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>Ward No.-20, Jeevan Sadan Road</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Train className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>10 min walk to Railway Station</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="tel:07070245422"
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book Now - 070702 45422
            </a>
            <a
              href="#rooms"
              className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Rooms
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-300">
          Starting from <span className="text-lg font-bold text-amber-400">₹1,774</span> per night (plus taxes)
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;