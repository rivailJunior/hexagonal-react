import React from "react";
import "./combobox.css";
import ComboboxHelper from "../helper/combobox";
import type { ComboOptionsProps, ComboboxProps } from "./combobox.types";
const comboboxHelper = new ComboboxHelper("#country", "#countries");

const ComboOptions = ({ value, flag }: ComboOptionsProps): JSX.Element => {
  return (
    <li
      data-testid="custom-list-item"
      value={value}
      onClick={() => {
        comboboxHelper.updateInputValue(value);
        comboboxHelper.toggleList("none");
      }}
    >
      <div>{value}</div>
      <div>{flag}</div>
    </li>
  );
};

const Combobox = ({ children, setValue, value }: ComboboxProps) => {
  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = evt.target.value;
    setValue(inputVal);
    if (inputVal.length === 0) {
      return comboboxHelper.toggleList("none");
    }
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
