# JPCS Website - Junior Philippine Computer Society

A modern, responsive student organization website built with HTML, CSS, and vanilla JavaScript. Features include AI-generated officer avatars, enhanced search and filtering with debounce, interactive event management, modernized About page, and a consistent site-wide footer design.

![JPCS Website](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Recent Updates

### Officers Page Enhancements
- ✅ **AI-Generated Avatars**: Realistic portraits using pravatar.cc API (12 unique images)
- ✅ **Improved Controls**: Search and dropdown aligned at 44px height with proper spacing
- ✅ **Inline SVG Icons**: Professional magnifying glass icon replaces emoji
- ✅ **Debounced Search**: 200ms delay for optimized performance
- ✅ **Active Filter Chips**: Visual feedback showing current filters with individual remove buttons
- ✅ **Clear Filters Button**: One-click reset for all active filters
- ✅ **Enhanced Accessibility**: ARIA labels, keyboard navigation, and focus indicators
- ✅ **Responsive Layout**: Controls stack vertically on mobile devices

### Site-Wide Footer Redesign
- ✅ **Dark Background**: Consistent #0f172a slate background across all pages
- ✅ **Cyan Accents**: Headings and links in #22d3ee with hover effects
- ✅ **3-Column Layout**: About JPCS, Quick Links, and Follow Us sections
- ✅ **Responsive Grid**: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- ✅ **Professional Structure**: Clean organization with proper spacing and typography

### Events Page Cleanup
- ✅ **Image-First Design**: Removed emoji overlays from event cards
- ✅ **Clean Visual Hierarchy**: Only category badges remain for better readability

## 🌟 Features

### New: Modernized About Page
- ✅ **Mission & Vision Cards**: Professional image cards with "Learn More" modals
- ✅ **Interactive Core Values**: 6 values with images, search functionality, and detail modals
- ✅ **What We Do Activities**: Media object cards with category filters and search
- ✅ **Image Enhancements**: All emoji icons replaced with professional SVG images
- ✅ **Modal System**: Multiple modals for mission, vision, values, and activities
- ✅ **LocalStorage Persistence**: Saves all filter and search preferences
- ✅ **Keyboard Accessible**: Full navigation with Enter/Space/ESC keys
- ✅ **Responsive Design**: Optimized grid layouts for mobile, tablet, and desktop

### Interactive "What We Do" Section (Home Page)
- ✅ **Modern Image Cards**: 16:9 aspect ratio with real images and gradient overlays
- ✅ **Category Filtering**: Dropdown to filter by Training, Competitive, or Community
- ✅ **Live Search**: Real-time text search across activity titles and descriptions
- ✅ **Detailed Modals**: Click "Learn More" to see full descriptions and highlight lists
- ✅ **LocalStorage Persistence**: Saves filter and search preferences
- ✅ **Keyboard Support**: Full keyboard navigation (Enter/Space to open, ESC to close)
- ✅ **Responsive Grid**: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

### Core Functionality
- ✅ **5 Complete Pages**: Home, About, Officers, Events, and Membership
- ✅ **Event Filtering**: Filter events by category (Workshop, Seminar, Competition, etc.) and time (Upcoming/Past)
- ✅ **Real Event Images**: Picsum Photos integration for visually appealing event cards
- ✅ **Interactive Modals**: Event details and officer profiles with full information
- ✅ **Member Search & Filter**: Search officers by name and filter by team/role
- ✅ **Form Validation**: Complete validation for membership registration
- ✅ **LocalStorage Integration**: Auto-save form progress and restore on page reload
- ✅ **Mobile-First Design**: Fully responsive across all devices
- ✅ **Accessibility**: Keyboard navigation, ARIA labels, and focus management

### JavaScript Features Implemented

1. **About Page Modernization (NEW)**
   - Mission & Vision "Learn More" modals with full details
   - Core Values search with real-time filtering
   - 6 interactive value cards with images and detail modals
   - What We Do activities with category filtering (Training, Competitive, Industry, Career, Service)
   - Media object card layout with images and tags
   - Activity detail modals with highlights
   - LocalStorage saves all preferences (2 search boxes + 1 category filter)
   - Keyboard accessibility across all interactive elements
   - Focus management for screen readers

2. **What We Do Section (Home Page)**
   - Dynamic rendering from data array (6 activities)
   - Category dropdown filter (All, Training, Competitive, Community)
   - Real-time search filtering by title/description
   - Modal with full details, image, and highlights list
   - LocalStorage saves filter preferences
   - Keyboard accessibility (Enter/Space/ESC support)
   - Focus management for screen readers

3. **Event List with Filtering**
   - Filter by 6 categories (Workshop, Seminar, Competition, Community, Social)
   - Filter by time (All Time, Upcoming, Past)
   - Real images from Picsum Photos with gradient overlays
   - Dynamic rendering from data array

4. **Event Details Modal**
   - Click any event to open detailed modal
   - Displays full agenda, target audience, and event information
   - Close via button, clicking outside, or ESC key

5. **Interactive Officer Profiles**
   - Search officers by name (real-time filtering)
   - Filter by role/team (Executive, Technical, Events, Marketing)
   - Click to view full profile with bio, skills, and contact info

6. **Membership Form with Validation**
   - Required field validation
   - Email format validation
   - Must select at least one interest
   - Terms and conditions checkbox
   - Inline error messages

7. **LocalStorage Usage**
   - Auto-saves form progress on every input
   - Restores saved data on page reload
   - Saves "What We Do" filter preferences (Home page)
   - Saves About page preferences (values search, activities category, activities search)
   - Saves event filter preferences
   - "Clear saved data" button included
   - Stores submitted applications

### Data
- **6 Home Page Activities** with categories, descriptions, and highlight lists
- **6 Core Values** with images, descriptions, and practical examples
- **5 About Page Activities** with categories, tags, descriptions, and highlights
- **12 Events** across multiple categories and dates with real images
- **12 Officers** with detailed profiles and skills
- All data is realistic and complete

## 📁 Project Structure

```
PrelimExam/
├── index.html              # Home page
├── about.html              # About JPCS page (modernized)
├── officers.html           # Officers & Members page
├── events.html             # Events & Activities page
├── membership.html         # Membership registration page
├── main/
│   └── assets/
│       ├── css/
│       │   └── style.css   # Complete CSS styling (with About page styles)
│       ├── js/
│       │   ├── app.js      # Core JavaScript functionality
│       │   ├── data.js     # Events and officers data
│       │   ├── whatwedo.js # Home page What We Do functionality
│       │   └── about.js    # About page functionality (NEW)
│       └── img/
│           ├── logo.png    # JPCS logo
│           ├── favicon.png # Browser favicon
│           ├── about/      # About page images (NEW)
│           │   ├── mission.svg
│           │   ├── vision.svg
│           │   ├── values-innovation.svg
│           │   ├── values-excellence.svg
│           │   ├── values-collaboration.svg
│           │   ├── values-integrity.svg
│           │   ├── values-inclusivity.svg
│           │   ├── values-growth.svg
│           │   ├── educational.svg
│           │   ├── competitive.svg
│           │   ├── industry.svg
│           │   ├── career.svg
│           │   └── service.svg
│           └── whatwedo/   # Home page What We Do images
│               ├── workshops.svg
│               ├── competitions.svg
│               ├── networking.svg
│               ├── innovation.svg
│               ├── techtalks.svg
│               └── community.svg
└── README.md              # This file
```

## 🎨 Image Credits & Replacement Guide

Both the Home page "What We Do" section and About page currently use placeholder SVG images with professional gradient designs. These are **ready to be replaced** with real photos from free image sources.

### About Page Images (13 Total)

**Mission & Vision (2 images):**
- `mission.svg` - Mission-related imagery (target, goal, purpose)
- `vision.svg` - Vision-related imagery (eye, future, perspective)

**Core Values (6 images):**
- `values-innovation.svg` - Innovation, creativity, lightbulb
- `values-excellence.svg` - Excellence, achievement, trophy
- `values-collaboration.svg` - Teamwork, collaboration, connected people
- `values-integrity.svg` - Ethics, integrity, trust
- `values-inclusivity.svg` - Diversity, inclusion, diverse people
- `values-growth.svg` - Growth, development, upward trend

**What We Do Activities (5 images):**
- `educational.svg` - Learning, education, books, presentations
- `competitive.svg` - Competitions, hackathons, trophies
- `industry.svg` - Industry partnerships, handshakes, business
- `career.svg` - Career development, resume, interview
- `service.svg` - Community service, volunteering, giving back

### Home Page Images (6 Total)

**What We Do Section:**
- `workshops.svg` - Programming, coding, or classroom setting
- `competitions.svg` - Hackathon, trophies, or competitive environment
- `networking.svg` - People connecting, handshakes, or networking event
- `innovation.svg` - Lightbulb, innovation, or creative workspace
- `techtalks.svg` - Speaker, presentation, or conference
- `community.svg` - Group of people, teamwork, or community gathering

### Recommended Free Image Sources
- **Unsplash** ([unsplash.com](https://unsplash.com)) - Free high-resolution photos
- **Pexels** ([pexels.com](https://pexels.com)) - Free stock photos and videos
- **Pixabay** ([pixabay.com](https://pixabay.com)) - Free images and videos

### How to Replace with Real Images

**For Home Page:**

1. Download images and save to `main/assets/img/whatwedo/`
2. Update paths in `main/assets/js/whatwedo.js`:
   ```javascript
   imagePath: "main/assets/img/whatwedo/workshops.jpg",  // Change .svg to .jpg
   ```

**For About Page:**

1. Download images and save to `main/assets/img/about/`
2. Update paths in `main/assets/js/about.js`:
   ```javascript
   // For Core Values Data
   imagePath: "main/assets/img/about/values-innovation.jpg",
   
   // For What We Do Activities Data
   imagePath: "main/assets/img/about/educational.jpg",
   ```
3. Update Mission/Vision modal images in `about.html`:
   ```html
   <img src="main/assets/img/about/mission.jpg" alt="Our Mission">
   <img src="main/assets/img/about/vision.jpg" alt="Our Vision">
   ```

### Recommended Image Sizes
- **Mission/Vision cards**: 400x400 pixels (1:1 ratio)
- **Core Values cards**: 300x300 pixels (1:1 ratio)
- **What We Do activities (About page)**: 400x300 pixels (4:3 ratio)
- **What We Do activities (Home page)**: 800x450 pixels (16:9 ratio)

### Image Attribution Template
Once you replace with real images, document them here:

```markdown
### Home Page Images
- **Workshops**: Photo by [Name](link) on Unsplash
- **Competitions**: Photo by [Name](link) on Pexels
- **Networking**: Photo by [Name](link) on Unsplash
- **Innovation**: Photo by [Name](link) on Pexels
- **Tech Talks**: Photo by [Name](link) on Unsplash
- **Community**: Photo by [Name](link) on Pexels

### About Page Images
- **Mission**: Photo by [Name](link) on Unsplash
- **Vision**: Photo by [Name](link) on Pexels
- **Innovation Value**: Photo by [Name](link) on Unsplash
- **Excellence Value**: Photo by [Name](link) on Pexels
- **Collaboration Value**: Photo by [Name](link) on Unsplash
- **Integrity Value**: Photo by [Name](link) on Pexels
- **Inclusivity Value**: Photo by [Name](link) on Unsplash
- **Growth Value**: Photo by [Name](link) on Pexels
- **Educational Programs**: Photo by [Name](link) on Unsplash
- **Competitive Events**: Photo by [Name](link) on Pexels
- **Industry Partnerships**: Photo by [Name](link) on Unsplash
- **Career Development**: Photo by [Name](link) on Pexels
- **Community Service**: Photo by [Name](link) on Unsplash
```

### Current Placeholder Images
The SVG placeholders included in this project were created specifically for this website and feature:
- Modern gradient backgrounds
- Icon-based visual representations
- Lightweight file sizes
- No external dependencies
- Professional appearance

These work perfectly for development and can remain if preferred, or be replaced with real photography for a more professional appearance.

## 🚀 How to Run Locally

### Option 1: Direct File Opening
1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your web browser

### Option 2: Using Live Server (Recommended)

**With VS Code:**
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The site will open at `http://localhost:5500`

**With Python:**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

**With Node.js:**
```bash
# Install http-server globally
npm install -g http-server

# Run from project directory
http-server

# Then open http://localhost:8080 in your browser
```

## 🌐 Deploy to GitHub Pages

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: JPCS website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/Cyrus9177/WebSystems-9318-AY225-BAUTISTA.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings**
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment

Your site will be available at:
```
https://cyrus9177.github.io/WebSystems-9318-AY225-BAUTISTA/
```

### Step 3: Verify Deployment

1. Wait 2-3 minutes after enabling Pages
2. Visit the GitHub Pages URL
3. Test all functionality:
   - Navigation between pages
   - Event filtering
   - Officer search
   - Form submission
   - Modal interactions

## 📱 Testing

### Browser Compatibility
- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari

### Responsive Breakpoints
- Mobile: 320px - 480px (1 column grid)
- Tablet: 481px - 768px (2 column grid)
- Desktop: 769px - 1024px (3 column grid)
- Large Desktop: 1025px+ (3 column grid)

### Features to Test

1. **What We Do Section (NEW)**
   - Filter dropdown changes displayed cards
   - Search filters results in real-time
   - "Learn More" opens modal with full details
   - Modal can be closed (button, outside click, ESC key)
   - Filter preferences saved to LocalStorage (refresh to verify)
   - Keyboard navigation works (Tab, Enter, Space, ESC)
   - Images load correctly with gradient overlays
   - Responsive grid adjusts on different screen sizes

2. **Navigation**
   - Mobile menu toggle works
   - Active page highlighting
   - Smooth animations
   - Logo and nav links work on all pages

3. **Events Page**
   - All filter buttons work
   - Events display with real images
   - Clicking event opens modal
   - Modal can be closed (button, outside click, ESC)
   - Filter preferences persist after refresh

4. **Officers Page**
   - Search by name filters results
   - Role filter works
   - Clicking officer opens modal
   - All profile information displays

5. **Membership Form**
   - Form validates required fields
   - Email validation works
   - Must select at least one interest
   - Terms checkbox required
   - Auto-save works (refresh page to verify)
   - Success modal shows after submission
   - Clear form button works

6. **LocalStorage (Multiple Features)**
   - What We Do: Filter and search preferences saved
   - Events: Filter preferences saved
   - Membership Form: Progress auto-saved
   - Refresh page to verify all data persists
   - Submit form to clear saved progress

## 🎨 Customization

### Changing Colors

Edit CSS variables in `main/assets/css/style.css`:

```css
:root {
    --primary: #6366f1;      /* Main brand color */
    --secondary: #f59e0b;    /* Accent color */
    /* ... other variables ... */
}
```

### Adding What We Do Activities

Edit `main/assets/js/whatwedo.js`:

```javascript
const whatWeDoData = [
    // Add new activity
    {
        id: 7,
        title: "Your Activity Title",
        category: "Training", // or "Competitive" or "Community"
        shortText: "Brief description for card...",
        fullText: "Full detailed description for modal...",
        imagePath: "main/assets/img/whatwedo/your-image.jpg",
        highlights: [
            "Highlight point 1",
            "Highlight point 2",
            "Highlight point 3"
        ]
    },
    // ... existing activities
];
```

### Adding Events

Edit `main/assets/js/data.js`:

```javascript
const eventsData = [
    // Add new event object
    {
        id: 13,
        title: "Your Event Title",
        category: "Workshop",
        date: "2026-06-15",
        time: "2:00 PM - 5:00 PM",
        location: "Location Here",
        icon: "🎯",
        imageId: 123, // Picsum photo ID
        description: "Event description...",
        agenda: ["Item 1", "Item 2"],
        target: "Target audience..."
    },
    // ... existing events
];
```

### Adding Officers

Edit `main/assets/js/data.js`:

```javascript
const officersData = [
    // Add new officer object
    {
        id: 13,
        name: "Officer Name",
        position: "Position Title",
        team: "Technical Team",
        avatar: "👨‍💻",
        bio: "Officer bio...",
        skills: ["Skill 1", "Skill 2"],
        email: "email@jpcs.org"
    },
    // ... existing officers
];
```

## 🔧 Troubleshooting

### Issue: Images not loading
- Verify all files are in `main/assets/img/` folder
- Check that paths use forward slashes: `main/assets/img/logo.png`
- Ensure you're running from a web server, not `file://` protocol
- Check browser console (F12) for 404 errors

### Issue: What We Do section not displaying
- Verify `whatwedo.js` is loaded in `index.html`
- Check that it's loaded after other scripts
- Open browser console (F12) for JavaScript errors
- Ensure all image paths are correct

### Issue: Events not showing
- Check that `main/assets/js/data.js` is loaded before `app.js`
- Open browser console (F12) to check for JavaScript errors
- Verify event data structure includes all required fields

### Issue: Styles not applying
- Verify CSS file is at `main/assets/css/style.css`
- Check that HTML files reference the correct path
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check for CSS syntax errors in browser console

### Issue: Form not saving
- Check if LocalStorage is enabled in your browser
- Some browsers block LocalStorage when running from `file://` protocol
- Use a local server (see "How to Run Locally" above)
- Check browser console for errors

### Issue: Modal not opening
- Check browser console for errors
- Ensure all data is properly structured in respective JS files
- Verify modal HTML exists in the page

### Issue: GitHub Pages not working
- Verify repository is public
- Check that GitHub Pages is enabled in settings
- Ensure **all file paths are relative** (no absolute paths)
- Verify folder structure matches: `main/assets/css/`, `main/assets/js/`, etc.
- Clear browser cache and try again
- Wait 5-10 minutes after enabling Pages for first deployment

## 📝 Requirements Checklist

- ✅ **Pages**: 5 complete pages (Home, About, Officers, Events, Membership)
- ✅ **Event Filtering**: By category and time
- ✅ **Event Modal**: Full details with close functionality
- ✅ **Officer Profiles**: Interactive with search and filter
- ✅ **Form Validation**: Complete with inline errors
- ✅ **LocalStorage**: Auto-save and restore
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: Proper labels, keyboard navigation
- ✅ **Data**: 12+ events, 12+ officers
- ✅ **No Frameworks**: Pure HTML, CSS, JavaScript
- ✅ **GitHub Pages Ready**: Relative paths, no build step

## 📄 License

This project is created for educational purposes as part of the Web Systems course requirements.

## 👨‍💻 Developer

**Cyrus Bautista**
- GitHub: [@Cyrus9177](https://github.com/Cyrus9177)
- Repository: [WebSystems-9318-AY225-BAUTISTA](https://github.com/Cyrus9177/WebSystems-9318-AY225-BAUTISTA)

## 🎯 Course Information

- **Course**: Web Systems
- **Course Code**: 9318
- **Academic Year**: 2024-2025
- **Institution**: BSIT Program

---

**Last Updated**: February 7, 2026

For questions or issues, please open an issue on GitHub or contact through the repository.
