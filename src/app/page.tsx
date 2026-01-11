"use client"

import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";
import CertificateCard from "@/components/CertificateCard";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import InterestCard from "@/components/InterestCard";
import ProjectCarousel from "@/components/ProjectCarousel";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { useSectionRefs } from "@/contexts/SectionRefsContext";
import { Courier_Prime } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { educations } from "./data/educations";
import { experiences } from "./data/experiences";
import { interests } from "./data/interests";
import { projects } from "./data/projects";
import { certificates } from "./data/certificates";
import { profileLinks } from "./data/profile";

const courier_prime = Courier_Prime({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export interface Project {
  year: string;
  title: string;
  skills: string[];
  details: string;
  features: string[];
  githubUrl?: string;
  projectUrl?: string;
}

export default function Home() {

  const { topRef, educationRef, experienceRef, projectsRef, certificatesRef, interestsRef } = useSectionRefs();

  return (
    <div className="flex flex-col gap-3">
      <div ref={topRef} className="h-screen justify-center flex flex-col-reverse md:grid md:grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-3xl md:text-6xl font-[600]">Hi there, I am <b className="text-crimson-500">Taimoor</b>.</p>
          <p className="text-gray-400 text-lg md:text-xl">A Software Engineering Graduate, Startup Enthusiast and a Hobbyist Photographer.</p>
          <div className="flex flex-row gap-3 justify-center md:justify-start">
            <Link href={profileLinks.linkedin}>
              <i className="bi bi-linkedin hover:text-white text-gray-500 text-2xl"></i>
            </Link>

            <Link href={profileLinks.github}>
              <i className="bi bi-github hover:text-white text-gray-500 text-2xl"></i>
            </Link>

            <Link href={profileLinks.mail}>
              <i className="bi bi-envelope hover:text-white text-gray-500 text-2xl"></i>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[50vh] md:h-screen overflow-x-clip">
            <div
              className="flex flex-row items-baseline z-10 absolute top-0 left-0 w-[80vw] h-[80vw] -translate-x-[-7.5%] -translate-y-[-7.5%] md:w-[45vw] md:h-[45vw] md:-translate-y-[-5%] md:-translate-x-[-5%] rounded-full flex items-center justify-start overflow-hidden"
            >
              <Image width={200} height={200}
                src="/images/me.png"
                alt="Background"
                className="relative scale-110 inset-0 w-[100vw] object-cover"
              />
            </div>
            <div
              className="shadow-[0_0_50px_5px_#D2003F] brightness-110 saturate-150 absolute top-0 left-0 w-[80vw] h-[80vw] -translate-x-[-7.5%] -translate-y-[-7.5%] md:w-[45vw] md:h-[45vw] md:-translate-y-[-5%] md:-translate-x-[-5%] bg-crimson-500 rounded-full z-[0] flex items-center justify-start overflow-hidden"
            ></div>
            <div
              className="absolute top-0 left-0 w-[100vw] h-[80vw] -translate-x-[-6%] -translate-y-[-7.5%] md:w-[70vw] md:h-[50vw] md:-translate-y-[0.5%] md:scale-90 md:-translate-x-[1.75%] rounded-l-full z-[0] flex items-center justify-start overflow-hidden"
            >
              <div className={`${courier_prime.className} text-white font-mono font-bold text-[64px] md:text-[128px] leading-tight text-left whitespace-nowrap ml-[-20%]`}>
                <span>
                  1143dfs67adf678ds9af0df9s87af67g8f6709<br />
                  iua98as890uas0d0ag67ts9aa08cf8044ad1c3<br />
                  1s40c2m8g08mhc21jc4998fa9aaed479dd2abf<br />
                  caf7adfsfads788gs9ol87947ce27d11dd5e9f<br />
                  dgs8798787dsfgash0d79703176277b222c228<br />
                  sdfgsa79s8dg7gy0u9d0sagnshgs9d807f8657<br />
                  g87098790ds89sdfw892uijo7bb254d8d7934b
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={educationRef}>
        <ScrollFadeIn>
          <AnimatedSectionHeader title="Education" />
        </ScrollFadeIn>
        <div className="flex flex-col gap-3">
          {educations.map((education, index) => (
            <ScrollFadeIn key={index}>
              <EducationCard
                {...education}
              />
            </ScrollFadeIn>
          ))}
        </div>
      </div>

      <div ref={projectsRef}>
        <ScrollFadeIn>
          <AnimatedSectionHeader title="Projects" />
          <div className="flex flex-row justify-center">
            <p className="text-gray-500 text-sm">Swipe left or right to view more.</p>
          </div>
        </ScrollFadeIn>
        <div className="flex flex-col items-center">
          <ScrollFadeIn>
            <ProjectCarousel
              projects={projects}
            />
          </ScrollFadeIn>
        </div>
      </div>

      <div ref={certificatesRef}>
        <ScrollFadeIn>
          <AnimatedSectionHeader title="Certificates" />
        </ScrollFadeIn>
        <div className="flex flex-col items-center">
          {certificates.map((certificate, index) =>
            <ScrollFadeIn key={index}>
              <CertificateCard
                year={certificate.year}
                title={certificate.title}
                about={certificate.about}
                courses={certificate.courses}
                certificateUrl={certificate.certificateUrl}
                platformIconUrl={certificate.platformIconUrl}
              />
            </ScrollFadeIn>
          )}
        </div>
      </div>

      <div ref={experienceRef}>
        <ScrollFadeIn>
          <AnimatedSectionHeader title="Experience" />
        </ScrollFadeIn>
        <div className="flex flex-col gap-3">
          {experiences.map((exp, index) => (
            <ScrollFadeIn key={index}>
              <ExperienceCard
                companyName={exp.companyName}
                companyLogoUrl={exp.companyLogoUrl}
                location={exp.location}
                companyDescription={exp.companyDescription}
                roles={exp.roles}
                technologies={exp.technologies}
                companyUrl={exp.companyUrl}
              />
            </ScrollFadeIn>
          ))}
        </div>
      </div>

      <div ref={interestsRef}>
        <ScrollFadeIn>
          <AnimatedSectionHeader title="Other Interests" />
        </ScrollFadeIn>
        <div className="space-y-4">
          {interests.map((interest, index) => (
            <ScrollFadeIn key={index}>
              <InterestCard
                {...interest}
              />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
