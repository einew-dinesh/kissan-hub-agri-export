import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-green-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-lg text-gray-600">
            We couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            href="/"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="w-full flex justify-center py-3 px-4 border border-green-600 rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Contact Us
          </Link>
          <div className="mt-8 text-sm text-gray-500">
            <p>If you believe this is an error, please contact our support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 