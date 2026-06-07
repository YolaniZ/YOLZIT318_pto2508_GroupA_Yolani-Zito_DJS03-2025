🎙 React Podcast Landing Page
A responsive landing page for discovering podcasts, built with React. The app fetches podcast data from an external API and displays a dynamic grid of podcast previews.

🚀 Features
Data Fetching from Podcast API

Loading/Error States with clear user feedback

Reusable Components for podcast previews

Responsive Grid Layout using CSS Grid

Date Formatting with date-fns

Clean, modular code with JSDoc documentation

📂 Project Structure
Code
src/
├── components/
│   ├── PodcastPreviewCard.jsx   # Reusable podcast card
│   └── LoadingSpinner.jsx       # Loading indicator
├── App.jsx                      # Root component
├── App.css                      # Global styles
└── index.js                     # Entry point
⚙️ Installation
bash
# Clone repository
git clone https://github.com/your-username/podcast-landing.git

# Navigate into project
cd podcast-landing

# Install dependencies
npm install

# Start development server
npm start
🖼 Usage
On initial load, the app fetches podcasts from the API.

Displays a loading spinner while fetching.

Shows error messages if the request fails.

Renders a responsive grid of podcast previews:

Podcast image

Title

Number of seasons

Genre tags

Last updated date (e.g., “3 days ago”)

📱 Responsiveness
Desktop (≥1200px) → 4–5 cards per row

Tablet (~768px) → 2–3 cards per row

Mobile (~375px) → 1 card per row

Implemented with CSS Grid’s auto-fit and minmax() for seamless adaptation.

🧩 Example Component
jsx
<PodcastPreviewCard podcast={podcast} />
Props:

image → Podcast cover

title → Podcast name

seasons → Number of seasons

genres → Array of genre names

updated → Last updated date

📖 Documentation
All major functions and components include JSDoc comments for clarity.

Example:

jsx
/**
 * PodcastPreviewCard component
 * @param {Object} props - Component props
 * @param {Object} props.podcast - Podcast data object
 */
✅ Deliverables Recap
Functional React app with API integration

Loading, error, and empty states

Reusable podcast preview card component

Responsive grid layout

Documented, clean codebase
