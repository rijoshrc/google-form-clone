export type Option = {
  label: string;
  value: string | number;
};

export type FieldConfig = {
  id: string | number;
  label: string;
  type: string;
  title: string;
  description?: string;
  required?: boolean;
  options?: Option[];
};

export type FormConfig = {
  title: string;
  description: string;
  fields: FieldConfig[];
};
