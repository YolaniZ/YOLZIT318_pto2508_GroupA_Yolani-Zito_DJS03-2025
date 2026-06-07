# Setup Instructions

## Prerequisites
Before running the application, you need to install Node.js and npm.

### Installing Node.js and npm

1. **Download Node.js**: Visit https://nodejs.org/ and download the LTS (Long Term Support) version
2. **Install Node.js**: Follow the installation wizard (npm will be installed automatically)
3. **Verify Installation**: Open a terminal and run:
   ```
   node --version
   npm --version
   ```

## Getting Started

### 1. Install Dependencies
Navigate to the project directory and install all required packages:
```bash
npm install
```

### 2. Start the Development Server
Run the development server:
```bash
npm start
```

The app will automatically open in your default browser at `http://localhost:3000`

### 3. Build for Production
When you're ready to deploy:
```bash
npm run build
```

> Note: This is a Create React App project. Do not use Live Server to preview the app. Use `npm start` to run the React development server instead.

## Project Structure

```
src/
├── App.js                          # Main app component with data fetching
├── App.css                         # App-level styling
├── index.js                        # React DOM entry point
├── index.css                       # Global styles
└── components/
    ├── PodcastGrid.js              # Grid layout component
    ├── PodcastGrid.css             # Grid styling
    ├── PodcastPreviewCard.js       # Individual podcast card component
    └── PodcastPreviewCard.css      # Card styling
public/
└── index.html                      # HTML template
package.json                        # Project dependencies and scripts
data.js                             # Genre data provided by the project
```

## Features

✅ **Fetches Podcast Data**: Retrieves data from https://podcast-api.netlify.app/ on page load
✅ **Loading State**: Displays a spinner while data is being fetched
✅ **Error Handling**: Shows meaningful error messages if fetch fails
✅ **Responsive Grid**: Adapts beautifully to desktop (1200px+), tablet (768px), and mobile (375px)
✅ **Podcast Cards**: Each card displays:
   - Podcast image
   - Title
   - Number of seasons
   - Associated genre names
   - "Last updated" date in human-readable format (e.g., "2 days ago")
✅ **Sort Functionality**: Sort podcasts by title, seasons, or last updated date
✅ **Clean Code**: All components include JSDoc comments

## Technologies Used

- **React 18**: Component-based UI framework
- **React Hooks**: useState and useEffect for state management and side effects
- **date-fns**: For date formatting
- **CSS Grid & Flexbox**: Responsive layout
- **Fetch API**: For external API communication

## Browser Compatibility

The app works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

**Port 3000 already in use?**
The development server will prompt you to use a different port. Accept the suggestion.

**Styles not loading?**
Clear your browser cache (Ctrl+Shift+Delete) and refresh.

**API not responding?**
The podcast API may be temporarily unavailable. Check https://podcast-api.netlify.app/ for status updates.

## Notes

- The app automatically fetches all available podcasts on page load
- Images are lazy-loaded for better performance
- Genre mappings use the data provided in `data.js`
- If a podcast doesn't have associated genres, it displays "Uncategorized"
