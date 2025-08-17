import React from 'react';
import { Users, Wifi, Coffee, Car, Wind, Tv, Phone } from 'lucide-react';

const Rooms: React.FC = () => {
  const rooms = [
    {
      name: 'Standard Room',
      price: '₹1,774',
      image: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800',
      guests: '2 Guests',
      description: 'Comfortable accommodation with essential amenities for a pleasant stay',
      amenities: ['Free Wi-Fi', 'Television', 'Daily Housekeeping', 'Room Service']
    },
    {
      name: 'Deluxe Room',
      price: '₹2,200',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      guests: '2-3 Guests',
      description: 'Enhanced comfort with premium amenities and spacious layout',
      amenities: ['Air Conditioning', 'Balcony', 'Coffee/Tea', 'Free Wi-Fi', 'Premium TV']
    },
    {
      name: 'Family Room',
      price: '₹2,800',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      guests: '4-6 Guests',
      description: 'Perfect for families with multiple bed configurations and extra space',
      amenities: ['Multiple Beds', 'Family Space', 'Refrigerator', 'Extra Storage', 'Terrace Access']
    }
  ];

  const amenityIcons: Record<string, React.ComponentType<{className?: string}>> = {
    'Free Wi-Fi': Wifi,
    'Air Conditioning': Wind,
    'Television': Tv,
    'Premium TV': Tv,
    'Coffee/Tea': Coffee,
    'Room Service': Users,
    'Daily Housekeeping': Users,
    'Balcony': Car,
    'Multiple Beds': Users,
    'Family Space': Users,
    'Refrigerator': Car,
    'Extra Storage': Car,
    'Terrace Access': Car
  };

  return (
    <section id="rooms" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Rooms & Accommodation
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of comfortable rooms designed to meet every traveler's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-lg font-semibold">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{room.guests}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {room.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Room Amenities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => {
                      const IconComponent = amenityIcons[amenity] || Car;
                      return (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <IconComponent className="w-3 h-3 text-amber-600" />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <a
                  href="tel:07070245422"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Room Info */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Room Policies & Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-semibold text-gray-900">Check-in Time</div>
              <div className="text-gray-600">12:00 PM</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Check-out Time</div>
              <div className="text-gray-600">11:00 AM</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Daily Housekeeping</div>
              <div className="text-gray-600">Included</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">24-hour Room Service</div>
              <div className="text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;