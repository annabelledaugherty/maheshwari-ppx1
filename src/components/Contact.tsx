import React from 'react';
import { Phone, MapPin, Clock, Mail, Train, Car } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '070702 45422',
      link: 'tel:07070245422',
      description: '24/7 Available for Reservations'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Ward No.-20, Jeevan Sadan Road',
      description: 'Madhepura, Bihar 852113, India'
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      value: '24 Hours',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Train,
      title: 'Railway Station',
      value: '10 Minutes Walk',
      description: 'Dauram Madhepura Station'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your stay? Get in touch with us for reservations and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-medium text-amber-600 hover:text-amber-700 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg font-medium text-gray-900">{info.value}</div>
                    )}
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Booking Section */}
            <div className="mt-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Quick Booking</h4>
              <p className="text-amber-100 mb-4">
                Call us directly for instant reservations and special offers
              </p>
              <a
                href="tel:07070245422"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                070702 45422
              </a>
            </div>
          </div>

          {/* Location & Directions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Directions</h3>
            
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Madhepura City Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Hotel Maheshwari</div>
                  <div className="text-sm text-gray-600">Jeevan Sadan Road</div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Train className="w-5 h-5 text-amber-600" />
                  <h4 className="font-semibold text-gray-900">By Train</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Dauram Madhepura Railway Station is just a 10-minute walk. 
                  Well-connected to major cities via railway network.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-5 h-5 text-amber-600" />
                  <h4 className="font-semibold text-gray-900">By Road</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Accessible via National Highway 107. Taxi and bus services available. 
                  Free parking provided for private vehicles.
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 bg-amber-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                Business Hours
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Check-in</div>
                  <div className="text-gray-600">12:00 PM onwards</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Check-out</div>
                  <div className="text-gray-600">Until 11:00 AM</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Reception</div>
                  <div className="text-gray-600">24 Hours</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Room Service</div>
                  <div className="text-gray-600">24 Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center bg-gray-900 rounded-2xl p-6 sm:p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
          <p className="text-gray-300 mb-4">Our team is available 24/7 for any urgent requirements</p>
          <a
            href="tel:07070245422"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            Emergency Contact: 070702 45422
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;