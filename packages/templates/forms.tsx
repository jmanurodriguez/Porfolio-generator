"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Send } from 'lucide-react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Utility function for class names
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

// Template 1: Simple Contact Form
export const SimpleContactForm: React.FC<any> = ({ 
  title = "Get in Touch",
  subtitle = "Send us a message and we'll get back to you soon",
  backgroundColor = "#ffffff",
  textColor = "#1f2937"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 px-4" style={{ backgroundColor }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: textColor }}>
            {title}
          </h2>
          <p className="text-lg opacity-80" style={{ color: textColor }}>
            {subtitle}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: textColor }}>
                <User className="inline w-4 h-4 mr-2" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: textColor }}>
                <Mail className="inline w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: textColor }}>
              <Phone className="inline w-4 h-4 mr-2" />
              Phone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: textColor }}>
              <MessageSquare className="inline w-4 h-4 mr-2" />
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

// Export the form templates array
export const formTemplates: TemplateDefinition[] = [
  {
    id: 'form-1',
    name: 'Simple Contact Form',
    type: SectionType.FORM,
    description: 'A clean, simple contact form with name, email, phone, and message fields',
    preview: '/api/placeholder/400/300',
    component: SimpleContactForm,
    defaultProps: {
      title: 'Get in Touch',
      subtitle: 'Send us a message and we\'ll get back to you soon',
      backgroundColor: '#ffffff',
      textColor: '#1f2937'
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'backgroundColor', type: 'color', label: 'Background Color' },
        { name: 'textColor', type: 'color', label: 'Text Color' }
      ]
    }
  }
];
