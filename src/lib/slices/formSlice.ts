import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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

export interface FormState {
  loading: boolean;
  error: boolean;
  config: FormConfig;
}

const initialState: FormState = {
  loading: false,
  error: false,
  config: {
    title: "Untitled",
    description: "",
    fields: [],
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    /**
     * Set the field config to state
     * @param state
     * @param action
     */
    setFields: (state, action: PayloadAction<FieldConfig[]>) => {
      state.config.fields = action.payload;
    },
    /**
     * Set the form title
     * @param state
     * @param action
     */
    setTitle: (state, action: PayloadAction<string>) => {
      state.config.title = action.payload;
    },
    /**
     * Set the form description
     * @param state
     * @param action
     */
    setDescription: (state, action: PayloadAction<string>) => {
      state.config.description = action.payload;
    },
    /**
     * Reset state
     * @returns
     */
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setFields, reset, setTitle, setDescription } = formSlice.actions;

export default formSlice.reducer;

/**
 * Get the current field config
 */
export const getFields = (store: RootState) => store.form.config.fields;

/**
 * Get the form config
 */
export const getFormConfig = (store: RootState) => store.form.config;
