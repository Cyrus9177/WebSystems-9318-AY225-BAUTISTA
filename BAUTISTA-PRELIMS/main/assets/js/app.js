// ========================================
// JPCS Website JavaScript
// All interactive functionality
// ========================================

// ============ UTILITY FUNCTIONS ============
// Avatar fallback handler - creates initials circle if image fails to load
function handleAvatarError(img, initials) {
    // Create a container for initials fallback
    const wrapper = img.parentElement;
    const fallback = document.createElement('div');
    fallback.className = 'officer-avatar-fallback';
    fallback.textContent = initials;
    fallback.setAttribute('aria-label', `Avatar placeholder with initials ${initials}`);
    
    // Replace the image with the fallback
    wrapper.replaceChild(fallback, img);
}

// ============ NAVIGATION ============
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCurrentPage();
    initializeHomePreview();
    initializeEventsPage();
    initializeOfficersPage();
    initializeMembershipForm();
    initializeModals();
});

// Mobile Navigation Toggle
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// Set active navigation link based on current page
function initializeCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============ HOME PAGE - EVENT PREVIEW ============
function initializeHomePreview() {
    const eventsContainer = document.getElementById('home-events-container');
    if (!eventsContainer) return;
    
    const upcomingEvents = getUpcomingEvents(3);
    
    if (upcomingEvents.length === 0) {
        eventsContainer.innerHTML = '<p class="no-results">No upcoming events at the moment.</p>';
        return;
    }
    
    eventsContainer.innerHTML = upcomingEvents.map(event => createEventCardHTML(event)).join('');
    
    // Add click handlers for preview cards
    eventsContainer.querySelectorAll('.event-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openEventModal(upcomingEvents[index]);
        });
    });
}

// ============ EVENTS PAGE ============
function initializeEventsPage() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;
    
    // Load saved filters from LocalStorage
    const savedFilters = localStorage.getItem('jpcs-event-filters');
    let currentFilters = savedFilters ? JSON.parse(savedFilters) : {
        category: 'all',
        time: 'all'
    };
    
    // Set initial active buttons based on saved filters
    const categoryButtons = document.querySelectorAll('#category-filter .filter-btn');
    categoryButtons.forEach(btn => {
        if (btn.dataset.category === currentFilters.category) {
            btn.classList.add('active');
        }
    });
    
    const timeButtons = document.querySelectorAll('#time-filter .filter-btn');
    timeButtons.forEach(btn => {
        if (btn.dataset.time === currentFilters.time) {
            btn.classList.add('active');
        }
    });
    
    // Render events with saved filters
    renderEvents(currentFilters);
    
    // Category filter buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.category = btn.dataset.category;
            localStorage.setItem('jpcs-event-filters', JSON.stringify(currentFilters));
            renderEvents(currentFilters);
        });
    });
    
    // Time filter buttons
    timeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.time = btn.dataset.time;
            localStorage.setItem('jpcs-event-filters', JSON.stringify(currentFilters));
            renderEvents(currentFilters);
        });
    });
}

function renderEvents(filters) {
    const eventsGrid = document.getElementById('events-grid');
    const noResults = document.getElementById('no-events');
    
    let filteredEvents = [...eventsData];
    
    // Filter by category
    if (filters.category !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.category === filters.category);
    }
    
    // Filter by time
    if (filters.time === 'upcoming') {
        filteredEvents = filteredEvents.filter(event => isUpcoming(event.date));
    } else if (filters.time === 'past') {
        filteredEvents = filteredEvents.filter(event => !isUpcoming(event.date));
    }
    
    // Sort by date
    filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Display results
    if (filteredEvents.length === 0) {
        eventsGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        eventsGrid.style.display = 'grid';
        noResults.style.display = 'none';
        eventsGrid.innerHTML = filteredEvents.map(event => createEventCardHTML(event)).join('');
        
        // Add click handlers
        eventsGrid.querySelectorAll('.event-card').forEach((card, index) => {
            card.addEventListener('click', () => {
                openEventModal(filteredEvents[index]);
            });
        });
    }
}

function createEventCardHTML(event) {
    const upcoming = isUpcoming(event.date);
    const statusClass = upcoming ? 'upcoming' : 'past';
    const statusText = upcoming ? 'Upcoming' : 'Past Event';
    
    // Fallback gradient if image fails to load
    const fallbackGradient = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
    
    return `
        <div class="event-card" data-event-id="${event.id}">
            <div class="event-card-header" style="background: ${fallbackGradient};">
                ${event.imageId ? `<img src="https://picsum.photos/id/${event.imageId}/800/450" alt="${event.title}" class="event-card-image" loading="lazy" onerror="this.style.display='none'; this.parentElement.style.background='${fallbackGradient}';">` : ''}
                <div class="event-card-overlay"></div>

                <div>
                    <span class="event-badge">${event.category}</span>
                </div>
            </div>
            <div class="event-card-body">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <span>📅</span>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="event-meta-item">
                        <span>⏰</span>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-meta-item">
                        <span>📍</span>
                        <span>${event.location}</span>
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
            </div>
        </div>
    `;
}

// ============ EVENT MODAL ============
function openEventModal(event) {
    const modal = document.getElementById('event-modal');
    if (!modal) return;
    
    const upcoming = isUpcoming(event.date);
    const statusClass = upcoming ? 'upcoming' : 'past';
    const statusText = upcoming ? 'Upcoming' : 'Past Event';
    
    // Populate modal content
    document.getElementById('event-modal-icon').textContent = event.icon;
    document.getElementById('event-modal-category').textContent = event.category;
    document.getElementById('event-modal-category').className = `event-badge`;
    
    const statusBadge = document.getElementById('event-modal-status');
    statusBadge.textContent = statusText;
    statusBadge.className = `event-status-badge ${statusClass}`;
    
    document.getElementById('event-modal-title').textContent = event.title;
    document.getElementById('event-modal-datetime').textContent = `${formatDate(event.date)} • ${event.time}`;
    document.getElementById('event-modal-location').textContent = event.location;
    document.getElementById('event-modal-description').textContent = event.description;
    document.getElementById('event-modal-target').textContent = event.target;
    
    // Populate agenda
    const agendaList = document.getElementById('event-modal-agenda');
    agendaList.innerHTML = event.agenda.map(item => `<li>${item}</li>`).join('');
    
    // Update register button
    const registerBtn = document.getElementById('event-register-btn');
    if (upcoming) {
        registerBtn.textContent = 'Register Now';
        registerBtn.onclick = () => {
            alert(`Registration for "${event.title}" will redirect you to the registration page. Feature coming soon!`);
        };
    } else {
        registerBtn.textContent = 'View Photos';
        registerBtn.onclick = () => {
            alert(`Photo gallery for "${event.title}" coming soon!`);
        };
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.focus();
}

// ============ OFFICERS PAGE ============
// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function initializeOfficersPage() {
    const officersGrid = document.getElementById('officers-grid');
    if (!officersGrid) return;
    
    const searchInput = document.getElementById('officer-search');
    const roleFilter = document.getElementById('role-filter');
    const clearBtn = document.getElementById('clear-filters');
    
    // Initial render
    renderOfficers('', 'all');
    
    // Create debounced search function (200ms delay)
    const debouncedSearch = debounce((searchValue, roleValue) => {
        renderOfficers(searchValue, roleValue);
    }, 200);
    
    // Search functionality with debounce
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value, roleFilter.value);
            updateActiveFilters(e.target.value, roleFilter.value);
        });
    }
    
    // Role filter
    if (roleFilter) {
        roleFilter.addEventListener('change', (e) => {
            renderOfficers(searchInput.value, e.target.value);
            updateActiveFilters(searchInput.value, e.target.value);
        });
    }
    
    // Clear filters button
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            roleFilter.value = 'all';
            renderOfficers('', 'all');
            updateActiveFilters('', 'all');
        });
    }
}

function updateActiveFilters(searchQuery, roleFilter) {
    const activeFiltersContainer = document.getElementById('active-filters');
    if (!activeFiltersContainer) return;
    
    const filters = [];
    
    // Add search filter chip
    if (searchQuery && searchQuery.trim()) {
        filters.push({
            type: 'search',
            label: `Search: "${searchQuery}"`,
            value: searchQuery
        });
    }
    
    // Add role filter chip
    if (roleFilter !== 'all') {
        const roleLabels = {
            'executive': 'Executive Board',
            'technical': 'Technical Team',
            'events': 'Events Team',
            'marketing': 'Marketing Team'
        };
        filters.push({
            type: 'role',
            label: `Role: ${roleLabels[roleFilter]}`,
            value: roleFilter
        });
    }
    
    // Render filter chips
    if (filters.length > 0) {
        activeFiltersContainer.innerHTML = filters.map(filter => `
            <div class="filter-chip">
                <span>${filter.label}</span>
                <button 
                    onclick="removeFilter('${filter.type}')" 
                    aria-label="Remove ${filter.label} filter"
                    type="button"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        `).join('');
    } else {
        activeFiltersContainer.innerHTML = '';
    }
}

// Global function to remove individual filters
function removeFilter(type) {
    const searchInput = document.getElementById('officer-search');
    const roleFilter = document.getElementById('role-filter');
    
    if (type === 'search') {
        searchInput.value = '';
    } else if (type === 'role') {
        roleFilter.value = 'all';
    }
    
    renderOfficers(searchInput.value, roleFilter.value);
    updateActiveFilters(searchInput.value, roleFilter.value);
}

function renderOfficers(searchQuery, roleFilter) {
    const officersGrid = document.getElementById('officers-grid');
    const noResults = document.getElementById('no-results');
    
    let filteredOfficers = [...officersData];
    
    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredOfficers = filteredOfficers.filter(officer => 
            officer.name.toLowerCase().includes(query)
        );
    }
    
    // Filter by role
    if (roleFilter !== 'all') {
        const teamMap = {
            'executive': 'Executive Board',
            'technical': 'Technical Team',
            'events': 'Events Team',
            'marketing': 'Marketing Team'
        };
        filteredOfficers = filteredOfficers.filter(officer => 
            officer.team === teamMap[roleFilter]
        );
    }
    
    // Display results
    if (filteredOfficers.length === 0) {
        officersGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        officersGrid.style.display = 'grid';
        noResults.style.display = 'none';
        officersGrid.innerHTML = filteredOfficers.map(officer => createOfficerCardHTML(officer)).join('');
        
        // Add click and keyboard handlers
        officersGrid.querySelectorAll('.officer-card').forEach((card, index) => {
            // Click handler
            card.addEventListener('click', () => {
                openOfficerModal(filteredOfficers[index]);
            });
            
            // Keyboard handler (Enter and Space)
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openOfficerModal(filteredOfficers[index]);
                }
            });
        });
    }
}

function createOfficerCardHTML(officer) {
    const initials = officer.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    return `
        <div class="officer-card" data-officer-id="${officer.id}" tabindex="0" role="button" aria-label="View ${officer.name}'s profile">
            <div class="officer-avatar-wrapper">
                <img 
                    src="${officer.avatarUrl}" 
                    alt="Portrait of ${officer.name}" 
                    class="officer-avatar"
                    width="120"
                    height="120"
                    loading="lazy"
                    onerror="handleAvatarError(this, '${initials}')"
                >
            </div>
            <h3 class="officer-name">${officer.name}</h3>
            <span class="officer-role-badge">${officer.position}</span>
            <p class="officer-team">${officer.team}</p>
        </div>
    `;
}

// ============ OFFICER MODAL ============
function openOfficerModal(officer) {
    const modal = document.getElementById('officer-modal');
    if (!modal) return;
    
    // Populate modal content with image
    const modalAvatarContainer = document.getElementById('modal-avatar');
    const initials = officer.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    modalAvatarContainer.innerHTML = `
        <img 
            src="${officer.avatarUrl}" 
            alt="Portrait of ${officer.name}" 
            class="officer-modal-avatar"
            width="120"
            height="120"
            onerror="handleAvatarError(this, '${initials}')"
        >
    `;
    
    document.getElementById('modal-title').textContent = officer.name;
    document.getElementById('modal-position').textContent = officer.position;
    document.getElementById('modal-team').textContent = officer.team;
    document.getElementById('modal-bio').textContent = officer.bio;
    document.getElementById('modal-email').textContent = officer.email;
    document.getElementById('modal-email').href = `mailto:${officer.email}`;
    
    // Populate skills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = officer.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.focus();
}

// ============ MODAL CONTROLS ============
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Close button
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
        
        // Click outside to close
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => closeModal(modal));
        }
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    });
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============ MEMBERSHIP FORM ============
const STORAGE_KEY = 'jpcs_membership_form';

function initializeMembershipForm() {
    const form = document.getElementById('membership-form');
    if (!form) return;
    
    // Load saved data from LocalStorage
    loadFormData();
    
    // Auto-save form data on input
    const formInputs = form.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('input', saveFormData);
        input.addEventListener('change', saveFormData);
    });
    
    // Form validation on blur
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
    });
    
    // Form submission
    form.addEventListener('submit', handleFormSubmit);
    
    // Clear form button
    const clearBtn = document.getElementById('clear-form-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFormData);
    }
}

function saveFormData() {
    const form = document.getElementById('membership-form');
    const formData = new FormData(form);
    const data = {};
    
    // Save text inputs and selects
    for (let [key, value] of formData.entries()) {
        if (key === 'interests') {
            // Handle multiple checkboxes
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else if (key !== 'terms') {
            // Don't save terms checkbox
            data[key] = value;
        }
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
    
    try {
        const data = JSON.parse(savedData);
        
        // Restore text inputs and selects
        Object.entries(data).forEach(([key, value]) => {
            if (key === 'interests') {
                // Restore checkboxes
                value.forEach(interest => {
                    const checkbox = document.querySelector(`input[name="interests"][value="${interest}"]`);
                    if (checkbox) checkbox.checked = true;
                });
            } else {
                const input = document.querySelector(`[name="${key}"]`);
                if (input) input.value = value;
            }
        });
    } catch (e) {
        console.error('Error loading form data:', e);
    }
}

function clearFormData() {
    if (confirm('Are you sure you want to clear all form data? This will also delete your saved progress.')) {
        localStorage.removeItem(STORAGE_KEY);
        document.getElementById('membership-form').reset();
        // Clear all error messages
        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
        document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
    }
}

function validateField(field) {
    const fieldName = field.name;
    const errorElement = document.getElementById(`${field.id}-error`);
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !field.value.trim() && field.type !== 'checkbox') {
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            errorMessage = 'Please enter a valid email address';
        }
    } else if (fieldName === 'interests') {
        const checkedBoxes = document.querySelectorAll('input[name="interests"]:checked');
        if (checkedBoxes.length === 0) {
            errorMessage = 'Please select at least one area of interest';
        }
    } else if (field.id === 'terms' && field.type === 'checkbox') {
        if (!field.checked) {
            errorMessage = 'You must agree to the terms and conditions';
        }
    }
    
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    if (errorMessage) {
        field.classList.add('error');
        return false;
    } else {
        field.classList.remove('error');
        return true;
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    let isValid = true;
    
    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Validate interests checkboxes
    const interestsError = document.getElementById('interests-error');
    const checkedInterests = form.querySelectorAll('input[name="interests"]:checked');
    if (checkedInterests.length === 0) {
        isValid = false;
        if (interestsError) {
            interestsError.textContent = 'Please select at least one area of interest';
        }
    } else {
        if (interestsError) {
            interestsError.textContent = '';
        }
    }
    
    // Validate terms checkbox
    const termsCheckbox = document.getElementById('terms');
    const termsError = document.getElementById('terms-error');
    if (!termsCheckbox.checked) {
        isValid = false;
        if (termsError) {
            termsError.textContent = 'You must agree to the terms and conditions';
        }
        termsCheckbox.classList.add('error');
    } else {
        if (termsError) {
            termsError.textContent = '';
        }
        termsCheckbox.classList.remove('error');
    }
    
    if (!isValid) {
        // Scroll to first error
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Collect form data
    const formData = new FormData(form);
    const applicationData = {
        fullName: formData.get('fullName'),
        studentId: formData.get('studentId'),
        email: formData.get('email'),
        yearLevel: formData.get('yearLevel'),
        program: formData.get('program'),
        interests: formData.getAll('interests'),
        submittedAt: new Date().toLocaleString()
    };
    
    // Save to LocalStorage (as submitted application)
    const submissions = JSON.parse(localStorage.getItem('jpcs_submissions') || '[]');
    submissions.push(applicationData);
    localStorage.setItem('jpcs_submissions', JSON.stringify(submissions));
    
    // Clear the form progress
    localStorage.removeItem(STORAGE_KEY);
    
    // Show success modal
    showSuccessModal(applicationData);
    
    // Reset form
    form.reset();
}

function showSuccessModal(data) {
    const modal = document.getElementById('success-modal');
    if (!modal) return;
    
    // Populate summary
    const summaryContent = document.getElementById('summary-content');
    summaryContent.innerHTML = `
        <div class="summary-item">
            <span class="summary-label">Name:</span>
            <span class="summary-value">${data.fullName}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Student ID:</span>
            <span class="summary-value">${data.studentId}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Email:</span>
            <span class="summary-value">${data.email}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Year Level:</span>
            <span class="summary-value">${data.yearLevel}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Program:</span>
            <span class="summary-value">${data.program}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Interests:</span>
            <span class="summary-value">${data.interests.join(', ')}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">Submitted:</span>
            <span class="summary-value">${data.submittedAt}</span>
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close button handler
    const closeButton = document.getElementById('close-success-modal');
    if (closeButton) {
        closeButton.addEventListener('click', () => closeModal(modal));
    }
}

// ============ UTILITY FUNCTIONS ============
// These functions are also available from data.js but defined here for completeness

// Initialize on page load
console.log('JPCS Website JavaScript loaded successfully!');
