export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  specifications?: {
    [key: string]: string;
  };
  features?: string[];
  applications?: string[];
}

const products: Product[] = [
  {
    id: 'cumin',
    name: 'Cumin',
    shortDescription: 'Premium quality cumin seeds with high essential oil content, perfect for culinary and medicinal use.',
    longDescription: `
      Our premium cumin seeds are sourced directly from the fertile fields of Gujarat and Rajasthan, India. Known for their distinct aroma and rich flavor, these seeds are carefully cultivated by our partner farmers using traditional methods.
      
      Sourceseed cumin seeds stand out for their high essential oil content, which is responsible for the intense aroma and flavor that elevates any dish. Our cumin undergoes rigorous cleaning and quality control processes to ensure purity and consistency.
      
      Whether for culinary applications in global cuisines or for extraction of essential oils, our cumin seeds provide exceptional quality that meets international standards.
    `,
    image: '/images/products/cumin.jpg',
    imageAlt: 'High quality cumin seeds',
    specifications: {
      'Origin': 'Gujarat/Rajasthan, India',
      'Moisture': 'Max 10%',
      'Purity': 'Min 99.5%',
      'Essential Oil': '2.5-3.5%',
      'Admixture': 'Max 0.5%',
      'Foreign Matter': 'Max 0.5%',
      'Packaging': 'Available in 10kg, 25kg, and bulk packaging'
    },
    features: [
      'High essential oil content for superior aroma and flavor',
      'Hand-selected for uniformity and quality',
      'Rigorous testing for pesticide residues',
      'Full traceability back to the farm',
      'Natural farming methods prioritized'
    ],
    applications: [
      'Culinary use in various global cuisines',
      'Spice blends and seasonings',
      'Essential oil extraction',
      'Medicinal and pharmaceutical applications',
      'Food processing industry'
    ]
  },
  {
    id: 'saunf',
    name: 'Saunf (Fennel)',
    shortDescription: 'Sweet and aromatic fennel seeds, harvested at the peak of freshness to preserve flavor and aroma.',
    longDescription: `
      Sourceseed offers premium quality fennel seeds (saunf) sourced from dedicated farmers in Gujarat, India. Our fennel is known for its sweet, licorice-like flavor and aromatic properties that make it a favorite in both culinary and medicinal applications worldwide.
      
      We carefully time the harvest to ensure the seeds are collected at their peak ripeness, maximizing their essential oil content and flavor profile. Our processing methods preserve the natural quality of the seeds while ensuring they meet the highest standards of cleanliness and purity.
      
      Each batch undergoes thorough quality checks for color, aroma, taste, and essential oil content before export, ensuring consistent quality for our global customers.
    `,
    image: '/images/products/saunf.jpg',
    imageAlt: 'Premium fennel seeds',
    specifications: {
      'Origin': 'Gujarat, India',
      'Moisture': 'Max 9%',
      'Purity': 'Min 99.5%',
      'Essential Oil': '1.5-2.5%',
      'Foreign Matter': 'Max 0.5%',
      'Packaging': 'Available in 10kg, 25kg, and bulk packaging'
    },
    features: [
      'Sweet, aromatic flavor profile',
      'Harvested at optimal ripeness',
      'Carefully cleaned and processed',
      'Consistent size and color',
      'High essential oil content'
    ],
    applications: [
      'Culinary uses in various cuisines',
      'Tea and beverage flavoring',
      'Confectionery and bakery products',
      'Medicinal and traditional remedies',
      'Essential oil production'
    ]
  },
  {
    id: 'bajra',
    name: 'Bajra (Pearl Millet)',
    shortDescription: 'Nutritious pearl millet grains, cultivated with sustainable practices for export quality results.',
    longDescription: `
      Sourceseed offers premium quality bajra (pearl millet) that combines nutritional excellence with sustainable farming practices. Our bajra is sourced from select farming regions in Rajasthan and Gujarat where the climate and soil conditions are ideal for producing high-quality millet.
      
      Rich in protein, fiber, and essential minerals like iron and zinc, our bajra is a nutritional powerhouse that meets the growing global demand for healthy grain alternatives. The cultivation process emphasizes sustainability, with careful water management and minimal chemical inputs.
      
      Each batch undergoes thorough cleaning, grading, and quality testing to ensure it meets export standards while preserving the natural nutritional benefits of this ancient grain.
    `,
    image: '/images/products/bajra.jpg',
    imageAlt: 'High quality pearl millet',
    specifications: {
      'Origin': 'Rajasthan/Gujarat, India',
      'Moisture': 'Max 12%',
      'Purity': 'Min 99%',
      'Foreign Matter': 'Max 1%',
      'Broken Grains': 'Max 2%',
      'Protein Content': '10-12%',
      'Packaging': 'Available in 25kg, 50kg, and bulk packaging'
    },
    features: [
      'High nutritional value with significant protein content',
      'Rich in essential minerals including iron and zinc',
      'Sustainable cultivation with minimal water requirements',
      'Gluten-free grain suitable for special dietary needs',
      'Consistent grain size and quality'
    ],
    applications: [
      'Whole grain food products',
      'Flour for various baked goods',
      'Health food and specialty diet markets',
      'Traditional food preparations',
      'Animal feed (specific grades)'
    ]
  },
  {
    id: 'ipm-cumin',
    name: 'IPM Cumin',
    shortDescription: 'Integrated Pest Management cumin, grown with reduced pesticide usage for a safer, premium product.',
    longDescription: `
      Sourceseed's IPM (Integrated Pest Management) Cumin represents our commitment to sustainable agriculture and food safety. This premium cumin is cultivated using IPM methods that minimize chemical pesticide use while maintaining excellent crop protection.
      
      Our partner farmers implement comprehensive pest management strategies including biological controls, crop rotation, and targeted interventions only when necessary. This approach results in cumin that contains significantly lower pesticide residues while maintaining the exceptional quality and flavor characteristics that our customers expect.
      
      IPM Cumin undergoes additional testing protocols to verify its lower pesticide profile, making it an ideal choice for customers with stringent food safety requirements or those serving health-conscious consumer markets.
    `,
    image: '/images/products/ipm-cumin.jpg',
    imageAlt: 'Organic IPM cumin seeds',
    specifications: {
      'Origin': 'Selected regions of Gujarat/Rajasthan, India',
      'Moisture': 'Max 10%',
      'Purity': 'Min 99.5%',
      'Essential Oil': '2.5-3.5%',
      'Pesticide Residues': 'Significantly below conventional limits',
      'Foreign Matter': 'Max 0.5%',
      'Packaging': 'Available in 10kg, 25kg, and bulk packaging with IPM certification'
    },
    features: [
      'Grown using Integrated Pest Management practices',
      'Reduced chemical pesticide application',
      'Regular monitoring and testing for pesticide residues',
      'Same premium flavor and aroma as conventional cumin',
      'Supports more sustainable agricultural practices',
      'Traceability to the farm level'
    ],
    applications: [
      'Premium food products with emphasis on food safety',
      'Organic and natural food markets',
      'Health-focused culinary applications',
      'Spice blends for health-conscious consumers',
      'Products targeting markets with stricter pesticide regulations'
    ]
  }
];

export default products; 