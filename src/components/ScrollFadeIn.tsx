// components/ScrollFadeIn.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function ScrollFadeIn({
    children,
    delay = 0,
    duration = 0.6,
    y = 100,
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
}) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        if (inView) setHasBeenVisible(true);
    }, [inView]);

    return (
        <motion.div
            className='w-full'
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={hasBeenVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}
