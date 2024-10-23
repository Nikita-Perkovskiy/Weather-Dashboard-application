import React from "react";
import "./LadingSpinner.default.css";
import { loadingSpinnerStyles } from "./LadingSpinner.styled.ts";

export const LadingSpinner = () => {
  return (
    <div style={loadingSpinnerStyles.spinnerWrapper}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
