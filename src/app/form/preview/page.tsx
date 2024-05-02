"use client";

import Header from "@/components/layout/Header";
import FormBuilder from "../_components/FormBuilder";
import { useSelector } from "react-redux";
import { getFormConfig } from "@/lib/slices/formSlice";

const FormPreviewPage = () => {
  // Get the form config from store
  const formConfig = useSelector(getFormConfig);

  return (
    <>
      <Header title={formConfig.title} />
      <main className="px-[15px] md:px-20 lg:px-[200px] xl:px-[400px] h-full w-full overflow-y-auto pt-10 ">
        <FormBuilder formConfig={formConfig} />
      </main>
    </>
  );
};

export default FormPreviewPage;
