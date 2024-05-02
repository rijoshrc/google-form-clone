import fieldTypes from "@/config/fieldType";
import ElementListItem from "./ElementListItem";
import { Card } from "@/components/atoms/card";

const ElementList = () => {
  return (
    <div className="xl:fixed xl:top-30 xl:left-24 shadow-sm mb-10 bg-primary rounded-sm xl:w-[300px]">
      <Card>
        <ul>
          {fieldTypes.map((field) => (
            <ElementListItem key={field.value} field={field} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ElementList;
