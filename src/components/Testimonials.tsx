import React from 'react';
import { Star, Quote, ChevronDown } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sovan Chakraborty',
      location: 'Business • Solo',
      rating: 5,
      comment: 'Overall nice hotel & great staff behavior and also food quality is awesome. Rooms, service, and location all excellent.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Abhishek Kumar',
      location: 'Guest Review',
      rating: 5,
      comment: 'I would rate 5 stars for such nice behavior of staff and very good rooms. Best hotel in Madhepura. Hotel interior is quite beautiful and beyond my expectations.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Uma Maheswara Reddy',
      location: 'Holiday • Family',
      rating: 5,
      comment: 'Good hospitality and food was fabulous and tasty. Restaurant manager Mr. Sudip was a wonderful host. This was a pleasant experience.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Chandan Kumar',
      location: 'Guest Review',
      rating: 5,
      comment: 'Room service very good. Best for Madhepura district. Staff behavior also very polite.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Shobhakant Roy',
      location: 'Guest Review',
      rating: 5,
      comment: 'One of the best hotels in Madhepura with affordable price. You can get delicious coffee for just ₹20.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Mohit Mittal',
      location: 'Business',
      rating: 5,
      comment: 'The best place to stay and the staff is highly cooperative. The food is best among all districts of Simanchal. Excellent rooms, service, and location.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Nimesh Jaiswal',
      location: 'Guest Review',
      rating: 5,
      comment: 'It\'s a family-friendly hotel and restaurant. Taste was perfect and rooms too.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Akshaye Mane',
      location: 'Guest Review',
      rating: 5,
      comment: 'Good hotel and the staff and cleanliness is great, food is very delicious.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const additionalTestimonials = [
    {
      name: 'Abhinav Kumar',
      location: 'Guest Review',
      rating: 5,
      comment: 'Nice place for dinner and lunch. Good service with great taste at good price.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Roshan Singh',
      location: 'Guest Review',
      rating: 5,
      comment: 'Very nice neat and clean rooms. Prime location in Madhepura - the heart of Madhepura district.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Guest Review',
      location: 'Recent Stay',
      rating: 5,
      comment: 'Very beautiful room with excellent bathroom arrangement. Everything was very nice and well-organized.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Business Traveler',
      location: 'Business Trip',
      rating: 5,
      comment: 'Positive experience during business trip. Excellent rooms and service quality.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const [showMore, setShowMore] = React.useState(false);
  const displayedTestimonials = showMore ? [...testimonials, ...additionalTestimonials] : testimonials;

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
              <div className="text-2xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Excellent Reviews</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-amber-600">200+</div>
              <div className="text-sm text-gray-600">Happy Guests</div>
            </div>
          </div>
        </div>

        {/* Individual Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
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

        {/* Load More Button */}
        {!showMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              <span>Load More Reviews</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

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