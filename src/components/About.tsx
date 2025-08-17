import React from 'react';
import { Heart, Shield, Users, MapPin } from 'lucide-react';
import hotelReceptionImg from '../assets/hotel-maheshwari-reception.webp';

const About: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Centrally located in Madhepura city with easy access to railway station and local attractions'
    },
    {
      icon: Heart,
      title: 'Comfortable Accommodations',
      description: 'Well-appointed rooms with modern amenities and traditional warmth for every guest'
    },
    {
      icon: Users,
      title: 'Excellent Service',
      description: '24-hour front desk assistance with cooperative and multilingual staff support'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'CCTV surveillance and 24-hour security for complete peace of mind'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Hotel Maheshwari
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A beacon of hospitality in the historic city of Madhepura, Bihar. We've been serving guests 
            with dedication and warmth in this culturally rich region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Your Comfort is Our Commitment
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Hotel Maheshwari stands as a testament to Bihar's renowned hospitality. Located on 
              Jeevan Sadan Road in Ward No.-20, we offer a perfect retreat for both business and 
              leisure travelers seeking comfort in this historic city.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our strategic location places you just a 10-minute walk from Dauram Madhepura Railway 
              Station, making us easily accessible while keeping you close to the city's cultural 
              attractions and business centers.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">4.1</div>
                <div className="text-sm text-gray-500">Guest Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">50%</div>
                <div className="text-sm text-gray-500">Excellent Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-gray-500">Service Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={hotelReceptionImg}
              alt="Hotel Reception"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Since</div>
              <div className="text-2xl font-bold">1981</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;