// Export all template components
export * from './navbars';
export * from './heroes';
export * from './cards';

// Template registry for dynamic loading
import { SectionType, TemplateDefinition } from '@packages/types';

// Navbars
import { 
  NavbarModernDark, 
  NavbarCleanLight, 
  NavbarGradient, 
  NavbarMinimalist, 
  NavbarMobileFirst 
} from './navbars';

// Heroes
import { 
  HeroCenterAligned, 
  HeroSplitLayout, 
  HeroMinimalDark, 
  HeroCreativeAsymmetric, 
  HeroVideoBackground 
} from './heroes';

// Cards
import { 
  CardsGridLayout, 
  CardsMasonryLayout, 
  CardsHorizontalScroll, 
  CardsMinimal, 
  CardsFeatured 
} from './cards';

export const TEMPLATE_REGISTRY: TemplateDefinition[] = [
  // Navbar Templates
  {
    id: 'navbar-modern-dark',
    name: 'Modern Dark',
    type: SectionType.NAVBAR,
    description: 'Clean navigation with dark theme',
    preview: '/templates/navbar-modern-dark.jpg',
    defaultContent: {
      logo: 'Portfolio',
      items: ['Home', 'Projects', 'About', 'Contact']
    },
    component: NavbarModernDark
  },
  {
    id: 'navbar-clean-light',
    name: 'Clean Light',
    type: SectionType.NAVBAR,
    description: 'Minimalist light navigation',
    preview: '/templates/navbar-clean-light.jpg',
    defaultContent: {
      logo: 'Portfolio',
      items: ['Home', 'Projects', 'About', 'Contact']
    },
    component: NavbarCleanLight
  },
  {
    id: 'navbar-gradient',
    name: 'Gradient',
    type: SectionType.NAVBAR,
    description: 'Colorful gradient navigation',
    preview: '/templates/navbar-gradient.jpg',
    defaultContent: {
      logo: 'Portfolio',
      items: ['Home', 'Projects', 'About', 'Contact']
    },
    component: NavbarGradient
  },
  {
    id: 'navbar-minimalist',
    name: 'Minimalist',
    type: SectionType.NAVBAR,
    description: 'Ultra minimal navigation',
    preview: '/templates/navbar-minimalist.jpg',
    defaultContent: {
      logo: 'Portfolio',
      items: ['Home', 'Projects', 'About', 'Contact']
    },
    component: NavbarMinimalist
  },
  {
    id: 'navbar-mobile-first',
    name: 'Mobile First',
    type: SectionType.NAVBAR,
    description: 'Responsive mobile-first navigation',
    preview: '/templates/navbar-mobile-first.jpg',
    defaultContent: {
      logo: 'Portfolio',
      items: ['Home', 'Projects', 'About', 'Contact']
    },
    component: NavbarMobileFirst
  },

  // Hero Templates
  {
    id: 'hero-center-aligned',
    name: 'Center Aligned',
    type: SectionType.HERO,
    description: 'Classic centered hero section',
    preview: '/templates/hero-center-aligned.jpg',
    defaultContent: {
      title: 'John Doe',
      subtitle: 'Full Stack Developer',
      description: 'I create beautiful and functional web applications using modern technologies.',
      ctaText: 'Get In Touch',
      image: '/placeholder-avatar.jpg'
    },
    component: HeroCenterAligned
  },
  {
    id: 'hero-split-layout',
    name: 'Split Layout',
    type: SectionType.HERO,
    description: 'Two-column hero with image',
    preview: '/templates/hero-split-layout.jpg',
    defaultContent: {
      title: 'John Doe',
      subtitle: 'Full Stack Developer',
      description: 'I create beautiful and functional web applications using modern technologies.',
      ctaText: 'View My Work',
      secondaryCtaText: 'Download CV',
      image: '/placeholder-avatar.jpg'
    },
    component: HeroSplitLayout
  },
  {
    id: 'hero-minimal-dark',
    name: 'Minimal Dark',
    type: SectionType.HERO,
    description: 'Dark minimal hero section',
    preview: '/templates/hero-minimal-dark.jpg',
    defaultContent: {
      title: 'John Doe',
      subtitle: 'Full Stack Developer',
      description: 'Building digital experiences that matter.',
      ctaText: 'Let\'s Work Together'
    },
    component: HeroMinimalDark
  },
  {
    id: 'hero-creative-asymmetric',
    name: 'Creative Asymmetric',
    type: SectionType.HERO,
    description: 'Creative asymmetric layout',
    preview: '/templates/hero-creative-asymmetric.jpg',
    defaultContent: {
      title: 'John Doe',
      subtitle: 'Creative Developer',
      description: 'Turning ideas into reality through code and design.',
      ctaText: 'Explore My Work',
      skills: ['React', 'Node.js', 'TypeScript', 'Design']
    },
    component: HeroCreativeAsymmetric
  },
  {
    id: 'hero-video-background',
    name: 'Video Background',
    type: SectionType.HERO,
    description: 'Hero with video background',
    preview: '/templates/hero-video-background.jpg',
    defaultContent: {
      title: 'John Doe',
      subtitle: 'Digital Creator',
      description: 'Crafting exceptional digital experiences.',
      ctaText: 'Watch My Story',
      videoUrl: '/placeholder-video.mp4'
    },
    component: HeroVideoBackground
  },

  // Cards Templates
  {
    id: 'cards-grid-layout',
    name: 'Grid Layout',
    type: SectionType.CARDS,
    description: 'Classic grid of project cards',
    preview: '/templates/cards-grid-layout.jpg',
    defaultContent: {
      title: 'My Projects',
      projects: [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce solution built with React and Node.js',
          image: '/placeholder-project.jpg',
          technologies: ['React', 'Node.js', 'MongoDB'],
          link: '#'
        }
      ]
    },
    component: CardsGridLayout
  },
  {
    id: 'cards-masonry-layout',
    name: 'Masonry Layout',
    type: SectionType.CARDS,
    description: 'Pinterest-style masonry layout',
    preview: '/templates/cards-masonry-layout.jpg',
    defaultContent: {
      title: 'Featured Work',
      projects: [
        {
          id: 1,
          title: 'Mobile App Design',
          category: 'UI/UX',
          image: '/placeholder-project.jpg',
          link: '#'
        }
      ]
    },
    component: CardsMasonryLayout
  },
  {
    id: 'cards-horizontal-scroll',
    name: 'Horizontal Scroll',
    type: SectionType.CARDS,
    description: 'Horizontally scrolling cards',
    preview: '/templates/cards-horizontal-scroll.jpg',
    defaultContent: {
      title: 'Recent Projects',
      projects: [
        {
          id: 1,
          title: 'Project Alpha',
          description: 'Description of project alpha',
          image: '/placeholder-project.jpg',
          status: 'Completed'
        }
      ]
    },
    component: CardsHorizontalScroll
  },
  {
    id: 'cards-minimal',
    name: 'Minimal',
    type: SectionType.CARDS,
    description: 'Clean minimal project list',
    preview: '/templates/cards-minimal.jpg',
    defaultContent: {
      title: 'Portfolio',
      projects: [
        {
          id: 1,
          title: 'Project One',
          year: '2024',
          client: 'Client Name',
          link: '#'
        }
      ]
    },
    component: CardsMinimal
  },
  {
    id: 'cards-featured',
    name: 'Featured Project',
    type: SectionType.CARDS,
    description: 'Showcase one main project',
    preview: '/templates/cards-featured.jpg',
    defaultContent: {
      featuredProject: {
        title: 'Featured Project',
        description: 'This is my most recent and exciting project.',
        image: '/placeholder-project.jpg',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: '#'
      },
      otherProjects: []
    },
    component: CardsFeatured
  }
];

// Helper functions
export function getTemplatesByType(type: SectionType): TemplateDefinition[] {
  return TEMPLATE_REGISTRY.filter(template => template.type === type);
}

export function getTemplateById(id: string): TemplateDefinition | undefined {
  return TEMPLATE_REGISTRY.find(template => template.id === id);
}
