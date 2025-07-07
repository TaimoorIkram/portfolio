'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import GenericActionButton from './GenericActionButton';

interface FullScreenDropdownProps {
  title: string;
  options: React.ReactNode[];
}

export default function FullScreenDropdown({ title, options }: FullScreenDropdownProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // cleanup
    };
  }, [open]);

  const dropdown = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-black text-white flex flex-col px-6 py-4 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-red-400 transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Options with animation */}
          <div className="space-y-4">
            {options.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                onClick={() => setOpen(false)}
              >
                {option}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <GenericActionButton icon='list' label='Options' />
      </div>

      {mounted && typeof window !== 'undefined' ? createPortal(dropdown, document.body) : null}
    </>
  );
}
