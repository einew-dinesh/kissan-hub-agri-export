import CTAButton from '../ui/CTAButton';

export default function ContactCTA() {
  return (
    <section className="bg-green-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Source Premium Agricultural Products?</h2>
        <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8">
          Contact us today to discuss your requirements and get a personalized quote.
        </p>
        <div className="flex justify-center">
          <CTAButton 
            text="Get a Quote" 
            href="/contact?type=quote"
            variant="secondary"
            className="text-lg bg-white text-green-700 hover:bg-gray-100"
          />
        </div>
      </div>
    </section>
  );
} 