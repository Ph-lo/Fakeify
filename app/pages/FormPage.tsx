import { AnimatePresence, motion } from "framer-motion";
import { DisplayFields } from "../components/DisplayFields";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { userTemplate } from "../public/userTemplate";
import { AppContext } from "../context/AppProvider";

export const FormPage = () => {
  const router = useRouter();
  // const [state, setState] = useState<any>([]);
  const [template, setTemplate] = useState<any>();
  const { data, setData } = useContext(AppContext);
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
      borderColor: "#30475E",
      borderWidth: "2px",
      borderRadius: "8px",
      backgroundColor: "black",
      // This line disable the blue border
      boxShadow: "none",
      height: "15px",
      width: "191px",
      "&:hover": {
        borderColor: "#DDDDDD",
        opacity: "80",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state?.isSelected ? "white" : "black",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#DDDDDD",
    }),
  };

  const handleTemplate = () => {
    if (template?.value !== "") {
      if (template?.value === "user") {
        // setState(userTemplate);
        setData(userTemplate);
        setTemplate([]);
      }
    }
  };

  useEffect(() => {
    if (router?.query?.field) {
      //@ts-ignore
      setData([...data, JSON.parse(router.query?.field)]);
      router.push({ query: {} });
    }
  }, [router?.query]);
  return (
    <motion.div
      key="form-page"
      className="relative h-full"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      //transition={{ duration: 0.3, delay: 0 }}
    >
      <div className="zIndex absolute w-full flex justify-end px-8 mt-5">
        {template?.value && template?.value !== "" && (
          <button
            className="border-2 border-appBlue h-[38px] text-appBlue mr-5 px-2 font-bold text-lg rounded-lg hover:text-primary hover:border-primary hover:opacity-70 ease-in-out duration-300"
            onClick={() => {
              handleTemplate();
            }}
          >
            &#x2713;
          </button>
        )}
        <Select
          placeholder="Select template"
          className="mr-5"
          options={[{ label: "User", value: "user" }]}
          theme={theme}
          value={template}
          onChange={(e) => setTemplate(e)}
          styles={customStyle}
        />
        <button
          className="border-2 border-appBlue text-appBlue py-1 px-2 rounded-lg hover:text-primary hover:border-primary hover:opacity-70 ease-in-out duration-300"
          onClick={() => {
            if (data?.length > 0) {
              if (confirm("Are you sure you want to delete all the fields ?"))
                setData([]);
            }
          }}
        >
          DELETE FIELDS
        </button>
      </div>
      <div className="relative h-full">
        <AnimatePresence>
          <motion.div
            key="form-tab"
            className="absolute w-[92%] rounded-t-xl left-[4%] right-auto bottom-0"
            animate={{ height: "85%" }}
            initial={{ height: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <div className="bg-appBlue rounded-t-xl h-full w-full">
              <DisplayFields />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
