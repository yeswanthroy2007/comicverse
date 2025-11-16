# ComicVerse - Marvel & DC Comic Store

A beautiful, fully connected comic book store featuring Marvel and DC universes with interactive browsing, detailed comic descriptions, shopping cart functionality, and a stunning blue and black gradient design.

## Features

✨ **Complete Comic Catalog**
- 12 authentic Marvel and DC comics with detailed descriptions
- High-quality cover images for each comic
- Organized by publisher (Marvel Universe vs DC Universe)
- Filter by genre and search functionality

🎨 **Design**
- Professional blue and black gradient background
- Responsive layout for all devices
- Smooth animations and transitions
- Sticky navigation header
- Interactive carousel on homepage

🛒 **Shopping Features**
- Add comics to cart
- Adjust quantities
- Calculate totals with 7% tax
- Persistent cart using localStorage
- Mock checkout functionality

🔍 **Browse & Discover**
- Featured comics carousel
- New releases section
- Popular comics section
- Publisher spotlights
- Advanced filtering by publisher and genre
- Search by comic title or character name
- Multiple sort options (newest, price, title)

📱 **Comic Details**
- Full description for each comic
- Character listings
- Release dates
- Genre information
- Related comics recommendations

## Project Structure

\`\`\`
.
├── index.html                 # Homepage with carousel & featured sections
├── browse.html               # Comic catalog with filtering
├── comic-detail.html         # Individual comic page with full description
├── cart.html                 # Shopping cart page
├── assets/
│   ├── data/
│   │   └── comics.js        # Complete comics database with descriptions
│   ├── scripts/
│   │   ├── index.js         # Homepage functionality
│   │   ├── browse.js        # Browse/filter functionality
│   │   ├── comic-detail.js  # Comic detail page logic
│   │   ├── cart-page.js     # Cart page functionality
│   │   ├── cart.js          # Cart state management
│   │   ├── storage.js       # localStorage utilities
│   │   └── ui.js            # Shared UI utilities
│   └── styles/
│       ├── base.css         # Base styles with blue/black gradient
│       ├── components.css   # Component styles (header, cards, etc)
│       └── pages.css        # Page-specific styles
└── public/covers/           # Comic cover images (12 total)
    ├── marvel-spiderman.jpg
    ├── marvel-avengers.jpg
    ├── marvel-xmen.jpg
    ├── marvel-thor.jpg
    ├── marvel-blackpanther.jpg
    ├── marvel-doctorstrange.jpg
    ├── dc-batman.jpg
    ├── dc-superman.jpg
    ├── dc-wonderwoman.jpg
    ├── dc-flash.jpg
    ├── dc-aquaman.jpg
    └── dc-greenlantern.jpg
\`\`\`

## How to Run

### Option 1: Use VS Code Live Server (Recommended for quick start)

1. **Open the project** in VS Code
2. **Install Live Server extension** if not already installed
3. **Right-click** on `index.html`
4. **Select "Open with Live Server"**
5. The site will open in your browser at `http://localhost:5500`

### Option 2: Use Python HTTP Server

If you have Python 3 installed:

\`\`\`bash
# Navigate to project directory
cd path/to/comicverse

# Start Python server
python -m http.server 8000

# Open browser to http://localhost:8000
\`\`\`

### Option 3: Use Node.js HTTP Server

If you have Node.js installed:

\`\`\`bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to project directory
cd path/to/comicverse

# Start server
http-server

# Open browser to http://localhost:8080
\`\`\`

### Option 4: Use PHP Server

If you have PHP installed:

\`\`\`bash
# Navigate to project directory
cd path/to/comicverse

# Start PHP server
php -S localhost:8000

# Open browser to http://localhost:8000
\`\`\`

## Comics Included

### Marvel Universe (6 comics)
- **Amazing Spider-Man #1** - Follow Peter Parker as he becomes Spider-Man
- **The Avengers #1** - Earth's Mightiest Heroes unite against alien threats
- **X-Men #1** - Mutants fight for a world that hates them
- **Thor: God of Thunder #1** - Asgardian mythology meets superhero action
- **Black Panther #1** - King of Wakanda protects his advanced nation
- **Doctor Strange #1** - Master of the Mystic Arts defends reality itself

### DC Universe (6 comics)
- **The Dark Knight #1** - Batman protects Gotham City from the shadows
- **Man of Steel #1** - Superman uses incredible powers to protect humanity
- **Wonder Woman #1** - Amazon warrior fights for justice and peace
- **The Flash #1** - Scarlet Speedster races against time itself
- **Aquaman #1** - King of the Seven Seas rules Atlantis
- **Green Lantern #1** - Willpower-powered hero protects the galaxy

## Design Details

### Color Scheme
- **Primary Blue**: #0066ff - Main action color
- **Secondary Cyan**: #00d4ff - Accent highlights
- **Background**: Deep black gradient (#0a0e27 to #050812)
- **Text**: Light blue-white (#f0f4ff)

### Features
- Responsive grid layouts
- Smooth hover animations on comic cards
- Auto-rotating carousel on homepage
- Interactive filter chips
- Real-time cart updates
- Toast notifications for user actions

## Navigation

- **Home** - Hero section with featured comics and carousel
- **Browse** - Full catalog with advanced filtering and search
- **Comic Details** - Individual comic pages with full descriptions and related items
- **Cart** - Shopping cart with quantity adjustments and checkout

## Data Management

All data is stored locally using:
- **Comics Data**: `assets/data/comics.js` - Complete comic information with descriptions
- **Cart Storage**: Browser localStorage (persists across sessions)
- **Session Data**: Memory-based state for filters and selections

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced layouts with CSS Grid and Flexbox
- **Vanilla JavaScript** - Module-based architecture with ES6
- **LocalStorage API** - Persistent cart storage
- **Responsive Design** - Mobile-first approach

## Features Breakdown

### Homepage
- Animated hero carousel with 3 featured comics
- Auto-rotating every 7 seconds
- Manual navigation with arrows and dots
- Publisher spotlight cards
- Statistics section
- Quick links to browse

### Browse Page
- Search by title or character name (real-time filtering)
- Filter by publisher (All / Marvel Universe / DC Universe)
- Filter by genre (Action, Superhero, Adventure, Fantasy, etc.)
- Multiple sort options
- Responsive card grid
- Comic count display

### Comic Detail Page
- Large cover image with hover zoom
- Full comic description
- Publisher, release date, characters, and genres
- "Add to Cart" button
- Related comics from same publisher
- Back to browse navigation

### Cart Page
- Table view of cart items
- Quantity adjusters (+/-)
- Remove item buttons
- Subtotal, tax (7%), and total calculations
- Empty cart state
- Checkout button with confirmation

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All comic information and descriptions are fictional and created for demonstration
- Cart data persists in browser localStorage
- No backend server required - fully client-side application
- Images are generated and cached
- All animations use CSS transitions for smooth performance

## Troubleshooting

**Images not loading?**
- Ensure you have internet connection (images are hosted online)
- Check browser console for CORS errors
- Try clearing browser cache

**Cart not persisting?**
- Check if localStorage is enabled in browser
- Private/Incognito mode may not support localStorage
- Try a different browser

**Carousel not working?**
- Ensure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page

## License

This is a demonstration project for educational purposes.
Marvel and DC are registered trademarks of their respective companies.

---

**Happy browsing! Discover your favorite comics in ComicVerse today! 🦸‍♂️📚**
