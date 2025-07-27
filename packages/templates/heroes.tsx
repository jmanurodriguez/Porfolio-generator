"use client";

// Hero templates
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Template 1: Center Aligned Hero
export const CenterAlignedHero: React.FC<any> = ({ 
  title = "Welcome to My Portfolio",
  subtitle = "I'm a passionate developer creating amazing digital experiences",
  ctaText = "View My Work",
  backgroundImage = "",
  backgroundColor = "#f9fafb"
}) => (
  <section 
    className="min-h-screen flex items-center justify-center px-6 py-20"
    style={{
      backgroundColor,
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
        {ctaText}
      </button>
    </div>
  </section>
);

// Template 2: Split Screen Hero
export const SplitScreenHero: React.FC<any> = ({ 
  title = "John Doe",
  subtitle = "Full Stack Developer",
  description = "I create beautiful, responsive web applications using modern technologies.",
  ctaText = "Get In Touch",
  profileImage = "/placeholder-avatar.jpg",
  accentColor = "#6366f1"
}) => (
  <section className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          {subtitle}
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {description}
        </p>
        <button 
          className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors"
          style={{ backgroundColor: accentColor }}
        >
          {ctaText}
        </button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
          <img 
            src={profileImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// Template 3: Gradient Overlay Hero
export const GradientOverlayHero: React.FC<any> = ({ 
  title = "Build Something Amazing",
  subtitle = "Bringing ideas to life through code and creativity",
  ctaText = "See My Projects",
  backgroundImage = "/hero-bg.jpg",
  overlayOpacity = 0.7
}) => (
  <section 
    className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div 
      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
      style={{ opacity: overlayOpacity }}
    ></div>
    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
        {subtitle}
      </p>
      <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
        {ctaText}
      </button>
    </div>
  </section>
);

// Template 4: Minimal Text Hero
export const MinimalTextHero: React.FC<any> = ({ 
  title = "Designer & Developer",
  subtitle = "Crafting digital experiences that matter",
  description = "I help businesses and individuals create compelling digital presences through thoughtful design and robust development.",
  email = "hello@example.com"
}) => (
  <section className="min-h-screen flex items-center px-6 py-20">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
        {title}
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
        {subtitle}
      </h2>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl">
        {description}
      </p>
      <a 
        href={`mailto:${email}`}
        className="text-lg text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600"
      >
        {email}
      </a>
    </div>
  </section>
);

// Template 5: Animated Hero
export const AnimatedHero: React.FC<any> = ({ 
  title = "Hello, I'm",
  name = "Alex Smith",
  roles = ["Developer", "Designer", "Creator"],
  ctaText = "Let's Work Together",
  backgroundColor = "#0f172a"
}) => (
  <section 
    className="min-h-screen flex items-center justify-center px-6 py-20"
    style={{ backgroundColor }}
  >
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-3xl md:text-4xl font-light mb-4">
        {title}
      </h1>
      <h2 className="text-5xl md:text-7xl font-bold mb-8">
        {name}
      </h2>
      <div className="text-2xl md:text-3xl text-blue-400 mb-12 font-light">
        {roles.join(" • ")}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors">
        {ctaText}
      </button>
    </div>
  </section>
);

// Template 6: 🔥 PREMIUM SPLIT SCREEN HERO 🔥 (Chakra Style)
export const PremiumSplitHero: React.FC<any> = ({ 
  title = "Full Stack Developer",
  subtitle = "Building the future, one line of code at a time",
  description = "I create exceptional digital experiences with modern technologies and thoughtful design. Let's bring your ideas to life.",
  ctaText = "View My Work",
  secondaryCTA = "Download CV",
  profileImage = "/api/placeholder/400/500",
  backgroundColor = "#ffffff",
  accentColor = "#3b82f6"
}) => (
  <section className="min-h-screen flex items-center px-6 py-20" style={{ backgroundColor }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Annotation Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: `${accentColor}15`, 
              color: accentColor,
              border: `1px solid ${accentColor}30`
            }}
          >
            ✨ Available for new projects
          </motion.div>

          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium text-gray-600 mt-4"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-all">
              <Download className="mr-2 h-5 w-5" />
              {secondaryCTA}
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-6"
          >
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Gradient Background */}
            <div 
              className="absolute inset-0 opacity-20 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${accentColor} 0%, #8b5cf6 100%)`
              }}
            />
            <img 
              src={profileImage}
              alt="Profile"
              className="w-full h-[600px] object-cover rounded-2xl"
            />
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-sm font-semibold text-gray-800">🚀 Launching soon</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Template Definitions
export const heroTemplates: TemplateDefinition[] = [
  {
    id: 'hero-center-aligned',
    name: 'Center Aligned',
    type: SectionType.HERO,
    description: 'Classic centered hero with strong typography',
    preview: '/templates/hero-center-aligned.png',
    component: CenterAlignedHero,
    defaultProps: {
      title: "Welcome to My Portfolio",
      subtitle: "I'm a passionate developer creating amazing digital experiences",
      ctaText: "View My Work",
      backgroundColor: "#f9fafb"
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Main Title', required: true },
        { name: 'subtitle', type: 'textarea', label: 'Subtitle' },
        { name: 'ctaText', type: 'text', label: 'Button Text' },
        { name: 'backgroundColor', type: 'color', label: 'Background Color' },
        { name: 'backgroundImage', type: 'image', label: 'Background Image' },
      ]
    }
  },
  {
    id: 'hero-split-screen',
    name: 'Split Screen',
    type: SectionType.HERO,
    description: 'Split layout with text and profile image',
    preview: '/templates/hero-split-screen.png',
    component: SplitScreenHero,
    defaultProps: {
      title: "John Doe",
      subtitle: "Full Stack Developer",
      description: "I create beautiful, responsive web applications using modern technologies.",
      ctaText: "Get In Touch",
      profileImage: "/placeholder-avatar.jpg",
      accentColor: "#6366f1"
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Name', required: true },
        { name: 'subtitle', type: 'text', label: 'Role/Title' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'ctaText', type: 'text', label: 'Button Text' },
        { name: 'profileImage', type: 'image', label: 'Profile Image' },
        { name: 'accentColor', type: 'color', label: 'Accent Color' },
      ]
    }
  },
  {
    id: 'hero-gradient-overlay',
    name: 'Gradient Overlay',
    type: SectionType.HERO,
    description: 'Background image with gradient overlay',
    preview: '/templates/hero-gradient-overlay.png',
    component: GradientOverlayHero,
    defaultProps: {
      title: "Build Something Amazing",
      subtitle: "Bringing ideas to life through code and creativity",
      ctaText: "See My Projects",
      backgroundImage: "/hero-bg.jpg",
      overlayOpacity: 0.7
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Main Title', required: true },
        { name: 'subtitle', type: 'textarea', label: 'Subtitle' },
        { name: 'ctaText', type: 'text', label: 'Button Text' },
        { name: 'backgroundImage', type: 'image', label: 'Background Image' },
        { name: 'overlayOpacity', type: 'number', label: 'Overlay Opacity', validation: { min: 0, max: 1 } },
      ]
    }
  },
  {
    id: 'hero-minimal-text',
    name: 'Minimal Text',
    type: SectionType.HERO,
    description: 'Clean typography-focused layout',
    preview: '/templates/hero-minimal-text.png',
    component: MinimalTextHero,
    defaultProps: {
      title: "Designer & Developer",
      subtitle: "Crafting digital experiences that matter",
      description: "I help businesses and individuals create compelling digital presences through thoughtful design and robust development.",
      email: "hello@example.com"
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Main Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'email', type: 'text', label: 'Contact Email' },
      ]
    }
  },
  {
    id: 'hero-animated',
    name: 'Animated',
    type: SectionType.HERO,
    description: 'Dynamic hero with role animation',
    preview: '/templates/hero-animated.png',
    component: AnimatedHero,
    defaultProps: {
      title: "Hello, I'm",
      name: "Alex Smith",
      roles: ["Developer", "Designer", "Creator"],
      ctaText: "Let's Work Together",
      backgroundColor: "#0f172a"
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Greeting Text' },
        { name: 'name', type: 'text', label: 'Your Name', required: true },
        { name: 'ctaText', type: 'text', label: 'Button Text' },
        { name: 'backgroundColor', type: 'color', label: 'Background Color' },
      ]
    }
  },
  {
    id: 'hero-premium-split',
    name: '🔥 Split Screen (Premium)',
    type: SectionType.HERO,
    description: 'Premium split-screen hero with smooth animations and modern design',
    preview: '/templates/hero-premium-split.png',
    component: PremiumSplitHero,
    defaultProps: {
      title: "Full Stack Developer",
      subtitle: "Building the future, one line of code at a time",
      description: "I create exceptional digital experiences with modern technologies and thoughtful design. Let's bring your ideas to life.",
      ctaText: "View My Work",
      secondaryCTA: "Download CV",
      profileImage: "/api/placeholder/400/500",
      backgroundColor: "#ffffff",
      accentColor: "#3b82f6"
    },
    configSchema: {
      fields: [
        { name: 'title', type: 'text', label: 'Main Title', required: true },
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'description', type: 'textarea', label: 'Description' },
        { name: 'ctaText', type: 'text', label: 'Primary Button Text' },
        { name: 'secondaryCTA', type: 'text', label: 'Secondary Button Text' },
        { name: 'backgroundColor', type: 'color', label: 'Background Color' },
        { name: 'accentColor', type: 'color', label: 'Accent Color' },
        { name: 'profileImage', type: 'image', label: 'Profile Image' },
      ]
    }
  }
];
