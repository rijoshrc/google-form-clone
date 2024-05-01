import fieldTypes from "@/config/fieldType";
import ElementListItem from "./ElementListItem";
import { Card } from "@/components/atoms/card";

const ElementList = () => {
  return (
    <div className="bg-primary fixed top-30 left-24 shadow-sm border">
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
