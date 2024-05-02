import { FormConfig } from "@/type/form";
import { Schema, model, models } from "mongoose";

export interface IForm extends Document, FormConfig {}

const schema = new Schema<IForm>(
  {
    title: String,
    description: String,
    fields: [Object],
  },
  { timestamps: true }
);

const FormModel = models.forms || model<IForm>("forms", schema);

export default FormModel;
