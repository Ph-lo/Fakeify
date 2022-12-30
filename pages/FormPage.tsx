import { AnimatePresence, motion } from "framer-motion";

export const FormPage = ({ isHome, setIsHome }: any) => {
  return (
    <motion.div
      className="h-full"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      //transition={{ duration: 0.3, delay: 0 }}
    >
      <div className="relative h-full pt-8">
        <AnimatePresence>
          <motion.div
            className="absolute w-[92%] rounded-t-xl left-[4%] right-auto bottom-0"
            animate={{ height: "85%" }}
            initial={{ height: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <div className="bg-appBlue rounded-t-xl h-full">
              <h1>FORM PAGE</h1>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* <div className="absolute bottom-20 text-center w-full">
          <button
            onClick={() => setIsHome(true)}
            className="bg-appRed w-56 text-3xl py-3 rounded-full"
          >
            Back home
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};
