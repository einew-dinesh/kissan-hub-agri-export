import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '../ui/CTAButton';

export default function FeaturedProducts() {
  const products = [
    {
      id: 'cumin',
      name: 'Cumin',
      description: 'Premium quality cumin seeds with high essential oil content, perfect for culinary and medicinal use.',
      image: '/images/products/cumin.jpg',
      imageAlt: 'High quality cumin seeds'
    },
    {
      id: 'saunf',
      name: 'Saunf (Fennel)',
      description: 'Sweet and aromatic fennel seeds, harvested at the peak of freshness to preserve flavor and aroma.',
      image: '/images/products/saunf.jpg',
      imageAlt: 'Premium fennel seeds'
    },
    {
      id: 'bajra',
      name: 'Bajra (Pearl Millet)',
      description: 'Nutritious pearl millet grains, cultivated with sustainable practices for export quality results.',
      image: '/images/products/bajra.jpg',
      imageAlt: 'High quality pearl millet'
    },
    {
      id: 'ipm-cumin',
      name: 'IPM Cumin',
      description: 'Integrated Pest Management cumin, grown with reduced pesticide usage for a safer, premium product.',
      image: '/images/products/ipm-cumin.jpg',
      imageAlt: 'Organic IPM cumin seeds'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct from the farms of India to global markets - quality guaranteed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-200">
                {/* This would be replaced with actual images when available */}
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">{product.name} image</span>
                </div>
                {/* Uncomment when images are available */}
                {/* <Image 
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  href={`/products/${product.id}`} 
                  className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton 
            text="View All Products" 
            href="/products"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
} 