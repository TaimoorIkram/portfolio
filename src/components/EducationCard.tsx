import React, { useState } from 'react';
import GenericActionButton from './GenericActionButton';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getListItemVariants } from '@/config/AnimationVariantsConfig';
import Image from 'next/image';

interface StandoutCourse {
    name: string;
    grade: string;
    description?: string;
}

interface EducationCardProps {
    institutionName: string;
    institutionLogoUrl: string;
    location: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string; // Use "Present" for current education
    cgpa?: string;
    maxCgpa?: string;
    percentage?: string;
    institutionDescription: string;
    standoutCourses?: StandoutCourse[];
    institutionUrl: string;
    achievements?: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
    institutionName,
    institutionLogoUrl,
    location,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    cgpa,
    maxCgpa,
    percentage,
    institutionDescription,
    standoutCourses = [],
    institutionUrl,
    achievements = []
}) => {
    const [expandedCourses, setExpandedCourses] = useState<boolean>(false);

    const toggleCourses = () => {
        setExpandedCourses(!expandedCourses);
    };

    const formatDateRange = (startDate: string, endDate: string) => {
        return `${startDate} - ${endDate}`;
    };

    const formatGrade = () => {
        if (cgpa && maxCgpa) {
            return `CGPA: ${cgpa}/${maxCgpa}`;
        } else if (percentage) {
            return `${percentage}%`;
        }
        return '';
    };

    const hasExpandableContent = standoutCourses.length > 0;

    const itemVariants = getListItemVariants(standoutCourses.length);

    return (
        <div className="bg-gray-900 rounded-xl border-2 border-crimson-300 shadow-[0_0_25px_1px_#D2003F] p-6 flex flex-col sm:flex-row gap-6 w-full max-w-4xl mx-auto">

            {/* Left: Institution Logo */}
            <div className="flex-shrink-0">
                <Image width={200} height={200}
                    src={institutionLogoUrl}
                    alt={`${institutionName} Logo`}
                    className="w-16 h-16 object-contain rounded-lg"
                />
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-4">
                {/* Institution Info & Duration */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-lg font-bold text-white">{institutionName}</h3>
                        <p className="text-sm text-gray-400">{location}</p>
                    </div>
                    <span className="text-sm text-gray-300 mt-1 sm:mt-0">
                        {formatDateRange(startDate, endDate)}
                    </span>
                </div>

                {/* Degree Information */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h4 className="text-base font-semibold text-white">{degree}</h4>
                        <p className="text-sm text-gray-400">{fieldOfStudy}</p>
                    </div>
                    {formatGrade() && (
                        <span className="text-sm text-crimson-400 font-semibold mt-1 sm:mt-0">
                            {formatGrade()}
                        </span>
                    )}
                </div>

                {/* Institution Description */}
                <p className="text-sm leading-relaxed text-gray-300">
                    {institutionDescription}
                </p>

                {/* Achievements */}
                {achievements.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                            {achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Standout Courses - Only show if there are courses */}
                {hasExpandableContent && (
                    <div>
                        <div
                            className="bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200"
                            onClick={toggleCourses}
                        >
                            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                                Standout Courses
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedCourses ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </h4>
                        </div>

                        {/* Expanded courses content */}
                        <AnimatePresence>
                            {expandedCourses && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0, }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="mt-3 space-y-3">

                                    <div className="grid gap-3">
                                        {standoutCourses.map((course, idx) => (
                                            <motion.div
                                                key={idx}
                                                custom={idx}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                                                
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                                    <div className="flex-1">
                                                        <h5 className="font-semibold text-white text-sm">{course.name}</h5>
                                                        {course.description && (
                                                            <p className="text-xs text-gray-400 mt-1">{course.description}</p>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-blue-400 font-semibold mt-1 sm:mt-0">
                                                        {course.grade}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* Action Button */}
                <Link href={institutionUrl}>
                    <GenericActionButton
                        label="View Institution"
                        icon="building-fill"
                    />
                </Link>
            </div>
        </div>
    );
};

export default EducationCard;