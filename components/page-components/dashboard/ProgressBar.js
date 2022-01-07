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
      <progress
        aria-describedby=""
        aria-busy="true"
        aria-label="Loading ..."
        className="progress_bar"
        max="100"
        onClick={handleLoading}
        value={bar.value}
      ></progress>
    </div>
  );
};

export default ProgressBar;
