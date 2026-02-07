// Events Data - At least 8 events across multiple categories
const eventsData = [
    {
        id: 1,
        title: "Web Development Bootcamp 2026",
        category: "Workshop",
        date: "2026-03-15",
        time: "9:00 AM - 5:00 PM",
        location: "Computer Lab A, Building 3",
        icon: "💻",
        imageId: 180,
        description: "Intensive hands-on workshop covering modern web development technologies including HTML5, CSS3, JavaScript ES6+, and responsive design principles. Perfect for beginners and intermediate learners looking to build real-world web applications.",
        agenda: [
            "Introduction to Modern Web Development",
            "HTML5 Semantic Markup and Accessibility",
            "CSS3 Layouts: Flexbox and Grid",
            "JavaScript Fundamentals and DOM Manipulation",
            "Building a Responsive Portfolio Website",
            "Deployment and Best Practices"
        ],
        target: "Students with basic programming knowledge who want to learn web development. No prior web development experience required."
    },
    {
        id: 2,
        title: "AI and Machine Learning Summit",
        category: "Seminar",
        date: "2026-02-20",
        time: "2:00 PM - 6:00 PM",
        location: "University Auditorium",
        icon: "🤖",
        imageId: 1,
        description: "Join industry experts as they dive deep into the world of Artificial Intelligence and Machine Learning. Learn about the latest trends, applications, and career opportunities in AI. Features keynote speeches, panel discussions, and networking sessions.",
        agenda: [
            "Keynote: The Future of AI in Southeast Asia",
            "Panel Discussion: Ethics in AI Development",
            "Workshop: Getting Started with TensorFlow",
            "Industry Talks: AI Career Paths",
            "Networking Session with Tech Leaders",
            "Q&A with AI Researchers"
        ],
        target: "All students interested in AI/ML, from beginners to advanced. Great opportunity to network with professionals and learn about career paths in artificial intelligence."
    },
    {
        id: 3,
        title: "JPCS Annual Hackathon 2026",
        category: "Competition",
        date: "2026-04-10",
        time: "8:00 AM - 8:00 PM",
        location: "Innovation Hub, Main Campus",
        icon: "🏆",
        imageId: 326,
        description: "Our biggest event of the year! Teams of 3-5 students compete to build innovative solutions to real-world problems. Amazing prizes worth over ₱100,000 to be won. Sponsored by top tech companies. Free food, swag, and mentorship from industry professionals throughout the event.",
        agenda: [
            "Opening Ceremony and Problem Statement Reveal",
            "Team Formation and Brainstorming",
            "Development Phase (8 hours)",
            "Mentor Check-ins and Support Sessions",
            "Lunch and Networking Break",
            "Final Presentations and Demos",
            "Judging and Deliberation",
            "Awards Ceremony and Closing"
        ],
        target: "Teams of 3-5 students from any year level and program. All skill levels welcome. Great opportunity for networking and winning prizes!"
    },
    {
        id: 4,
        title: "Cybersecurity Workshop: Ethical Hacking 101",
        category: "Workshop",
        date: "2026-02-28",
        time: "1:00 PM - 5:00 PM",
        location: "IT Security Lab, Building 5",
        icon: "🔒",
        imageId: 60,
        description: "Learn the fundamentals of ethical hacking and cybersecurity from certified security professionals. Hands-on exercises include network scanning, vulnerability assessment, and defensive strategies. Understand how to protect systems and networks from cyber threats.",
        agenda: [
            "Introduction to Cybersecurity Landscape",
            "Common Vulnerabilities and Attack Vectors",
            "Hands-on: Network Scanning with Nmap",
            "Web Application Security Testing",
            "Defensive Security Strategies",
            "Career Paths in Cybersecurity"
        ],
        target: "Students interested in cybersecurity and information security. Basic networking knowledge helpful but not required."
    },
    {
        id: 5,
        title: "Tech Career Fair 2026",
        category: "Community",
        date: "2026-03-25",
        time: "10:00 AM - 4:00 PM",
        location: "University Gymnasium",
        icon: "💼",
        imageId: 188,
        description: "Meet representatives from leading tech companies and startups. Explore internship and job opportunities, submit your resume, and participate in on-the-spot interviews. Companies attending include major tech firms, startups, and government agencies. Bring multiple copies of your resume!",
        agenda: [
            "Opening Remarks from University & Industry Partners",
            "Company Booth Exhibitions",
            "Resume Reviews and Career Counseling",
            "On-the-spot Interviews",
            "Panel: Breaking Into the Tech Industry",
            "Networking Lunch with Company Representatives"
        ],
        target: "All students, especially 3rd and 4th year students seeking internships and job opportunities. Open to all programs."
    },
    {
        id: 6,
        title: "JPCS Welcome Night: Meet & Greet",
        category: "Social",
        date: "2026-02-14",
        time: "6:00 PM - 9:00 PM",
        location: "Student Center Rooftop",
        icon: "🎉",
        imageId: 169,
        description: "Start the semester right! Join us for an evening of fun, food, and friendship. Meet fellow members, officers, and make new friends. Features games, prizes, free food, and entertainment. Perfect opportunity for new members to get to know the JPCS community in a relaxed setting.",
        agenda: [
            "Welcome Speech by JPCS President",
            "Ice Breaker Games and Activities",
            "Dinner and Refreshments",
            "Team Building Activities",
            "Organization Overview and Upcoming Events",
            "Free Time and Networking",
            "Raffle Draw and Prizes",
            "Photo Opportunities"
        ],
        target: "All JPCS members, both new and returning. Great for freshmen and anyone who wants to be part of our community. No technical knowledge required!"
    },
    {
        id: 7,
        title: "Mobile App Development with Flutter",
        category: "Workshop",
        date: "2026-04-05",
        time: "9:00 AM - 4:00 PM",
        location: "Computer Lab B, Building 3",
        icon: "📱",
        imageId: 160,
        description: "Build your first cross-platform mobile application using Flutter and Dart. Learn how to create beautiful, native applications for iOS and Android from a single codebase. By the end of this workshop, you'll have published your own app!",
        agenda: [
            "Introduction to Flutter and Dart",
            "Setting Up Your Development Environment",
            "Flutter Widgets and UI Components",
            "State Management Basics",
            "Working with APIs and Data",
            "Building a Complete Todo App",
            "Testing and Debugging",
            "Publishing to App Stores"
        ],
        target: "Students with programming experience who want to learn mobile development. Familiarity with object-oriented programming recommended."
    },
    {
        id: 8,
        title: "Code & Coffee: Casual Coding Session",
        category: "Social",
        date: "2026-02-22",
        time: "3:00 PM - 6:00 PM",
        location: "Campus Café, 2nd Floor",
        icon: "☕",
        imageId: 429,
        description: "Casual coding session where members work on personal projects, homework, or learn new technologies together. Bring your laptop and join us for coffee, snacks, and coding. Perfect for getting help with projects or just studying with like-minded peers in a relaxed environment.",
        agenda: [
            "Arrival and Setup",
            "Personal Project Work Time",
            "Peer Programming Sessions",
            "Tech Discussions and Knowledge Sharing",
            "Mini Lightning Talks (optional)",
            "Continued Coding and Networking"
        ],
        target: "All members welcome! Whether you're working on assignments, personal projects, or just want to hang out with fellow coders."
    },
    {
        id: 9,
        title: "Data Science & Analytics Workshop",
        category: "Workshop",
        date: "2026-03-08",
        time: "1:00 PM - 6:00 PM",
        location: "Data Lab, Building 4",
        icon: "📊",
        imageId: 390,
        description: "Dive into the world of data science! Learn Python for data analysis, data visualization techniques, and basic machine learning concepts. Work with real datasets and discover insights through hands-on exercises using Pandas, NumPy, and Matplotlib.",
        agenda: [
            "Introduction to Data Science",
            "Python for Data Analysis: Pandas & NumPy",
            "Data Cleaning and Preprocessing",
            "Data Visualization with Matplotlib & Seaborn",
            "Introduction to Machine Learning Concepts",
            "Hands-on Project: Analyzing Real-World Data"
        ],
        target: "Students with basic Python knowledge interested in data science and analytics. Perfect for those considering data-related careers."
    },
    {
        id: 10,
        title: "Tech Talk: Cloud Computing & AWS",
        category: "Seminar",
        date: "2026-04-18",
        time: "2:00 PM - 5:00 PM",
        location: "Conference Room, Admin Building",
        icon: "☁️",
        imageId: 360,
        description: "Learn about cloud computing fundamentals and Amazon Web Services (AWS) from certified cloud architects. Discover how companies use cloud infrastructure, explore career opportunities, and get insights into AWS certifications that can boost your career.",
        agenda: [
            "Introduction to Cloud Computing",
            "AWS Services Overview",
            "Cloud Architecture Best Practices",
            "Hands-on Demo: Deploying a Web App to AWS",
            "Career Paths in Cloud Engineering",
            "Getting AWS Certified: Tips and Resources"
        ],
        target: "Students interested in cloud computing, DevOps, and infrastructure. No prior cloud experience required."
    },
    {
        id: 11,
        title: "Community Outreach: Digital Literacy Program",
        category: "Community",
        date: "2026-03-30",
        time: "8:00 AM - 12:00 PM",
        location: "Local Community Center, Nearby Barangay",
        icon: "🤝",
        imageId: 244,
        description: "Give back to the community! Volunteer to teach basic computer skills and digital literacy to underprivileged students and senior citizens. Help bridge the digital divide by sharing your knowledge and making technology accessible to everyone.",
        agenda: [
            "Volunteer Briefing and Team Assignments",
            "Travel to Community Center",
            "Session 1: Basic Computer Operations",
            "Session 2: Internet Safety and Email Basics",
            "Session 3: Social Media and Communication Tools",
            "Wrap-up and Community Interaction",
            "Return to Campus and Debrief"
        ],
        target: "All members who want to make a difference in the community. No teaching experience necessary - training provided!"
    },
    {
        id: 12,
        title: "Game Development Jam",
        category: "Competition",
        date: "2026-05-02",
        time: "9:00 AM - 9:00 PM",
        location: "Multimedia Lab, Building 6",
        icon: "🎮",
        imageId: 442,
        description: "Create a game in just 12 hours! Form teams and build a game based on a surprise theme revealed at the start. Use any game engine (Unity, Unreal, Godot, or web-based). Prizes for best game, best art, and most innovative gameplay. Fun, fast-paced, and creative!",
        agenda: [
            "Opening and Theme Reveal",
            "Team Formation and Brainstorming",
            "Development Sprint (10 hours)",
            "Lunch and Snack Breaks",
            "Check-in Sessions with Mentors",
            "Final Testing and Polish",
            "Game Presentations and Demos",
            "Judging and Awards Ceremony"
        ],
        target: "Students interested in game development, programming, art, or design. All skill levels welcome. Teams of 2-4 recommended."
    }
];

// Officers/Members Data - At least 10 officers with roles
const officersData = [
    {
        id: 1,
        name: "Maria Santos",
        position: "President",
        team: "Executive Board",
        avatar: "👩‍💼",
        avatarUrl: "https://i.pravatar.cc/300?img=47",
        bio: "Computer Science senior passionate about leading JPCS to new heights. Experienced in full-stack development and has interned at major tech companies. Believes in empowering students through technology and community building.",
        skills: ["Leadership", "Full-Stack Development", "Project Management", "Public Speaking", "React", "Node.js"],
        email: "maria.santos@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/mariasantos",
            github: "github.com/mariasantos",
            twitter: "@maria_codes"
        }
    },
    {
        id: 2,
        name: "Juan Dela Cruz",
        position: "Vice President",
        team: "Executive Board",
        avatar: "👨‍💼",
        avatarUrl: "https://i.pravatar.cc/300?img=12",
        bio: "IT senior with a passion for artificial intelligence and machine learning. Leads special projects and event coordination for JPCS. Previously won multiple hackathons and actively mentors junior members.",
        skills: ["AI/ML", "Python", "Data Science", "Event Management", "TensorFlow", "Leadership"],
        email: "juan.delacruz@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/juandelacruz",
            github: "github.com/juandc",
            twitter: "@juan_ai"
        }
    },
    {
        id: 3,
        name: "Sarah Reyes",
        position: "Secretary",
        team: "Executive Board",
        avatar: "👩‍💻",
        avatarUrl: "https://i.pravatar.cc/300?img=44",
        bio: "Information Systems student with excellent organizational and communication skills. Manages JPCS documentation, communication channels, and member records. Interested in business analysis and software project management.",
        skills: ["Documentation", "Communication", "MS Office", "Project Coordination", "Business Analysis"],
        email: "sarah.reyes@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/sarahreyes",
            github: "github.com/sarahreyes"
        }
    },
    {
        id: 4,
        name: "Miguel Torres",
        position: "Treasurer",
        team: "Executive Board",
        avatar: "👨‍💼",
        avatarUrl: "https://i.pravatar.cc/300?img=33",
        bio: "Computer Engineering student managing JPCS finances and budgets. Detail-oriented with experience in financial planning and resource allocation. Also skilled in embedded systems and IoT development.",
        skills: ["Financial Management", "Budget Planning", "Excel", "Embedded Systems", "C++", "Arduino"],
        email: "miguel.torres@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/migueltorres",
            github: "github.com/miguelt"
        }
    },
    {
        id: 5,
        name: "Angelica Cruz",
        position: "Technical Lead",
        team: "Technical Team",
        avatar: "👩‍🔬",
        avatarUrl: "https://i.pravatar.cc/300?img=48",
        bio: "CS senior and full-stack developer leading JPCS technical initiatives and workshop development. Specializes in modern JavaScript frameworks and cloud technologies. Passionate about teaching others to code.",
        skills: ["Full-Stack Development", "JavaScript", "React", "AWS", "Docker", "Teaching", "Git"],
        email: "angelica.cruz@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/angelicacruz",
            github: "github.com/angelicacruz",
            twitter: "@angelica_dev"
        }
    },
    {
        id: 6,
        name: "Paolo Garcia",
        position: "Cybersecurity Officer",
        team: "Technical Team",
        avatar: "👨‍🔒",
        avatarUrl: "https://i.pravatar.cc/300?img=15",
        bio: "IT Security enthusiast and certified ethical hacker. Organizes cybersecurity workshops and CTF competitions. Active in bug bounty programs and passionate about protecting digital infrastructure.",
        skills: ["Cybersecurity", "Ethical Hacking", "Network Security", "Penetration Testing", "Python", "Linux"],
        email: "paolo.garcia@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/paologarcia",
            github: "github.com/paolo_sec",
            twitter: "@paolo_hacks"
        }
    },
    {
        id: 7,
        name: "Kaye Martinez",
        position: "Events Director",
        team: "Events Team",
        avatar: "👩‍🎤",
        avatarUrl: "https://i.pravatar.cc/300?img=45",
        bio: "Events management specialist with a knack for creating memorable experiences. Coordinates JPCS workshops, seminars, and social events. Ensures every event runs smoothly and exceeds expectations.",
        skills: ["Event Planning", "Project Management", "Coordination", "Public Relations", "Marketing"],
        email: "kaye.martinez@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/kayemartinez",
            instagram: "@kaye_events"
        }
    },
    {
        id: 8,
        name: "David Lim",
        position: "Workshop Coordinator",
        team: "Events Team",
        avatar: "👨‍🏫",
        avatarUrl: "https://i.pravatar.cc/300?img=59",
        bio: "Computer Science junior who loves teaching and creating engaging learning experiences. Develops workshop content and coordinates with speakers. Experienced in web and mobile development.",
        skills: ["Teaching", "Workshop Development", "Mobile Development", "Flutter", "React Native", "Curriculum Design"],
        email: "david.lim@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/davidlim",
            github: "github.com/davidlim"
        }
    },
    {
        id: 9,
        name: "Isabella Ramos",
        position: "Marketing Head",
        team: "Marketing Team",
        avatar: "👩‍🎨",
        avatarUrl: "https://i.pravatar.cc/300?img=43",
        bio: "Creative mind behind JPCS branding and social media presence. Designs promotional materials, manages social media accounts, and creates content that resonates with the tech community.",
        skills: ["Graphic Design", "Social Media Marketing", "Content Creation", "Adobe Creative Suite", "Photography"],
        email: "isabella.ramos@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/isabellaramos",
            instagram: "@bella_designs",
            behance: "behance.net/isabellaramos"
        }
    },
    {
        id: 10,
        name: "Carlos Mendoza",
        position: "Community Relations Officer",
        team: "Marketing Team",
        avatar: "👨‍🤝",
        avatarUrl: "https://i.pravatar.cc/300?img=68",
        bio: "Bridges the gap between JPCS and external communities. Coordinates outreach programs, partnerships with other organizations, and industry collaborations. Believes in using technology for social good.",
        skills: ["Community Outreach", "Partnership Development", "Networking", "Communication", "Social Impact"],
        email: "carlos.mendoza@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/carlosmendoza",
            twitter: "@carlos_connects"
        }
    },
    {
        id: 11,
        name: "Sofia Aquino",
        position: "Data Science Lead",
        team: "Technical Team",
        avatar: "👩‍🔬",
        avatarUrl: "https://i.pravatar.cc/300?img=49",
        bio: "Data enthusiast analyzing trends and deriving insights for JPCS decision-making. Organizes data science workshops and competitions. Experienced in Python, R, and various data visualization tools.",
        skills: ["Data Science", "Python", "R", "Machine Learning", "Data Visualization", "Statistics"],
        email: "sofia.aquino@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/sofiaaquino",
            github: "github.com/sofia_data",
            kaggle: "kaggle.com/sofiaaquino"
        }
    },
    {
        id: 12,
        name: "Rafael Bautista",
        position: "Web Development Officer",
        team: "Technical Team",
        avatar: "👨‍💻",
        avatarUrl: "https://i.pravatar.cc/300?img=14",
        bio: "Front-end wizard responsible for JPCS website and web-based projects. Passionate about creating beautiful, accessible, and performant web experiences. Mentors members in modern web technologies.",
        skills: ["Front-End Development", "JavaScript", "React", "CSS", "UI/UX", "Web Performance"],
        email: "rafael.bautista@jpcs.org",
        socials: {
            linkedin: "linkedin.com/in/rafaelbautista",
            github: "github.com/rafael_web",
            codepen: "codepen.io/rafaelbautista"
        }
    }
];

// Helper function to get upcoming events (for home page)
function getUpcomingEvents(limit = 3) {
    const today = new Date();
    return eventsData
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, limit);
}

// Helper function to check if event is upcoming or past
function isUpcoming(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(dateString);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
}

// Helper function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
