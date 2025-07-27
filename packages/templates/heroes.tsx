import React from 'react';
import { TemplateProps } from '@packages/types';

// Hero Template 1 - Center Aligned
export function HeroCenterAligned({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'John Doe', 
    subtitle = 'Full Stack Developer',
    description = 'I create beautiful and functional web applications using modern technologies.',
    ctaText = 'Get In Touch',
    image = '/placeholder-avatar.jpg'
  } = content || {};
  
  return (
    <section className={`py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <img 
          src={image} 
          alt={title}
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <h2 className="text-2xl text-blue-600 mb-6">
          {subtitle}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
          {ctaText}
        </button>
      </div>
    </section>
  );
}

// Hero Template 2 - Split Layout
export function HeroSplitLayout({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'John Doe', 
    subtitle = 'Full Stack Developer',
    description = 'I create beautiful and functional web applications using modern technologies.',
    ctaText = 'View My Work',
    secondaryCtaText = 'Download CV',
    image = '/placeholder-avatar.jpg'
  } = content || {};
  
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <h2 className="text-xl lg:text-2xl text-purple-600 mb-6">
            {subtitle}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              {ctaText}
            </button>
            <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              {secondaryCtaText}
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img 
            src={image} 
            alt={title}
            className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

// Hero Template 3 - Minimal Dark
export function HeroMinimalDark({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'John Doe', 
    subtitle = 'Full Stack Developer',
    description = 'Building digital experiences that matter.',
    ctaText = 'Let\'s Work Together'
  } = content || {};
  
  return (
    <section className={`py-32 px-6 bg-gray-900 text-white ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl lg:text-7xl font-light mb-6">
          {title}
        </h1>
        <h2 className="text-xl text-gray-400 mb-8 tracking-wide">
          {subtitle}
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-none text-lg font-light transition-colors duration-300 uppercase tracking-wider">
          {ctaText}
        </button>
      </div>
    </section>
  );
}

// Hero Template 4 - Creative Asymmetric
export function HeroCreativeAsymmetric({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'John Doe', 
    subtitle = 'Creative Developer',
    description = 'Turning ideas into reality through code and design.',
    ctaText = 'Explore My Work',
    skills = ['React', 'Node.js', 'TypeScript', 'Design']
  } = content || {};
  
  return (
    <section className={`py-20 px-6 bg-gradient-to-r from-orange-400 to-pink-600 text-white ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <h2 className="text-2xl mb-6 opacity-90">
              {subtitle}
            </h2>
            <p className="text-lg mb-8 opacity-80 max-w-lg">
              {description}
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200">
              {ctaText}
            </button>
          </div>
          <div className="space-y-4">
            {skills.map((skill: string, index: number) => (
              <div key={index} className="bg-white bg-opacity-20 p-3 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Template 5 - Video Background
export function HeroVideoBackground({ content, theme, className = '' }: TemplateProps) {
  const { 
    title = 'John Doe', 
    subtitle = 'Digital Creator',
    description = 'Crafting exceptional digital experiences.',
    ctaText = 'Watch My Story',
    videoUrl = '/placeholder-video.mp4'
  } = content || {};
  
  return (
    <section className={`relative py-32 px-6 text-white overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          {title}
        </h1>
        <h2 className="text-2xl mb-6">
          {subtitle}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300">
          {ctaText}
        </button>
      </div>
    </section>
  );
}
