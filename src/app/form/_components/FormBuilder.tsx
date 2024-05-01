import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { Select } from "@/components/atoms/select";
import { Textarea } from "@/components/atoms/textarea";
import { FieldConfig, FormConfig } from "@/lib/slices/formSlice";
import { Checkbox, Radio, RadioGroup } from "@nextui-org/react";

type FormBuilderProps = {
  formConfig: FormConfig;
};

const FormBuilder: React.FC<FormBuilderProps> = ({ formConfig }) => {
  console.log(formConfig);
  /**
   * Render fields by checking the types
   * @param field
   * @returns
   */
  const renderFormField = (field: FieldConfig) => {
    console.log(field.type);
    switch (field.type) {
      case "input":
        return (
          <div key={field.id} className="space-y-1">
            <Label>{field.label}</Label>
            <Input required={field.required} variant="underline" />
          </div>
        );
      case "textarea":
        return (
          <div key={field.id} className="space-y-1">
            <Label>{field.label}</Label>
            <Textarea required={field.required} />
          </div>
        );
      case "select":
        return (
          <div key={field.id} className="space-y-1">
            <Label>{field.label}</Label>
            <Select options={field.options} />
          </div>
        );
      case "radio":
        return (
          <div key={field.id} className="space-y-1">
            <RadioGroup
              label={field.label}
              classNames={{ label: "text-primary" }}
            >
              {field.options?.map((option) => (
                <Radio
                  value={option.value + ""}
                  key={option.value}
                  color="success"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        );
      case "checkbox":
        return (
          <div key={field.id} className="space-y-1">
            <Label>{field.label}</Label>
            <div className="flex flex-col gap-2">
              {field.options?.map((option) => (
                <Checkbox
                  color="success"
                  key={option.value}
                  classNames={{ icon: "text-white" }}
                  name={field.id + ""}
                >
                  {option.label}
                </Checkbox>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Render the form based on formConfig
  return (
    <section className="shadow-sm min-h-screen h-full bg-primary rounded-sm p-10">
      <h2>{formConfig.title}</h2>
      <form className="space-y-3">
        {formConfig.fields.map((field) => renderFormField(field))}
        <div className="flex justify-end pt-4">
          <Button type="submit" className="text-white">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormBuilder;
