import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Page from "../components/Page";
import { AnimatePresence, motion } from "framer-motion";
import { FormPage } from "./FormPage";
import Lottie from "react-lottie";
import animationData from "../public/robot.json";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export default function Home() {
  const { isHome } = useContext(AppContext);
  //console.log(setIsHome);
  return <div className="w-full">{isHome ? <HomeScreen /> : <FormPage />}</div>;
}

const HomeScreen = () => {
  const { setIsHome } = useContext(AppContext);
  return (
    <motion.div
      key="home-page"
      className="h-full"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
    >
      <div className="relative w-full h-full">
        <motion.div
          key="home-page-content"
          className="absolute w-[92%] rounded-t-xl left-[4%] right-auto"
          animate={{ height: "100%" }}
          initial={{ height: 0 }}
          transition={{ duration: 0.2, delay: 0 }}
          //exit={{ height: 0, opacity: 0 }}
        >
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center z-0">
            <Lottie
              options={{
                loop: true,
                animationData: animationData,
              }}
            />
          </div>
          <div className="flex justify-center items-center h-full">
            {/* <h1 className="z-10 text-[20px] text-primary">
              Get your fake data now, for free!
            </h1> */}
          </div>
        </motion.div>
        <div className="absolute bottom-20 text-center w-full">
          <button
            onClick={() => setIsHome(false)}
            className="home-btn bg-appRed w-56 text-3xl py-3 rounded-full z-100"
          >
            Get started!
          </button>
        </div>
      </div>
    </motion.div>
  );
};
