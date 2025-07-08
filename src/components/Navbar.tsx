'use client';

import React, { RefObject, useEffect, useState } from 'react';
import GenericButton from './GenericButton';
import GenericActionButton from './GenericActionButton';
import FullScreenDropdown from './FullScreenDropdown';
import { useSectionRefs } from '@/contexts/SectionRefsContext';
import Link from 'next/link';

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    const { topRef, interestsRef, educationRef, experienceRef, projectsRef, certificatesRef } = useSectionRefs();
    const [currentRef, setCurrentRef] = useState<number>(-1);
    const refsList = [topRef, educationRef, projectsRef, certificatesRef, experienceRef, interestsRef];

    const scrollToSection = (sectionRef: RefObject<HTMLDivElement | null>, offset = 80) => {
        if (sectionRef.current) {
            const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setCurrentRef(refsList.indexOf(sectionRef));
            console.log("Attempted to update current ref from", currentRef, "to", refsList.indexOf(sectionRef));

        }
    };

    // TODO: fix this shit: this does not highlight the proper section button
    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 100);

            const scrollPosition = window.scrollY + 100; // 100px offset for fixed navbar
            for (let i = refsList.length-1; i >= 0 ; i--) {
                const ref = refsList[i];
                const element = ref.current;
                if (element && (element.offsetTop <= scrollPosition)) {
                    console.log(scrollPosition, "???", element.offsetTop);
                    
                    setCurrentRef(i);
                    console.log("Attempted to update current ref from", currentRef, "to", refsList.indexOf(ref));
                    break;
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const actions = [
        { onClick: () => scrollToSection(educationRef), label: "Education" },
        { onClick: () => scrollToSection(projectsRef), label: "Projects" },
        { onClick: () => scrollToSection(certificatesRef), label: "Certificates" },
        { onClick: () => scrollToSection(experienceRef), label: "Experience" },
        { onClick: () => scrollToSection(interestsRef), label: "Other Interests" },
        { special: true, download: "/docs/TaimoorIkram_Resume_Test.pdf", icon: "download", label: "Download CV" },
    ];

    const actionButtons = [<div key={-1}></div>]
    actionButtons.push(...actions.map((action, idx) => {
        if (action.special) {
            if (action.download) return <Link key={idx} download={true} href={action.download}>
                <GenericActionButton icon={action.icon} label={action.label} />
            </Link>
            else return <></>
        }
        else return <GenericButton key={idx} onClick={action.onClick} label={action.label} sectionIndex={idx+1} currentSectionIndex={currentRef} />
    }));

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
                        {actionButtons}
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <FullScreenDropdown
                            title="Navigate"
                            options={actionButtons}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}
