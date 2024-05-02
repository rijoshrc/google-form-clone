import { FormConfig } from "@/type/form";
import connect from "../db/connect";
import FormModel from "@/models/form.model";

export class FormService {
  constructor() {
    connect();
  }

  /**
   * Create form entry in db
   * @param data
   * @returns
   */
  public async addFormEntry(data: FormConfig) {
    const form = await FormModel.create(data);
    return form;
  }

  /**
   * Get the form config by id
   * @param formId
   * @returns
   */
  public async getFormEntry(formId: string) {
    const form = await FormModel.findById(formId);
    return form;
  }
}
