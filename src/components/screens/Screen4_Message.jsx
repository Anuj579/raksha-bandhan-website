import { motion } from "framer-motion";

function Screen5_Message() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center px-8 py-12 text-center relative w-full"
        >

            <div className="mt-8 w-full flex justify-center">
                <motion.div
                    className="bg-[#fff3ec] min-h-75 md:min-h-90 md:max-h-96 max-h-83 rounded-4xl p-8 md:p-10 shadow-lg border border-accent-red w-full max-w-sm relative"
                >
                    <div className="h-full overflow-y-auto">

                        <p className="text-primary md:text-lg font-medium leading-relaxed">
                            No matter how much we grow,
                            you'll always be
                            one of my favorite people
                            in the world.
                            Thank you for all the laughs,
                            the silly fights,
                            and all the memories we've made.
                            I'm lucky to have you by my side.
                            <span className="font-bold text-lg md:text-xl mt-2 block">Always my favorite sibling. 💗</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="mt-6 mb-4 flex items-center justify-center"
            >
                <img src="/stickers/sibling-illustration.avif" alt="sibling" className="w-36 md:w-40" />
            </motion.div>

            <motion.h1
                className="font-merienda text-3xl md:text-4xl text-primary mb-3 leading-tight"
            >
                Happy<br />Raksha Bandhan!
            </motion.h1>
        </motion.div>
    );
}

export default Screen5_Message