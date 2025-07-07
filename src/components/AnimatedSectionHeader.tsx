import React, { RefObject, useEffect, useRef, useState } from 'react';

interface AnimatedSectionHeaderProps {
  title: string;
  ref?: RefObject<HTMLDivElement | null>
}

const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({ title, ref }) => {
  const headerDefaultRef = useRef<HTMLDivElement>(null);
  const headerRef = ref ?? headerDefaultRef;
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = headerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  // Generate random string for background
  const backgroundText = "a912fag3hsdh67kg8j90t8naw8n1trh2yj34kyu5i6l789jk7j6h5crac9w4nw9ap8c1l32hgf8790ad9sf80s76g8d67";
  
  return (
    <div 
      ref={headerRef}
      className="rounded-md relative flex flex-row font-black justify-center items-center text-6xl p-5 overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '120px',
        transition: 'all 0.3s ease-out'
      }}
    >
      {/* Animated background overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 25%, 
              rgba(255,255,255,0.1) 25%, 
              rgba(255,255,255,0.1) 50%, 
              transparent 50%, 
              transparent 75%, 
              rgba(255,255,255,0.1) 75%
            )
          `,
          backgroundSize: '20px 20px',
          animation: 'slide 3s linear infinite'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Background text with enhanced effects */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <p 
          className="text-6xl md:text-8xl lg:text-9xl font-black opacity-10 whitespace-nowrap select-none"
          style={{
            transform: `translateX(-50%) translateX(${mousePosition.x * 0.5}px)`,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.1)',
            textShadow: '0 0 20px rgba(255,255,255,0.1)',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {backgroundText}
        </p>
      </div>

      {/* Main title with enhanced styling */}
      <div className="relative z-10 text-center">
        <h2 
          className={`
            text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none
            transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{
            background: `
              linear-gradient(135deg, 
                #ffffff 0%, 
                #f8fafc 25%, 
                #ffffff 50%, 
                #e2e8f0 75%, 
                #ffffff 100%
              )
            `,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            filter: `
              drop-shadow(0 2px 4px rgba(0,0,0,0.3))
              drop-shadow(0 0 20px rgba(255,255,255,0.2))
            `,
            transform: `
              perspective(1000px) 
              rotateX(${(mousePosition.y - 50) * 0.1}deg) 
              rotateY(${(mousePosition.x - 50) * 0.1}deg)
            `,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {title}
        </h2>
        
        {/* Animated underline */}
        <div 
          className={`
            mx-auto mt-2 h-1 bg-gradient-to-r from-white/50 via-white to-white/50 rounded-full
            transition-all duration-1000 ease-out
            ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
          style={{
            animationDelay: '0.5s'
          }}
        />
      </div>

      {/* Glowing orb that follows mouse */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSectionHeader;