const projectData = {
    live1: {
        title: "W-Clinics",
        tags: ["HTML", "Javascript", "Firebase", "Mapbox", "Github"],
        description: "W-clinics is a user-friendly web application designed to help individuals locate nearby walk-in clinics efficiently. Whether someone needs urgent medical attention or simply wants to find the nearest healthcare facility for routine check-ups, W-clinics streamlines the process by providing accurate information about clinics in their vicinity. This was my first ever project that I have hosted online, and does not use an actual database of clinics, but a mock clinic finding app including features that my colleagues and I thought would be necessary for a walk-in clinic web app.",
        features: "User authentication and profiles with medical conditions, Map to navigate to selected clinic, Navigation and filter through clinics via distance, rating and wait time, Leave a review of the specific clinic, Make an appointment.",
        technical: "Built with HTML and vanilla Javascript. Uses Firebase for client data storage. Implements the navigation feature using Mapbox API.",
        isLive: true,
        liveUrl: "https://comp-1800-dtc02.web.app/"
    },
    live2: {
        title: "DeadNet",
        tags: ["Gemini API", "SocketIO", "MongoDB", "Cloudinary"],
        description: "Dead Net is an educational game where players must distinguish between human and AI chat bots. The aim of this game is to learn the difference between human and AI behaviour, so that it can help you detect AI-generated content in your daily life.",
        features: "User authentication and profiles, Encrypted user data, Leaderboard of winrates, Real-time chatroom with others, AI API calls to produce game content, Responsive design for mobile and desktop",
        technical: "Built with React for the frontend and Node.js/Express for the backend. Uses MongoDB for data storage with Mongoose ODM. Implements JWT authentication and bcrypt for password hashing. Integrated with Stripe API for payment processing. Deployed on AWS with CloudFront CDN for optimal performance.",
        isLive: true,
        liveUrl: "https://two800-202410-dtc04.onrender.com/"
    },
    showcase1: {
        title: "PlaceSpeak",
        tags: ["Python", "Flask", "OpenAI API"],
        description: "PlaceSpeak is a digital civic engagement platform that connects residents with local decision-makers to provide legitimate, location-based feedback on issues like city planning, transportation, schools, and parks. PlaceSpeak ensures that only real, relevant voices are heard, helping inform evidence-based policies. The feature my colleagues and I were tasked with was a Flask backend that leverages the OpenAI API to analyze user feedback from the social media posts and generate AI-powered reports with interactive charts and visualizations. We analyzed the sentiment of comments and summarized relevant metrics such as most and created word clouds as per client request.",
        features: "Used in-company API to transform the online post to xml file, and used the output xml file as the input of our API. Created different routes for different types of posts (discussion board and notification board), used ThreadPoolExecutor to concurrently produce summaries and shorten load times, Basic front-end to consume API.",
        technical: "Built backend with Django and Flask framework, Used Cloudinary to store image data of social media posts, Leveraged OpenAI API for data analysis and summary, Built a responsive React-based front end to test/utilize the feature.",
        isLive: false,
        resources: {
            images: [],
            link: "https://www.canva.com/design/DAGm4aSC1_U/KWyOZiPUeOECtmhWzifeTg/edit?utm_content=DAGm4aSC1_U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        }
    },
    showcase2: {
        title: "EdgeSharp",
        tags: ["React Native", "Firebase", "Expo API"],
        description: "EdgeSharp was developed to address the absence of a modular, digital reservation system at MaxPerformance Skate Shop. My colleagues and I collaborated closely with the client through weekly meetings to identify requirements, evaluate feasibility, and iteratively refine the app’s functionality based on feedback. We designed a flexible system that allows for customizable booking and management of skate sharpening services.",
        features: "User authentication and profiles with customizable skate settings, Easy and tailored reservations with saved skate settings, Push notification that employee can notify customers with from employee web app, Prepaid punchcard system that can be recharged.",
        technical: "Developed a React Native mobile app using Expo for capturing Android and IOS users, Implemented React web app to manage reservations from employee side ,used Firebase as BaaS according to expected number of users provided by client. ",
        isLive: false,
        resources: {
            images: ["images/Edgesharp/1.png", "images/Edgesharp/Home.jpg", "images/Edgesharp/Profile.jpg", "images/Edgesharp/DateSelection.jpg", "images/Edgesharp/TimeSelection.jpg"],
            link: "https://youtube.com/shorts/_ELCXBa-RxE",
        }
    },
    showcase3: {
        title: "Titanic - Machine Learning from Disaster",
        tags: ["Predictive Analytics", "Scikit-learn", "Data Treatment"],
        description: "A machine learning competition project on Kaggle focused on predicting passenger survival on the Titanic. Using historical data about passengers including their age, class, fare, and family relationships, I built and trained classification models to predict survival outcomes. This project demonstrates data preprocessing, feature engineering, model selection, and evaluation techniques fundamental to predictive analytics.",
        features: "Exploratory data analysis with visualization of survival patterns, Feature engineering including family size and title extraction from names, Handling missing data through imputation strategies, One-hot encoding for categorical variables, Model comparison including Logistic Regression Random Forest and Gradient Boosting, Cross-validation for robust model evaluation, Hyperparameter tuning for optimal performance",
        technical: "Built with Python using Pandas for data manipulation and NumPy for numerical operations. Implemented Scikit-learn algorithms including RandomForestClassifier, LogisticRegression, and GradientBoostingClassifier. Used Matplotlib and Seaborn for data visualization. Applied StandardScaler for feature scaling and train_test_split for model validation. Achieved competitive accuracy through ensemble methods and careful feature selection.",
        isLive: false,
        resources: {
            images: ["images/Kaggle/EntryResult.png"],
            link: "https://github.com/Alex-Park-CS/Kaggle-Titanic"
        }
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
        const mediaGallery = document.querySelector('.media-gallery')
        liveSection.style.display = 'none';
        mediaSection.style.display = 'block';

        const hasImages = project.resources?.images && project.resources.images.length > 0;
        const hasLink = project.resources?.link && project.resources.link !== "";

        if (hasImages && hasLink) {
            let galleryHTML = project.resources.images.map(imagePath =>
                `<div class="media-item">
                    <img src="${imagePath}" alt="Project screenshot" onclick="openLightbox('${imagePath}')">
                </div>`
            ).join('');

            galleryHTML += `<div class="media-item-link">
                <a href="${project.resources.link}" target="_blank" class="cta-button">
                    View Presentation →
                </a>
            </div>`;

            mediaGallery.innerHTML = galleryHTML;
        } else if (hasImages) {
            mediaGallery.innerHTML = project.resources.images.map(imagePath =>
                `<div class="media-item">
                    <img src="${imagePath}" alt="Project screenshot" onclick="openLightbox('${imagePath}')">
                </div>`
            ).join('');
        } else if (hasLink) {
            mediaGallery.innerHTML = `<div class="media-item-link">
                <a href="${project.resources.link}" target="_blank" class="cta-button">
                    View Presentation →
                </a>
            </div>`;
        } else {
            mediaGallery.innerHTML = '<p style="color: #64748b;">No images available for this project.</p>';
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Lightbox Functions
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.classList.remove('active');
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