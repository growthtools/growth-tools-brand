import React from "react";
import PropTypes from "prop-types";

/**
 * A styled checkbox control with optional label.
 */
export default function CheckboxControl(props) {
  return (
    <label className="checkbox-control">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={e => props.onChange(e.target.checked)}
      />
      <span className="checkbox-control__box">
        <img
          src="/assets/images/icons/check.svg"
          alt="check icon"
          className="checkbox-control__checkmark"
        />
      </span>
      <span className="checkbox-control__label">{props.label}</span>
    </label>
  );
}

CheckboxControl.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};
