import React from 'react';
import { 
  Wifi, 
  Car, 
  Utensils, 
  Users, 
  Coffee,
  Shield,
  Briefcase,
  PhoneCall,
  Shirt,
  MapPin
} from 'lucide-react';

const Amenities: React.FC = () => {
  const amenityCategories = [
    {
      title: 'Essential Services',
      amenities: [
        { icon: Wifi, name: 'Free Wi-Fi', description: 'High-speed internet throughout property' },
        { icon: Car, name: 'Free Parking', description: 'Complimentary parking for all guests' },
        { icon: PhoneCall, name: '24-Hour Front Desk', description: 'Round-the-clock assistance' },
        { icon: Shield, name: 'Security', description: 'CCTV surveillance and safety measures' }
      ]
    },
    {
      title: 'Dining & Food',
      amenities: [
        { icon: Utensils, name: 'In-house Restaurant', description: 'Multi-cuisine dining options' },
        { icon: Coffee, name: 'Tea Service', description: 'Special tea service highly recommended' },
        { icon: Users, name: 'Room Service', description: '24-hour room service available' },
        { icon: Utensils, name: 'Breakfast', description: 'Fresh breakfast options daily' }
      ]
    },
    {
      title: 'Business & Events',
      amenities: [
        { icon: Briefcase, name: 'Conference Facilities', description: 'Meeting rooms for corporate events' },
        { icon: Users, name: 'Banquet Room', description: 'Special occasions and celebrations' },
        { icon: Briefcase, name: 'Business Center', description: 'Complete business support services' },
        { icon: MapPin, name: 'Concierge', description: 'Tour and ticket booking assistance' }
      ]
    },
    {
      title: 'Additional Services',
      amenities: [
        { icon: Shirt, name: 'Laundry Service', description: 'Professional cleaning and dry cleaning' },
        { icon: Car, name: 'Transportation', description: 'Airport transfer and car hire services' },
        { icon: Users, name: 'Family Friendly', description: 'Children activities and family environment' },
        { icon: MapPin, name: 'Lift Access', description: 'Elevator facility for guest convenience' }
      ]
    }
  ];

  return (
    <section id="amenities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Amenities & Facilities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a comfortable and memorable stay in Madhepura
          </p>
        </div>

        <div className="space-y-12">
          {amenityCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                      <amenity.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{amenity.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Highlight */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Complete Hospitality Experience</h3>
          <p className="text-lg sm:text-xl text-amber-100 mb-6 max-w-2xl mx-auto">
            From arrival to departure, every detail is carefully considered to ensure your comfort and satisfaction
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">Express</div>
              <div className="text-amber-200">Check-in/out</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Multilingual</div>
              <div className="text-amber-200">Staff Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Hygienic</div>
              <div className="text-amber-200">Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;