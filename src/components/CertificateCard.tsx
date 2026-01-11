import React from 'react';
import GenericActionButton from './GenericActionButton';
import Link from 'next/link';
import Image from 'next/image';

interface CertificateCardProps {
    year: string;
    title: string;
    about: string;
    courses: string[];
    certificateUrl: string;
    platformIconUrl: string;
}

// href={certificateUrl}

const CertificateCard: React.FC<CertificateCardProps> = ({
    year,
    title,
    about,
    courses,
    certificateUrl,
    platformIconUrl
}) => {
    return (
        <div className="bg-gray-900 rounded-xl border-2 border-crimson-300 shadow-[0_0_25px_1px_#D2003F] p-6 flex flex-col sm:flex-row gap-6 w-full max-w-4xl mx-auto">

            {/* Left: Logo */}
            <div className="flex-shrink-0">
                <Image width={200} height={200}
                    src={platformIconUrl}
                    alt={`${title} Platform Logo`}
                    className="w-16 h-16 object-contain"
                />
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-4">
                {/* Year & Title */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <span className="text-sm">{year}</span>
                </div>

                {/* About */}
                <p className="text-sm leading-relaxed">
                    {about}
                </p>

                {/* Courses List */}
                <div>
                    <h4 className="text-sm font-semibold mb-2">Courses Included:</h4>
                    <ul className="list-disc space-y-1 text-sm">
                        {courses.map((course, idx) => (
                            <li key={idx} className='flex items-start gap-2 text-sm'>
                                <span className='w-1.5 h-1.5 bg-crimson-500 rounded-full mt-2 flex-shrink-0'></span>
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* View Button */}
                <Link href={certificateUrl}>
                    <GenericActionButton
                        label="View Certificate"
                        icon="award-fill"
                    />
                </Link>
            </div>
        </div>
    );
};

export default CertificateCard;
