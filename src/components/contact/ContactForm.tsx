'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import products from '@/data/products';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const productId = searchParams.get('product') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    product: productId,
    inquiryType: type === 'quote' ? 'Quote Request' : 'General Inquiry',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);
  
  // Update form when URL params change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      product: productId,
      inquiryType: type === 'quote' ? 'Quote Request' : 'General Inquiry',
    }));
  }, [type, productId]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send the form data to your backend or a form service
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      
      // Reset form after successful submission
      if (type === 'quote') {
        setFormData(prev => ({
          ...prev,
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        }));
      } else {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          product: '',
          inquiryType: 'General Inquiry',
        });
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {type === 'quote' ? 'Request a Quote' : 'Contact Us'}
      </h2>
      
      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Your message has been sent successfully. We'll get back to you soon!
        </div>
      )}
      
      {submissionStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          There was an error sending your message. Please try again later.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
              Inquiry Type *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Quote Request">Quote Request</option>
              <option value="Partnership Opportunity">Partnership Opportunity</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
              Product of Interest
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder={type === 'quote' ? 'Please provide details about your requirements, including quantity, timeline, and any specific quality parameters.' : 'How can we help you?'}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-md font-medium transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'
          }`}
        >
          {isSubmitting ? 'Sending...' : type === 'quote' ? 'Request Quote' : 'Send Message'}
        </button>
      </form>
    </div>
  );
} 