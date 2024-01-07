import React from "react";
import "./combobox.css";
import ComboboxHelper from "../helper/combobox";
const comboboxHelper = new ComboboxHelper("#country", "#countries");

type ComboOptionsProps = {
  value: string;
};

const ComboOptions = ({ value }: ComboOptionsProps): JSX.Element => {
  return (
    <li
      data-testid="custom-list-item"
      value={value}
      onClick={() => {
        comboboxHelper.updateInputValue(value);
        comboboxHelper.toggleList("none");
      }}
    >
      {value}
    </li>
  );
};

type ComboboxProps = {
  setValue: (value: string) => void;
  value: string;
  children: React.ReactNode;
};

const Combobox = ({ children, setValue, value }: ComboboxProps) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    comboboxHelper.toggleList("block");
  };

  return (
    <div className="input-container">
      <label htmlFor="country" className="mb-3" role="label">
        Search Country
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChangeInput}
        className="custom-input"
        placeholder="ex: Brazil"
        id="country"
      />

      <ul id="countries" data-testid="countryList">
        {children}
      </ul>
    </div>
  );
};

Combobox.Option = ComboOptions;

export { Combobox };
