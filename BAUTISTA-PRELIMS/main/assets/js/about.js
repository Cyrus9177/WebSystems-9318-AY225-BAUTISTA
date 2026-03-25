// About Page - Core Values and What We Do Data & Functionality

// Core Values Data
const coreValuesData = [
    {
        id: 1,
        number: "01",
        title: "Innovation",
        shortDesc: "We embrace creativity and encourage members to think outside the box.",
        fullDesc: "We embrace creativity and encourage members to think outside the box, pushing the boundaries of what's possible with technology. Innovation is at the heart of everything we do—from developing cutting-edge projects to exploring emerging technologies like AI, blockchain, and quantum computing. We foster an environment where experimentation is valued, failures are learning opportunities, and bold ideas are celebrated. Our members are empowered to challenge conventional thinking and create solutions that make a real impact.",
        imagePath: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop",
        highlights: [
            "Hackathons and innovation challenges",
            "Access to emerging tech workshops",
            "Mentorship from industry innovators",
            "Project incubation support",
            "Technology trend seminars"
        ]
    },
    {
        id: 2,
        number: "02",
        title: "Excellence",
        shortDesc: "We pursue the highest standards in everything we do.",
        fullDesc: "We pursue the highest standards in everything we do, from organizing events to delivering educational content and community service. Excellence means going beyond expectations—whether it's a workshop that transforms beginners into confident coders, an event that runs flawlessly, or a project that exceeds client goals. We believe in continuous improvement, attention to detail, and a commitment to quality that defines every initiative. Our members learn to set high standards for themselves and work collaboratively to achieve exceptional results.",
        imagePath: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
        highlights: [
            "Award-winning organization track record",
            "Certified training programs",
            "Professional development workshops",
            "Quality assurance in all activities",
            "Recognition and achievement awards"
        ]
    },
    {
        id: 3,
        number: "03",
        title: "Collaboration",
        shortDesc: "We believe in the power of teamwork and collective growth.",
        fullDesc: "We believe in the power of teamwork and create opportunities for members to work together, share knowledge, and grow collectively. Collaboration is the foundation of great achievements—when diverse perspectives come together, extraordinary things happen. Through team projects, study groups, peer programming sessions, and collaborative competitions, we build a culture where helping each other succeed is the norm. We understand that the tech industry thrives on collaboration, and we prepare our members for this reality through hands-on collaborative experiences.",
        imagePath: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop",
        highlights: [
            "Team-based project work",
            "Peer mentorship programs",
            "Cross-functional team experiences",
            "Collaborative coding sessions",
            "Group study and learning circles"
        ]
    },
    {
        id: 4,
        number: "04",
        title: "Integrity",
        shortDesc: "We uphold ethical standards and promote responsible tech use.",
        fullDesc: "We uphold ethical standards and promote responsible use of technology, ensuring our actions benefit both our community and society. Integrity means being honest in our work, respecting intellectual property, maintaining data privacy, and using technology for good. We teach our members about ethical hacking, responsible AI development, data protection, and the social implications of technology. In an age where tech can be used for both good and harm, we stand firmly on the side of ethical, responsible, and transparent technology practices.",
        imagePath: "https://images.unsplash.com/photo-1560264357-8d9202250f21?w=600&h=600&fit=crop",
        highlights: [
            "Ethics in technology workshops",
            "Cybersecurity and privacy training",
            "Code of conduct enforcement",
            "Responsible AI development",
            "Social impact considerations"
        ]
    },
    {
        id: 5,
        number: "05",
        title: "Inclusivity",
        shortDesc: "We welcome students from all backgrounds and skill levels.",
        fullDesc: "We welcome students from all backgrounds and skill levels, creating a supportive environment where everyone can thrive. Inclusivity means more than just open membership—it means actively creating spaces where diverse voices are heard, different learning styles are accommodated, and every member feels valued. We celebrate diversity in gender, ethnicity, academic background, and experience level. Whether you're a complete beginner or an experienced developer, whether you study CS or another field, you have a place in JPCS.",
        imagePath: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop",
        highlights: [
            "Beginner-friendly programs",
            "Multilevel learning tracks",
            "Diversity and inclusion initiatives",
            "Accessible events and materials",
            "Supportive community culture"
        ]
    },
    {
        id: 6,
        number: "06",
        title: "Growth",
        shortDesc: "We are committed to continuous learning and personal development.",
        fullDesc: "We are committed to continuous learning and personal development, providing resources and opportunities for members to expand their horizons. Growth is a journey, not a destination—and we support every member along their unique path. Through progressive skill-building programs, career development resources, leadership opportunities, and personal development workshops, we help members become not just better technologists, but better professionals and individuals. We track progress, celebrate achievements, and provide pathways for advancement within the organization and beyond.",
        imagePath: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
        highlights: [
            "Skill development roadmaps",
            "Leadership training programs",
            "Career counseling and guidance",
            "Certification preparation",
            "Personal branding workshops"
        ]
    }
];

// What We Do Activities Data
const whatWeDoActivitiesData = [
    {
        id: 1,
        title: "Educational Programs",
        category: "Training",
        shortDesc: "Workshops, bootcamps, and training sessions covering web development, mobile apps, data science, AI, cybersecurity, and cloud computing.",
        fullDesc: "We organize comprehensive workshops, bootcamps, and training sessions covering various technologies including web development, mobile apps, data science, AI, cybersecurity, and cloud computing. Our programs are designed to complement academic curricula with practical, industry-relevant skills. Led by experienced instructors and industry professionals, these sessions provide hands-on learning experiences that prepare you for real-world challenges. From weekend workshops to intensive bootcamps, we offer flexible learning options that fit your schedule.",
        imagePath: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
        tags: ["Training", "Workshops", "Skill Building"],
        highlights: [
            "Hands-on coding workshops every month",
            "Industry-certified instructors",
            "Progressive learning tracks from beginner to advanced",
            "Project-based learning approach",
            "Certificates of completion and achievement badges"
        ]
    },
    {
        id: 2,
        title: "Competitive Events",
        category: "Competitive",
        shortDesc: "Hackathons, coding competitions, and innovation challenges where you can showcase skills, win prizes, and build your portfolio.",
        fullDesc: "Participate in exciting hackathons, coding competitions, and innovation challenges where you can showcase your skills, win prizes, and build your portfolio with impressive achievements. Our competitive events are designed to push your limits, encourage creative problem-solving, and provide real-world experience in high-pressure development environments. Collaborate with teammates, meet potential employers, and gain recognition for your talents. Whether you're competing for prizes, building your resume, or simply testing your skills, our competitions provide the perfect platform.",
        imagePath: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
        tags: ["Competitive", "Hackathons", "Challenges"],
        highlights: [
            "24-hour hackathons with exciting themes",
            "Cash prizes and tech gear for winners",
            "Industry judges and mentors",
            "Portfolio-worthy projects",
            "Networking with sponsors and recruiters"
        ]
    },
    {
        id: 3,
        title: "Industry Partnerships",
        category: "Industry",
        shortDesc: "Connections with leading tech companies for workshops, internships, job placements, and collaborative projects.",
        fullDesc: "We maintain strong connections with leading tech companies, facilitating workshops, internships, job placements, and collaborative projects. Our industry partnerships provide direct access to professionals, insider knowledge, and career opportunities that give you a competitive edge. Through company visits, guest speaker sessions, and sponsored events, you'll gain insights into how the industry operates and what employers are looking for. Many of our members have secured internships and full-time positions through these valuable connections.",
        imagePath: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
        tags: ["Industry", "Partnerships", "Networking"],
        highlights: [
            "Tech company visits and tours",
            "Guest speakers from industry leaders",
            "Exclusive internship opportunities",
            "Resume reviews from recruiters",
            "Direct hiring pipeline for members"
        ]
    },
    {
        id: 4,
        title: "Career Development",
        category: "Career",
        shortDesc: "Resume building, interview prep, portfolio development, career counseling, and job fair participation support.",
        fullDesc: "Access comprehensive career development resources including resume building, interview preparation, portfolio development, career counseling, and job fair participation. We help you navigate the transition from student to professional with practical guidance, mock interviews, resume workshops, and networking strategies. Our career mentors provide one-on-one counseling to help you identify your strengths, explore career paths, and develop a roadmap to achieve your professional goals. From your first internship to your dream job, we're here to support your career journey.",
        imagePath: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        tags: ["Career", "Professional Development"],
        highlights: [
            "One-on-one career counseling sessions",
            "Mock interview practice with feedback",
            "Resume and LinkedIn optimization",
            "Portfolio development guidance",
            "Job search strategies and networking tips"
        ]
    },
    {
        id: 5,
        title: "Community Service",
        category: "Service",
        shortDesc: "Digital literacy programs, tech workshops for underserved communities, and technology outreach initiatives.",
        fullDesc: "Give back through digital literacy programs, tech workshops for underserved communities, and technology outreach initiatives. We believe technology should be accessible to everyone, and our community service projects bridge the digital divide. Volunteer to teach basic computer skills, conduct coding workshops for kids, or help non-profits with their tech needs. These experiences not only make a positive impact but also develop your communication, teaching, and leadership skills. Making a difference while building your skills—that's the JPCS way.",
        imagePath: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
        tags: ["Service", "Community", "Outreach"],
        highlights: [
            "Monthly community outreach programs",
            "Digital literacy for senior citizens",
            "Coding workshops for underprivileged youth",
            "Pro-bono tech support for non-profits",
            "Social impact project opportunities"
        ]
    }
];

// Initialize About Page functionality
function initializeAboutPage() {
    // Initialize Core Values
    initializeCoreValues();
    
    // Initialize What We Do section
    initializeWhatWeDoSection();
    
    // Initialize modal close handlers
    initializeModalHandlers();
}

// Core Values Functions
function initializeCoreValues() {
    const container = document.getElementById('values-grid');
    if (!container) return;
    
    // Initial render
    renderCoreValues();
}

function renderCoreValues() {
    const container = document.getElementById('values-grid');
    if (!container) return;
    
    // Display all values
    let filteredValues = [...coreValuesData];
    
    container.style.display = 'grid';
    
    container.innerHTML = filteredValues.map(value => `
            <div class="value-card modern-card" data-id="${value.id}">
                <div class="value-image-wrapper">
                    <img src="${value.imagePath}" alt="${value.title}" class="value-image" loading="lazy">
                </div>
                <div class="value-content">
                    <div class="value-number">${value.number}</div>
                    <h3 class="value-title">${value.title}</h3>
                    <p class="value-description">${value.shortDesc}</p>
                    <button class="value-learn-more" data-id="${value.id}" aria-label="Learn more about ${value.title}">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.value-learn-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const valueId = parseInt(btn.dataset.id);
            openValueModal(valueId);
        });
    });
}

let lastFocusedElement = null;

function openValueModal(valueId) {
    const value = coreValuesData.find(v => v.id === valueId);
    if (!value) return;
    
    lastFocusedElement = document.activeElement;
    
    const modal = document.getElementById('value-modal');
    const modalImage = document.getElementById('modal-value-image');
    const modalNumber = document.getElementById('modal-value-number');
    const modalTitle = document.getElementById('modal-value-title');
    const modalDesc = document.getElementById('modal-value-desc');
    const modalHighlights = document.getElementById('modal-value-highlights');
    
    if (modalImage) modalImage.src = value.imagePath;
    if (modalNumber) modalNumber.textContent = value.number;
    if (modalTitle) modalTitle.textContent = value.title;
    if (modalDesc) modalDesc.textContent = value.fullDesc;
    if (modalHighlights) {
        modalHighlights.innerHTML = value.highlights.map(h => `<li>${h}</li>`).join('');
    }
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

function closeValueModal() {
    const modal = document.getElementById('value-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }
}

// What We Do Section Functions
function initializeWhatWeDoSection() {
    const container = document.getElementById('whatwedo-list');
    if (!container) return;
    
    // Load saved filters
    const savedCategory = localStorage.getItem('jpcs-whatwedo-about-category') || 'All';
    const savedSearch = localStorage.getItem('jpcs-whatwedo-about-search') || '';
    
    const categorySelect = document.getElementById('whatwedo-category-select');
    const searchInput = document.getElementById('whatwedo-search-input');
    
    if (categorySelect) {
        categorySelect.value = savedCategory;
        categorySelect.addEventListener('change', (e) => {
            const category = e.target.value;
            localStorage.setItem('jpcs-whatwedo-about-category', category);
            renderWhatWeDoActivities(category, searchInput.value);
        });
    }
    
    if (searchInput) {
        searchInput.value = savedSearch;
        searchInput.addEventListener('input', (e) => {
            const search = e.target.value;
            localStorage.setItem('jpcs-whatwedo-about-search', search);
            renderWhatWeDoActivities(categorySelect.value, search);
        });
    }
    
    // Initial render
    renderWhatWeDoActivities(savedCategory, savedSearch);
}

function renderWhatWeDoActivities(category = 'All', search = '') {
    const container = document.getElementById('whatwedo-list');
    const noResults = document.getElementById('whatwedo-no-results');
    if (!container) return;
    
    // Filter activities
    let filteredActivities = [...whatWeDoActivitiesData];
    
    if (category !== 'All') {
        filteredActivities = filteredActivities.filter(activity => 
            activity.category === category
        );
    }
    
    if (search.trim()) {
        const searchLower = search.toLowerCase();
        filteredActivities = filteredActivities.filter(activity => 
            activity.title.toLowerCase().includes(searchLower) ||
            activity.shortDesc.toLowerCase().includes(searchLower)
        );
    }
    
    // Display results
    if (filteredActivities.length === 0) {
        container.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
    } else {
        container.style.display = 'block';
        if (noResults) noResults.style.display = 'none';
        
        container.innerHTML = filteredActivities.map(activity => `
            <div class="whatwedo-item media-card">
                <div class="whatwedo-item-image-wrapper">
                    <img src="${activity.imagePath}" alt="${activity.title}" class="whatwedo-item-image" loading="lazy">
                </div>
                <div class="whatwedo-item-content">
                    <div class="whatwedo-item-tags">
                        ${activity.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <h3 class="whatwedo-item-title">${activity.title}</h3>
                    <p class="whatwedo-item-desc">${activity.shortDesc}</p>
                    <button class="whatwedo-view-details" data-id="${activity.id}" aria-label="View details for ${activity.title}">
                        View Details
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        container.querySelectorAll('.whatwedo-view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const activityId = parseInt(btn.dataset.id);
                openActivityModal(activityId);
            });
        });
    }
}

function openActivityModal(activityId) {
    const activity = whatWeDoActivitiesData.find(a => a.id === activityId);
    if (!activity) return;
    
    lastFocusedElement = document.activeElement;
    
    const modal = document.getElementById('activity-modal');
    const modalImage = document.getElementById('modal-activity-image');
    const modalTitle = document.getElementById('modal-activity-title');
    const modalDesc = document.getElementById('modal-activity-desc');
    const modalHighlights = document.getElementById('modal-activity-highlights');
    const modalTags = document.getElementById('modal-activity-tags');
    
    if (modalImage) modalImage.src = activity.imagePath;
    if (modalTitle) modalTitle.textContent = activity.title;
    if (modalDesc) modalDesc.textContent = activity.fullDesc;
    if (modalHighlights) {
        modalHighlights.innerHTML = activity.highlights.map(h => `<li>${h}</li>`).join('');
    }
    if (modalTags) {
        modalTags.innerHTML = activity.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

function closeActivityModal() {
    const modal = document.getElementById('activity-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }
}

// Mission/Vision Modal Functions
function openMissionModal() {
    lastFocusedElement = document.activeElement;
    const modal = document.getElementById('mission-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

function closeMissionModal() {
    const modal = document.getElementById('mission-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }
}

function openVisionModal() {
    lastFocusedElement = document.activeElement;
    const modal = document.getElementById('vision-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

function closeVisionModal() {
    const modal = document.getElementById('vision-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }
}

// Modal Handlers
function initializeModalHandlers() {
    // ESC key handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeValueModal();
            closeActivityModal();
            closeMissionModal();
            closeVisionModal();
        }
    });
    
    // Click outside to close
    const modals = ['value-modal', 'activity-modal', 'mission-modal', 'vision-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    if (modalId === 'value-modal') closeValueModal();
                    else if (modalId === 'activity-modal') closeActivityModal();
                    else if (modalId === 'mission-modal') closeMissionModal();
                    else if (modalId === 'vision-modal') closeVisionModal();
                }
            });
        }
    });
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAboutPage);
} else {
    initializeAboutPage();
}
