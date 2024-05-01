import { Card } from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import {
  getFormConfig,
  setDescription,
  setTitle,
} from "@/lib/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
import FormField from "./FormField";
import { Button } from "@/components/atoms/button";
import { useRouter } from "next/navigation";

const FormGenerator = () => {
  // get the router
  const router = useRouter();
  // get the dispatch hook
  const dispatch = useDispatch();
  // get the form config
  const formConfig = useSelector(getFormConfig);

  // get the fields
  const fields = formConfig.fields;

  return (
    <section className="shadow-sm min-h-screen h-full bg-primary rounded-sm p-10">
      {/* Title section */}
      <Card className="mb-4 p-[15px] space-y-4">
        <div>
          <Input
            variant="underline"
            placeholder="Form title"
            value={formConfig.title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>
        <div>
          <Textarea
            placeholder="Form description"
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </div>
      </Card>
      <div className="space-y-1">
        {fields.map((field) => (
          <FormField field={field} key={field.id} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button
          variant="primary"
          className="text-white"
          onClick={() => router.push("/form/preview")}
        >
          View form
        </Button>
      </div>
    </section>
  );
};

export default FormGenerator;
