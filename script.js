const projectData = {
    live1: {
        title: "DeadNet",
        tags: ["Gemini API", "SocketIO", "MongoDB", "Cloudinary"],
        description: "Dead Net is an educational game where players must distinguish between human and AI chat bots. The aim of this game is to learn the difference between human and AI behaviour, so that it can help you detect AI-generated content in your daily life.",
        features: "User authentication and profiles, Encrypted user data, Leaderboard of winrates, Real-time chatroom with others, AI API calls to produce game content, Responsive design for mobile and desktop",
        technical: "Built with React for the frontend and Node.js/Express for the backend. Uses MongoDB for data storage with Mongoose ODM. Implements JWT authentication and bcrypt for password hashing. Integrated with Stripe API for payment processing. Deployed on AWS with CloudFront CDN for optimal performance.",
        isLive: true,
        liveUrl: "https://example.com"
    },
    live2: {
        title: "Design System",
        tags: ["React", "Storybook", "CSS", "TypeScript"],
        description: "An open-source design system and component library that provides a consistent, accessible foundation for web applications. Features comprehensive documentation, live examples, and easy integration with popular frameworks.",
        features: "50+ customizable React components, Comprehensive accessibility support (WCAG 2.1 AA), Dark mode and theming support, Interactive Storybook documentation, Full TypeScript support, Responsive components for all screen sizes, Regular updates and community contributions",
        technical: "Built with React 18 and TypeScript for type safety. Styled using CSS-in-JS with emotion. Uses Storybook for component documentation and testing. Includes automated accessibility testing with axe-core. Distributed via npm with semantic versioning. CI/CD pipeline with GitHub Actions.",
        isLive: true,
        liveUrl: "https://example.com/design-system"
    },
    showcase1: {
        title: "Enterprise Dashboard",
        tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
        description: "A comprehensive analytics dashboard developed for a Fortune 500 company to visualize complex business metrics and KPIs. This private project features real-time data processing, interactive charts, and customizable reports. Due to NDA restrictions, the live application cannot be shared publicly.",
        features: "Real-time data visualization with D3.js, Customizable dashboard layouts, Advanced filtering and data export, Role-based access control, Automated report generation, Integration with multiple data sources, Performance monitoring and alerts",
        technical: "Frontend built with Vue.js 3 and Composition API. Backend powered by Python with FastAPI framework. Uses PostgreSQL for data storage with Redis for caching. Implements WebSocket connections for real-time updates. Containerized with Docker and orchestrated with Kubernetes.",
        isLive: false
    },
    showcase2: {
        title: "Mobile Banking App",
        tags: ["React Native", "TypeScript", "AWS", "Biometric Auth"],
        description: "A secure mobile banking application for iOS and Android that allows users to manage accounts, transfer money, pay bills, and deposit checks. Features biometric authentication and end-to-end encryption. This project is under NDA and cannot be publicly released.",
        features: "Biometric authentication (Face ID/Touch ID), Account management and transaction history, Instant money transfers between accounts, Bill payment and scheduling, Mobile check deposit, Push notifications for transactions, Budgeting and spending insights",
        technical: "Developed with React Native for cross-platform compatibility. Backend built on AWS with Lambda, API Gateway, and DynamoDB. Implements AES-256 encryption for sensitive data. Uses AWS Cognito for authentication with MFA support. Integrated with Plaid API for bank connections. Follows PCI DSS compliance standards.",
        isLive: false
    }
};

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
    });
});

function openModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalFeatures').textContent = project.features;
    document.getElementById('modalTechnical').textContent = project.technical;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    const liveSection = document.getElementById('liveSection');
    const mediaSection = document.getElementById('mediaSection');

    if (project.isLive) {
        liveSection.style.display = 'block';
        liveSection.querySelector('a').href = project.liveUrl;
        mediaSection.style.display = 'none';
    } else {
        liveSection.style.display = 'none';
        mediaSection.style.display = 'block';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('projectModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});