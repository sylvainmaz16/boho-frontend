import React from 'react';
import { useEffect, useState } from 'react';

// I want to add a loading state to this based on user progress.
// not sure what the status will be based on though so on define couple styles cams-??
export const ProgressBar = () => {
  const [bar, setBar] = useState({
    value: 0,
    isLoading: false,
  });

  const handleLoading = (e) => {
    setBar({
      ...bar,
      value: bar.value + 10,
    });
  };

  return (
    <div className='progress_bar_container'>
      <h4>Your Progress</h4>
      <progress
        aria-describedby=''
        aria-busy='true'
        aria-label='Loading ...'
        className='progress_bar'
        max='100'
        onClick={handleLoading}
        value={bar.value}></progress>
    </div>
  );
};

export default ProgressBar;
