import { profileLinks } from "./profile";

export const interests = [
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