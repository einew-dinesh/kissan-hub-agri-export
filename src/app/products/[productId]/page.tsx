import { notFound } from 'next/navigation';
import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';
import products from '@/data/products';
import { Metadata } from 'next';

// Define the shape of the params
type ProductIdParams = {
  productId: string;
};

// Define props for the page component with both params and searchParams as Promises
type Props = {
  params: Promise<ProductIdParams>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: { params: Promise<ProductIdParams> }): Promise<Metadata> {
  // Await the params Promise to get the actual values
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.productId);
  
  if (!product) {
    return {
      title: 'Product Not Found | Swarnupaj',
      description: 'The requested product could not be found.',
    };
  }
  
  return {
    title: `${product.name} | Swarnupaj Premium Agricultural Exports`,
    description: product.shortDescription,
  };
}

export function generateStaticParams(): ProductIdParams[] {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductPage({ params, searchParams }: Props) {
  // Await the params Promise to get the actual values
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.productId);
  
  if (!product) {
    notFound();
  }
  
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-gray-900 py-24">
        {/* Overlay image with darker filter */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("/images/products/hero.jpg")',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {product.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {product.shortDescription}
          </p>
        </div>
      </section>
      
      {/* Product details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be replaced with actual image when available */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">{product.name} image</span>
              </div>
              {/* Uncomment when image is available */}
              {/* <Image 
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover"
              /> */}
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About {product.name}</h2>
              <div className="text-lg text-gray-600 space-y-4">
                {product.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
              
              <div className="mt-8">
                <CTAButton 
                  text="Get a Quote"
                  href={`/contact?type=quote&product=${product.id}`}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specifications */}
      {product.specifications && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Specifications</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={key} className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">{key}</h3>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Features & Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {product.features && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.applications && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Applications</h2>
                <ul className="space-y-4">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Other Products You Might Be Interested In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    {/* This would be replaced with actual image when available */}
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">{relatedProduct.name} image</span>
                    </div>
                    {/* Uncomment when image is available */}
                    {/* <Image 
                      src={relatedProduct.image}
                      alt={relatedProduct.imageAlt}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.shortDescription}</p>
                    <a 
                      href={`/products/${relatedProduct.id}`} 
                      className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-green-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Interested in {product.name}?</h2>
          <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your requirements and get a personalized quote.
          </p>
          <CTAButton 
            text="Get a Quote" 
            href={`/contact?type=quote&product=${product.id}`}
            variant="green-bg"
          />
        </div>
      </section>
    </>
  );
} 