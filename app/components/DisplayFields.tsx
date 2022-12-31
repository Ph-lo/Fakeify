import { ReactElement, useState } from "react";
import { AnimatePresence, DraggableProps, motion } from "framer-motion";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { reorder } from "../utils/reorder";
import Link from "next/link";
import Select from "react-select";
import { MdDragIndicator } from "react-icons/md";

interface FieldProps {
  id: number;
  name: string;
  type: string;
  maxLen?: number;
  format?: string;
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

export const DisplayFields = ({ fields }: Props) => {
  const [state, setState] = useState<any>([...fields]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
    >
      <div>
        <header className="flex text-xl pb-3 mx-10 space-x-5 pt-10 border-b-2 border-primary">
          <h3 className="w-full">Name</h3>
          <h3 className="w-full">Type</h3>
          <h3 className="w-full">Format</h3>
          <h3 className="w-full">Constraint</h3>
          <div className="w-20" />
        </header>
        <div className="mt-10">
          {state?.map((row: any) => (
            <FieldsRow row={row} />
          ))}
        </div>
        {/* <DraggableList fields={fields} /> */}
      </div>
    </motion.div>
  );
};

const FieldsRow = ({ row }: any) => {
  console.log(row);
  return (
    <div className="flex my-3 px-10 space-x-5">
      <div className="w-full">
        <input
          className="bg-primary text-secondary rounded-lg h-9 text-center max-w-[190px]"
          type="text"
          value={row?.name}
        />
      </div>
      <div className="w-full">
        <Select
          placeholder="Select a type"
          options={TYPES}
          value={{ label: row?.type, value: row?.type }}
          styles={{
            control: (base) => ({
              ...base,
              color: "black",
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
      <div className="w-full">
        {row?.format ? (
          <Select
            placeholder="Select a type"
            options={TYPES}
            value={{ label: row?.type, value: row?.type }}
            styles={{
              control: (base) => ({
                ...base,
                color: "black",
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
        ) : (
          <div className="h-10 w-full max-w-[191px] bg-secondary rounded-lg opacity-40"></div>
        )}
      </div>
      <div className="w-full">
        {row?.maxLen ? (
          <Select
            placeholder="Select a type"
            options={TYPES}
            value={{ label: row?.type, value: row?.type }}
            styles={{
              control: (base) => ({
                ...base,
                color: "black",
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
        ) : (
          <div className="h-10 w-full max-w-[191px] bg-secondary rounded-lg opacity-40"></div>
        )}
      </div>
      <div className="w-20"></div>
    </div>
  );
};
