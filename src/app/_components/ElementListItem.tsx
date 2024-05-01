import { getFields, setFields } from "@/lib/slices/formSlice";
import { useId } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

type Field = {
  label: string;
  value: string;
};

type ElementListItemProps = {
  field: Field;
};

interface DropResult {
  name: string;
}

const ElementListItem: React.FC<ElementListItemProps> = ({ field }) => {
  // get the dispatch hook
  const dispatch = useDispatch();
  // get the current fields
  const fields = useSelector(getFields);

  /**
   * Add the field to the list by updating the store
   * @param e
   */
  const addField = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    // generate id from current timestamp
    const id = Date.now();
    // generate config
    const fieldConfig = {
      id,
      type: field.value,
      label: field.label,
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
