import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
}

const Section: React.FC<SectionProps> = ({ title, description, imageSrc, imagePosition = 'left' }) => {
  return (
    <section className="flex items-stretch justify-center">
      {imagePosition === 'left' && (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-4 md:mb-0">
          <img src={imageSrc} alt="Section Image" className="w-80 h-80 mr-4" />
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      )}
      {imagePosition === 'right' && (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end mb-4 md:mb-0">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-xl">{description}</p>
          </div>
          <img src={imageSrc} alt="Section Image" className="w-80 h-80 ml-4" />
        </div>
      )}
    </section>
  );
};

export default Section;
