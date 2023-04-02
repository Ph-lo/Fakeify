import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { BsType } from "react-icons/bs";
import { FiServer, FiBox, FiUpload, FiLifeBuoy } from "react-icons/fi";
import { SingleValue, ActionMeta, InputActionMeta } from "react-select";
import { TbListNumbers } from "react-icons/tb";
import { AiOutlineSliders } from "react-icons/ai";
import Select from "react-select";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppProvider";
import { CSVLink, CSVDownload } from "react-csv";
import Loader from "../public/loader.json";

export const SideMenu = () => {
  const { isHome, setIsHome } = useContext(AppContext);
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
            <FormNav />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FormNav = () => {
  const { push, query } = useRouter();
  const [newField, setNewField] = useState<any>({});
  const [exportSetting, setExportSetting] = useState<{
    nbr: string;
    extension: string;
  }>({ nbr: "1", extension: "json" });
  const [exportDoc, setExportDoc] = useState<{
    ready: boolean;
    doc: { header: any; data: any };
  }>({
    ready: false,
    doc: { header: [], data: [] },
  });

  const FORMATS = {
    phone: [
      { value: "us", label: "US" },
      { value: "uk", label: "UK" },
      { value: "fr", label: "FR" },
    ],
    date: [
      { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
      { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
      { value: "MMM Do YYYY", label: "Jan 1st 2023" },
      { value: "ddd Do MMM YYYY", label: "Mon 1st Jan 2023" },
    ],
  };
  const TYPES: { value: string; label: string }[] = [
    { value: "id", label: "id - int" },
    { value: "stringId", label: "id - string" },
    { value: "firstname", label: "Firstname" },
    { value: "lastname", label: "Lastname" },
    { value: "name", label: "Firstname - Lastname" },
    { value: "phone", label: "Phone number" },
    { value: "email", label: "Email" },
    { value: "paragraph", label: "Paragraph" },
    { value: "paragraphs", label: "Paragraphs" },
    { value: "date", label: "Date" },
    { value: "fullAddress", label: "Full address" },
    { value: "postcode", label: "Postcode" },
    { value: "street", label: "Street n° & name" },
    { value: "country", label: "Country" },
  ];
  const hasLengthParam = ["id", "stringId", "paragraphs"];

  const theme = (theme: any) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "#DDDDDD",
      primary: "#30475E",
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
      color: state?.isSelected ? "white" : "black",
    }),
    placeholder: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        color: "#A3A9B4",
      };
    },
  };
  const { data } = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  //console.log(data);
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
                  value={newField?.name ?? ""}
                  onChange={(e) =>
                    setNewField({ ...newField, name: e?.target?.value })
                  }
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
                  onChange={(e: any) => setNewField({ ...newField, type: e })}
                />
              </div>
              <div
                className={`flex space-x-2 mr-4 items-center ${
                  !hasLengthParam.includes(newField?.type?.value) &&
                  "opacity-50"
                }`}
              >
                <label htmlFor="max">
                  <AiOutlineSliders size={20} color={"black"} />
                </label>
                <input
                  disabled={
                    hasLengthParam.includes(newField?.type?.value)
                      ? false
                      : true
                  }
                  placeholder="Max length"
                  className={`bg-primary border-1 h-9 w-48 pl-3 text-black rounded-lg border-secondary`}
                  type="number"
                  name="max"
                  id="max"
                  value={newField?.maxLength ?? ""}
                  onChange={(e: any) =>
                    setNewField({ ...newField, maxLength: e?.target?.value })
                  }
                />
              </div>
              <div
                className={`flex space-x-2 items-center ${
                  !(newField?.type?.value in FORMATS) && "opacity-50"
                }`}
              >
                <label htmlFor="format">
                  <FiBox size={20} color={"black"} />
                </label>
                <Select
                  isDisabled={!(newField?.type?.value in FORMATS)}
                  name="format"
                  id="format"
                  placeholder="Select a format"
                  options={
                    newField?.type?.value in FORMATS
                      ? //@ts-ignore
                        FORMATS[newField?.type?.value]
                      : [{ value: "", label: "" }]
                  }
                  theme={theme}
                  styles={customStyle}
                  value={newField?.format ?? ""}
                  onChange={(e: any) => setNewField({ ...newField, format: e })}
                />
              </div>
              <div
                className={`flex items-center ${
                  (!newField?.name ||
                    newField?.name === "" ||
                    !newField?.type) &&
                  "opacity-50"
                }`}
              >
                <input
                  disabled={
                    !newField?.name || newField?.name === "" || !newField?.type
                  }
                  className="bg-primary ml-7 w-20 h-9 text-secondary border-1 rounded-xl border-secondary cursor-pointer"
                  type="submit"
                  name="submit"
                  value={"Add"}
                  onClick={() => {
                    //setData([...data, newField]);
                    push({
                      query: {
                        ...query,
                        field: JSON.stringify(newField),
                      },
                    });
                    //console.log(query);
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
                  placeholder="Number of rows"
                  className="bg-primary text-black border-1 h-9 w-48 pl-3 rounded-lg border-secondary"
                  type="number"
                  name="max"
                  id="max"
                  value={exportSetting?.nbr}
                  onChange={(e) => {
                    setExportSetting({
                      ...exportSetting,
                      nbr: e?.target?.value,
                    });
                    // setExportDoc({ready: false, doc: []});
                  }}
                />
              </div>
              <div className="flex space-x-2 items-center">
                <label htmlFor="name">
                  <FiUpload size={20} color={"black"} />
                </label>
                <Select
                  placeholder="Select extension"
                  options={[
                    { label: "CSV", value: "csv" },
                    { label: "JSON", value: "json" },
                  ]}
                  theme={theme}
                  styles={customStyle}
                  value={{
                    label: exportSetting?.extension.toUpperCase(),
                    value: exportSetting?.extension,
                  }}
                  onChange={(e) =>
                    setExportSetting({
                      ...exportSetting,
                      extension: e?.value as string,
                    })
                  }
                />
              </div>

              <div className="flex items-center">
                {exportDoc?.ready && exportSetting?.extension === "csv" ? (
                  <motion.div
                    key="btn"
                    //animate={{ opacity: 1, width: 100 }}
                    animate={{
                      backgroundColor: ["hsl(0, 0, 87)", "hsl(141, 37, 57)"],
                      borderColor: "#68B984",
                      color: "#DDDDDD",
                    }}
                    // initial={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="flex items-center justify-center ml-7 w-28 h-9 text-secondary border-1 rounded-xl border-secondary"
                    onClick={() => setExportDoc({ ...exportDoc, ready: false })}
                  >
                    <CSVLink
                      data={exportDoc?.doc?.data}
                      //headers={exportDoc?.doc?.header}
                    >
                      Download
                    </CSVLink>
                  </motion.div>
                ) : exportDoc?.ready && exportSetting?.extension === "json" ? (
                  <motion.div
                    key="btn-json"
                    //animate={{ opacity: 1, width: 100 }}
                    animate={{
                      backgroundColor: ["hsl(0, 0, 87)", "hsl(141, 37, 57)"],
                      borderColor: "#68B984",
                      color: "#DDDDDD",
                    }}
                    // initial={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="flex items-center justify-center ml-7 w-28 h-9 text-secondary border-1 rounded-xl border-secondary"
                    onClick={() => setExportDoc({ ...exportDoc, ready: false })}
                  >
                    <a
                      href={URL.createObjectURL(
                        new Blob([JSON.stringify(exportDoc?.doc?.data)], {
                          type: "text/plain",
                        })
                      )}
                      download="Fake-data.json"
                    >
                      Download
                    </a>
                  </motion.div>
                ) : (
                  <input
                    className="bg-primary ml-7 cursor-pointer w-28 h-9 text-secondary border-1 rounded-xl border-secondary"
                    type="submit"
                    name="submit"
                    value={"Export"}
                    onClick={() => {
                      setLoading(true);
                      fetch("http://localhost:8080/api/random", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          fieldNbr: exportSetting?.nbr,
                          extension: exportSetting?.extension,
                          data: data?.map((d: any) => ({
                            name: d?.name,
                            type: d?.type?.value,
                            format: d?.format?.value,
                            maxLength: d?.maxLength,
                            nbrOfP: d?.nbrOfP,
                          })),
                        }),
                      })
                        .then((res) => res.json())
                        .then((r) => {
                          //console.log(r);
                          const headers = [];
                          for (const e in r?.[0]) {
                            headers?.push({ label: e, key: e });
                          }
                          setExportDoc({
                            ready: true,
                            doc: { header: headers, data: r },
                          });
                          //console.log(headers);
                        })
                        .catch((e) => console.log(e));
                    }}
                  />
                )}
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
