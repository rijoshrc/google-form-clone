import { getFields } from "@/lib/slices/formSlice";
import { useSelector } from "react-redux";

const FormGenerator = () => {
  // get fields
  const fields = useSelector(getFields);

  return (
    <section className="shadow-sm min-h-screen h-full bg-primary rounded-sm">
      <div>
        {fields.map((field) => (
          <div key={field.id} className="p-4 bg-red-200">
            <h1 className="text-primary">{field.label}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormGenerator;
