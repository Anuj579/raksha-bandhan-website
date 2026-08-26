import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

function Screen2_Celebration({ onNext }) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen px-5 py-12 text-center relative w-full"
        >

            <div className="mt-10 md:mt-0 flex flex-col items-center w-full">
                <motion.h1
                    className="font-merienda text-[38px] md:text-6xl leading-normal tracking-tight text-[#cc181b] mb-3 will-change-transform"
                >
                    Happy<br />Raksha Bandhan!
                </motion.h1>

                <motion.p
                    className="text-primary text-lg md:text-xl font-semibold mb-4 mx-auto leading-relaxed text-balance max-w-60 will-change-transform">
                    To a bond that only gets stronger with time.
                </motion.p>
            </div>

            <motion.div
                className="flex flex-col items-center justify-center relative mb-6 will-change-transform">
                <div className="relative mb-10 w-[170%] min-[500px]:w-200">
                    <img src="/stickers/cute-rakhi.avif" alt="rakhi" className="-rotate-16 sm:-rotate-12" />
                </div>
            </motion.div>

            <motion.div
                className="w-full flex justify-center will-change-transform">
                <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={onNext}
                    className="bg-linear-to-r from-accent-red to-[#FF8A8A] text-white font-medium md:text-lg py-4 px-8 shadow-lg hover:shadow-xl rounded-full flex items-center justify-center gap-2 will-change-transform"
                >
                    Continue <MoveRight size={18} />
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

export default Screen2_Celebration