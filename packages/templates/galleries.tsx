import React from 'react';
import { TemplateDefinition, SectionType } from '@packages/types';

// Gallery Template Components
const ImageGridGallery: React.FC<any> = ({ data, config = {} }) => {
  const images = data?.images || [];
  const columns = config.columns || 3;
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Gallery'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {images.map((image: any, index: number) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={image.src || '/placeholder.jpg'} 
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {image.caption && (
              <p className="mt-2 text-sm text-gray-600 text-center">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const MasonryGallery: React.FC<any> = ({ data, config = {} }) => {
  const images = data?.images || [];
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Masonry Gallery'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((image: any, index: number) => (
          <div key={index} className="break-inside-avoid group cursor-pointer">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={image.src || '/placeholder.jpg'} 
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              {image.caption && (
                <div className="p-4">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LightboxGallery: React.FC<any> = ({ data, config = {} }) => {
  const images = data?.images || [];
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Photo Gallery'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image: any, index: number) => (
          <div key={index} className="group cursor-pointer relative overflow-hidden rounded-lg">
            <div className="aspect-square bg-gray-200">
              <img 
                src={image.src || '/placeholder.jpg'} 
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SliderGallery: React.FC<any> = ({ data, config = {} }) => {
  const images = data?.images || [];
  
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Image Slider'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}
      </div>
      <div className="relative">
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {images.map((image: any, index: number) => (
              <div key={index} className="flex-shrink-0 w-80 group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={image.src || '/placeholder.jpg'} 
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {image.caption && (
                  <p className="mt-3 text-sm text-gray-600 text-center">{image.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FilterableGallery: React.FC<any> = ({ data, config = {} }) => {
  const images = data?.images || [];
  const categories = [...new Set(images.map((img: any) => img.category || 'All'))];
  
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {data?.title || 'Portfolio Gallery'}
        </h2>
        {data?.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {data.description}
          </p>
        )}
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
            All
          </button>
          {categories.map((category, index) => (
            <button 
              key={index}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              {String(category)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image: any, index: number) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
              <img 
                src={image.src || '/placeholder.jpg'} 
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-medium">{image.title || 'Image'}</h3>
                {image.category && (
                  <p className="text-sm text-gray-200">{image.category}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Template Definitions
export const galleryTemplates: TemplateDefinition[] = [
  {
    id: 'image-grid-gallery',
    name: 'Image Grid Gallery',
    description: 'Clean grid layout with consistent aspect ratios',
    type: SectionType.GALLERY,
    preview: '/previews/image-grid-gallery.jpg',
    component: ImageGridGallery,
    defaultProps: {},
    configSchema: {
      fields: [
        {
          name: 'columns',
          type: 'number',
          label: 'Number of Columns',
          validation: {
            min: 1,
            max: 6,
          },
        },
      ],
    },
  },
  {
    id: 'masonry-gallery',
    name: 'Masonry Gallery',
    description: 'Pinterest-style masonry layout with variable heights',
    type: SectionType.GALLERY,
    preview: '/previews/masonry-gallery.jpg',
    component: MasonryGallery,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'lightbox-gallery',
    name: 'Lightbox Gallery',
    description: 'Interactive gallery with hover effects and zoom functionality',
    type: SectionType.GALLERY,
    preview: '/previews/lightbox-gallery.jpg',
    component: LightboxGallery,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'slider-gallery',
    name: 'Slider Gallery',
    description: 'Horizontal scrolling gallery with smooth navigation',
    type: SectionType.GALLERY,
    preview: '/previews/slider-gallery.jpg',
    component: SliderGallery,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
  {
    id: 'filterable-gallery',
    name: 'Filterable Gallery',
    description: 'Gallery with category filters and smooth animations',
    type: SectionType.GALLERY,
    preview: '/previews/filterable-gallery.jpg',
    component: FilterableGallery,
    defaultProps: {},
    configSchema: {
      fields: [],
    },
  },
];
