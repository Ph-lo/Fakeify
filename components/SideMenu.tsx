import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const SideMenu = ({ isHome, setIsHome }: any) => {
  return (
    <motion.div
      //className=" bg-[#ACECA1] rounded-3xl"
      animate={{
        width: isHome ? "100%" : "50%",
      }}
    >
      <div className={` h-full bg-primary`}>
        <nav className="flex w-full items-center py-3 justify-between px-10">
          <h1 className="text-3xl text-secondary">Fakeify</h1>
          <motion.button
            whileHover={{
              //scale: 0.9,
              rotate: [0, 270, 270, 270],
            }}
            onClick={() => setIsHome(true)}
          >
            <img className="w-12 h-12" src="./nodes.png" alt="logo, nodes" />
          </motion.button>
        </nav>
        {isHome ? (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="h-[90%]"
          >
            <div className="px-10 h-full flex items-center">
              <div>
                <h1 className="text-8xl w-8/12 min-w-[480px] text-secondary">
                  Welcome to Fakeify!
                </h1>
                <div className="h-2 bg-appRed w-48 mt-5" />
                <p className="mt-12 w-7/12 min-w-[450px] font-light text-lg text-secondary">
                  Wether you are a developer looking to test your application
                  with fake data, a researcher in need of realistic but
                  synthetic data sets, or simply someone who wants to generate
                  some fake data for fun, we've got you covered.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div>
            <p>form nav</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
