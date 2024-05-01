import { Card } from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Separator } from "@/components/atoms/seperator";
import { FieldConfig } from "@/lib/slices/formSlice";
import { Switch } from "@nextui-org/react";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegClone } from "react-icons/fa";

type FormFieldProps = {
  field: FieldConfig;
};

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  return (
    <Card className="">
      <div className="p-4 ">
        <Input variant="underline" value={field.label} />
      </div>
      <div className="flex pt-3 pb-1 px-4 gap-2 justify-end items-center">
        <span>
          <Switch
            size="sm"
            color="success"
            classNames={{ label: "text-secondary hover:text-primary" }}
          >
            Required
          </Switch>
        </span>
        <Separator orientation="vertical" />
        <span className="cursor-pointer hover:scale-105">
          <FaRegClone size={18} className="text-secondary hover:text-primary" />
        </span>
        <span className="cursor-pointer hover:scale-105">
          <MdOutlineDelete
            className="text-secondary hover:text-primary"
            size={24}
          />
        </span>
      </div>
    </Card>
  );
};

export default FormField;
