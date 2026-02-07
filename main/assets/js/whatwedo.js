// What We Do Data Structure
const whatWeDoData = [
    {
        id: 1,
        title: "Workshops & Training",
        category: "Training",
        shortText: "Hands-on learning experiences in cutting-edge technologies like web development, AI, cybersecurity, and more.",
        fullText: "Immerse yourself in comprehensive hands-on training programs designed to build practical skills in the most in-demand technologies. Our workshops cover everything from foundational programming to advanced topics like artificial intelligence, machine learning, and blockchain development.",
        imagePath: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop",
        highlights: [
            "Hands-on coding labs and real-world projects",
            "Expert instructors and industry mentors",
            "Certificates of completion for all workshops",
            "Access to exclusive learning materials and resources",
            "Small group sessions for personalized attention"
        ]
    },
    {
        id: 2,
        title: "Competitions",
        category: "Competitive",
        shortText: "Compete in hackathons, coding challenges, and tech competitions to showcase your skills and win prizes.",
        fullText: "Push your limits and test your skills against the best minds in technology. Join our competitive programming events, hackathons, and innovation challenges where you can win prizes, gain recognition, and build your portfolio with impressive achievements.",
        imagePath: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
        highlights: [
            "24-hour hackathons with exciting themes",
            "Cash prizes and tech gadgets for winners",
            "Mentorship from industry professionals during events",
            "Opportunity to present solutions to industry judges",
            "Team formation support for participants"
        ]
    },
    {
        id: 3,
        title: "Networking",
        category: "Community",
        shortText: "Connect with industry professionals, alumni, and fellow students to build lasting relationships.",
        fullText: "Build meaningful connections that last a lifetime. Our networking events bring together students, alumni, industry leaders, and tech entrepreneurs. Whether you're looking for mentorship, job opportunities, or collaboration partners, JPCS provides the platform to expand your professional network.",
        imagePath: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop",
        highlights: [
            "Meet-and-greet sessions with tech industry leaders",
            "Alumni networking events and mentorship programs",
            "Career fairs with top tech companies",
            "Professional development workshops",
            "Access to exclusive online community platform"
        ]
    },
    {
        id: 4,
        title: "Innovation Projects",
        category: "Competitive",
        shortText: "Collaborate on real-world projects and innovative solutions to community and business challenges.",
        fullText: "Turn your ideas into reality by working on impactful projects that solve real-world problems. Collaborate with passionate teammates to develop innovative solutions for businesses, non-profits, and community organizations while building your portfolio and gaining practical experience.",
        imagePath: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
        highlights: [
            "Work on real client projects with actual impact",
            "Cross-functional team collaboration experience",
            "Agile project management training",
            "Showcase projects at tech exhibitions",
            "Potential to launch startup ventures from projects"
        ]
    },
    {
        id: 5,
        title: "Tech Talks & Seminars",
        category: "Training",
        shortText: "Attend seminars and talks by industry experts on the latest trends and technologies shaping our future.",
        fullText: "Stay ahead of the curve with insights from industry leaders and subject matter experts. Our tech talk series covers emerging technologies, career development, entrepreneurship, and the future of computing. Gain valuable knowledge from those who are shaping the industry.",
        imagePath: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
        highlights: [
            "Speakers from Fortune 500 tech companies",
            "Topics on AI, cloud computing, cybersecurity, and more",
            "Interactive Q&A sessions with speakers",
            "Career advice and industry insights",
            "Recorded sessions available for members"
        ]
    },
    {
        id: 6,
        title: "Community Events",
        category: "Community",
        shortText: "Join social activities, team building events, and community service initiatives that make a difference.",
        fullText: "Technology is better when shared with others. Join our vibrant community through social gatherings, team building activities, and service initiatives. From casual coding sessions over coffee to tech outreach programs in underserved communities, we make a positive impact together.",
        imagePath: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop",
        highlights: [
            "Monthly social gatherings and game nights",
            "Community service and digital literacy programs",
            "Team building retreats and outdoor activities",
            "Cultural celebrations and diversity events",
            "Student-led initiatives and special interest groups"
        ]
    }
];

// Initialize What We Do Section
function initializeWhatWeDo() {
    const container = document.getElementById('whatwedo-grid');
    if (!container) return;

    // Load saved filters from LocalStorage
    const savedCategory = localStorage.getItem('jpcs-whatwedo-category') || 'All';
    const savedSearch = localStorage.getItem('jpcs-whatwedo-search') || '';

    // Set initial filter values
    const categoryFilter = document.getElementById('whatwedo-category');
    const searchInput = document.getElementById('whatwedo-search');
    
    if (categoryFilter) categoryFilter.value = savedCategory;
    if (searchInput) searchInput.value = savedSearch;

    // Render items with saved filters
    renderWhatWeDoItems(savedCategory, savedSearch);

    // Add event listeners
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            const category = e.target.value;
            localStorage.setItem('jpcs-whatwedo-category', category);
            renderWhatWeDoItems(category, searchInput.value);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const search = e.target.value;
            localStorage.setItem('jpcs-whatwedo-search', search);
            renderWhatWeDoItems(categoryFilter.value, search);
        });
    }

    // Close modal on background click
    const modal = document.getElementById('whatwedo-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeWhatWeDoModal();
            }
        });
    }

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeWhatWeDoModal();
        }
    });
}

// Render What We Do items with filters
function renderWhatWeDoItems(category = 'All', search = '') {
    const container = document.getElementById('whatwedo-grid');
    const noResults = document.getElementById('whatwedo-no-results');
    
    if (!container) return;

    // Filter items
    let filteredItems = [...whatWeDoData];

    if (category !== 'All') {
        filteredItems = filteredItems.filter(item => item.category === category);
    }

    if (search.trim()) {
        const searchLower = search.toLowerCase();
        filteredItems = filteredItems.filter(item => 
            item.title.toLowerCase().includes(searchLower) ||
            item.shortText.toLowerCase().includes(searchLower)
        );
    }

    // Display results
    if (filteredItems.length === 0) {
        container.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
    } else {
        container.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        
        container.innerHTML = filteredItems.map(item => `
            <div class="whatwedo-card" data-id="${item.id}">
                <div class="whatwedo-card-image-wrapper">
                    <img src="${item.imagePath}" alt="${item.title}" class="whatwedo-card-image" loading="lazy">
                    <div class="whatwedo-card-overlay"></div>
                    <span class="whatwedo-card-category">${item.category.toUpperCase()}</span>
                    <h3 class="whatwedo-card-title-overlay">${item.title}</h3>
                </div>
                <div class="whatwedo-card-body">
                    <p class="whatwedo-card-description">${item.shortText}</p>
                    <button class="whatwedo-learn-more" data-id="${item.id}" aria-label="Learn more about ${item.title}">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');

        // Add click handlers to Learn More buttons
        container.querySelectorAll('.whatwedo-learn-more').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = parseInt(btn.dataset.id);
                openWhatWeDoModal(itemId);
            });

            // Keyboard support
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const itemId = parseInt(btn.dataset.id);
                    openWhatWeDoModal(itemId);
                }
            });
        });
    }
}

// Open What We Do modal
let lastFocusedElement = null;

function openWhatWeDoModal(itemId) {
    const item = whatWeDoData.find(i => i.id === itemId);
    if (!item) return;

    // Store currently focused element
    lastFocusedElement = document.activeElement;

    const modal = document.getElementById('whatwedo-modal');
    const modalImage = document.getElementById('modal-whatwedo-image');
    const modalCategory = document.getElementById('modal-whatwedo-category');
    const modalTitle = document.getElementById('modal-whatwedo-title');
    const modalFullText = document.getElementById('modal-whatwedo-fulltext');
    const modalHighlights = document.getElementById('modal-whatwedo-highlights');

    if (modalImage) modalImage.src = item.imagePath;
    if (modalCategory) modalCategory.textContent = item.category;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalFullText) modalFullText.textContent = item.fullText;
    
    if (modalHighlights) {
        modalHighlights.innerHTML = item.highlights.map(h => `<li>${h}</li>`).join('');
    }

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus on close button for accessibility
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }
}

// Close What We Do modal
function closeWhatWeDoModal() {
    const modal = document.getElementById('whatwedo-modal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Return focus to the button that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null;
        }
    }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWhatWeDo);
} else {
    initializeWhatWeDo();
}
