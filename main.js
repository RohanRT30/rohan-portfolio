const projectData = {
    1: {
        title: 'React Development',
        icon: '🖥️',
        description:
            'Building scalable Single Page Applications with ReactJS. Creating reusable components and managing state effectively.',
        tech: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
        stats: { likes: 124, comments: 18 },
    },
    2: {
        title: 'Full-Stack Development',
        icon: '⚛️',
        description:
            'End-to-end application development using modern tech stacks. From database design to UI implementation.',
        tech: ['Node.js', 'Express', 'MongoDB', 'React'],
        stats: { likes: 98, comments: 12 },
    },
    3: {
        title: 'Cloud Architecture',
        icon: '☁️',
        description:
            'Designing and deploying scalable cloud solutions on AWS and Azure. Implementing best practices for security and performance.',
        tech: ['AWS', 'Azure', 'EC2', 'S3', 'Lambda'],
        stats: { likes: 87, comments: 9 },
    },
    4: {
        title: 'Java Development',
        icon: '☕',
        description:
            'Backend development with Java and Spring Boot. Building REST APIs and microservices.',
        tech: ['Java', 'Spring Boot', 'JPA', 'Maven'],
        stats: { likes: 76, comments: 14 },
    },
    5: {
        title: 'Learning & Growth',
        icon: '🎓',
        description:
            'Continuously learning new technologies and keeping up with industry trends. Currently exploring AI/ML.',
        tech: ['Machine Learning', 'AI', 'Data Science'],
        stats: { likes: 65, comments: 8 },
    },
    6: {
        title: 'Certifications Achieved',
        icon: '🏆',
        description:
            'AWS, Azure, and Google Cloud certified. Committed to maintaining and expanding cloud expertise.',
        tech: ['AWS Certified', 'Azure Certified', 'GCP'],
        stats: { likes: 112, comments: 22 },
    },
};

/* ── Story Data ── */
const storyData = {
    work: {
        icon: '💼',
        title: 'Work',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                content: `
                    <div class="story-slide-icon">🚀</div>
                    <h2 class="story-slide-title">4 Years of Software Developer Journey</h2>
                    <p class="story-slide-subtitle">at Wipro Limited</p>
                    <div class="story-slide-divider"></div>
                    <p class="story-slide-text">Telstra–Telecom (Australia) &amp; Unified Onboarding for a US banking client.</p>
                    <p class="story-slide-text">Built scalable, user-centric apps for corporate trust onboarding.</p>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                content: `
                    <div class="story-slide-icon">💻</div>
                    <h2 class="story-slide-title">Tech Stack</h2>
                    <div class="story-tags">
                        <span class="story-tag">React.js</span>
                        <span class="story-tag">Redux</span>
                        <span class="story-tag">JavaScript</span>
                        <span class="story-tag">Core Java</span>
                        <span class="story-tag">HTML</span>
                        <span class="story-tag">CSS</span>
                        <span class="story-tag">REST APIs</span>
                        <span class="story-tag">Postman</span>
                        <span class="story-tag">Jenkins</span>
                        <span class="story-tag">Jira</span>
                        <span class="story-tag">Agile</span>
                        <span class="story-tag">Git</span>
                        <span class="story-tag">CI/CD</span>
                    </div>
                    <p class="story-slide-quote">Grateful for the growth &amp; continuous learning 💻✨</p>
                `,
            },
        ],
    },
    education: {
        icon: '🎓',
        title: 'Education',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
                content: `
                    <div class="story-slide-icon">🎓</div>
                    <h2 class="story-slide-title">MTech - Software Systems</h2>
                    <p class="story-slide-subtitle">BITS Pilani</p>
                    <div class="story-edu-logo">
                        <svg viewBox="0 0 100 100" width="80" height="80">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" stroke-width="3"/>
                            <text x="50" y="40" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="serif">BITS</text>
                            <text x="50" y="58" text-anchor="middle" fill="#fff" font-size="10" font-family="serif">PILANI</text>
                            <text x="50" y="74" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="8" font-family="serif">Est. 1964</text>
                        </svg>
                    </div>
                    <p class="story-slide-text">Pursuing MTech from one of India's premier institutions</p>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                content: `
                    <div class="story-slide-icon">📘</div>
                    <h2 class="story-slide-title">Master of Computer Application</h2>
                    <p class="story-slide-subtitle">Vidyabharati Mahavidyalaya, Amravati</p>
                    <div class="story-slide-divider"></div>
                    <p class="story-slide-detail"><span class="story-detail-label">Duration:</span> 2023 - 2025</p>
                    <p class="story-slide-detail"><span class="story-detail-label">CGPA:</span> 8.3</p>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                content: `
                    <div class="story-slide-icon">📗</div>
                    <h2 class="story-slide-title">Bachelor of Computer Application</h2>
                    <p class="story-slide-subtitle">Brijlal Biyani Science College, Amravati</p>
                    <div class="story-slide-divider"></div>
                    <p class="story-slide-detail"><span class="story-detail-label">Duration:</span> 2019 - 2022</p>
                    <p class="story-slide-detail"><span class="story-detail-label">CGPA:</span> 7.5</p>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                content: `
                    <div class="story-slide-icon">🏫</div>
                    <h2 class="story-slide-title">Higher Secondary & Secondary</h2>
                    <p class="story-slide-subtitle">Bhartiya Mahavidyalaya &amp; Takhatmal English High School</p>
                    <div class="story-slide-divider"></div>
                    <p class="story-slide-detail"><span class="story-detail-label">HSC:</span> 2018 - 2019</p>
                    <p class="story-slide-detail"><span class="story-detail-label">SSC:</span> 2016 - 2017</p>
                `,
            },
        ],
    },
    certifications: {
        icon: '🏆',
        title: 'Certifications',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #FF9900 0%, #FF6600 100%)',
                content: `
                    <div class="story-slide-icon">☁️</div>
                    <h2 class="story-slide-title">AWS Certified</h2>
                    <div class="story-cert-badges">
                        <div class="story-cert-badge">
                            <span class="story-cert-emoji">☁️</span>
                            <span>Cloud Practitioner</span>
                        </div>
                        <div class="story-cert-badge">
                            <span class="story-cert-emoji">🏗️</span>
                            <span>Solutions Architect Associate</span>
                        </div>
                    </div>
                    <p class="story-slide-text">Amazon Web Services</p>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #0078D4 0%, #00A4EF 100%)',
                content: `
                    <div class="story-slide-icon">🔷</div>
                    <h2 class="story-slide-title">Azure Certified</h2>
                    <div class="story-cert-badges">
                        <div class="story-cert-badge">
                            <span class="story-cert-emoji">🔷</span>
                            <span>Data Fundamentals</span>
                        </div>
                        <div class="story-cert-badge">
                            <span class="story-cert-emoji">🤖</span>
                            <span>AI Engineer Associate</span>
                        </div>
                    </div>
                    <p class="story-slide-text">Microsoft Certified</p>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
                content: `
                    <div class="story-slide-icon">🔷</div>
                    <h2 class="story-slide-title">Google & GitHub</h2>
                    <div class="story-cert-badges">
                        <div class="story-cert-badge">
                            <span class="story-cert-emoji">🔷</span>
                            <span>Google Associate Cloud Engineer</span>
                        </div>
                        <div class="story-cert-badge">
                            <span class="story-cert-emoji">🐙</span>
                            <span>GitHub Foundation</span>
                        </div>
                    </div>
                `,
            },
        ],
    },
    skills: {
        icon: '💡',
        title: 'Skills',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
                content: `
                    <div class="story-slide-icon">⚛️</div>
                    <h2 class="story-slide-title">Frontend</h2>
                    <div class="story-skill-bars">
                        <div class="story-skill-row"><span>ReactJS</span><div class="story-bar"><div class="story-bar-fill" style="width:95%"></div></div></div>
                        <div class="story-skill-row"><span>JavaScript</span><div class="story-bar"><div class="story-bar-fill" style="width:90%"></div></div></div>
                        <div class="story-skill-row"><span>HTML/CSS</span><div class="story-bar"><div class="story-bar-fill" style="width:95%"></div></div></div>
                    </div>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)',
                content: `
                    <div class="story-slide-icon">☕</div>
                    <h2 class="story-slide-title">Backend & Cloud</h2>
                    <div class="story-skill-bars">
                        <div class="story-skill-row"><span>Java</span><div class="story-bar"><div class="story-bar-fill" style="width:90%"></div></div></div>
                        <div class="story-skill-row"><span>Spring Boot</span><div class="story-bar"><div class="story-bar-fill" style="width:85%"></div></div></div>
                        <div class="story-skill-row"><span>Node.js</span><div class="story-bar"><div class="story-bar-fill" style="width:80%"></div></div></div>
                        <div class="story-skill-row"><span>AWS</span><div class="story-bar"><div class="story-bar-fill" style="width:80%"></div></div></div>
                        <div class="story-skill-row"><span>Azure</span><div class="story-bar"><div class="story-bar-fill" style="width:75%"></div></div></div>
                    </div>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
                content: `
                    <div class="story-slide-icon">🛠️</div>
                    <h2 class="story-slide-title">Tools & Database</h2>
                    <div class="story-skill-bars">
                        <div class="story-skill-row"><span>MongoDB</span><div class="story-bar"><div class="story-bar-fill" style="width:85%"></div></div></div>
                        <div class="story-skill-row"><span>JIRA & Jenkins</span><div class="story-bar"><div class="story-bar-fill" style="width:85%"></div></div></div>
                    </div>
                `,
            },
        ],
    },
    gaming: {
        icon: '🎮',
        title: 'Gaming',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #2d1b69 100%)',
                content: `
                    <div class="story-slide-icon">🎮</div>
                    <h2 class="story-slide-title">E-Sports Enthusiast</h2>
                    <p class="story-slide-text">Passionate about competitive gaming and E-Sports</p>
                    <div class="story-tags">
                        <span class="story-tag">🎯 FPS Games</span>
                        <span class="story-tag">🏆 Competitive</span>
                        <span class="story-tag">🎮 Strategy</span>
                        <span class="story-tag">🌐 Online Multiplayer</span>
                    </div>
                    <p class="story-slide-quote">Gaming isn't just a hobby, it's a way to sharpen strategy & teamwork 🎯</p>
                `,
            },
        ],
    },
    music: {
        icon: '🎸',
        title: 'Music',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #e44d26 0%, #f7df1e 100%)',
                content: `
                    <div class="story-slide-icon">🎸</div>
                    <h2 class="story-slide-title">Guitar Player</h2>
                    <p class="story-slide-text">Playing guitar and exploring different music genres</p>
                    <div class="story-tags">
                        <span class="story-tag">🎸 Guitar</span>
                        <span class="story-tag">🎵 Music Lover</span>
                        <span class="story-tag">🎧 Listening</span>
                    </div>
                    <p class="story-slide-quote">Music fuels creativity and keeps the code flowing 🎶</p>
                `,
            },
        ],
    },
    projects: {
        icon: '📱',
        title: 'Projects',
        slides: [
            {
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                content: `
                    <div class="story-slide-icon">🛒</div>
                    <h2 class="story-slide-title">Lifestyle Store</h2>
                    <p class="story-slide-subtitle">Full-Stack E-commerce Application — 2024</p>
                    <div class="story-slide-divider"></div>
                    <p class="story-slide-text">An E-commerce full-stack website to buy lifestyle things. Enables businesses to sell goods or services online.</p>
                    <div class="story-tags">
                        <span class="story-tag">ReactJS</span>
                        <span class="story-tag">Node.js</span>
                        <span class="story-tag">MongoDB</span>
                        <span class="story-tag">Express</span>
                    </div>
                `,
            },
            {
                gradient: 'linear-gradient(135deg, #f5576c 0%, #ff6f91 100%)',
                content: `
                    <div class="story-slide-icon">🩸</div>
                    <h2 class="story-slide-title">Blood Bank Management</h2>
                    <p class="story-slide-subtitle">Desktop Application — 2022</p>
                    <div class="story-slide-divider"></div>
                    <p class="story-slide-text">Desktop-based application for blood bank management. Donor registration, Blood inventory, Request management.</p>
                    <div class="story-tags">
                        <span class="story-tag">Java</span>
                        <span class="story-tag">Swing</span>
                        <span class="story-tag">MySQL</span>
                    </div>
                `,
            },
        ],
    },
};

/* ── Story Viewer State ── */
let currentStoryKey = null;
let currentSlideIndex = 0;
let storyTimer = null;
let isPaused = false;
const STORY_DURATION = 10000;

function openStory(storyKey) {
    const story = storyData[storyKey];
    if (!story) return;
    currentStoryKey = storyKey;
    currentSlideIndex = 0;
    renderStorySlide();
    document.getElementById('storyModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    startStoryTimer();
}

function closeStory() {
    clearTimeout(storyTimer);
    storyTimer = null;
    document.getElementById('storyModal').classList.remove('active');
    document.body.style.overflow = '';
    /* mark viewed */
    const item = document.querySelector(`.story-item[data-story="${currentStoryKey}"]`);
    if (item) item.querySelector('.story-ring').classList.add('viewed');
}

function renderStorySlide() {
    const story = storyData[currentStoryKey];
    const slide = story.slides[currentSlideIndex];
    const container = document.querySelector('.story-modal-container');
    container.style.background = slide.gradient;

    /* progress bar segments */
    const progressBar = document.querySelector('.story-progress-bar');
    progressBar.innerHTML = story.slides
        .map(
            (_, i) =>
                `<div class="story-progress-segment ${i < currentSlideIndex ? 'done' : ''} ${i === currentSlideIndex ? 'active' : ''}"><div class="story-progress-segment-fill"></div></div>`
        )
        .join('');

    /* avatar */
    document.querySelector('.story-modal-avatar').textContent = story.icon;

    /* body */
    document.getElementById('storyBody').innerHTML = slide.content;

    /* nav arrows visibility */
    const keys = Object.keys(storyData);
    const keyIdx = keys.indexOf(currentStoryKey);
    document.querySelector('.story-nav-prev').style.visibility =
        currentSlideIndex > 0 || keyIdx > 0 ? 'visible' : 'hidden';
    document.querySelector('.story-nav-next').style.visibility =
        currentSlideIndex < story.slides.length - 1 || keyIdx < keys.length - 1
            ? 'visible'
            : 'hidden';
}

function navigateStory(direction) {
    const story = storyData[currentStoryKey];
    const nextIndex = currentSlideIndex + direction;
    if (nextIndex < 0 || nextIndex >= story.slides.length) {
        const keys = Object.keys(storyData);
        const currentKeyIndex = keys.indexOf(currentStoryKey);
        if (direction > 0 && currentKeyIndex < keys.length - 1) {
            currentStoryKey = keys[currentKeyIndex + 1];
            currentSlideIndex = 0;
        } else if (direction < 0 && currentKeyIndex > 0) {
            currentStoryKey = keys[currentKeyIndex - 1];
            currentSlideIndex = storyData[currentStoryKey].slides.length - 1;
        } else {
            closeStory();
            return;
        }
    } else {
        currentSlideIndex = nextIndex;
    }
    renderStorySlide();
    startStoryTimer();
}

function startStoryTimer() {
    clearTimeout(storyTimer);
    if (isPaused) return;
    storyTimer = setTimeout(() => navigateStory(1), STORY_DURATION);
}

function pauseStory() {
    isPaused = true;
    clearTimeout(storyTimer);
    const activeFill = document.querySelector('.story-progress-segment.active .story-progress-segment-fill');
    if (activeFill) activeFill.style.animationPlayState = 'paused';
}

function resumeStory() {
    if (!isPaused) return;
    isPaused = false;
    const activeFill = document.querySelector('.story-progress-segment.active .story-progress-segment-fill');
    if (activeFill) {
        activeFill.style.animationPlayState = 'running';
        const remainingTime = STORY_DURATION * (1 - activeFill.offsetWidth / activeFill.parentElement.offsetWidth);
        clearTimeout(storyTimer);
        storyTimer = setTimeout(() => navigateStory(1), Math.max(0, remainingTime));
    } else {
        startStoryTimer();
    }
}

function updateToggleIcon() {
    const toggleThumb = document.querySelector('.toggle-thumb');
    const isLight =
        document.documentElement.getAttribute('data-theme') === 'light';
    toggleThumb.innerHTML = `<span class="toggle-icon">${isLight ? '🌙' : '☀️'}</span>`;
}
function toggleTheme() {
    const html = document.documentElement;
    const isCurrentlyLight = html.getAttribute('data-theme') === 'light';
    if (isCurrentlyLight) {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    updateToggleIcon();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');

    // If there is no saved theme, explicitly default to dark mode
    if (!savedTheme || savedTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    updateToggleIcon();
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-item').forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    document.querySelectorAll('.content-section').forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    setTimeout(animateOnScroll, 100);
}
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    const modalBody = document.getElementById('modalBody');
    const techTags = project.tech
        .map((t) => `<span class="modal-tech-tag">${t}</span>`)
        .join('');
    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="modal-icon">${project.icon}</div>
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-description">${project.description}</p>
            <div class="modal-tech-list">${techTags}</div>
            <div class="modal-stats">
                <span>❤️ ${project.stats.likes}</span>
                <span>💬 ${project.stats.comments}</span>
            </div>
        </div>
    `;
    document.getElementById('projectModal').classList.add('active');
}
function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
}

function animateOnScroll() {
    document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
        setTimeout(() => el.classList.add('animated'), index * 100);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();

    document
        .querySelector('.theme-toggle')
        .addEventListener('click', toggleTheme);
    document.querySelector('.tab-nav').addEventListener('click', (e) => {
        const tab = e.target.closest('.tab-item');
        if (tab && tab.dataset.tab) {
            switchTab(tab.dataset.tab);
        }
    });
    const profileIcon = document.getElementById('header-profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', () => switchTab('about'));
    }
    document
        .querySelector('#posts .projects-grid')
        ?.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (card && card.dataset.projectId) {
                openProjectModal(Number(card.dataset.projectId));
            }
        });
    const modal = document.getElementById('projectModal');
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    /* ── Welcome Modal ── */
    const welcomeModal = document.getElementById('welcomeModal');
    const avatarRing = document.querySelector('.avatar-ring');
    if (avatarRing && welcomeModal) {
        avatarRing.addEventListener('click', () => {
            welcomeModal.classList.add('active');
        });
        welcomeModal.querySelector('.modal-close').addEventListener('click', () => {
            welcomeModal.classList.remove('active');
        });
        welcomeModal.addEventListener('click', (e) => {
            if (e.target === welcomeModal) {
                welcomeModal.classList.remove('active');
            }
        });
    }

    /* ── Story listeners ── */
    document.querySelector('.stories-bar').addEventListener('click', (e) => {
        const item = e.target.closest('.story-item');
        if (item && item.dataset.story) {
            openStory(item.dataset.story);
        }
    });
    const closeBtn = document.querySelector('.story-modal-close');
    const navPrev = document.querySelector('.story-nav-prev');
    const navNext = document.querySelector('.story-nav-next');

    const handleClose = (e) => {
        if (e.type === 'touchstart') e.preventDefault();
        closeStory();
    };
    const handlePrev = (e) => {
        if (e.type === 'touchstart') e.preventDefault();
        navigateStory(-1);
    };
    const handleNext = (e) => {
        if (e.type === 'touchstart') e.preventDefault();
        navigateStory(1);
    };

    closeBtn.addEventListener('click', handleClose);
    closeBtn.addEventListener('touchstart', handleClose, { passive: false });
    navPrev.addEventListener('click', handlePrev);
    navPrev.addEventListener('touchstart', handlePrev, { passive: false });
    navNext.addEventListener('click', handleNext);
    navNext.addEventListener('touchstart', handleNext, { passive: false });

    document
        .querySelector('.story-modal-backdrop')
        .addEventListener('click', closeStory);

    /* Hold to pause listeners */
    const storyContainer = document.querySelector('.story-modal-container');
    
    const onHoldStart = (e) => {
        if (e.target.closest('.story-nav') || e.target.closest('.story-modal-close')) return;
        // Only prevent default on the slide background to allow pausing without scrolling
        if (e.type === 'touchstart') e.preventDefault();
        pauseStory();
    };

    const onHoldEnd = () => {
        resumeStory();
    };

    storyContainer.addEventListener('mousedown', onHoldStart);
    storyContainer.addEventListener('mouseup', onHoldEnd);
    storyContainer.addEventListener('mouseleave', onHoldEnd);
    storyContainer.addEventListener('touchstart', onHoldStart, { passive: false });
    storyContainer.addEventListener('touchend', onHoldEnd, { passive: true });

    document
        .querySelector('.fab')
        .addEventListener('click', () => switchTab('contact'));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeStory();
        }
        if (
            document.getElementById('storyModal').classList.contains('active')
        ) {
            if (e.key === 'ArrowRight') navigateStory(1);
            if (e.key === 'ArrowLeft') navigateStory(-1);
        }
    });
    animateOnScroll();
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                animateOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});