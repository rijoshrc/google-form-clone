import httpClient from "@/services/api/httpClient";
import { FormConfig } from "@/type/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useFormGenerator = () => {
  // keep the loading state
  const [loading, setLoading] = useState<boolean>(false);
  // get the router hook
  const router = useRouter();

  /**
   * Backend request to save the configuration
   * @param formConfig
   */
  const saveFormConfig = async (formConfig: FormConfig) => {
    try {
      setLoading(true);
      const data = await httpClient.post("/api/form", { body: formConfig });
      if (data.status) {
        router.push(`/form/${data.id}/preview`);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return { saveFormConfig };
};

export default useFormGenerator;
