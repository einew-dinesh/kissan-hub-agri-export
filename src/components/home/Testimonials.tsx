'use client';

import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Swarnupaj has been our trusted supplier for three years now. Their cumin quality is consistently excellent, and their direct sourcing from farmers is something we really value.",
      author: "John Smith",
      company: "Global Spice Imports, USA",
      avatar: "/images/testimonials/avatar1.jpg"
    },
    {
      quote: "What sets Swarnupaj apart is their commitment to quality. Their IPM cumin meets our stringent standards, and their traceability to the farm level gives us great confidence in their products.",
      author: "Marie Dubois",
      company: "European Gourmet Foods, France",
      avatar: "/images/testimonials/avatar2.jpg"
    },
    {
      quote: "We've been importing bajra from Swarnupaj for our organic food line, and the response from our customers has been overwhelmingly positive. Their dedication to sustainable farming practices aligns perfectly with our brand values.",
      author: "Raj Patel",
      company: "Organic Essentials, UK",
      avatar: "/images/testimonials/avatar3.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on building long-term relationships with our customers around the world
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <svg className="text-green-600 w-12 h-12 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative min-h-[180px]">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-500 absolute inset-0 ${
                    idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 -z-10'
                  }`}
                >
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
                      {/* This would be replaced with actual images when available */}
                      {/* <Image
                        src={testimonial.avatar}
                        alt={`Portrait of ${testimonial.author}`}
                        width={48}
                        height={48}
                        className="rounded-full"
                      /> */}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full text-gray-600 hover:text-green-600 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  idx === activeIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full text-gray-600 hover:text-green-600 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 