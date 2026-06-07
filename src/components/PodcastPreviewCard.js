import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './PodcastPreviewCard.css';

/**
 * PodcastPreviewCard component that displays a single podcast preview
 * @param {Object} props - Component props
 * @param {Object} props.podcast - Podcast object containing id, title, image, seasons, genres, updated
 * @param {Array} props.genres - Array of genre objects for mapping genre IDs to names
 * @returns {JSX.Element} Card displaying podcast information
 */
function PodcastPreviewCard({ podcast, genres }) {
  /**
   * Formats the last updated date to a human-readable format
   * @returns {string} Formatted date string (e.g., "2 days ago")
   */
  const formatLastUpdated = () => {
    try {
      return formatDistanceToNow(new Date(podcast.updated), { addSuffix: true });
    } catch (err) {
      return 'Recently updated';
    }
  };

  /**
   * Gets the genre names for this podcast
   * @returns {Array} Array of genre title strings
   */
  const getGenreNames = () => {
    if (!podcast.genres || podcast.genres.length === 0) {
      return [];
    }

    return podcast.genres
      .map((genreId) => {
        const genre = genres.find((g) => g.id === genreId);
        return genre ? genre.title : null;
      })
      .filter((name) => name !== null);
  };

  const genreNames = getGenreNames();
  const seasonCount = podcast.seasons ? podcast.seasons.length : 0;

  return (
    <div className="podcast-card">
      <div className="podcast-image-container">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="podcast-image"
          loading="lazy"
        />
        <div className="podcast-overlay">
          <span className="season-badge">{seasonCount} Seasons</span>
        </div>
      </div>

      <div className="podcast-content">
        <h3 className="podcast-title" title={podcast.title}>
          {podcast.title}
        </h3>

        <div className="podcast-genres">
          {genreNames.length > 0 ? (
            genreNames.map((genre, index) => (
              <span key={index} className="genre-tag">
                {genre}
              </span>
            ))
          ) : (
            <span className="genre-tag">Uncategorized</span>
          )}
        </div>

        <div className="podcast-footer">
          <span className="updated-date">
            Updated {formatLastUpdated()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PodcastPreviewCard;
