import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';

export const metadata = {
  title: 'About Swarnupaj | Premium Agricultural Exports',
  description: 'Learn about Swarnupaj, our mission, values, and commitment to connecting farmers directly with global markets.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-gray-900 py-24">
        {/* Overlay image with darker filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("/images/about-hero.jpg")',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About Swarnupaj
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Connecting farmers to global markets with transparency, quality, and integrity
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Swarnupaj was founded with a simple yet powerful vision: to create a direct bridge between hardworking Indian farmers and global markets, ensuring fair prices for producers and premium quality for buyers.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey began in the agricultural heartlands of India, where we witnessed firsthand the challenges faced by farmers in getting fair value for their high-quality produce. We also recognized the growing global demand for premium Indian agricultural products like cumin, saunf, and bajra.
              </p>
              <p className="text-lg text-gray-600">
                Today, Swarnupaj stands as a trusted name in agricultural exports, known for our commitment to quality, sustainability, and direct farmer sourcing.
              </p>
            </div>
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be replaced with actual image when available */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Image of our founders/farms</span>
              </div>
              {/* Uncomment when image is available */}
              {/* <Image 
                src="/images/about/our-story.jpg"
                alt="Swarnupaj founders with farmers"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a commitment to excellence and ethical business practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fair Trade</h3>
              <p className="text-gray-600">
                We believe in fair compensation for farmers and transparent pricing for buyers. By eliminating unnecessary middlemen, we ensure better income for producers while maintaining competitive prices for our customers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain stringent quality control processes at every stage, from cultivation to packaging and shipping. Our products undergo rigorous testing to ensure they meet international standards and specifications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable agricultural practices that are good for the environment, good for farmers, and good for consumers. Our IPM (Integrated Pest Management) products reflect this commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From farm to global markets - with quality control at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">1</span>
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 h-0.5 w-10 bg-green-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Direct Sourcing</h3>
              <p className="text-gray-600">
                We partner directly with farmers, providing fair compensation and support for sustainable practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">2</span>
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 h-0.5 w-10 bg-green-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Quality Inspection</h3>
              <p className="text-gray-600">
                Every batch undergoes rigorous testing for quality, purity, and compliance with standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">3</span>
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 h-0.5 w-10 bg-green-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Processing & Packaging</h3>
              <p className="text-gray-600">
                Products are carefully processed and packaged according to international standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Global Distribution</h3>
              <p className="text-gray-600">
                Efficient logistics ensure timely delivery to customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Partner with Swarnupaj?</h2>
          <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
            Join us in our mission to bring premium Indian agricultural products to the world.
          </p>
          <div className="flex justify-center">
            <CTAButton 
              text="Get a Quote" 
              href="/contact?type=quote"
              variant="green-bg"
            />
          </div>
        </div>
      </section>
    </>
  );
} 