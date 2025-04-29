import Image from 'next/image';
import Link from 'next/link';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ProductCard({ id, name, description, image, imageAlt }: ProductProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gray-200">
        {/* Placeholder for when images are not available */}
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">{name} image</span>
        </div>
        {/* Uncomment when images are available */}
        {/* <Image 
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        /> */}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <Link 
            href={`/products/${id}`} 
            className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
          
          <Link 
            href={`/contact?type=quote&product=${id}`} 
            className="text-green-600 font-medium hover:text-green-800 inline-flex items-center"
          >
            Get a quote
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 