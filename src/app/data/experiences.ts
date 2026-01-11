export const companyDetails = {
    rapidStart: {
        logo: "/images/icons/rapidstart.jpeg",
        profile: "https://www.linkedin.com/company/rapidstartapp/posts/?feedView=all"
    },
    hural: {
        logo: "/images/icons/hural.jpeg",
        profile: "https://www.linkedin.com/company/hural%E2%84%A2/posts/?feedView=all"
    },
}

export const experiences = [
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
];