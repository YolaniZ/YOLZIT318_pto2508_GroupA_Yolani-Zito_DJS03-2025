import React, { useState, useEffect } from 'react';
import PodcastGrid from './components/PodcastGrid';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
import { genres } from './data';

/**
 * Main App component that manages podcast data fetching and layout
 * @returns {JSX.Element} The main app component
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('title');

  /**
   * Fetches all podcast shows from the API on component mount
   */
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://podcast-api.netlify.app/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data || data.length === 0) {
          setError('No podcasts found');
          setPodcasts([]);
        } else {
          setPodcasts(data);
        }
      } catch (err) {
        setError(`Failed to fetch podcasts: ${err.message}`);
        setPodcasts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  /**
   * Sorts podcasts based on selected criteria
   * @param {Array} podcastsToSort - Array of podcasts to sort
   * @returns {Array} Sorted podcasts
   */
  const sortPodcasts = (podcastsToSort) => {
    const sorted = [...podcastsToSort];
    
    switch (sortBy) {
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'seasons':
        return sorted.sort((a, b) => b.seasons.length - a.seasons.length);
      case 'updated':
        return sorted.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      default:
        return sorted;
    }
  };

  const sortedPodcasts = sortPodcasts(podcasts);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🎙️ Podcast Discovery</h1>
          <p>Explore amazing podcasts from around the world</p>
        </div>
      </header>

      <main className="app-main">
        {loading && <LoadingSpinner />}

        {error && !loading && (
          <div className="error-container">
            <p className="error-message">⚠️ {error}</p>
          </div>
        )}

        {!loading && !error && sortedPodcasts.length === 0 && (
          <div className="empty-container">
            <p>No podcasts available at the moment. Please try again later.</p>
          </div>
        )}

        {!loading && !error && sortedPodcasts.length > 0 && (
          <>
            <div className="sort-controls">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="title">Title (A-Z)</option>
                <option value="seasons">Seasons (Most)</option>
                <option value="updated">Recently Updated</option>
              </select>
            </div>
            <PodcastGrid podcasts={sortedPodcasts} genres={genres} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
