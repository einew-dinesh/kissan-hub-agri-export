import ProductCard from '@/components/products/ProductCard';
import products from '@/data/products';
import CTAButton from '@/components/ui/CTAButton';

export const metadata = {
  title: 'Products | Swarnupaj Premium Agricultural Exports',
  description: 'Explore our premium agricultural products including cumin, saunf (fennel), bajra (pearl millet), and IPM cumin.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-gray-900 py-24">
        {/* Overlay image with darker filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("/images/products-hero.jpg")',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Premium Products
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Direct from the farms of India to global markets - quality guaranteed
          </p>
        </div>
      </section>
      
      {/* Products listing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.shortDescription}
                image={product.image}
                imageAlt={product.imageAlt}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Looking for Custom Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We offer customized sourcing solutions tailored to your specific requirements. Contact us to discuss your needs.
            </p>
            <CTAButton 
              text="Get a Quote"
              href="/contact?type=quote"
              variant="primary"
            />
          </div>
        </div>
      </section>
      
      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium quality, direct sourcing, and sustainable practices set our products apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600">
                Our products undergo rigorous quality testing and meet international standards for purity, cleanliness, and consistency.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Direct Sourcing</h3>
              <p className="text-gray-600">
                By sourcing directly from farmers, we ensure better income for producers and higher quality for you, eliminating unnecessary middlemen.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainable Practices</h3>
              <p className="text-gray-600">
                We prioritize sustainable farming methods that are good for the environment and produce healthier crops, as seen in our IPM initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Source Premium Agricultural Products?</h2>
          <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your requirements and get a personalized quote.
          </p>
          <CTAButton 
            text="Get a Quote" 
            href="/contact?type=quote"
            variant="green-bg"
          />
        </div>
      </section>
    </>
  );
} 