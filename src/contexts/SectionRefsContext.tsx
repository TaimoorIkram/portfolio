// context/SectionRefsContext.tsx
'use client';

import { createContext, useContext, useRef } from 'react';

export const SectionRefsContext = createContext<{
  skillsRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  certificatesRef: React.RefObject<HTMLDivElement | null>;
} | null>(null);

export const SectionRefsProvider = ({ children }: { children: React.ReactNode }) => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{ skillsRef, educationRef, experienceRef, projectsRef, certificatesRef }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  return context;
};
