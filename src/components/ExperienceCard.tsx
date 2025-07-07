import React, { useState } from 'react';
import GenericActionButton from './GenericActionButton';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface ExperienceRole {
    title: string;
    startDate: string;
    endDate: string; // Use "Present" for current roles
    responsibilities: string[];
    achievements?: string[];
}

interface ExperienceCardProps {
    companyName: string;
    companyLogoUrl: string;
    location: string;
    companyDescription: string;
    roles: ExperienceRole[];
    companyUrl: string;
    technologies?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    companyName,
    companyLogoUrl,
    location,
    companyDescription,
    roles,
    companyUrl,
    technologies = []
}) => {
    const [expandedRole, setExpandedRole] = useState<number | null>(null);

    const toggleRole = (index: number) => {
        setExpandedRole(expandedRole === index ? null : index);
    };

    const formatDateRange = (startDate: string, endDate: string) => {
        return `${startDate} - ${endDate}`;
    };

    const getTotalDuration = () => {
        if (roles.length === 0) return '';
        const firstRole = roles[roles.length - 1]; // Assuming roles are in reverse chronological order
        const lastRole = roles[0];
        return formatDateRange(firstRole.startDate, lastRole.endDate);
    };

    return (
        <div className="bg-gray-900 rounded-xl border-2 border-crimson-300 shadow-[0_0_25px_1px_#D2003F] p-6 flex flex-col sm:flex-row gap-6 w-full max-w-4xl mx-auto">

            {/* Left: Company Logo */}
            <div className="flex-shrink-0">
                <img
                    src={companyLogoUrl}
                    alt={`${companyName} Logo`}
                    className="w-16 h-16 object-contain rounded-lg"
                />
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-4">
                {/* Company Info & Duration */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-lg font-bold text-white">{companyName}</h3>
                        <p className="text-sm text-gray-400">{location}</p>
                    </div>
                    <span className="text-sm text-gray-300 mt-1 sm:mt-0">
                        {getTotalDuration()}
                    </span>
                </div>

                {/* Company Description */}
                <p className="text-sm leading-relaxed text-gray-300">
                    {companyDescription}
                </p>

                {/* Timeline of Roles */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white mb-3">Role Timeline:</h4>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-crimson-400"></div>

                        {roles.map((role, index) => (
                            <div key={index} className="relative pl-8 pb-4 last:pb-0">
                                {/* Timeline dot */}
                                <div className="absolute left-2 top-2 w-2 h-2 bg-crimson-500 rounded-full border-2 border-gray-900"></div>

                                {/* Role content */}
                                <div
                                    className="bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200"
                                    onClick={() => toggleRole(index)}
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                        <div className="flex-1">
                                            <h5 className="font-semibold text-white flex items-center gap-2">
                                                {role.title}
                                                <svg
                                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedRole === index ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </h5>
                                            <p className="text-xs text-gray-400">
                                                {formatDateRange(role.startDate, role.endDate)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Expanded content */}
                                    <AnimatePresence>

                                        {expandedRole === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0, }}
                                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                className="mt-3 space-y-3">

                                                {/* Responsibilities */}
                                                <div>
                                                    <h6 className="text-xs font-semibold text-gray-300 mb-2">Key Responsibilities:</h6>
                                                    <ul className="space-y-1">
                                                        {role.responsibilities.map((responsibility, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                                                {responsibility}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Achievements */}
                                                {role.achievements && role.achievements.length > 0 && (
                                                    <div>
                                                        <h6 className="text-xs font-semibold text-gray-300 mb-2">Key Achievements:</h6>
                                                        <ul className="space-y-1">
                                                            {role.achievements.map((achievement, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                                                    {achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                {technologies.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300 border border-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <Link href={companyUrl}>
                    <GenericActionButton
                        label="View Company"
                        icon="building-fill"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ExperienceCard;