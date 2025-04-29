'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLeaf, FaTree, FaSeedling } from 'react-icons/fa';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';

export default function FarmsPage() {
  const farms = [
    {
      id: 1,
      name: 'Barmer Farm',
      location: 'Barmer, Rajasthan',
      description: 'Our farm in Barmer specializes in cultivating organic cumin and bajra in the arid climate of western Rajasthan. We work closely with local farmers to implement sustainable farming practices that conserve water while producing high-quality crops.',
      features: ['Drought-resistant farming', 'Organic cultivation', 'Solar-powered irrigation'],
      icon: <FaSeedling className="text-3xl text-green-600" />
    },
    {
      id: 2,
      name: 'Tharad Farm',
      location: 'Tharad, Gujarat',
      description: 'Located in the fertile region of North Gujarat, our Tharad farm focuses on producing premium quality fennel (saunf) and other spices. This farm collaborates with multiple local FPOs to ensure fair compensation for farmers while maintaining strict quality standards.',
      features: ['Multi-crop cultivation', 'FPO partnerships', 'Modern processing facilities'],
      icon: <FaLeaf className="text-3xl text-green-600" />
    },
    {
      id: 3,
      name: 'Amreli Farm',
      location: 'Amreli, Gujarat',
      description: 'Our Amreli farm is dedicated to sustainable agriculture and biodiversity. Here we grow a variety of crops using integrated pest management techniques. The farm serves as a model for regenerative agriculture in the Saurashtra region.',
      features: ['IPM implementation', 'Biodiversity conservation', 'Farmer training center'],
      icon: <FaTree className="text-3xl text-green-600" />
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const farmVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Farms" 
        description="Sustainably managed farms producing premium quality agricultural products"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Farm Locations</h2>
            <p className="text-lg text-gray-600">
              At Swarnupaj, we own and operate farms across Gujarat and Rajasthan. We work directly 
              with farmers and FPOs to implement sustainable farming practices while ensuring premium quality products.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {farms.map((farm) => (
              <motion.div
                key={farm.id}
                variants={farmVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Placeholder for farm image */}
                <div className="relative h-48 bg-green-100 flex items-center justify-center">
                  {farm.icon}
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{farm.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span className="text-gray-700">{farm.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{farm.description}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {farm.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Farmers</h3>
            <p className="text-lg text-gray-600 mb-6">
              We believe in fair compensation and long-term relationships with our farmers and FPOs.
              Through direct procurement, we ensure that farmers receive better prices for their produce
              while our customers get access to the highest quality agricultural products.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-green-800 mb-3">Interested in Partnering with Us?</h4>
              <p className="text-gray-700 mb-4">
                If you're a farmer or part of an FPO looking to collaborate with Swarnupaj, 
                we'd love to hear from you.
              </p>
              <a 
                href="/contact?type=partnership" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                Contact Us for Partnership
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 