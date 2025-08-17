import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Patna, Bihar',
      rating: 5,
      comment: 'Excellent hygiene standards and cooperative staff. The location near railway station made my business trip very convenient.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 4,
      comment: 'Clean and spacious rooms with tasty food. The special tea service is absolutely amazing! Staff was very helpful.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Amit Singh',
      location: 'Kolkata',
      rating: 5,
      comment: 'Good value for money with excellent service. The front desk management was quick and efficient. Highly recommended!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sunita Devi',
      location: 'Darbhanga, Bihar',
      rating: 4,
      comment: 'Perfect for family stays. The family room was spacious and comfortable. Kids enjoyed the friendly environment.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Mohammad Rahman',
      location: 'Dhaka, Bangladesh',
      rating: 5,
      comment: 'Outstanding hospitality! The staff went above and beyond to make our stay comfortable. Great location and clean facilities.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Anita Jha',
      location: 'Purnia, Bihar',
      rating: 4,
      comment: 'Lovely stay with traditional Bihar warmth. The restaurant food was delicious and the rooms were well-maintained.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from guests who have stayed with us
          </p>
        </div>

        {/* Overall Rating Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-2">4.1/5</span>
          </div>
          <p className="text-gray-600 mb-6">Based on verified guest reviews</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">50%</div>
              <div className="text-sm text-gray-600">Excellent Reviews</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">32%</div>
              <div className="text-sm text-gray-600">Good Reviews</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-amber-600">100+</div>
              <div className="text-sm text-gray-600">Happy Guests</div>
            </div>
          </div>
        </div>

        {/* Individual Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-amber-200 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed pl-2">
                  {testimonial.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Join Our Happy Guests
          </h3>
          <p className="text-gray-600 mb-6">Experience the warmth of Bihar hospitality</p>
          <a
            href="tel:07070245422"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Book Your Stay Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;