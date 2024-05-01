import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ReactSelect, {
  ActionMeta,
  ControlProps,
  DropdownIndicatorProps,
  MultiValue,
  OptionProps,
  PlaceholderProps,
  SingleValue,
  StylesConfig,
  Theme,
  components,
} from "react-select";

export type SelectProps<T> = {
  options?: T[] | [];
  label?: string;
  onChange?: (
    newValue: SingleValue<T> | MultiValue<T>,
    actionMeta: ActionMeta<T>
  ) => void;
  value?: T | T[] | null;
  placeholder?: string;
  image?: React.ReactNode;
  className?: string;
  height?: number;
  isMulti?: boolean;
  error?: boolean;
};

export type Option = {
  label: string;
  value: string | number;
};

/**
 * Select custom style
 */
const selectStyle: StylesConfig<Option> = {
  // wrapper style
  control: (base: any) => ({
    ...base,
    border: "none",
    outline: "none",
    minWidth: "138px",
    width: "100%",
  }),
  // selected value style
  singleValue: (base: any) => ({
    ...base,
    color: "#27283E",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "19.5px",
  }),
  // input style
  input: (base: any) => ({
    ...base,
    maxWidth: "138px",
    overflow: "hidden",
    lineHeight: "19.5px",
    "&:placeholder": {
      lineHeight: "19.5px",
    },
  }),
  // placeholder style
  placeholder(base) {
    return {
      ...base,
      lineHeight: "19.5px",
    };
  },
  // option style
  option(base) {
    return {
      ...base,
      lineHeight: "19.5px",
    };
  },
};

// add theme color
const theme = (theme: Theme): Theme => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "none",
      primary: "none",
    },
  };
};

/**
 * Custom dropdown indicator
 * @returns
 */
const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <FaChevronDown
      size={20}
      className={`p-1 transition-transform ${menuIsOpen && "rotate-180"}`}
    />
  );
};

const Select: React.FC<SelectProps<Option>> = ({
  image,
  height = 40,
  error,
  ...props
}) => {
  // wrapper component
  const Control = ({ children, ...props }: ControlProps<Option>) => (
    <span
      className={`flex items-center gap-1 border rounded-sm h-[${height}px] ${
        error ? "border-error" : ""
      }`}
    >
      {image}
      <components.Control {...props}>{children}</components.Control>
    </span>
  );

  // option component
  const Option = (props: OptionProps<Option>) => {
    const { innerProps, innerRef } = props;
    return (
      <article
        ref={innerRef}
        {...innerProps}
        className={`px-2 py-1 border-b-[1px] last-of-type:border-b-0 hover:bg-slate-100 text-label cursor-pointer text-primary ${
          props.isSelected && "bg-slate-200"
        }`}
      >
        <div>{props.data.label}</div>
      </article>
    );
  };

  // placeholder component
  const Placeholder = (props: PlaceholderProps<Option>) => {
    return (
      <components.Placeholder {...props}>
        <span className="block font-normal text-label text-secondary">
          {props.selectProps.placeholder}
        </span>
      </components.Placeholder>
    );
  };

  return (
    <ReactSelect
      isClearable
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
        Control,
        Option,
        Placeholder,
      }}
      styles={selectStyle}
      theme={theme}
      {...props}
    />
  );
};

export { Select };
