"use client";

import Header from "@/components/layout/Header";
import useForm from "@/lib/hooks/form/useForm";
import FormBuilder from "../../_components/FormBuilder";

const FormPreviewPage = ({ params }: { params: { formId: string } }) => {
  // use the custom hook to get form config from backend
  const { formConfig, loading } = useForm(params.formId);

  // if loading, return null
  if (!formConfig) return null;

  return (
    <>
      <Header title={formConfig?.title || ""} />
      <main className="px-[400px] h-full w-full overflow-y-auto pt-10 ">
        <FormBuilder formConfig={formConfig} />
      </main>
    </>
  );
};

export default FormPreviewPage;
