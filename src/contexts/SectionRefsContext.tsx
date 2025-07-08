// context/SectionRefsContext.tsx
'use client';

import { createContext, RefObject, useContext, useRef } from 'react';

export const SectionRefsContext = createContext<{
  topRef: RefObject<HTMLDivElement | null>;
  educationRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  certificatesRef: RefObject<HTMLDivElement | null>;
  experienceRef: RefObject<HTMLDivElement | null>;
  interestsRef: RefObject<HTMLDivElement | null>;
} | null>(null);

export const SectionRefsProvider = ({ children }: { children: React.ReactNode }) => {
  const topRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{ topRef, educationRef, projectsRef, certificatesRef, experienceRef, interestsRef }}
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
