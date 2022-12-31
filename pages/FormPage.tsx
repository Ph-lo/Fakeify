import { AnimatePresence, motion } from "framer-motion";
import { DisplayFields } from "../components/DisplayFields";

export const FormPage = ({ isHome, setIsHome }: any) => {
  const fakeData = [
    {
      id: 1,
      name: "id",
      type: "string",
    },
    {
      id: 2,
      name: "firstname",
      type: "firstname",
    },
    {
      id: 3,
      name: "lastname",
      type: "lastname",
    },
    {
      id: 4,
      name: "dob",
      type: "date",
      format: "DD/MM/YYYY",
    },
    {
      id: 5,
      name: "email",
      type: "email",
    },
    {
      id: 6,
      name: "phone",
      type: "phone",
      format: "US",
    },
    {
      id: 7,
      name: "description",
      type: "string",
      maxLen: 375,
    },
    {
      id: 8,
      name: "id",
      type: "string",
    },
  ];
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
            <div className="bg-appBlue rounded-t-xl h-full w-full">
              <DisplayFields fields={fakeData} />
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
