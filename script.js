// Project Data
const projectsData = {
    1: {
        title: "Maritime Situational Awareness System",
        icon: "fas fa-ship",
        overview: "The Maritime Situational Awareness (MSA) System is a centralized, web-based command and control platform designed to support real-time maritime surveillance, vessel monitoring, threat detection, and operational decision-making across vast maritime domains.",
        concept: "This project simulates the core principles and functional architecture used by modern maritime forces such as the Indian Navy and Indian Coast Guard, where data from multiple sources is fused into a single operational picture to enhance maritime domain awareness (MDA).",
        objectives: [
            "Provide a real-time operational picture of maritime activities",
            "Track, classify, and monitor vessels within and around Indian maritime boundaries",
            "Detect suspicious behaviour and generate automated alerts",
            "Support decision-making for interception, patrol, and surveillance",
            "Demonstrate a centralized command & communication model",
            "Simulate data fusion from heterogeneous sources"
        ],
        features: [
            {
                name: "Secure Command Access",
                details: "Login-based access simulating restricted command centre entry with role-based operational interface and persistent session-based data storage"
            },
            {
                name: "Interactive Maritime Map",
                details: "Real-time interactive map using Leaflet with visualization of Indian maritime boundaries (East & West), vessel positions, patrol areas, exercise zones, piracy-prone regions, and security checkpoints"
            },
            {
                name: "Vessel Tracking & Classification",
                details: "Manual and automated vessel ingestion with attributes including position, speed, course, vessel type, flag inference, and friendly vs unidentified classification"
            },
            {
                name: "Operational Dashboard",
                details: "Key Performance Indicators including total vessels, friendly vessels, suspicious vessels, active alerts, mini-map overview, and recent alerts feed"
            },
            {
                name: "Automated Threat Detection & Alerts",
                details: "Automatically generates alerts based on high-speed unidentified vessels, entry into restricted zones, piracy-zone presence, predicted boundary violations, and collision risk detection"
            },
            {
                name: "Trajectory Prediction & Boundary Analysis",
                details: "Predicts future vessel movement based on speed, course, and time window. Detects boundary crossings and recommends nearest naval asset for interception with ETA estimation"
            },
            {
                name: "Multi-Source Data Ingestion",
                details: "Supports ingestion from text/markdown reports, CSV/Excel files, DOCX documents, PDFs with OCR (Tesseract), JSON operational area definitions, and manual vessel input forms"
            },
            {
                name: "Text Intelligence Processing",
                details: "Extracts structured vessel data from unstructured surveillance logs, automatically parsing coordinates, vessel identity, speed, heading, and operational context"
            },
            {
                name: "Persistent Data Storage",
                details: "Uses IndexedDB for offline-capable persistence with data export (TXT/CSV), import, backup & restore, and system refresh capabilities"
            }
        ],
        techStack: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "OpenStreetMap", "IndexedDB", "Tesseract.js", "Mammoth.js", "SheetJS (XLSX)", "Font Awesome"],
        useCases: [
            "Coastal surveillance simulation",
            "Naval & coast guard training demonstrations",
            "Defence technology academic projects",
            "Maritime security research",
            "Hackathons & innovation challenges",
            "Command-and-control system prototyping"
        ],
        liveLink: "https://mevaibhavpandey.github.io/Maritime-Situational-Awareness/",
        githubLink: "https://github.com/mevaibhavpandey/Maritime-Situational-Awareness"
    },
    2: {
        title: "Radar-style Air Defense Missile Simulation",
        icon: "fas fa-rocket",
        overview: "A real-time, interactive Streamlit application that simulates radar tracking and missile guidance using a simplified proportional navigation algorithm. Visualize missile and target trajectories on a radar-style display, add multiple threats, tune simulation parameters, and review neutralized targets.",
        features: [
            {
                name: "Interactive Radar Interface",
                details: "Real-time plotting of targets and missiles on a radar-style display with smooth animation, adjustable zoom, and fast radar sweep"
            },
            {
                name: "Multiple Threat Handling",
                details: "Add multiple targets with user-defined positions and velocities. Each missile autonomously intercepts its assigned target"
            },
            {
                name: "Proportional Navigation Guidance",
                details: "Simulates realistic missile pursuit using the navigation constant (N) with dynamic update of missile heading and velocity"
            },
            {
                name: "Engagement Reporting",
                details: "Automatically logs neutralized threats with hit time and coordinates. Displays live and final results in a dynamic table"
            },
            {
                name: "Customizable Parameters",
                details: "Adjustable radar sweep speed, missile velocity, detection radius, and zoom levels"
            }
        ],
        howItWorks: [
            "Add a threat with given position (Pos X, Pos Y) and velocity (Vel X, Vel Y)",
            "Each missile launches from origin (0, 0) toward its target",
            "The simulation updates every dt seconds calculating relative position and velocity",
            "Computes line-of-sight rate and adjusts missile heading using Proportional Navigation (PN)",
            "If distance < hit_distance, the target is marked neutralized",
            "All trajectories and results are displayed in real time on the radar"
        ],
        techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Proportional Navigation Algorithm"],
        highlights: [
            "100% Python implementation",
            "Runs locally or on Streamlit Cloud",
            "Lightweight & portable",
            "Real-time visualization",
            "Educational simulation tool"
        ],
        githubLink: "https://github.com/mevaibhavpandey"
    },
    3: {
        title: "Indian Military Operations — Interactive Timeline",
        icon: "fas fa-flag",
        overview: "Indian Military Operations — Interactive Timeline is a visually rich, interactive web application that presents major Indian military battles and strategic operations from 1947 to modern times. The project combines military history, interactive data visualization, and a futuristic HUD-style user interface to create an educational and engaging experience.",
        features: [
            {
                name: "Interactive Military Timeline",
                details: "Chronological visualization of battles and operations with vertical and horizontal timeline modes and smooth animations"
            },
            {
                name: "Smart Search & Filtering",
                details: "Search by battle name, year, location, or detailed description with instant results"
            },
            {
                name: "Branch-Based Filtering",
                details: "Filter operations by Indian Army, Indian Navy, Indian Air Force, or Joint Operations"
            },
            {
                name: "Geographic Visualization",
                details: "Interactive maps using Leaflet.js with location markers for each operation and dynamic zoom and focus"
            },
            {
                name: "Embedded Educational Videos",
                details: "Documentary and explainer video embeds for contextual learning support"
            },
            {
                name: "Military HUD User Interface",
                details: "Camouflage military color palette, radar sweep animation background, hex-grid futuristic design, and glass panel UI elements"
            }
        ],
        coverage: [
            "First Kashmir War (1947–48)",
            "Operation Polo (Hyderabad Integration)",
            "Operation Vijay (Goa Liberation)",
            "Sino-Indian War (1962)",
            "Indo-Pak Wars (1965, 1971)",
            "Operation Meghdoot (Siachen Glacier)",
            "Operation Pawan / IPKF (Sri Lanka)",
            "Operation Cactus (Maldives)",
            "Kargil Conflict (1999)",
            "Operation Parakram (2001–02)",
            "Operation Black Tornado (2008 Mumbai Attacks Response)",
            "Surgical Strikes (2016)",
            "Balakot Airstrike (2019)",
            "Operation Maitri (Nepal Earthquake Relief)"
        ],
        techStack: ["HTML5", "CSS3", "JavaScript (Vanilla JS)", "Leaflet.js", "YouTube Embedded Player"],
        goals: [
            "Make Indian military history interactive and accessible",
            "Combine defence history with modern UI technology",
            "Provide an educational visualization tool",
            "Serve as a scalable base for future defence visualization systems"
        ],
        futureImprovements: [
            "Database-driven event storage",
            "Real-time defence event updates",
            "3D globe battle visualization",
            "Statistical dashboards",
            "Mobile optimization",
            "Multi-language support"
        ],
        liveLink: "https://mevaibhavpandey.github.io/indian-military-operations-timeline/",
        githubLink: "https://github.com/mevaibhavpandey/indian-military-operations-timeline"
    }
};

// Achievement Data
const achievementsData = {
    nda: {
        title: "NDA 153rd Course Selection",
        rank: "31",
        rankLabel: "All India Rank",
        organization: "Union Public Service Commission (UPSC)",
        service: "Indian Air Force",
        branch: "Flying Branch Selection Stage",
        course: "NDA 153rd Course",
        icon: "fas fa-fighter-jet",
        description: "Selected for the prestigious National Defence Academy (NDA) 153rd Course through the Union Public Service Commission examination. Secured All India Rank 31 and qualified for the Indian Air Force Flying Branch Selection Stage.",
        link: "https://upsc.gov.in/sites/default/files/MksRcdCndts-NDA-I-24-Engl-051124.pdf",
        linkText: "View Official UPSC Merit List"
    },
    tes: {
        title: "Technical Entry Scheme (TES) 52nd Course",
        rank: "50",
        rankLabel: "All India Rank",
        organization: "Indian Army",
        service: "Indian Army",
        scheme: "Technical Entry Scheme",
        course: "TES 52nd Course",
        icon: "fas fa-shield-alt",
        description: "Selected for the Indian Army Technical Entry Scheme (TES) 52nd Course. Secured All India Rank 50 in this highly competitive technical entry examination for engineering students.",
        link: "https://joinindianarmy.nic.in/",
        linkText: "View Indian Army Official Website"
    }
};

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Open Project Modal
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectsData[projectId];

    if (!project) return;

    let modalContent = `
        <h2>${project.title}</h2>
        <p><strong>Overview:</strong> ${project.overview}</p>
    `;

    if (project.concept) {
        modalContent += `<p>${project.concept}</p>`;
    }

    if (project.objectives) {
        modalContent += `
            <h3>🎯 Project Objectives</h3>
            <ul>
                ${project.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
        `;
    }

    if (project.features) {
        modalContent += `<h3>✨ Key Features</h3>`;
        project.features.forEach(feature => {
            if (typeof feature === 'object') {
                modalContent += `
                    <p><strong>${feature.name}:</strong> ${feature.details}</p>
                `;
            } else {
                modalContent += `<p>${feature}</p>`;
            }
        });
    }

    if (project.howItWorks) {
        modalContent += `
            <h3>🔧 How It Works</h3>
            <ul>
                ${project.howItWorks.map(step => `<li>${step}</li>`).join('')}
            </ul>
        `;
    }

    if (project.coverage) {
        modalContent += `
            <h3>📊 Coverage</h3>
            <ul>
                ${project.coverage.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }

    if (project.useCases) {
        modalContent += `
            <h3>🧪 Use-Case Scenarios</h3>
            <ul>
                ${project.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
            </ul>
        `;
    }

    if (project.goals) {
        modalContent += `
            <h3>🎯 Project Goals</h3>
            <ul>
                ${project.goals.map(goal => `<li>${goal}</li>`).join('')}
            </ul>
        `;
    }

    if (project.highlights) {
        modalContent += `
            <h3>⭐ Highlights</h3>
            <ul>
                ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        `;
    }

    if (project.futureImprovements) {
        modalContent += `
            <h3>🔮 Future Improvements</h3>
            <ul>
                ${project.futureImprovements.map(improvement => `<li>${improvement}</li>`).join('')}
            </ul>
        `;
    }

    modalContent += `
        <h3>🛠️ Technology Stack</h3>
        <div class="project-tags">
            ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
        </div>
    `;

    modalContent += `<div class="modal-links">`;
    if (project.liveLink) {
        modalContent += `<a href="${project.liveLink}" target="_blank" class="modal-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
    }
    if (project.githubLink) {
        modalContent += `<a href="${project.githubLink}" target="_blank" class="modal-link"><i class="fab fa-github"></i> View on GitHub</a>`;
    }
    modalContent += `</div>`;

    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open Achievement Modal
function openAchievementModal(achievementId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const achievement = achievementsData[achievementId];

    if (!achievement) return;

    let modalContent = `
        <div class="achievement-modal-content">
            <h2><i class="${achievement.icon}"></i> ${achievement.title}</h2>
            <div class="rank-display">
                <span class="rank-label">${achievement.rankLabel}:</span> ${achievement.rank}
            </div>
            <p style="color: var(--text); font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
                ${achievement.description}
            </p>
            
            <div class="detail-item">
                <strong><i class="fas fa-building"></i> Organization</strong>
                <p style="color: var(--text);">${achievement.organization}</p>
            </div>
            
            <div class="detail-item">
                <strong><i class="fas fa-award"></i> Service Selection</strong>
                <p style="color: var(--text);">${achievement.service}</p>
            </div>
    `;

    if (achievement.branch) {
        modalContent += `
            <div class="detail-item">
                <strong><i class="fas fa-plane"></i> Branch</strong>
                <p style="color: var(--text);">${achievement.branch}</p>
            </div>
        `;
    }

    if (achievement.scheme) {
        modalContent += `
            <div class="detail-item">
                <strong><i class="fas fa-cog"></i> Scheme</strong>
                <p style="color: var(--text);">${achievement.scheme}</p>
            </div>
        `;
    }

    modalContent += `
            <div class="detail-item">
                <strong><i class="fas fa-graduation-cap"></i> Course</strong>
                <p style="color: var(--text);">${achievement.course}</p>
            </div>
            
            <div class="modal-links" style="margin-top: 30px;">
                <a href="${achievement.link}" target="_blank" class="modal-link">
                    <i class="fas fa-external-link-alt"></i> ${achievement.linkText}
                </a>
            </div>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        }

        lastScroll = currentScroll;
    });
});

// Add particle effect to hero section (lightweight)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: rgba(100, 255, 218, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Console easter egg
console.log('%c🚀 Defence Technology Portfolio', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Vaibhav Pandey', 'color: #8892b0; font-size: 14px;');
console.log('%cInterested in defence tech? Let\'s connect!', 'color: #64ffda; font-size: 12px;');
