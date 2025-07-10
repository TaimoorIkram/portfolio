import Link from 'next/link';
import React from 'react';
import GenericActionButton from './GenericActionButton';

interface Project {
  year: string;
  title: string;
  skills: string[];
  details: string;
  features: string[];
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  isVisible: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isActive,
  isVisible,
  onClick
}) => {
  const {
    year,
    title,
    skills,
    details,
    features,
    githubUrl
  } = project;

  return (
    <div
      className={`
        relative bg-gray-900 rounded-xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer outline-crimson-500
        ${isActive
          ? 'opacity-100 scale-100 z-10 outline-2'
          : 'opacity-40 scale-90 z-0 outline-0'
        }
        ${isVisible ? 'translate-x-0' : 'translate-x-full'}
        hover:shadow-xl
        w-full mx-auto
        md:w-80 lg:w-[500px]
      `}
      onClick={onClick}
    >
      <div className="p-6 space-y-4">
        {/* Year */}
        <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">
          {year}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold leading-tight">
          {title}
        </h3>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-crimson-300 text-white"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Details */}
        <p className="text-sm md:text-base leading-relaxed">
          {details}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub Button */}
        <div className="pt-4">
          <Link href={githubUrl}>
            <GenericActionButton label='View on GitHub' icon='github' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;