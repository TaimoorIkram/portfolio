'use client';

import React, { RefObject, useEffect, useState } from 'react';
import GenericButton from './GenericButton';
import GenericActionButton from './GenericActionButton';
import FullScreenDropdown from './FullScreenDropdown';
import { useSectionRefs } from '@/contexts/SectionRefsContext';

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    const { skillsRef, educationRef, experienceRef, projectsRef, certificatesRef } = useSectionRefs();
    const scrollToSection = (sectionRef: RefObject<HTMLDivElement | null>, offset = 80) => {
        if (sectionRef.current) {
            const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const actions = [
        <GenericButton label="Skills" key={0} />,
        <GenericButton onClick={() => scrollToSection(educationRef)} label="Education" key={1} />,
        <GenericButton onClick={() => scrollToSection(experienceRef)} label="Experience" key={2} />,
        <GenericButton onClick={() => scrollToSection(projectsRef)} label="Projects" key={3} />,
        <GenericButton onClick={() => scrollToSection(certificatesRef)} label="Certificates" key={4} />,
        <GenericActionButton icon="download" label="Download CV" key={5} />,
    ];

    return (
        <>
            {/* Reserve space to prevent layout shift */}
            <div className="h-0" />

            <header
                className={`fixed top-0 left-0 top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="mx-auto px-4 py-4 flex flex-row justify-between items-center transition-all duration-300">
                    {/* Logo */}
                    <div>
                        <p className='text-2xl md:text-3xl font-black'><span className='text-crimson-500'>Taimoor</span>Ikram<span className='text-sm font-normal'>.com</span></p>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="md:flex md:flex-row gap-3 hidden">
                        {actions.map((action) => action)}
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <FullScreenDropdown
                            title="Navigate"
                            options={actions}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}
