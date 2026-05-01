import { useState, useEffect } from 'react';
import poshakLogo from '../Image/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLoader(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
              >
                <img 
                  src={poshakLogo} 
                  alt="Poshak" 
                  className="h-20 sm:h-24 w-auto"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-1 bg-black rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-full bg-gray-400"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500"
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}