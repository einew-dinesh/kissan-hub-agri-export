# Sourceseed Agricultural Exports Website

A modern website built with Next.js and Tailwind CSS for Sourceseed, a company specializing in sourcing premium agricultural products like cumin, saunf (fennel), bajra (pearl millet), and IPM cumin directly from farmers.

## Features

- Responsive design for all device sizes
- Modern UI with Tailwind CSS
- Next.js App Router architecture
- Modular component structure
- Contact form with quote request capability
- Dedicated product pages with detailed information
- Easy to update product catalog

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/sourceseed-website.git
cd sourceseed-website
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/src/data` - Data files for products
- `/public` - Static assets

## Adding New Products

To add new products, edit the `src/data/products.ts` file and add a new product object following the existing structure.

## Customization

- Brand colors can be adjusted in `src/app/globals.css`
- Layout components are in `src/components/layout`
- Page-specific components are organized by page name

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/):

```bash
npm run build
# or
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about this website, please contact [your-email@example.com](mailto:your-email@example.com).
