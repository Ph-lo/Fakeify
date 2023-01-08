import { AnimatePresence, motion } from "framer-motion";
import { DisplayFields } from "../components/DisplayFields";

export const FormPage = ({ isHome, setIsHome, data, setData }: any) => {
  
  return (
    <motion.div
      key="form-page"
      className="h-full"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      //transition={{ duration: 0.3, delay: 0 }}
    >
      <div className="relative h-full pt-8">
        <AnimatePresence>
          <motion.div
            key="form-tab"
            className="absolute w-[92%] rounded-t-xl left-[4%] right-auto bottom-0"
            animate={{ height: "85%" }}
            initial={{ height: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <div className="bg-appBlue rounded-t-xl h-full w-full">
              <DisplayFields fields={data} setData={setData} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
