import React from "react";
import { useState } from "react";

export const ProgressBar = () => {
  const [bar, setBar] = useState({
    value: 0,
    isLoading: false,
  });

  const handleLoading = () => {
    setBar({
      ...bar,
      value: bar.value + 10,
    });
  };

  return (
    <div className="progress_bar_container">
      <h4>Your Progress</h4>
      {/* <div className="progress__border"> */}
      {/* <progress
        aria-describedby=""
        aria-busy="true"
        aria-label="Loading ..."
        className="progress_bar"
        max="100"
        onClick={handleLoading}
        value={bar.value}
      ></progress> */}
      {console.log(bar.value)}

      <div className="progress__container">
        <div className="progress__bar" style={{ width: `${bar.value}%` }}></div>
      </div>
    </div>
    // </div>
  );
};

export default ProgressBar;
