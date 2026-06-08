import React from 'react';

/**
 * LoadingSpinner component that displays a loading indicator while data is fetched
 * @returns {JSX.Element}
 */
function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading podcasts...</p>
    </div>
  );
}

export default LoadingSpinner;
