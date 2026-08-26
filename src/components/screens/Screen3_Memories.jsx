import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
    "/images/1.avif",
    "/images/2.avif",
    "/images/3.avif",
];

function Screen3_Memories({ onNext }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < photos.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            onNext();
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-5 py-12 text-center relative w-full overflow-hidden">
            
            {}
            <div className="mt-8 mb-8 w-full flex flex-col items-center">
                <h2 className="font-merienda text-4xl md:text-5xl text-primary mb-2">Little Moments</h2>
                <p className="text-[#8b6b6d] text-lg md:text-xl">
                    A few moments worth remembering.
                </p>
            </div>

            {}
            <div className="relative w-full max-w-[300px] h-[350px] md:h-[400px] md:max-w-[350px] mx-auto mb-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-white rounded-xl p-3 border border-gray-200 shadow-sm flex flex-col"
                    >
                        <div className="w-full grow rounded-lg overflow-hidden bg-gray-100 relative">
                            <img
                                src={photos[currentIndex]}
                                alt={`Memory ${currentIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {}
            <div className="flex items-center justify-center gap-6 mt-8">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`p-2 rounded-full transition-colors ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    <ChevronLeft size={28} />
                </button>
                
                <p className="text-gray-600 text-base font-medium">
                    {currentIndex + 1} / {photos.length}
                </p>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                    {currentIndex === photos.length - 1 ? <Check size={28} /> : <ChevronRight size={28} />}
                </button>
            </div>
        </div>
    );
}

export default Screen3_Memories;