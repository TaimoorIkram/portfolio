const institueInfo = {
    nust: {
        name: "National University of Sciences and Technology",
        location: "Islamabad, Pakistan",
        logo: "/images/icons/nust.png",
        website: "https://nust.edu.pk/"
    },
    pgc: {
        name: "Punjab Group of Colleges",
        location: "Sargodha, Pakistan",
        logo: "/images/icons/pgc.png",
        website: "https://pgc.edu/"
    },
    cgss: {
        name: "Connoisseur Grammar School System",
        location: "Sargodha, Pakistan",
        logo: "/images/icons/cgss.webp",
        webiste: "https://cgss.edu.pk/"
    }
}

export const educations = [
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