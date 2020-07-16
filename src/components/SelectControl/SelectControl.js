import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./select-control-styles.scss";

import ChevronDownInactive from "./ChevronDownGrey.svg";
import ChevronDownActive from "./ChevronDownGreen.svg";

const classname = "select-control";

const SelectControl = ({ placeholder, onChange, value, options, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = newValue => () => {
    setIsOpen(false);
    onChange(newValue);
  };

  let flyoutClass = `${classname}__options-flyout`;
  let overlayClass = `${classname}__overlay`;
  if (isOpen) {
    flyoutClass += " open";
    overlayClass += " open";
  }

  const optionElems = options.map(option => (
    <div
      className={`${classname}__option`}
      data-value={option.value}
      key={option.value}
      onClick={handleChange(option.value)}
    >
      {option.label}
    </div>
  ));

  const hasError = error != "";
  let rootClassName = `${classname} ${isOpen ? "open" : ""} ${
    hasError ? "error" : ""
    }`;

  return (
    <>
      <div className={rootClassName} onClick={() => setIsOpen(!isOpen)}>
        <object
          type="image/svg+xml"
          className={`${classname}__chevron`}
          data={isOpen ? ChevronDownActive : ChevronDownInactive}
        />
        {value ? (
          <div className={`${classname}__value`}>{value}</div>
        ) : (
            <div className={`${classname}__placeholder`}>{placeholder}</div>
          )}
        <div className={overlayClass} />
        <div className={flyoutClass}>{optionElems}</div>
      </div>
      {hasError && <div className={`${classname}__error`}>{error}</div>}
    </>
  );
};

SelectControl.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.any,
    })
  ),
  error: PropTypes.string,
};

SelectControl.defaultProps = {
  placeholder: "",
  onChange: () => { },
  options: [],
  error: "",
};

export default SelectControl;
