import fieldTypes from "@/config/fieldType";
import {
  FieldConfig,
  Option,
  getFields,
  setFields,
} from "@/lib/slices/formSlice";
import { uniqueValue } from "@/utils/fns";
import { useMemo } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

type ElementListItemProps = {
  field: Option;
};

const ElementListItem: React.FC<ElementListItemProps> = ({ field }) => {
  // get the dispatch hook
  const dispatch = useDispatch();
  // get the current fields
  const fields = useSelector(getFields);
  // check if the field type has options
  const hasOptions = useMemo(
    () =>
      !!fieldTypes.find((fieldType) => fieldType.value === field.value)
        ?.options,
    [field]
  );

  /**
   * Add the field to the list by updating the store
   * @param e
   */
  const addField = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    // generate id from current timestamp
    const id = uniqueValue();
    // generate config
    const fieldConfig: FieldConfig = {
      id,
      type: field.value + "",
      label: field.label,
      title: field.label,
      options: hasOptions
        ? [
            {
              label: "Option 1",
              value: 11111111,
            },
          ]
        : undefined,
    };
    dispatch(setFields([...fields, fieldConfig]));
  };

  return (
    <li className="pl-4 pr-20 py-2 border-b-primary/50 border-b relative group hover:bg-secondary">
      <div className="">
        <p className="text-primary font-semibold">{field.label}</p>
        <span
          className="text-primary cursor-pointer absolute right-2 top-2 hidden group-hover:block hover:scale-105"
          onClick={addField}
        >
          <CiSquarePlus size={24} />
        </span>
      </div>
    </li>
  );
};

export default ElementListItem;
