import { FormService } from "@/services/form/formService";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const formService = new FormService();
    const form = await formService.addFormEntry(data);
    return Response.json({ status: true, id: form._id });
  } catch (e) {
    return Response.json({ status: true });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const formId = searchParams.get("formId") as string;
    const formService = new FormService();
    const formConfig = await formService.getFormEntry(formId);
    return Response.json({ status: true, formConfig });
  } catch (e) {
    return Response.json({ status: true });
  }
}
