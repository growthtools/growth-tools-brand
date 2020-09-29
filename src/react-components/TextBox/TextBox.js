import React, { useState } from "react";
import PropTypes from "prop-types";


const TextBox = ({ placeholder, onChange, value, options, error }) => {

  const hasError = error != "";

  return (
    <div>
      <div className="partner-name form-group">
        <label htmlFor="partnername">Partner Name</label>
        <input type="partnername" className="form-control" id="partnername" placeholder={placeholder} value={value}
          onChange={(e) => setPartnerName(e.target.value)}></input>
      </div>
      {hasError && <div className="partner-name__error">{error}</div>}
    </div>
  )
}

SelectControl.propTypes = {

}
export default TextBox
