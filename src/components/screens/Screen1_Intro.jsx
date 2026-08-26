import { motion } from "framer-motion"
import { Heart } from "lucide-react"

function Screen1_Intro({ onNext }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-5 relative w-full min-h-screen"
    >
      <motion.div
        className="mb-6 mt-12 font-merienda text-primary text-2xl md:text-3xl leading-normal whitespace-pre-wrap"
      >
        <p>Some bonds</p>
        <p>don't need words,</p>
        <p>just a thread</p>
        <p>of love ❤️</p>
      </motion.div>

      <motion.div
        className="mb-6"
      >
        <img src="/stickers/siblings.avif" alt="siblings" className="w-70 md:w-80" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center w-full"
      >
        <div className="flex flex-col items-center">
          <p className="text-[#8b6b6d] text-base md:text-lg mb-5 font-semibold tracking-wide uppercase flex flex-col items-center">
            Tap the rakhi to continue
          </p>

          <div className="relative max-[500px]:w-[150%] w-150 flex justify-center items-center">
            <motion.div className="cursor-pointer w-full">
              <img
                src="/stickers/rakhi.avif"
                alt="rakhi"
                className="w-full h-auto object-contain -rotate-6 hover:scale-103 active:scale-96 transition-all"
                onClick={onNext}
              />
            </motion.div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default Screen1_Intro