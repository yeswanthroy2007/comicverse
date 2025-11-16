# Comic Universe Store - Setup & Run Guide

## Project Structure

Your Comic Universe store uses **Vite** as the build tool with 4 main pages:
- `index.html` - Home page
- `browse.html` - Browse all comics
- `comic-detail.html` - Comic details page
- `cart.html` - Shopping cart

## Installation & Setup

### Step 1: Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Step 2: Run Development Server
\`\`\`bash
npm run dev
\`\`\`
The app will open automatically at `http://localhost:4173`

### Step 3: Build for Production
\`\`\`bash
npm run build
\`\`\`
This creates a `dist/` folder with optimized files.

### Step 4: Preview Production Build
\`\`\`bash
npm run preview
\`\`\`
Preview the built version at `http://localhost:4173`

## Features Included

✓ 12 Marvel & DC Comics with detailed descriptions
✓ Blue & Black Gradient Theme
✓ Comic Cover Images for each title
✓ Shopping Cart System
✓ Filter by Publisher & Genre
✓ Add/Remove items from cart
✓ Tax calculation & total pricing
✓ Responsive design

## File Structure

\`\`\`
/
├── index.html              # Home page
├── browse.html             # Comic browser
├── comic-detail.html       # Comic details
├── cart.html               # Shopping cart
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
│
├── assets/
│   ├── scripts/            # JavaScript files
│   │   ├── index.js
│   │   ├── browse.js
│   │   ├── comic-detail.js
│   │   ├── cart-page.js
│   │   ├── cart.js
│   │   ├── storage.js
│   │   └── ui.js
│   ├── styles/             # CSS files
│   │   ├── base.css
│   │   ├── components.css
│   │   └── pages.css
│   └── data/               # Data files
│       └── comics.js       # Comic database
│
└── public/
    └── covers/             # Comic cover images (12 images)
\`\`\`

## Troubleshooting

**Port Already in Use?**
- The server runs on port 4173 by default
- Change it in `vite.config.js` under `server.port`

**Module Not Found?**
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

**Images Not Loading?**
- Ensure the `public/covers/` folder contains all comic images
- Check that image filenames match those referenced in `assets/data/comics.js`

## Comics Included

### Marvel (6 Comics)
1. Spider-Man - Young hero's journey
2. Avengers - Earth's Mightiest Heroes
3. X-Men - Mutants fighting for coexistence
4. Thor - God of Thunder
5. Captain America - The First Avenger
6. Black Panther - King of Wakanda

### DC (6 Comics)
1. Batman - Dark Knight of Gotham
2. Superman - Man of Steel
3. Wonder Woman - Amazon Princess
4. The Flash - Fastest Man Alive
5. Green Lantern - Power of Will
6. Justice League - World's Greatest Heroes

## Color Theme

- **Primary Blue**: #0066ff
- **Dark Black**: #0a0e27
- **Accent Cyan**: #00d4ff
- **Gradient Background**: Blue to Black

Enjoy shopping for the best Marvel & DC comics!
