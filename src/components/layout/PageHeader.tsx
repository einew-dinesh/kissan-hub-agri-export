interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  backgroundImage = '/images/products-hero.jpg' 
}: PageHeaderProps) {
  return (
    <section className="relative bg-gray-900 py-24">
      {/* Overlay image with darker filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
} 