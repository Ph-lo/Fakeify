import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsType } from "react-icons/bs";
import { FiServer, FiBox, FiUpload, FiLifeBuoy } from "react-icons/fi";
import { SingleValue, ActionMeta, InputActionMeta } from "react-select";
import { TbListNumbers } from "react-icons/tb";
import { AiOutlineSliders } from "react-icons/ai";
import Select from "react-select";
import Link from "next/link";
import { useRouter } from "next/router";

export const SideMenu = ({ isHome, setIsHome, data, setData }: any) => {
  

  return (
    <motion.div
      //className=" bg-[#ACECA1] rounded-3xl"
      key="side-menu"
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
            key="introduction"
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
            <FormNav data={data} setData={setData} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FormNav = ({data, setData}: any) => {
  const {push, query} = useRouter();
  const [newField, setNewField] = useState<any>({});
  const options: { value: string; label: string }[] = [
    { label: "String", value: "string" },
  ];
  const FORMATS = {
    phone: [{value: "us", label: "US"}, {value: "uk", label: "UK"}, {value: "fr", label: "FR"}],
    date: [{value: "DD/MM/YYYY", label: "DD/MM/YYYY"}, {value: "MM/DD/YYYY", label: "MM/DD/YYYY"}, {value: "MMM Do YYYY", label: "Jan 1st 2023"}, {value: "ddd Do MMM YYYY", label: "Mon 1st Jan 2023"}]
  };
  const TYPES: { value: string; label: string }[] = [
    {value: "id", label: "id - int"},
    {value: "stringId", label: "id - string"},
    {value: "firstname", label: "Firstname"},
    {value: "lastname", label: "Lastname"},
    {value: "name", label: "Firstname - Lastname"},
    {value: "phone", label: "Phone number"},
    {value: "email", label: "Email"},
    {value: "paragraph", label: "Paragraph"},
    {value: "paragraphs", label: "Paragraphs"},
    {value: "date", label: "Date"},
    {value: "fullAddress", label: "Full address"},
    {value: "postcode", label: "Postcode"},
    {value: "street", label: "Street n° & name"},
    {value: "country", label: "Country"},
  ]
  const hasLengthParam = ["id", "stringId", "paragraphs"];

  const theme = (theme: any) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: '#DDDDDD',
      primary: '#30475E',
    },
  });

  const customStyle = {
    control: (base: any) => ({
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
    option: (provided: any, state: any) => ({
      ...provided,
      color: state?.isSelected ? "white" : "black"
    })
  };
  // console.log(newField)
  return (
    <motion.div
      key="side-menu-form"
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
              <div className="flex space-x-2 mr-4 items-center">
                <label htmlFor="name">
                  <BsType size={20} color={"black"} />
                </label>
                <input
                  className="bg-primary w-48 h-[38px] border-1 text-black pl-3 rounded-lg border-secondary"
                  placeholder="Name..."
                  type="text"
                  name="name"
                  id="name"
                  value={newField?.name ?? ''}
                  onChange={(e) => setNewField({...newField, name: e?.target?.value})}
                />
              </div>
              <div className="flex space-x-2 items-center">
                <label htmlFor="type">
                  <FiServer size={20} color={"black"} />
                </label>
                <Select
                  id="type"
                  name="type"
                  placeholder="Select a type"
                  options={TYPES}
                  theme={theme}
                  styles={customStyle}
                  value={newField?.type ?? ""}
                  onChange={(e: any) => setNewField({...newField, type: e})}
                />
              </div>
              <div className={`flex space-x-2 mr-4 items-center ${!hasLengthParam.includes(newField?.type?.value) && "opacity-50"}`}>
                <label htmlFor="max">
                  <AiOutlineSliders size={20} color={"black"} />
                </label>
                  <input
                    disabled={hasLengthParam.includes(newField?.type?.value) ? false : true}
                    placeholder="Max length"
                    className={`bg-primary border-1 h-9 w-48 pl-3 text-black rounded-lg border-secondary`}
                    type="number"
                    name="max"
                    id="max"
                    value={newField?.maxLength ?? ''}
                    onChange={(e: any) => setNewField({...newField, maxLength: e?.target?.value})}
                  />  
              </div>
              <div className={`flex space-x-2 items-center ${!(newField?.type?.value in FORMATS) && "opacity-50"}`}>
                <label htmlFor="format">
                  <FiBox size={20} color={"black"} />
                </label>
                <Select
                  isDisabled={!(newField?.type?.value in FORMATS)}
                  name="format"
                  id="format"
                  placeholder="Select a format"
                  //@ts-ignore
                  options={newField?.type?.value in FORMATS ? FORMATS[newField?.type?.value] : [{value: "", label: ""}]}
                  theme={theme}
                  styles={customStyle}
                  value={newField?.format ?? ""}
                  onChange={(e: any) => setNewField({...newField, format: e})}
                />
              </div>
              <div className={`flex items-center ${(!newField?.name || newField?.name === "" || !newField?.type) && "opacity-50"}`}>
                <input
                  disabled={(!newField?.name || newField?.name === "" || !newField?.type)}
                  className="bg-primary ml-7 w-20 h-9 text-secondary border-1 rounded-xl border-secondary cursor-pointer"
                  type="submit"
                  name="submit"
                  value={"Add"}
                  onClick={() => {
                    //setData([...data, newField]);
                    const k = newField?.name;
                    push({query: {...query, k: newField }});
                    console.log(query)
                    setNewField({});
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl text-secondary border-b-2 pb-1 border-appRed">
              Export
            </h2>
            <div className=" flex flex-wrap space-y-3 w-full mt-5">
              <div className="flex space-x-2 mr-4 mt-3 items-center">
                <label htmlFor="max">
                  <TbListNumbers size={20} color={"black"} />
                </label>
                <input
                  placeholder="Max length"
                  className="bg-primary border-1 h-9 w-48 pl-3 rounded-lg border-secondary"
                  type="number"
                  name="max"
                  id="max"
                />
              </div>
              <div className="flex space-x-2 items-center">
                <label htmlFor="name">
                  <FiUpload size={20} color={"black"} />
                </label>
                <Select
                  placeholder="Select extension"
                  options={options}
                  theme={theme}
                  styles={customStyle}
                />
              </div>

              <div className="flex items-center">
                <input
                  className="bg-primary ml-7 w-28 h-9 text-secondary border-1 rounded-xl border-secondary"
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
