import CTAButton from '../ui/CTAButton';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-[80vh] min-h-[600px] flex items-center">
      {/* Overlay image with darker filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/images/hero-bg.png")',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center sm:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Agricultural Exports Direct from Farmers
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            At Sourceseed, we procure directly from farmers and FPOs (Farmer Producer Organizations), 
            ensuring better incomes for producers and premium quality for you.
          </p>
          <div className="flex justify-center sm:justify-start">
            <CTAButton 
              text="Get a Quote" 
              href="/contact?type=quote"
              variant="primary"
              className="text-lg bg-green-600 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 