# Rohan Tayade Portfolio - Specification Document

## 1. Project Overview

- **Project Name**: Rohan Tayade Portfolio
- **Project Type**: Interactive Single-Page Portfolio Website
- **Core Functionality**: A visually stunning, Instagram-inspired portfolio showcasing a Full-Stack Developer's skills, experience, and projects for recruiters and clients
- **Target Users**: Recruiters hiring for software engineering roles, potential freelance clients

---

## 2. Content Structure

### Profile Info
- **Name**: Rohan Shyamsundar Tayade
- **Username**: @rohan_tayade
- **Portfolio Link**: https://rohanrt30.github.io/rohan-portfolio/
- **Title**: Full-Stack Developer | ReactJS & Java Expert
- **Location**: Amravati, Maharashtra, India
- **Email**: rohantayade030@gmail.com
- **Phone**: +91 7620784684
- **LinkedIn**: linkedin.com/in/rohan-tayade-800681203

### Skills to Display
- **Frontend**: ReactJS, HTML, CSS, JavaScript
- **Backend**: Java, Spring Boot, Node.js
- **Database**: MongoDB
- **Tools**: JIRA, Jenkins, Postman, Rancher
- **Cloud**: AWS, Azure
- **Other**: Linux, MS Excel

### Experience
1. **Developer L1** - Wipro Ltd. (Dec 2023 - Apr 2025)
   - Unified Onboarding (US Bank)
   - Corporate Trust Account forms
   
2. **Developer** - Wipro Ltd. (Jul 2022 - Nov 2023)
   - Telstra Project (Australia) - Training

### Projects
1. **Lifestyle Store** - E-commerce full-stack website
2. **Blood Bank Management System** - Desktop application

### Education
- **MCA** - Vidyabharati Mahavidyalaya (2023-2025)
- **BCA** - Brijlal Biyani Science College (2019-2022) - 7.5 CGPA
- **HSC** - Bhartiya Mahavid8-2019)
- **SSC** - Takhatmal English High School (2016-2017)

 ### Certifications
- AWS Cloud Practitioner
- AWS Solutions Architect Associate
- Google Associate Cloud Engineer
- Microsoft Azure Data Fundamentals
- Microsoft Azure AI Engineer Associate
- GitHub Foundation

---


## 3. UI/UX Specification

### Layout Structure

**Instagram-Inspired Layout:**
- **Header**: Fixed Instagram-style top navigation with profile avatar, username, and action icons
- **Profile Section**: Instagram profile header with circular avatar, bio, stats (posts, followers, following)
- **Stories Bar**: Horizontal scrollable stories bar at top of content
- **Tab Navigation**: Instagram-style tab bar (Posts, Projects, About, Contact)
- **Content Grid**: Masonry-style grid for posts/projects
- **Navigation Dots**: Bottom dot navigation for single-page sections

**Responsive Breakpoints:**
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (3 columns)

### Visual Design

**Color Palette:**
- Primary Background: `#0D0D0D` (Dark mode Instagram)
- Secondary Background: `#1A1A1A` (Cards/Panels)
- Accent Gradient: `linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)` (Instagram brand colors)
- Text Primary: `#FAFAFA`
- Text Secondary: `#A8A8A8`
- Story Ring: Gradient `#833AB4, #FD1D1D, #F77737`
- Success/Highlight: `#0095F6` (Instagram Blue)
- Border: `#262626`

**Typography:**
- Primary Font: `'Playfair Display', serif` for headings (elegant, distinctive)
- Secondary Font: `'DM Sans', sans-serif` for body text (clean, modern)
- Name: 28px bold
- Username: 14px regular
- Bio: 14px regular
- Stats: 14px bold (number), 12px regular (label)
- Tab Labels: 12px bold uppercase

**Spacing System:**
- Container max-width: 935px (Instagram standard)
- Card padding: 16px
- Grid gap: 12px
- Section margin: 24px

**Visual Effects:**
- Card hover: Scale 1.02 with subtle shadow
- Avatar ring: Animated gradient border on hover
- Stories: Gradient border ring, scale on hover
- Buttons: Gradient background with glow effect
- Smooth scroll behavior
- Fade-in animations on scroll
- Parallax subtle background effects

### Components

**1. Profile Header:**
- Circular avatar (150px) with gradient ring
- Full name and username
- Bio text with line breaks
- Website link (styled)
- Stats: Posts, Followers, Following
- Action buttons: "Follow", "Message"

**2. Stories Bar:**
- Horizontal scrollable container
- Story circles (70px) with gradient border
- Username below each story
- Add story button (+)
- Smooth scroll with hide/show arrows

**3. Tab Navigation:**
- 4 tabs: Posts, Projects, About, Contact
- Active tab: Bold text with underline
- Icons: Grid, Bookmark, User, Mail

**4. Content Cards:**
- Image/video thumbnail
- Overlay on hover with stats (likes, comments)
- Click to expand/view details
- Project cards with tech stack tags

**5. Modal/Lightbox:**
- Full-screen image view
- Project details overlay
- Close button
- Navigation arrows

**6. Floating Action Button:**
- Fixed position bottom-right
- Gradient background
- Contact/Message icon

---

## 4. Functionality Specification

### Core Features

**Profile Section:**
- Display avatar, name, username
- Show professional bio
- Display location
- Contact information (email, phone)
- LinkedIn link
- Statistics display

**Skills Showcase:**
- Instagram carousel format
- Skill cards with icons
- Categorized: Frontend, Backend, Tools, Cloud
- Animated progress bars

**Experience Timeline:**
- Vertical timeline (Instagram story style)
- Company logos
- Role, duration, location
- Bullet points with achievements
- Expandable details

**Projects Gallery:**
- Grid layout (Instagram posts)
- Project thumbnails
- Tech stack badges
- Live demo links
- GitHub links
- Hover reveals

**Certifications:**
- Carousel format
- Certification badges
- Issue date
- Verification links

**Contact Section:**
- Contact form (Instagram DM style)
- Direct email link
- Phone number
- LinkedIn link
- Social links

### User Interactions

- Click tabs to switch content sections
- Scroll through stories
- Click cards to open modal
- Hover effects on all interactive elements
- Smooth scroll navigation
- Mobile touch swipe support

### Animations

- Page load: Staggered fade-in
- Scroll: Fade-up animations
- Hover: Scale and glow effects
- Tab switch: Slide/fade transition
- Modal: Zoom-in effect

---


## 5. Acceptance Criteria

1. ✓ Instagram-inspired dark theme with gradient accents
2. ✓ Responsive on mobile, tablet, and desktop
3. ✓ Profile section with all contact info
4. ✓ Skills showcase with categorized cards
5. ✓ Experience timeline with achievements
6. ✓ Projects gallery with grid layout
7. ✓ Certifications carousel
8. ✓ Contact form and direct contact options
9. ✓ Smooth animations and transitions
10. ✓ Fast loading, optimized performance
