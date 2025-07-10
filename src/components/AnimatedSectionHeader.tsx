import React, { RefObject, useEffect, useRef, useState } from 'react';

interface AnimatedSectionHeaderProps {
  title: string;
  ref?: RefObject<HTMLDivElement | null>
}

const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({ title, ref }) => {
  const headerDefaultRef = useRef<HTMLDivElement>(null);
  const headerRef = ref ?? headerDefaultRef;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, [headerRef]);

  return (
    <div
      ref={headerRef}
      className="relative flex flex-row justify-center items-center text-center py-8"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`
            w-full h-px bg-gradient-to-r from-transparent via-crimson-300 to-transparent
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-40 scale-x-100' : 'opacity-0 scale-x-0'}
          `}
        />
      </div>

      {/* Main title */}
      <div className="relative z-10">
        <h2
          className={`
            text-3xl md:text-4xl lg:text-5xl font-black
            text-crimson-100 transition-all duration-700 ease-out tracking-tight
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-1 translate-y-4'}
          `}
        >
          {title}
        </h2>

        {/* Animated accent dot */}
        <div
          className={`
            mx-auto mt-3 w-2 h-2 bg-crimson-400 rounded-full
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          `}
          style={{
            animationDelay: '0.3s'
          }}
        />
      </div>

      {/* Subtle side accents */}
      <div
        className={`
          absolute left-0 top-1/2 w-8 h-px bg-gradient-to-r from-crimson-200 to-transparent
          transition-all duration-800 ease-out transform -translate-y-1/2
          ${isVisible ? 'opacity-60 translate-x-0' : 'opacity-0 -translate-x-4'}
        `}
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className={`
          absolute right-0 top-1/2 w-8 h-px bg-gradient-to-l from-crimson-200 to-transparent
          transition-all duration-800 ease-out transform -translate-y-1/2
          ${isVisible ? 'opacity-60 translate-x-0' : 'opacity-0 translate-x-4'}
        `}
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );
};

export default AnimatedSectionHeader;