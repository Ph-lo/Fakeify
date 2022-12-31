import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsType } from "react-icons/bs";
import { FiServer, FiBox, FiUpload, FiLifeBuoy } from "react-icons/fi";
import { SingleValue, ActionMeta, InputActionMeta } from "react-select";
import { TbListNumbers } from "react-icons/tb";
import { AiOutlineSliders } from "react-icons/ai";
import Select from "react-select";
import Link from "next/link";

export const SideMenu = ({ isHome, setIsHome }: any) => {
  return (
    <motion.div
      //className=" bg-[#ACECA1] rounded-3xl"
      animate={{
        width: isHome ? "100%" : "50%",
      }}
    >
      <div className={` h-full bg-primary`}>
        <nav className={`flex w-full items-center py-3 justify-between px-10`}>
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
                  some fake data for fun, we&apos;ve got you covered.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="h-[90%]">
            <FormNav />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FormNav = ({}) => {
  const options: { value: string; label: string }[] = [
    { label: "String", value: "string" },
  ];
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
      className="h-full"
    >
      <section className="px-10 flex flex-col justify-between h-full">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-3xl text-secondary border-b-2 pb-1 border-appRed">
            Add fields
          </h2>
          <div>
            <div className="h-48 flex flex-wrap w-full mt-5">
              <div className="flex space-x-2 w-1/2 items-center">
                <label htmlFor="name">
                  <BsType size={20} color={"black"} />
                </label>
                <input
                  className="bg-primary w-48 h-[38px] border-2 pl-3 rounded-lg border-secondary"
                  placeholder="Name..."
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex space-x-2 w-1/2 items-center">
                <label htmlFor="name">
                  <FiServer size={20} color={"black"} />
                </label>
                <Select
                  placeholder="Select a type"
                  options={options}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "black",
                      borderRadius: "8px",
                      backgroundColor: "#DDDDDD",
                      // This line disable the blue border
                      boxShadow: "none",
                      height: "15px",
                      width: "191px",
                      "&:hover": {
                        borderColor: "black",
                      },
                    }),
                  }}
                />
              </div>
              <div className="flex w-1/2 space-x-2 items-center">
                <label htmlFor="max">
                  <AiOutlineSliders size={20} color={"black"} />
                </label>
                <input
                  placeholder="Max length"
                  className="bg-primary border-2 h-9 w-48 pl-3 rounded-lg border-secondary"
                  type="number"
                  name="max"
                  id="max"
                />
              </div>
              <div className="flex space-x-2 w-1/2 items-center">
                <label htmlFor="name">
                  <FiBox size={20} color={"black"} />
                </label>
                <Select
                  placeholder="Select a format"
                  options={options}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "black",
                      borderRadius: "8px",
                      backgroundColor: "#DDDDDD",
                      // This line disable the blue border
                      boxShadow: "none",
                      height: "15px",
                      width: "191px",
                      "&:hover": {
                        borderColor: "black",
                      },
                    }),
                  }}
                />
              </div>
              <div className="flex items-center">
                <input
                  className="bg-primary ml-7 w-20 h-9 text-secondary border-2 rounded-xl border-secondary"
                  type="submit"
                  name="submit"
                  value={"Add"}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl text-secondary border-b-2 pb-1 border-appRed">
              Export
            </h2>
            <div className=" flex flex-wrap w-full mt-8">
              <div className="flex w-1/2 space-x-2 items-center">
                <label htmlFor="max">
                  <TbListNumbers size={20} color={"black"} />
                </label>
                <input
                  placeholder="Max length"
                  className="bg-primary border-2 h-9 w-48 pl-3 rounded-lg border-secondary"
                  type="number"
                  name="max"
                  id="max"
                />
              </div>
              <div className="flex w-1/2 space-x-2 items-center">
                <label htmlFor="name">
                  <FiUpload size={20} color={"black"} />
                </label>
                <Select
                  placeholder="Select extension"
                  options={options}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "black",
                      borderRadius: "10px",
                      backgroundColor: "#DDDDDD",
                      // This line disable the blue border
                      boxShadow: "none",
                      height: "15px",
                      width: "191px",
                      "&:hover": {
                        borderColor: "black",
                      },
                    }),
                  }}
                />
              </div>

              <div className="flex mt-6 items-center">
                <input
                  className="bg-primary ml-7 w-28 h-9 text-secondary border-2 rounded-xl border-secondary"
                  type="submit"
                  name="submit"
                  value={"Export"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-appRed pt-2 pb-5">
          <div className="flex space-x-2">
            <FiLifeBuoy size={20} color={"black"} />
            <Link className="text-secondary" href={""}>
              Contact
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
