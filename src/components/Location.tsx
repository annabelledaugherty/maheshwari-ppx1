import React from 'react';
import { MapPin, Train, Plane, Clock, Utensils } from 'lucide-react';

const Location: React.FC = () => {
  const nearbyAttractions = [
    {
      name: 'Singheshwar Temple',
      distance: '8 km',
      description: 'Ancient Shiva temple with historic significance from Ramayana',
      image: '/src/assets/singheshwartemple.webp'
    },
    {
      name: 'Nayanagar Durga Sthan',
      distance: '35 km',
      description: 'Famous pilgrimage destination known for wish fulfillment',
      image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Ma Chandika Mandir',
      distance: '20 km',
      description: 'Scenic views and boating opportunities along the river',
      image: '/src/assets/machandisthan.jpg'
    }
  ];

  const nearbyRestaurants = [
    { name: 'Chowka Family Restaurant', distance: '1 min walk' },
    { name: 'Manka Chai', distance: '2 min walk' },
    { name: 'Midway Restaurant', distance: '2 min walk' },
    { name: 'Zaika Restaurant', distance: '2 min walk' }
  ];

  const transportationInfo = [
    { icon: Train, title: 'Railway Station', distance: '10 min walk', name: 'Dauram Madhepura Station' },
    { icon: Plane, title: 'Airport', distance: '76.3 km', name: 'Biratnagar Airport' },
    { icon: MapPin, title: 'City Center', distance: '4.5 km', name: 'Madhepura Center' }
  ];

  return (
    <section id="location" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Location & Attractions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Perfectly positioned in Madhepura with easy access to transportation and local attractions
          </p>
        </div>

        {/* Hotel Location */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hotel Location</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Ward No.-20, Jeevan Sadan Road</div>
                  <div className="text-gray-600">Madhepura, Bihar 852113, India</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Strategically located in the heart of Madhepura, our hotel provides easy access to 
                railway connections, local attractions, and business centers while maintaining a 
                peaceful environment for our guests.
              </p>
              
              {/* Transportation Options */}
              <div className="space-y-3">
                {transportationInfo.map((transport, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <transport.icon className="w-5 h-5 text-amber-600" />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{transport.title}</div>
                      <div className="text-sm text-gray-600">{transport.name}</div>
                    </div>
                    <div className="text-sm font-semibold text-amber-600">{transport.distance}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/src/assets/hotel-maheshwari-location.jpg"
                alt="Madhepura City View"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{attraction.name}</h4>
                    <span className="text-sm font-semibold text-amber-600">{attraction.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Restaurants */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Utensils className="w-6 h-6 text-amber-600" />
            Nearby Restaurants
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nearbyRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                <div className="font-semibold text-gray-900 mb-1">{restaurant.name}</div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {restaurant.distance}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            All restaurants are within walking distance, offering various local and regional cuisines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;