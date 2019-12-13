import React, { useState } from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../utils/authcontext";

import { sortOptions } from "./optionsdata";

import SortViewOption from "./sortviewoption";

import "./sortview.scss";

// used to edit the option boxes of these two components
const { Option, ValueContainer } = components;

const customStyles = {
  menu: provided => ({
    ...provided,
    marginTop: "-2px",
    borderWidth: 1,
    borderColor: "#EDEFF1",
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderRadius: "4px 4px 0 0",
    boxShadow: "none",
  }),
  control: (reactSelectStyles, selectState) => ({
    ...reactSelectStyles, // omit if you don't want any of the React-Select style for this component
    borderColor: "transparent",
    height: 24,
  }),
  menuList: provided => ({
    ...provided,
    width: 160,
  }),
};

const CustomOption = ({ data, ...props }) => {
  const { icon, label } = data;
  return (
    <Option className="sortview__sort__select__option" {...props}>
      <SortViewOption icon={icon} label={label} />
    </Option>
  );
};

const CustomValue = ({ getValue, ...props }) => {
  const [{ icon, label }] = getValue();
  return (
    <ValueContainer className="sortview__sort__select__value" {...props}>
      <SortViewOption icon={icon} label={label} />
    </ValueContainer>
  );
};

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon
          icon={props.selectProps.menuIsOpen ? "caret-up" : "caret-down"}
        />
      </components.DropdownIndicator>
    )
  );
};

export default function Sort() {
  const { user } = useAuth();

  const defaultSelection = user ? null : sortOptions[0];
  const [selection, setSelection] = useState(defaultSelection);

  function handleChange(selected) {
    const { value } = selected;
    setSelection(selected);
  }

  function handleClick(props) {
    console.log(props.menuIsOpen);
  }

  return (
    <div className="sortview__sort">
      <h2 className="sortview__header">Sort</h2>
      <Select
        className="sortview__sort__select"
        defaultValue={selection}
        value={selection}
        options={sortOptions}
        onChange={handleChange}
        styles={customStyles}
        components={{
          DropdownIndicator,
          Option: CustomOption,
          ValueContainer: CustomValue,
        }}
      />
    </div>
  );
}