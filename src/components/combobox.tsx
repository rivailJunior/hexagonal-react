import React from "react";
import "./combobox.css";

type ComboOptionsProps = {
  value: string;
};

const ComboOptions = ({ value }: ComboOptionsProps): JSX.Element => {
  return (
    <option data-testid="custom-list-item" value={value}>
      {value}
    </option>
  );
};

type ComboboxProps = {
  setValue: (value: string) => void;
  value: string;
  children: React.ReactNode;
};

const Combobox = ({ children, setValue, value }: ComboboxProps) => {
  return (
    <div className="input-container">
      <label htmlFor="country" className="mb-3" role="label">
        Search Country
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="custom-input"
        placeholder="ex: Brazil"
        list="countries"
      />

      <datalist id="countries" data-testid="countryList">
        {children}
      </datalist>
    </div>
  );
};

Combobox.Option = ComboOptions;

export { Combobox };
