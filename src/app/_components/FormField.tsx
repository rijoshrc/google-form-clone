import { Card } from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Separator } from "@/components/atoms/seperator";
import {
  removeFieldConfig,
  removeOptionFromField,
  setFieldLabel,
  setFieldOption,
  setFieldRequired,
  setOptionLabel,
} from "@/lib/slices/formSlice";
import { Switch } from "@nextui-org/react";
import React, { useMemo } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegClone } from "react-icons/fa";
import fieldTypes from "@/config/fieldType";
import { useDispatch } from "react-redux";
import { Button } from "@/components/atoms/button";
import { uniqueValue } from "@/utils/fns";
import { IoMdClose } from "react-icons/io";
import { FieldConfig } from "@/type/form";

type FormFieldProps = {
  field: FieldConfig;
};

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  // get the dispatch hook
  const dispatch = useDispatch();
  // check if the field type has options
  const hasOptions = useMemo(
    () =>
      !!fieldTypes.find((fieldType) => fieldType.value === field.type)?.options,
    [field]
  );

  /**
   * Handle the chnage in field label
   * Update the label value to corresponding field config in store
   * @param e
   */
  const handleFieldLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFieldLabel({ label: e.target.value, value: field.id }));
  };

  /**
   * Remove the current field config from state
   * @param e
   */
  const deleteField = (e: React.MouseEvent<HTMLSpanElement>) => {
    dispatch(removeFieldConfig(field.id));
  };

  /**
   * Add option to the field config
   * @param e
   */
  const addFieldOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    // generate id from current timestamp
    const id = uniqueValue();
    const optionLength = field.options?.length || 0;
    dispatch(
      setFieldOption({
        id: field.id,
        field: { label: "Option " + (optionLength + 1), value: id },
      })
    );
  };

  /**
   * Update the option label in store
   * @param fieldId
   * @returns
   */
  const handleOptionLabelChange = (optionId: string | number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setOptionLabel({
          id: field.id,
          option: { label: e.target.value, value: optionId },
        })
      );
    };
  };

  /**
   * Update the required property in store on changing the field
   * @param e
   */
  const handleRequiredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFieldRequired({ id: field.id, required: e.target.checked }));
  };

  /**
   * Remove option from the list and update store
   * @param optionValue
   * @returns
   */
  const removeOption = (optionValue: string | number) => {
    return (e: React.MouseEvent<HTMLSpanElement>) => {
      dispatch(
        removeOptionFromField({
          fieldId: field.id,
          optionValue,
        })
      );
    };
  };

  const optionSection = (
    <div className="p-4 space-y-2">
      {field.options?.map((option) => (
        <div key={option.value} className="flex items-center group">
          <Input
            variant="underline"
            placeholder="Option"
            value={option.label}
            onChange={handleOptionLabelChange(option.value)}
          />
          {(field.options?.length || 0) > 1 && (
            <span
              className="hidden group-hover:block cursor-pointer"
              onClick={removeOption(option.value)}
            >
              <IoMdClose className="text-secondary hover:text-primary" />
            </span>
          )}
        </div>
      ))}
      <Button variant="link" onClick={addFieldOption}>
        Add option
      </Button>
    </div>
  );

  return (
    <Card className="">
      <div className="p-4 ">
        <Input
          variant="underline"
          value={field.label}
          onChange={handleFieldLabelChange}
        />
      </div>
      {hasOptions && optionSection}
      <div className="flex pt-3 pb-1 px-4 gap-2 justify-end items-center">
        <span>
          <Switch
            size="sm"
            color="success"
            classNames={{ label: "text-secondary hover:text-primary" }}
            onChange={handleRequiredChange}
          >
            Required
          </Switch>
        </span>
        <Separator orientation="vertical" />
        <span className="cursor-pointer hover:scale-105">
          <FaRegClone size={18} className="text-secondary hover:text-primary" />
        </span>
        <span className="cursor-pointer hover:scale-105" onClick={deleteField}>
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
