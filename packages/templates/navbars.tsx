"use client";

// Navbar templates
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Home, User, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Utility function for class names
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

// Template 1: Modern Dark Navbar
export const ModernDarkNavbar: React.FC<any> = ({ 
  logo = "Portfolio", 
  links = ["Home", "About", "Projects", "Contact"],
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff" 
}) => (
  <nav className="w-full px-6 py-4" style={{ backgroundColor }}>
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold" style={{ color: textColor }}>{logo}</h1>
      <div className="hidden md:flex space-x-8">
        {links.map((link: string, index: number) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="hover:opacity-75 transition-opacity"
            style={{ color: textColor }}
          >
            {link}
          </a>
        ))}
      </div>
      <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke={textColor} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
);

// Template 2: Clean Light Navbar
export const CleanLightNavbar: React.FC<any> = ({ 
  logo = "Portfolio", 
  links = ["Home", "About", "Projects", "Contact"],
  accentColor = "#3b82f6" 
}) => (
  <nav className="w-full bg-white shadow-sm border-b px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">{logo}</h1>
      <div className="hidden md:flex space-x-8">
        {links.map((link: string, index: number) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            style={{ '--hover-color': accentColor } as React.CSSProperties}
          >
            {link}
          </a>
        ))}
      </div>
      <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
);

// Template 3: Gradient Navbar
export const GradientNavbar: React.FC<any> = ({ 
  logo = "Portfolio", 
  links = ["Home", "About", "Projects", "Contact"],
  gradientFrom = "#667eea",
  gradientTo = "#764ba2" 
}) => (
  <nav 
    className="w-full px-6 py-4"
    style={{
      background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
    }}
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">{logo}</h1>
      <div className="hidden md:flex space-x-8">
        {links.map((link: string, index: number) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            {link}
          </a>
        ))}
      </div>
      <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
);

// Template 4: Minimalist Navbar
export const MinimalistNavbar: React.FC<any> = ({ 
  logo = "Portfolio", 
  links = ["Home", "About", "Projects", "Contact"] 
}) => (
  <nav className="w-full px-6 py-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-light text-gray-900">{logo}</h1>
      </div>
      <div className="flex justify-center space-x-12">
        {links.map((link: string, index: number) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm uppercase tracking-wider font-medium"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

// Template 5: Sidebar Style Navbar
export const SidebarNavbar: React.FC<any> = ({ 
  logo = "Portfolio", 
  links = ["Home", "About", "Projects", "Contact"],
  backgroundColor = "#f8fafc" 
}) => (
  <nav className="w-full px-6 py-4" style={{ backgroundColor }}>
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-gray-900">{logo}</h1>
        <div className="hidden lg:flex space-x-1">
          {links.map((link: string, index: number) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <button className="lg:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
);

// Template 6: 🔥 PREMIUM FLOATING NAVBAR 🔥 (Aceternity Style)
export const FloatingNavbar: React.FC<any> = ({ 
  navItems = [
    { name: "Home", link: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
    { name: "Projects", link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> }
  ],
  className = "",
  showLoginButton = true
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        {showLoginButton && (
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

// Template Definitions
export const navbarTemplates: TemplateDefinition[] = [
  {
    id: 'navbar-modern-dark',
    name: 'Modern Dark',
    type: SectionType.NAVBAR,
    description: 'A modern dark navbar with clean typography',
    preview: '/templates/navbar-modern-dark.png',
    component: ModernDarkNavbar,
    defaultProps: {
      logo: "Portfolio",
      links: ["Home", "About", "Projects", "Contact"],
      backgroundColor: "#1a1a1a",
      textColor: "#ffffff"
    },
    configSchema: {
      fields: [
        { name: 'logo', type: 'text', label: 'Logo Text', required: true },
        { name: 'backgroundColor', type: 'color', label: 'Background Color' },
        { name: 'textColor', type: 'color', label: 'Text Color' },
      ]
    }
  },
  {
    id: 'navbar-clean-light',
    name: 'Clean Light',
    type: SectionType.NAVBAR,
    description: 'A clean light navbar with subtle shadows',
    preview: '/templates/navbar-clean-light.png',
    component: CleanLightNavbar,
    defaultProps: {
      logo: "Portfolio",
      links: ["Home", "About", "Projects", "Contact"],
      accentColor: "#3b82f6"
    },
    configSchema: {
      fields: [
        { name: 'logo', type: 'text', label: 'Logo Text', required: true },
        { name: 'accentColor', type: 'color', label: 'Accent Color' },
      ]
    }
  },
  {
    id: 'navbar-gradient',
    name: 'Gradient',
    type: SectionType.NAVBAR,
    description: 'A vibrant gradient navbar',
    preview: '/templates/navbar-gradient.png',
    component: GradientNavbar,
    defaultProps: {
      logo: "Portfolio",
      links: ["Home", "About", "Projects", "Contact"],
      gradientFrom: "#667eea",
      gradientTo: "#764ba2"
    },
    configSchema: {
      fields: [
        { name: 'logo', type: 'text', label: 'Logo Text', required: true },
        { name: 'gradientFrom', type: 'color', label: 'Gradient Start' },
        { name: 'gradientTo', type: 'color', label: 'Gradient End' },
      ]
    }
  },
  {
    id: 'navbar-minimalist',
    name: 'Minimalist',
    type: SectionType.NAVBAR,
    description: 'A centered minimalist design',
    preview: '/templates/navbar-minimalist.png',
    component: MinimalistNavbar,
    defaultProps: {
      logo: "Portfolio",
      links: ["Home", "About", "Projects", "Contact"]
    },
    configSchema: {
      fields: [
        { name: 'logo', type: 'text', label: 'Logo Text', required: true },
      ]
    }
  },
  {
    id: 'navbar-sidebar',
    name: 'Sidebar Style',
    type: SectionType.NAVBAR,
    description: 'Sidebar-inspired horizontal layout',
    preview: '/templates/navbar-sidebar.png',
    component: SidebarNavbar,
    defaultProps: {
      logo: "Portfolio",
      links: ["Home", "About", "Projects", "Contact"],
      backgroundColor: "#f8fafc"
    },
    configSchema: {
      fields: [
        { name: 'logo', type: 'text', label: 'Logo Text', required: true },
        { name: 'backgroundColor', type: 'color', label: 'Background Color' },
      ]
    }
  },
  {
    id: 'navbar-floating-premium',
    name: '🔥 Floating (Premium)',
    type: SectionType.NAVBAR,
    description: 'Premium floating navbar with smooth animations and scroll detection',
    preview: '/templates/navbar-floating-premium.png',
    component: FloatingNavbar,
    defaultProps: {
      navItems: [
        { name: "Home", link: "#home", icon: "Home" },
        { name: "About", link: "#about", icon: "User" },
        { name: "Projects", link: "#projects", icon: "Briefcase" },
        { name: "Contact", link: "#contact", icon: "Mail" }
      ],
      showLoginButton: true
    },
    configSchema: {
      fields: [
        { name: 'showLoginButton', type: 'boolean', label: 'Show Login Button' },
      ]
    }
  }
];
