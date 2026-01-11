import { Project } from "../page";

export const projects: Project[] = [
    {
        year: '2025',
        title: 'DeProfane',
        skills: ['Django', 'Channels', 'Celery', 'FFmpeg', 'OpenAI Whisper', 'REST API'],
        details: 'Deprofane allows users to stream or upload audio or video and have any profanity in the audio transcribed, filtered, and rephrased in real-time.',
        features: [
            'Video upload & YouTube live streaming',
            'Real-time progress via WebSockets',
            'Beep, mute & rephrase modes',
            'FFmpeg audio/video processing',
            'Whisper-based speech transcription',
            'Celery for background video tasks',
            'RTMP live streaming support',
            'Scalable deployment on Render',
        ],
        projectUrl: "https://profanity-filter-project.vercel.app/",
    },
    {
        year: '2024',
        title: 'CheveCasa',
        skills: ['Django', 'SQLite', 'REST API', 'AWS S3', 'OpenStreetMap', 'Leaflet'],
        details: 'A Venezuelan property advertisement website. Almost all the backend logic currently on this site was laid out by me.',
        features: [
            'Property image storage via S3 buckets',
            'Property companies and users',
            'Role-based access controls for ads',
            'Leaflet map and OpenStreetMap geolocation',
            'Interactive search with map',
            'Nearest neighbor calculations backend API'
        ],
        projectUrl: 'https://chevecasa.com/'
    },
    {
        year: '2025',
        title: 'NEFT',
        skills: ['Vue.js', 'Django', 'SQLite', 'REST API'],
        details: 'Developed as a community service project for my university, this application effectively manages all transactions, where they came from, where they have gone, and everywhere in-between.',
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
            'MQTT pub-sub sensor data pipeline',
            'A secure authentication protocol for constrained devices',
            'Network credential storage using hashing',
            'Constrained-system-friendly encryption',
            'Dashboards to display data effectively'
        ],
        githubUrl: 'https://github.com/TaimoorIkram/WaterWatcherPro'
    },
    {
        year: '2024',
        title: 'COMMAN',
        skills: ['Flutter', 'Django', 'SQLite'],
        details: 'COMMAN (short for COMpany MANager) is a very minimalistic solution to manage customer and human resource relationships, developed for small scale businesses.',
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