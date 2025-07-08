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
import Link from "next/link";

const courier_prime = Courier_Prime({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  const { topRef, educationRef, experienceRef, projectsRef, certificatesRef, interestsRef } = useSectionRefs();

  interface Project {
    year: string;
    title: string;
    skills: string[];
    details: string;
    features: string[];
    githubUrl: string;
  }

  const profileLinks = {
    linkedin: "https://linkedin.com/in/taimoor-ikram/",
    github: "https://github.com/TaimoorIkram/",
    mail: "mailto:taimoorikram01@gmail.com",
  }

  const institueInfo = {
    nust: {
      name: "National University of Sciences and Technology",
      location: "Islamabad, Pakistan",
      logo: "https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Header-logo.png",
      website: "https://nust.edu.pk/"
    },
    pgc: {
      name: "Punjab Group of Colleges",
      location: "Sargodha, Pakistan",
      logo: "https://crystalpng.com/wp-content/uploads/2024/10/PGC-logo-768x768.png",
      website: "https://pgc.edu/"
    },
    cgss: {
      name: "Connoisseur Grammar School System",
      location: "Sargodha, Pakistan",
      logo: "https://cgss.edu.pk/wp-content/uploads/2023/11/Conn-2-297x300.png",
      webiste: "https://cgss.edu.pk/"
    }
  }

  const educations = [
    {
      institutionName: institueInfo.nust.name,
      institutionLogoUrl: institueInfo.nust.logo,
      location: institueInfo.nust.location,
      degree: "Bachelor of Engineering",
      fieldOfStudy: "Software Engineering",
      startDate: "November 2021",
      endDate: "June 2025",
      cgpa: "3.61",
      maxCgpa: "4.0",
      institutionDescription: "Premier engineering institution in Pakistan, known for its excellence in technical education and research. Ranked among top universities for computer science programs.",
      standoutCourses: [
        {
          name: "Computer Forensics",
          grade: "A",
          description: "Basics of forensics, Windows and Linux file systems, boot order and processes, command line utilities, forensic tools, AccessData FTK, mobile, network, mail, memory and cloud forensics"
        },
        {
          name: "Network Securiy",
          grade: "A",
          description: "Basics of encryption, AES, key exhange algorithms, Diffie-Hellman, VPN, IPSec, mail, firewall and cloud security"
        },
        {
          name: "Computer Networks",
          grade: "A",
          description: "The internet, routers and routing, IPv4 and IPv6 addressing, TCP/IP protocol stack"
        },
        {
          name: "Software Quality Engineering",
          grade: "A",
          description: "Software quality, testing, types of testing"
        },
        {
          name: "Computer Architecture and Logic Design",
          grade: "A",
          description: "Computer logic, logic gates, logic circuits, adders, subtractors, multiplexers, number systems, RISC-V architecture"
        },
        {
          name: "Embedded Systems",
          grade: "A",
          description: "Assembly language, 8051 microcontroller, instruction sets, Arduino UNO"
        },
        {
          name: "Web Engineering",
          grade: "A",
          description: "The internet, HTML, CSS, JavaScript, PHP, MERN Stack and Laravel"
        },
        {
          name: "Data Structures & Algorithms",
          grade: "B+",
          description: "Advanced algorithms, complexity analysis, and optimization techniques"
        },
        {
          name: "Database Systems",
          grade: "B+",
          description: "Relational databases, SQL, normalization, and database design"
        },
        {
          name: "Software Engineering",
          grade: "B+",
          description: "SDLC, design patterns, testing methodologies, and project management"
        },
        {
          name: "Machine Learning",
          grade: "B+",
          description: "Supervised/unsupervised learning, neural networks, and practical applications"
        }
      ],
      institutionUrl: institueInfo.nust.website,
      achievements: [
        "One of the Best Final Year Projects in AI category"
      ]
    },
    {
      institutionName: institueInfo.pgc.name,
      institutionLogoUrl: institueInfo.pgc.logo,
      location: institueInfo.pgc.location,
      degree: "Intermediate",
      fieldOfStudy: "Pre-Engineering (Physics, Chemistry, Mathematics)",
      startDate: "April 2019",
      endDate: "July 2021",
      percentage: "97.45",
      institutionDescription: "One of the top education institutes for intermediate education in Pakistan.",
      standoutCourses: [
        {
          name: "Mathematics",
          grade: "A+",
          description: "Calculus, algebra, trigonometry, and analytical geometry"
        },
        {
          name: "Physics",
          grade: "A+",
          description: "Mechanics, thermodynamics, electromagnetism, and modern physics"
        }
      ],
      institutionUrl: institueInfo.pgc.website,
      achievements: [
        "Top of the class in 12th grade"
      ]
    },
    {
      institutionName: institueInfo.cgss.name,
      institutionLogoUrl: institueInfo.cgss.logo,
      location: institueInfo.cgss.location,
      degree: "Matriculation",
      fieldOfStudy: "Science (Physics, Chemistry, Biology, Mathematics)",
      startDate: "January 2017",
      endDate: "March 2019",
      percentage: "96.1",
      institutionDescription: "Leading private school network in Sargodha, focusing on holistic education and character development with international standards.",
      standoutCourses: [
        {
          name: "Mathematics",
          grade: "A+",
          description: "Advanced mathematics including geometry, algebra, and statistics"
        },
        {
          name: "Physics",
          grade: "A+",
          description: "Fundamental physics concepts and practical applications"
        },
        {
          name: "Computer Science",
          grade: "A+",
          description: "Programming basics, algorithms, and computer fundamentals"
        }
      ],
      institutionUrl: institueInfo.cgss.webiste,
      achievements: [
        "Top 10 in District in KEATS Maths Competition",
        "Inter-school debate competition participant",
        "3 Spelling Master Award Winner",
        "3 times consecutive school Head Boy",
      ]
    }
  ];

  const projects: Project[] = [
    {
      year: '2025',
      title: 'NEFT',
      skills: ['Vue.js', 'Django', 'SQLite', 'REST API'],
      details: 'A digital solution to transparently manage student contributions like donations, to their CRs. This application effectively manages all transactions, where they came from, where they have gone, and everywhere in-between. This was developed as a community service project for my university.',
      features: [
        'Student transaction tracking',
        'CR, Batch President and NSF Team\'s individual dashboards',
        'Forwarding of multiple transactions',
        'Compound transaction chaining',
        'A verification-first cash forwarding process',
        'Automatic cash cycle state updation for students to view'
      ],
      githubUrl: 'https://github.com/TaimoorIkram/neft'
    },
    {
      year: '2025',
      title: 'WaterWatcherPro',
      skills: ['Vue.js', 'Node.js', 'Network Security', 'MQTT'],
      details: 'An efficient web-based solution to track your water usage. The application allows the user to manage their sensors, add or remove sensors using a secure authentication specifically developed for constrained devices.',
      features: [
        'MQTT-based publisher-subscriber pipeline for sensor data',
        'A secure authentication protocol for constrained systems',
        'Network credential storage using hashing',
        'Secure credential transmission using constrained-system-friendly encryption',
        'Dashboards to display data effectively'
      ],
      githubUrl: 'https://github.com/TaimoorIkram/WaterWatcherPro'
    },
    {
      year: '2024',
      title: 'COMMAN',
      skills: ['Flutter', 'Django', 'SQLite'],
      details: 'Relationships and HR management becomes hard when the set of features provided by the application is so large that it overwhelms the users. COMMAN (short for COMpany MANager) is a very minimalistic solution to manage these customer and human resource relationships, developed for small scale businesses.',
      features: [
        'Customer relationship management',
        'Human resourse management',
        'Minimalistic feature set',
        'Strong link between companies, employees, tasks, and progress',
        'Role based access control',
        'Multi-platform support'
      ],
      githubUrl: 'https://github.com/TaimoorIkram/comman-backend'
    },
    {
      year: '2025',
      title: 'PriceGram',
      skills: ['Next.js (TypeScript)', 'Django', 'PostgreSQL', 'Qdrant', 'LangChain', 'Celery', 'Selenium'],
      details: 'PriceGram is an all in one solution for Pakistani online buyers to find the product that they want to buy for the best price, without having to spend hours or days scrolling different websites.',
      features: [
        'AI-powered chatbot',
        'Automated web scraping',
        'Price tracking and prediction',
        'Scraper pipeline implementation (scraping, cleaning, structuring, storing)',
        'RAG implementation',
        'Recommender system'
      ],
      githubUrl: 'https://github.com/TaimoorIkram/pricegram-ai-backend'
    },
  ];

  const certificates = [
    {
      year: "2024",
      title: "Meta Back-End Web Developer Specialization",
      about: "This specialization was completely focused around learning from the basics to the detailed level about how the web works and then how to use the Django web framework to develop powerful web applications. This specialization consisted of 9 courses.",
      courses: [
        "Introduction to Back-End Development",
        "Programming in Python",
        "Version Control",
        "Introduction to Databases for Back-End Development",
        "Django Web Framework",
        "APIs",
        "The Full Stack",
        "Back-End Developer Capstone",
        "Coding Interview Preparation",
      ],
      certificateUrl: "https://coursera.org/verify/professional-cert/S5SJKFJA56AT",
      platformIconUrl: "/images/icons/meta.png"
    }
  ]

  // data/experiences.ts
  const companyDetails = {
    rapidStart: {
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGq_1KEOwKukw/company-logo_200_200/company-logo_200_200/0/1708859246681?e=1757548800&v=beta&t=OptmgF3wcrP4nb7eSn31_36xIpVsmTNXV7GZjfJtf9U",
      profile: "https://www.linkedin.com/company/rapidstartapp/posts/?feedView=all"
    },
    hural: {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEUDDvaNx8swA/company-logo_200_200/company-logo_200_200/0/1723231497498?e=1757548800&v=beta&t=6dyjtuxzPcBB0MQ7idc5FapKVhdLe1CIy-nQP_8GFps",
      profile: "https://www.linkedin.com/company/hural%E2%84%A2/posts/?feedView=all"
    },
  }

  const experiences = [
    {
      companyName: "RapidStart",
      companyLogoUrl: companyDetails.rapidStart.logo,
      location: "Australia",
      companyDescription:
        "Grow your business with A.I. Powered Technology.",
      roles: [
        {
          title: "Backend Engineer (Remote)",
          startDate: "March 2025",
          endDate: "May 2025",
          responsibilities: [
            "Integrate as many MCP servers as possible to the AI agent"
          ],
          achievements: [
            "Created VM allocation and vision model architecture for automatic allocation and deallocation of virtual machines on the cloud",
            "Collaborated with the team effectively to communicate issues"
          ],
        },
        {
          title: "Backend Developer (Remote)",
          startDate: "November 2024",
          endDate: "February 2025",
          responsibilities: [
            "Carry out the core backend development from scratch in Django",
            "Integrate the Social Engine API into the core backend",
            "Manage the user's authentication tokens in backend",
          ],
          achievements: [
            "Complete implementation of backend with authentication",
            "Integrated all Social Engine API endpoints",
            "Implemented post scheduling using AWS Lambda webhooks with only 3 lines of Lambda code",
            "Developed an efficient payload reconstructor for post scheduling, reducing the whole backend's processing overhead by 50%",
            "Created VM allocation and vision model architecture for automatic allocation and deallocation of virtual machines on the cloud",
          ],
        },
      ],
      technologies: ["Django", "REST APIs", "MCP Servers", "Terraform", "OpenAPI", "AWS Lambda", "AWS S3", "FastAPI"],
      companyUrl: companyDetails.rapidStart.profile,
    },
    {
      companyName: "Hural",
      companyLogoUrl: companyDetails.hural.logo,
      location: "Bahrain",
      companyDescription:
        "Data analytics simplified with the power of AI.",
      roles: [
        {
          title: "Software Engineer (Freelance)",
          startDate: "September 2024",
          endDate: "October 2024",
          responsibilities: [
            "Carried out the development of a Vue-template-based Django web application",
            "Integrate the Stripe payment gateway into the backend",
            "Implement a table to CSV conversion and download feature",
          ],
          achievements: [
            "Improved the application user interface",
            "Successfully implemented 3 major product features",
          ],
        },
      ],
      technologies: ["Vue.js", "Django", "JavaScript", "PostgreSQL", "AWS", "Stripe API"],
      companyUrl: companyDetails.hural.profile,
    },

    // Add more experience objects here
  ];

  const interests = [
    {
      title: "Photography & Cinematography",
      interestIcon: "camera",
      category: "Visual Arts",
      description: "Capturing moments through digital storytelling. I focus on street photography, portraits, and landscape compositions that tell compelling visual narratives.",
      items: [
        {
          name: "Random Epics",
          description: "Candid moments of urban life and human interactions",
          imageUrl: "/images/photos/toyota.jpg",
          rating: "Featured"
        },
        {
          name: "Portrait Series",
          description: "Character studies focusing on emotion and expression",
          imageUrl: "/images/photos/flowers_altit_fort.jpg",
          rating: "Featured"
        },
        {
          name: "Landscape Collection",
          description: "Natural beauty captured during golden hour moments",
          imageUrl: "/images/photos/husseini-bridge.jpg",
          rating: "Featured"
        },
        {
          name: "Urban Architecture",
          description: "Geometric patterns and modern city structures",
          imageUrl: "/images/photos/tower_under.jpg",
          rating: "Featured"
        }
      ],
      actionUrl: "https://www.instagram.com/ikramtaimoor_2/",
      actionLabel: "View Portfolio",
      actionIcon: "instagram",
      showAsFlex: true,
    },
    {
      title: "Film & Media Analysis",
      interestIcon: "film",
      category: "Entertainment",
      description: "Exploring narrative structures, character development, and cinematography in modern television. I'm particularly drawn to complex storytelling and innovative visual techniques.",
      items: [
        {
          name: "Breaking Bad",
          description: "Masterclass in character transformation and moral complexity",
          imageUrl: "/images/series/breaking-bad.jpg",
          genre: "Crime Drama",
          year: "2008-2013",
          rating: "9.5/10"
        },
        {
          name: "Severance",
          description: "Brilliant exploration of work-life balance and identity",
          imageUrl: "/images/series/severance.jpg",
          genre: "Psychological Thriller",
          year: "2022",
          rating: "9.0/10"
        },
        {
          name: "Arcane",
          description: "Revolutionary animation and world-building in gaming adaptation",
          imageUrl: "/images/series/arcane.jpg",
          genre: "Animated Drama",
          year: "2021",
          rating: "9.4/10"
        },
        {
          name: "Squid Game",
          description: "Social commentary through survival thriller framework",
          imageUrl: "/images/series/squid-game.jpg",
          genre: "Survival Drama",
          year: "2021",
          rating: "8.9/10"
        }
      ],
      actionUrl: "https://letterboxd.com/yourusername",
      actionLabel: "My Reviews",
      actionIcon: "film"
    },
    {
      title: "Technology & Innovation",
      interestIcon: "cpu",
      category: "Professional Interest",
      description: "Staying current with emerging technologies and their applications. I enjoy exploring how new tech shapes user experiences and solves real-world problems.",
      items: [
        {
          name: "AI & Machine Learning",
          description: "Following developments in generative AI and practical applications",
          rating: "Active"
        },
        {
          name: "Web3 & Blockchain",
          description: "Understanding decentralized systems and their potential impact",
          rating: "Learning"
        },
        {
          name: "Mobile Development",
          description: "Cross-platform development and native performance optimization",
          rating: "Practicing"
        },
        {
          name: "UI/UX Trends",
          description: "Design systems, accessibility, and user-centered design principles",
          rating: "Implementing"
        }
      ],
      actionUrl: profileLinks.github,
      actionLabel: "View Projects",
      actionIcon: "code"
    }
  ];


  return (
    <div className="flex flex-col gap-3">
      <div ref={topRef} className="h-screen justify-center flex flex-col-reverse md:grid md:grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-3xl md:text-6xl font-[600]">Hi there, I am <b className="text-crimson-500">Taimoor</b>.</p>
          <p className="text-gray-400 text-lg md:text-xl">A Software Engineering Graduate, Startup Enthusiast and a Hobbyist Photographer.</p>
          <div className="flex flex-row gap-3 justify-center md:justify-start">
            <Link href={profileLinks.linkedin}>
              <i className="bi bi-linkedin hover:text-gray-500 text-2xl"></i>
            </Link>

            <Link href={profileLinks.github}>
              <i className="bi bi-github hover:text-gray-500 text-2xl"></i>
            </Link>

            <Link href={profileLinks.mail}>
              <i className="bi bi-envelope hover:text-gray-500 text-2xl"></i>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
            <div
              className="flex flex-row items-baseline z-10 absolute top-0 left-0 w-[80vw] h-[80vw] -translate-x-[-7.5%] -translate-y-[-7.5%] md:w-[45vw] md:h-[45vw] md:-translate-y-[-5%] md:-translate-x-[-5%] rounded-full flex items-center justify-start overflow-hidden"
            >
              <img
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
        </ScrollFadeIn>
        <div className="flex flex-col items-center">
          <div className="items-center flex flex-row inset-x-0 h-full absolute justify-center">
            <div className="shadow-[0_0_50px_5px_#D2003F] brightness-110 saturate-150 rounded-full bg-crimson-500 relative w-[700px] h-[700px]"></div>
          </div>
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
        <div className="space-y-8">
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
