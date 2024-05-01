import { updateFieldById } from "@/utils/fns";
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
     * Update the field label
     * @param state
     * @param action
     */
    setFieldLabel: (state, action: PayloadAction<Option>) => {
      const field = action.payload;
      let fields = [...state.config.fields];
      const fieldIndex = fields.findIndex((f) => f.id === field.value);
      fields[fieldIndex].label = field.label;
      state.config.fields = fields;
    },
    /**
     * Remove the field config by id
     * @param state
     * @param action
     */
    removeFieldConfig: (state, action: PayloadAction<string | number>) => {
      state.config.fields = [...state.config.fields].filter(
        (field) => field.id !== action.payload
      );
    },
    /**
     * Add the field options
     * @param state
     * @param action
     */
    setFieldOption: (
      state,
      action: PayloadAction<{ id: string | number; field: Option }>
    ) => {
      let fields = [...state.config.fields];
      const fieldIndex = fields.findIndex((f) => f.id === action.payload.id);
      const options = fields[fieldIndex].options || [];
      fields[fieldIndex].options = [...options, action.payload.field];
      state.config.fields = fields;
    },
    /**
     * Update the option label
     * Find the field by matching the id
     * @param state
     * @param action
     */
    setOptionLabel: (
      state,
      action: PayloadAction<{ id: string | number; option: Option }>
    ) => {
      const { id, option } = action.payload;

      // Find the field index
      const fieldIndex = state.config.fields.findIndex((f) => f.id === id);

      // Check if the field exists
      if (fieldIndex !== -1) {
        // Retrieve the field and its options
        const field = state.config.fields[fieldIndex];
        const options = field.options || [];

        // Find the index of the option to update
        const optionIndex = options.findIndex(
          (opt) => opt.value === option.value
        );

        // Check if the option exists
        if (optionIndex !== -1) {
          // Create a copy of the options array
          const updatedOptions = [...options];

          // Update the label of the specific option
          updatedOptions[optionIndex] = {
            ...updatedOptions[optionIndex],
            label: option.label,
          };

          // Create a copy of the field with updated options
          const updatedField = { ...field, options: updatedOptions };

          // Create a copy of the fields array with the updated field
          const updatedFields = [...state.config.fields];
          updatedFields[fieldIndex] = updatedField;

          // Update the state with the new fields array
          state.config.fields = updatedFields;
        }
      }
    },
    setFieldRequired: (
      state,
      action: PayloadAction<{ id: string | number; required: boolean }>
    ) => {
      const { id, required } = action.payload;

      // Find the index of the field to update
      const fieldIndex = state.config.fields.findIndex((f) => f.id === id);

      // Check if the field exists
      if (fieldIndex !== -1) {
        // Create a copy of the field and update the required property
        const updatedField = {
          ...state.config.fields[fieldIndex],
          required,
        };

        // Create a copy of the fields array with the updated field
        const updatedFields = [...state.config.fields];
        updatedFields[fieldIndex] = updatedField;

        // Update the state with the new fields array
        state.config.fields = updatedFields;
      }
    },

    /**
     * Reset state
     * @returns
     */
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {
  setFields,
  reset,
  setTitle,
  setDescription,
  setFieldLabel,
  removeFieldConfig,
  setFieldOption,
  setOptionLabel,
  setFieldRequired,
} = formSlice.actions;

export default formSlice.reducer;

/**
 * Get the current field config
 */
export const getFields = (store: RootState) => store.form.config.fields;

/**
 * Get the form config
 */
export const getFormConfig = (store: RootState) => store.form.config;
