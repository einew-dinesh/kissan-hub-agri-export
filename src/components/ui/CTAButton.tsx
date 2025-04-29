import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'green-bg';
}

export default function CTAButton({ 
  text, 
  href, 
  className = '',
  variant = 'primary'
}: CTAButtonProps) {
  const baseClasses = "inline-block px-6 py-3 rounded-md font-medium transition-colors text-lg";
  
  const variantClasses = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-white text-green-700 border border-green-600 hover:bg-green-50",
    'green-bg': "bg-white text-green-700 hover:bg-gray-100" // For buttons on green backgrounds
  };
  
  // Add text-lg to default classes and ensure variant classes take precedence
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <Link href={href} className={buttonClasses}>
      {text}
    </Link>
  );
} 