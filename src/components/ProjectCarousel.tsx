// components/ProjectCarousel.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import ProjectCard from './ProjectCard';
import * as THREE from 'three';

const CARD_SPACING = 6.5;

interface Project {
  year: string;
  title: string;
  skills: string[];
  details: string;
  features: string[];
  githubUrl?: string;
  projectUrl?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectScene: React.FC<{
  projects: Project[];
  currentIndex: number;
  direction: 'next' | 'prev';
  setAnimating: (v: boolean) => void;
  onClick: (i: number) => void;
}> = ({ projects, currentIndex, setAnimating, onClick }) => {
  const groupRef = useRef<THREE.Group>(null);
  const progress = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const speed = 10;
    if (Math.abs(progress.current - currentIndex) > 0.01) {
      progress.current += (currentIndex - progress.current) * delta * speed;
      setAnimating(true);
    } else {
      progress.current = currentIndex;
      setAnimating(false);
    }
    groupRef.current.position.x = -progress.current * CARD_SPACING; // Increased spacing
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {projects.map((project, i) => (
        <Html
          key={i}
          position={[i * CARD_SPACING, 0, 0]} // Adjusted spacing
          center
          zIndexRange={[0, 0]}
        >
          <div
            onClick={() => onClick(i)}
            className={`transition-all duration-500 ease-in-out transform mx-auto
              ${i === currentIndex ? 'scale-105 opacity-100 z-10' : 'scale-90 opacity-100 z-0'}
              w-[320px] md:w-auto`}
          >
            <ProjectCard
              project={project}
              isActive={i === currentIndex}
              isVisible={true}
              onClick={() => onClick(i)}
            />
          </div>
        </Html>
      ))}
    </group>
  );
};

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextProject = () => {
    if (isAnimating) return;
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating]);

  useEffect(() => {
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (throttleTimeout || isAnimating) return;

      // Only handle horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 20) nextProject();
        else if (e.deltaX < -20) prevProject();

        // Throttle for 500ms to avoid rapid scrolls
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
        }, 500);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [isAnimating]);

  useEffect(() => {
    let startX: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;

      if (Math.abs(deltaX) > 50 && !isAnimating) {
        if (deltaX > 0) prevProject(); // Swipe right → prev
        else nextProject();           // Swipe left → next
      }

      startX = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isAnimating]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">

      <div className="w-full h-[700px] relative">
        <div className="hidden md:flex justify-between items-center absolute top-1/2 left-0 right-0 px-4 z-10 -translate-y-1/2">
          <button
            onClick={prevProject}
            disabled={isAnimating}
            className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 disabled:opacity-50"
          >
            <span className="text-xl">⟨</span>
          </button>

          <button
            onClick={nextProject}
            disabled={isAnimating}
            className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 disabled:opacity-50"
          >
            <span className="text-xl">⟩</span>
          </button>
        </div>
        <div className="w-full h-[700px] relative">
          {/* Left fade */}
          <div className="hidden md:block absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />

          {/* Right fade */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />

          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight />
            <ProjectScene
              projects={projects}
              currentIndex={currentIndex}
              direction={direction}
              setAnimating={setIsAnimating}
              onClick={goToProject}
            />
          </Canvas>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-crimson-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
