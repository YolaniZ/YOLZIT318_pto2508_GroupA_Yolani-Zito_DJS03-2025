import React from 'react';
import PodcastPreviewCard from './PodcastPreviewCard';
import './PodcastGrid.css';

/**
 * PodcastGrid component that renders a responsive grid of podcast preview cards
 * @param {Object} props - Component props
 * @param {Array} props.podcasts - Array of podcast objects
 * @param {Array} props.genres - Array of genre objects for mapping genre IDs to names
 * @returns {JSX.Element} Grid container with podcast cards
 */
function PodcastGrid({ podcasts, genres }) {
  return (
    <div className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastPreviewCard
          key={podcast.id}
          podcast={podcast}
          genres={genres}
        />
      ))}
    </div>
  );
}

export default PodcastGrid;
