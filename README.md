<div align="center">
  <img src="assets/images/Profile%20Photo.jpeg" alt="Vaibhav Pandey" width="160" style="border-radius: 50%; border: 3px solid #F97316; margin-bottom: 25px; box-shadow: 0 0 20px rgba(249,115,22,0.4);">
  
  <h1>Vaibhav Pandey â€” Software Engineer Portfolio</h1>
  <p><strong>Full-Stack Web Architectures Â· Applied AI/ML Pipelines Â· Systems Programming</strong></p>

  <p>
    <a href="https://mevaibhavpandey.github.io/Portfolio"><img src="https://img.shields.io/badge/Deployment-Live-success?style=for-the-badge&logo=vercel" alt="Status"></a>
    <a href="https://github.com/mevaibhavpandey"><img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" alt="GitHub"></a>
    <a href="https://www.linkedin.com/in/vaibhav-pandey-7ba67033a/"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn"></a>
    <a href="https://leetcode.com/u/mevaibhavpandey/"><img src="https://img.shields.io/badge/LeetCode-Solved-FFA116?style=for-the-badge&logo=leetcode" alt="LeetCode"></a>
  </p>
</div>

<hr>

## âœ¨ Overview

Welcome to my professional software engineering portfolio. This repository houses the source code for an interactive, high-performance web platform designed to showcase my technical journey, applied research, and leadership milestones. 

Built with a distinctive **Dark Aerospace & Tech Theme** (utilizing Obsidian Carbon, Burnt Orange, Gold, and Emerald color palettes), the interface goes beyond standard templates. It features complex CSS animations, responsive particle canvases, radar-inspired interactive UI elements, and a seamless, component-like architecture constructed entirely in Vanilla JavaScript.

This platform serves as a central hub for my technical capabilities, ranging from Autonomous UAVs and Real-Time Tracking Engines to Emergency Routing Systems and Defense-level leadership milestones.

---

## ðŸ“• Table of Contents
1. [Architecture & Design Philosophy](#-architecture--design-philosophy)
2. [Key Features & Capabilities](#-key-features--capabilities)
3. [Showcased Projects (Highlights)](#-showcased-projects-highlights)
4. [Defense & Leadership Milestones](#-defense--leadership-milestones)
5. [Technical Stack](#-technical-stack)
6. [Project Structure](#-project-structure)
7. [Extensibility & Updating](#-extensibility--updating)
8. [Local Environment Setup](#-local-environment-setup)
9. [Contact & Professional Inquiries](#-contact--professional-inquiries)

---

## ðŸ› ï¸  Architecture & Design Philosophy

The core philosophy behind this portfolio is **"Zero-Dependency High Performance."** Rather than relying on heavy JavaScript frameworks like React, Vue, or Angular for a static presentation layer, this portfolio leverages the raw power of modern browser APIs. 

- **DOM Manipulation Engine:** A custom, lightweight vanilla JavaScript engine dynamically generates the DOM tree from structured data objects (JSON-like structures) found in `app.js`.
- **Intersection Observers:** Utilizes native `IntersectionObserver` APIs to trigger staggered, high-framerate reveal animations (transform/opacity/blur) exclusively when elements enter the viewport, minimizing CPU overhead.
- **Glassmorphism & Layering:** Makes extensive use of CSS `backdrop-filter` and transparent RGBA layering to create depth and a premium "glass" aesthetic over animated backgrounds.
- **Data Flow Aesthetics:** Backgrounds feature animated SVG-like grids, counter-rotating geometric orbital rings, and pulsing data nodes to simulate radar technology and data processing arrays.

---

## ðŸš€ Key Features & Capabilities

- **Premium UI/UX:** High-end glassmorphism, dynamic data-flow nodes, radar sweeps, glowing orbital rings, and staggered reveal animations.
- **Data-Driven Templating:** Injecting new projects, skills, or timeline events takes seconds. Simply add a new object to the respective array in `app.js`, and the JavaScript engine handles the rendering, styling, and animation injection.
- **Mobile First & Fully Responsive:** Impeccable scaling and layout adaptations. Features dynamic `clamp()` and `min()` CSS functions to ensure massive absolute-positioned animations never trigger horizontal scrolling on small viewports.
- **Interactive Modals & Image Zoom:** Custom-built image gallery scrollers and full-screen modal viewers for certificates and architectural diagrams.
- **Semantic & SEO Optimized:** Built using proper HTML5 semantic tags to ensure maximum accessibility and SEO indexing efficiency.

---

## ðŸ’¾ Showcased Projects (Highlights)

This portfolio highlights several advanced engineering systems. A few notable mentions include:

1. **AURA-X Autonomous UAV:** A GPS-Denied reconnaissance drone leveraging ROS, ORB-SLAM3, and Visual-Inertial Odometry to navigate cluttered indoor spaces.
2. **Argo-Based FloatChat AI:** A massive oceanographic AI platform capable of processing 60+ GB NetCDF files to generate rich summaries and anomaly detections.
3. **NavSight Maritime Situational Awareness:** An intelligence engine plotting 20,000+ vessels in real-time, integrating OCR manifest processing and ML anomaly detection.
4. **AmbuAI Emergency Dispatch:** An autonomous medical routing engine integrating TomTom APIs, IndexedDB offline caching, and AI-driven symptom triage.
5. **PLFM Phased Array RADAR:** A 10.5 GHz hardware/software system executing raw microwave signal processing and Fast Fourier Transforms.

---

## âš”ï¸  Defense & Leadership Milestones

Beyond code, this repository documents my leadership journey and national-level military qualifications:
- **AIR 31 NDA:** Official selection for the 153rd National Defence Academy Course (Indian Air Force Flying Branch).
- **AIR 50 TES-52:** Official selection for the Indian Army Technical Entry Scheme.
- **ASTRA Club Founder:** Leading a 200+ member engineering student body, managing technical workshops, hackathons, and strategic project budgets.

---

## ðŸ’» Technical Stack

| Domain | Technologies Utilized |
| :--- | :--- |
| **Frontend Layout** | HTML5 (Semantic), CSS3 (Grid, Flexbox, Custom Properties) |
| **Logic & DOM Engine** | Vanilla JavaScript (ES6+), Higher-Order Functions, Object Mapping |
| **Visuals & Animations** | CSS Keyframes, Canvas API, Hardware Accelerated Transforms |
| **Typography** | Inter, Space Grotesk (Google Web Fonts) |
| **Hosting & CI/CD** | GitHub Pages (Automated Edge Deployment) |

---

## ðŸ“‚ Project Structure

```text
/
â”œâ”€â”€ index.html        # Main HTML document and semantic skeleton
â”œâ”€â”€ style.css         # Styling engine, premium animations, media queries
â”œâ”€â”€ app.js            # Central logic, DOM injection, and data models
â”œâ”€â”€ assets/           # Static asset directory
â”‚   â”œâ”€â”€ images/       # Project thumbnails, UI components, gallery photos
â”‚   â””â”€â”€ pdfs/         # Downloadable Resume and certificates
â””â”€â”€ README.md         # Detailed repository documentation
```

---

## âš™ï¸  Extensibility & Updating

To update the content of the portfolio, you do **not** need to write HTML. 

1. Open `app.js`.
2. Locate the relevant data array (e.g., `projects`, `skills`, `defenseEvents`, `meritCards`).
3. Add a new object following the existing schema.
4. Refresh the page. The JavaScript engine will automatically construct the DOM nodes, apply the appropriate CSS classes, and attach the scroll-reveal observers.

Example for adding a skill:
```javascript
{
  category: 'Cloud Infrastructure',
  icon: 'â˜ ',
  items: ['AWS EC2', 'S3', 'Docker', 'Kubernetes']
}
```

---

## ðŸ› ï¸  Local Environment Setup

Since this architecture deliberately avoids Node.js build steps, Webpack, or Vite, deploying it locally is instantaneous.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mevaibhavpandey/Portfolio.git
   cd Portfolio
   ```

2. **Serve locally:**
   You can use any standard local web server. 
   
   Using Python 3:
   ```bash
   python -m http.server 8000
   ```
   Using Node (if `http-server` is installed globally):
   ```bash
   http-server -p 8000
   ```

3. **View in browser:**
   Navigate to `http://localhost:8000` to view the live build.

---

## ðŸ“§ Contact & Professional Inquiries

I am actively open to Software Engineering roles, applied AI/ML opportunities, and strategic technical collaborations.

- **Email:** [vaibhav.pandey1661@gmail.com](mailto:vaibhav.pandey1661@gmail.com)
- **Phone:** +91 8683081192
- **LinkedIn:** [vaibhav-pandey-7ba67033a](https://www.linkedin.com/in/vaibhav-pandey-7ba67033a/)
- **GitHub:** [mevaibhavpandey](https://github.com/mevaibhavpandey)
- **LeetCode:** [mevaibhavpandey](https://leetcode.com/u/mevaibhavpandey/)

<br>

<div align="center">
  <i>Engineered for Scale, Built for Innovation.</i><br>
  Â© 2026 Vaibhav Pandey. All Rights Reserved.
</div>
