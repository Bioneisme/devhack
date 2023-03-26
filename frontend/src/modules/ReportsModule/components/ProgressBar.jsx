import React from "react";

const ProgressBar = ({ value, maxValue }) => {
  const widthPercent = (value/maxValue)*100;
  return (
    <div className="progress-bar">
      <div
        className="progress-line"
        style={ { width: `${ widthPercent }%` } }
      ></div>
      <p className="progress-value">
        { value } / { maxValue }
      </p>
    </div>
  );
};

export default ProgressBar;
