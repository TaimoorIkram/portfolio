// components/ProjectCarousel.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import ProjectCard from './ProjectCard';

interface Project {
  year: string;
  title: string;
  skills: string[];
  details: string;
  features: string[];
  githubUrl: string;
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
}> = ({ projects, currentIndex, direction, setAnimating, onClick }) => {
  const groupRef = useRef<any>();
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
    groupRef.current.position.x = -progress.current * 5; // Increased spacing
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {projects.map((project, i) => (
        <Html
          key={i}
          position={[i * 5, 0, 0]} // Adjusted spacing
          center
          zIndexRange={[0, 0]}
        >
          <div
            onClick={() => onClick(i)}
            className={`transition-all duration-500 ease-in-out transform
              ${i === currentIndex ? 'scale-105 opacity-100 z-10' : 'scale-90 opacity-100 z-0'}
              w-[320px] md:w-[384px]`}
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

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={prevProject}
          disabled={isAnimating}
          className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 disabled:opacity-50"
        >
          <span className="text-xl">⟨</span>
        </button>
        <div className="text-sm">
          {currentIndex + 1} / {projects.length}
        </div>
        <button
          onClick={nextProject}
          disabled={isAnimating}
          className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-all duration-200 disabled:opacity-50"
        >
          <span className="text-xl">⟩</span>
        </button>
      </div>

      <div className="w-full h-[700px] relative">
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

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
