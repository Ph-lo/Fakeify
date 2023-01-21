import { ReactElement, useContext, useEffect, useState } from "react";
import { AnimatePresence, DraggableProps, motion } from "framer-motion";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { reorder } from "../utils/reorder";
import Link from "next/link";
import Select from "react-select";
import { MdDragIndicator } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppProvider";

interface FieldProps {
  name: string;
  type: { value: string; label: string };
  maxLen?: number;
  format?: { value: string; label: string };
}

interface Props {
  fields: FieldProps[];
}

const TYPES = [
  {
    value: "string",
    label: "string",
  },
  {
    value: "number",
    label: "number",
  },
  {
    value: "firstname",
    label: "firstname",
  },
  {
    value: "lastname",
    label: "lastname",
  },
  {
    value: "phone",
    label: "phone",
  },
  {
    value: "email",
    label: "email",
  },
  {
    value: "address",
    label: "address",
  },
  {
    value: "city",
    label: "city",
  },
  {
    value: "zipcode",
    label: "zipcode",
  },
  {
    value: "country",
    label: "country",
  },
  {
    value: "date",
    label: "date",
  },
];

export const DisplayFields = () => {
  //const [state, setState] = useState<any>([]);
  const router = useRouter();

  // useEffect(() => {
  //   if (router?.query?.field) {
  //     //@ts-ignore
  //     setState([...state, JSON.parse(router.query?.field)]);
  //     router.push({ query: {} });
  //   }
  // }, [router?.query]);
  const { data, setData } = useContext(AppContext);

  return (
    <motion.div
      key="all-fields"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
    >
      <div>
        <header className="flex text-xl pb-3 mx-10 space-x-5 pt-10 border-b-2 border-primary">
          <h3 className="w-full">Name</h3>
          <h3 className="w-full">Type</h3>
          <h3 className="w-full">Format</h3>
          <h3 className="w-full">Length</h3>
          <div className="w-20" />
        </header>
        <div className="mt-10">
          {data?.map((row: any, index: number) => (
            <FieldsRow key={`field-${index}`} row={row} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FieldsRow = ({ row, index }: any) => {
  //console.log(index);
  const { data, setData } = useContext(AppContext);
  return (
    <div className="flex my-3 px-10 space-x-5">
      <div className="w-full">
        <p className="bg-primary text-secondary rounded-lg h-9 text-center max-w-[190px] flex justify-center items-center">
          {row?.name}
        </p>
      </div>
      <div className="w-full">
        <p className="bg-primary text-secondary rounded-lg h-9 max-w-[190px] flex justify-center items-center">
          {row?.type?.label}
        </p>
      </div>
      <div className="w-full">
        {row?.format ? (
          <p className="bg-primary text-secondary rounded-lg h-9 text-center max-w-[190px] flex justify-center items-center">
            {row?.format?.label}
          </p>
        ) : (
          <div className="h-10 w-full max-w-[191px] bg-secondary rounded-lg opacity-40"></div>
        )}
      </div>
      <div className="w-full">
        {row?.maxLength ? (
          <p className="bg-primary text-secondary rounded-lg h-9 text-center max-w-[190px] flex justify-center items-center">
            {row?.maxLength}
          </p>
        ) : (
          <div className="h-10 w-full max-w-[191px] bg-secondary rounded-lg opacity-40"></div>
        )}
      </div>
      <div className="w-20 flex items-center">
        <TiDeleteOutline
          size={22}
          className="cursor-pointer hover:text-secondary transition-colors ease-in-out duration-200"
          onClick={() => {
            let tmpState = [...data];
            tmpState.splice(index, 1);
            setData(tmpState);
          }}
        />
      </div>
    </div>
  );
};
