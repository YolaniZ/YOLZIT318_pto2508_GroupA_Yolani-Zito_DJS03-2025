🎙 React Podcast Landing Page
A responsive landing page for discovering podcasts, built with React. The app fetches podcast data from an external API and displays a dynamic grid of podcast preview cards.

🚀 Features
- Fetches podcast data from a public API.
- Loading spinner while data is loading.
- Error and empty states with user-friendly feedback.
- Responsive podcast grid layout using CSS Grid.
- Reusable components for podcast cards and loading state.
- Uses `date-fns` for relative "updated" timestamps.
- Includes JSDoc comments for major components.

📂 Project Structure
src/
├── components/
│   ├── LoadingSpinner.jsx      # Loading indicator component
│   ├── PodcastGrid.js         # Grid wrapper for podcast cards
│   ├── PodcastGrid.css        # Styles for the grid
│   ├── PodcastPreviewCard.js   # Podcast card component
│   └── PodcastPreviewCard.css  # Podcast card styles
├── App.js                     # Root app component
├── App.css                    # Global app styles
├── data.js                    # Genre metadata used by cards
├── index.css                  # Global styles and layout
└── index.js                   # React entry point

⚙️ Installation
```bash
npm install
npm start
```

🖼 Usage
- The app fetches podcast data when it loads.
- A loading spinner displays until the request completes.
- If the request fails, an error message is shown.
- If no podcasts are returned, an empty state message is displayed.
- When data is available, the app renders a responsive grid of podcast cards.

Each card includes:
- Podcast image
- Podcast title
- Season count badge
- Genre tags
- Last updated date in relative format

📱 Responsive Design
- Desktop → multi-column grid layout
- Tablet → fewer columns with smaller cards
- Mobile → single-column layout for easier reading

🧩 Component Example
```jsx
<PodcastPreviewCard podcast={podcast} genres={genres} />
```

📖 Notes
- `App.js` handles fetching, sorting, and rendering state.
- `LoadingSpinner.jsx` renders the loading state UI.
- `PodcastGrid.js` maps podcasts into `PodcastPreviewCard` components.
- `PodcastPreviewCard.js` formats the update timestamp and genre tags.

