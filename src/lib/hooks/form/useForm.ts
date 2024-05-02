import httpClient from "@/services/api/httpClient";
import { FormConfig } from "@/type/form";
import { useEffect, useState } from "react";

const useForm = (formId: string) => {
  // keep the form config from backend
  const [formConfig, setFormConfig] = useState<FormConfig>();
  // keep the loading state
  const [loading, setLoading] = useState<boolean>(false);

  // run on load
  useEffect(() => {
    fetchForm();
  }, []);

  /**
   * Fetch the form config from backend
   */
  const fetchForm = async () => {
    try {
      setLoading(true);
      const data = await httpClient.get("/api/form/?formId=" + formId);
      if (data.status) {
        setFormConfig(data.formConfig);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return { formConfig, loading };
};

export default useForm;
