import React, { useState } from 'react';
import GenericActionButton from './GenericActionButton';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getListItemVariants } from '@/config/AnimationVariantsConfig';

interface InterestItem {
    name: string;
    description?: string;
    rating?: string;
    imageUrl?: string;
    year?: string;
    genre?: string;
}

interface InterestCardProps {
    title: string;
    interestIcon: string;
    category: string;
    description: string;
    items: InterestItem[];
    actionUrl?: string;
    actionLabel?: string;
    actionIcon?: string;
    showAsFlex?: boolean;
}

const InterestCard: React.FC<InterestCardProps> = ({
    title,
    interestIcon,
    category,
    description,
    items,
    actionUrl,
    actionLabel = "View More",
    actionIcon = "external-link-fill",
    showAsFlex = false
}) => {
    const [expandedItems, setExpandedItems] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const toggleItems = () => {
        setExpandedItems(!expandedItems);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % items.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const hasExpandableContent = items.length > 0;

    const itemVariants = getListItemVariants(items.length);    

    return (
        <div className="bg-gray-900 rounded-xl border-2 border-crimson-300 shadow-[0_0_25px_1px_#D2003F] p-6 flex flex-col sm:flex-row gap-6 w-full max-w-4xl mx-auto">

            {/* Left: Icon/Image */}
            <div className="flex-shrink-0">
                <i
                    className={`bi bi-${interestIcon} text-xl iconUrl w-16 h-16 object-contain rounded-lg`}
                ></i>
            </div>

            {/* Right: Content */}
            <div className="flex-1 space-y-4">
                {/* Interest Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-lg font-bold text-white">{title}</h3>
                        <p className="text-sm text-gray-400">{category}</p>
                    </div>
                    <span className="text-sm text-crimson-400 font-semibold mt-1 sm:mt-0">
                        {items.length} {items.length === 1 ? 'Item' : 'Items'}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-300">
                    {description}
                </p>

                {/* Items - Only show if there are items */}
                {hasExpandableContent && (
                    <div>
                        <div
                            className="bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200"
                            onClick={toggleItems}
                        >
                            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                                Featured {category}
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedItems ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </h4>
                        </div>

                        {/* Expanded items content */}
                        <AnimatePresence>
                            {expandedItems && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0, transition: { delay: 0.3 } }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    className="mt-3 space-y-3"
                                >
                                    <div className="grid gap-3">
                                        {!showAsFlex && items.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                custom={idx}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex gap-3"
                                            >
                                                {item.imageUrl && (
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.name}
                                                        className="w-20 h-32 object-fill rounded-md flex-shrink-0"
                                                    />
                                                )}
                                                <div className="flex-1">
                                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                                        <div className="flex-1">
                                                            <h5 className="font-semibold text-white text-sm">{item.name}</h5>
                                                            {item.genre && (
                                                                <p className="text-xs text-gray-500">{item.genre}</p>
                                                            )}
                                                            {item.description && (
                                                                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                                                            )}
                                                        </div>
                                                        <div className="flex flex-col items-end mt-1 sm:mt-0">
                                                            {item.year && (
                                                                <span className="text-xs text-gray-400">{item.year}</span>
                                                            )}
                                                            {item.rating && (
                                                                <span className="text-xs text-yellow-400 font-semibold">
                                                                    ⭐ {item.rating}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}

                                        {showAsFlex &&
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0, transition: { delay: 0.3 } }}
                                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                className="flex overflow-x-auto gap-4 no-scrollbar"
                                            >

                                                {items.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        custom={idx}
                                                        variants={itemVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="hidden"
                                                        className="relative flex-shrink-0 w-80 h-80 rounded-lg overflow-hidden border border-gray-700 bg-gray-800"
                                                    >
                                                        {item.imageUrl && (
                                                            <img
                                                                src={item.imageUrl}
                                                                alt={item.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        )}

                                                        {/* Gradient Overlay positioned in lower half */}
                                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col justify-end">
                                                            <div className="space-y-2">
                                                                <h5 className="font-semibold text-white text-lg">{item.name}</h5>
                                                                {item.genre && (
                                                                    <p className="text-sm text-gray-300">{item.genre}</p>
                                                                )}
                                                                {item.description && (
                                                                    <p className="text-sm text-gray-400 line-clamp-3">
                                                                        {item.description}
                                                                    </p>
                                                                )}
                                                                <div className="flex justify-between text-sm text-gray-300 pt-2">
                                                                    {item.year && <span>{item.year}</span>}
                                                                    {item.rating && (
                                                                        <span className="text-yellow-400 font-semibold">⭐ {item.rating}</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* Action Button */}
                {actionUrl && (
                    <Link href={actionUrl}>
                        <GenericActionButton
                            label={actionLabel}
                            icon={actionIcon}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default InterestCard;
