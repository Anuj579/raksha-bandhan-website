"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Screen1_Intro from '@/components/screens/Screen1_Intro';
import Screen2_Celebration from '@/components/screens/Screen2_Celebration';
import Screen3_Memories from '@/components/screens/Screen3_Memories';
import Screen4_Message from '@/components/screens/Screen4_Message';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <Screen1_Intro key="screen1" onNext={() => setCurrentScreen(1)} />,
    <Screen2_Celebration key="screen2" onNext={() => setCurrentScreen(2)} />,
    <Screen3_Memories key="screen3" onNext={() => setCurrentScreen(3)} />,
    <Screen4_Message key="screen4" />,
  ]

  return (
    <div className="relative min-h-screen h-full w-full flex flex-col items-center justify-center select-none overflow-hidden">

      <motion.div
      >
        <img src="/stickers/flower.avif" alt="decoration" className='absolute -left-1 h-30 sm:h-44 -rotate-4' />
        <img src="/stickers/flower.avif" alt="decoration" className='absolute -right-1 h-30 sm:h-44 scale-x-[-1] rotate-4' />
      </motion.div>


      <div className="relative w-full flex grow flex-col justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.6 }}
            className='flex flex-col items-center justify-center overflow-hidden will-change-transform'
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="fixed bottom-4 right-4 text-sm font-thin text-black/40 pointer-events-none z-50 tracking-wide">
        anujbuilds.in
      </motion.div>
    </div >
  );
}