// app/data/projects.js
// Single source of truth for all projects across the portfolio

export const categories = [
  "All",
  "Live Projects",
  "AI / ML",
  "Full Stack",
  "Mobile",
  "Data Science",
];

export const projects = [
  {
    slug: "prepai",
    number: "01",
    title: "PrepAI",
    subtitle: "AI Interview Intelligence Platform",
    tagline: "Tailored interview reports and gap analysis powered by structured LLM validation.",
    category: "AI / ML",
    featured: true,
    year: "2026",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenRouter", "Zod", "SCSS"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "AI-powered interview preparation tool that generates a personalized interview report based on a user's resume, job description, and self-description.",
    longDescription: "Most developers spend hours searching for generic interview questions. PrepAI creates an end-to-end tailored preparation dossier in under 30 seconds by cross-referencing candidate resumes against target job descriptions and outputting structured interview assessments.",
    highlights: [
      "Resume upload for PDF and DOCX parsing with contextual extraction",
      "Dynamic match scoring (0–100) and role-specific skill gap analysis",
      "Role-specific technical interview questions matched to candidates' exact stack",
      "Behavioral questions accompanied by structured STAR-method answers",
      "Personalized 7-day preparation roadmap to systematically close identified gaps"
    ],
    technicalStory: {
      problem: "Free-tier and open-weights LLMs frequently violate strict JSON schemas, generating malformed JSON, prose wrapping, or omitting key fields required by downstream UI components.",
      solution: "Enforced strict Zod schema validation on the backend paired with OpenRouter json_object response mode and explicit system prompt constraints specifying every target key. Implemented defensive schema fallback handling so users never encounter unhandled parser crashes.",
      architecture: [
        "Landing page with interactive preview mockup and clear value proposition",
        "Multi-step input flow with drag-and-drop resume ingestion",
        "Real-time processing status with step-by-step pipeline indicators",
        "Three-panel report layout: navigation sidebar, core question dossier, and dynamic score breakdown"
      ]
    },
    sections: {
      overview: "PrepAI eliminates generic interview prep by generating customized interview reports in under 30 seconds. Instead of browsing arbitrary question lists, candidates receive an evaluation built directly from their resume and target job requirements.",
      theProblem: "Standard interview preparation resources are static and disconnected from the specific candidate and position. Candidates waste crucial time practicing irrelevant questions and entering technical rounds unaware of critical gaps in their background.",
      whatIBuilt: "A complete full-stack web application featuring resume file ingestion, prompt engineering pipelines, Zod schema validation, a responsive 3-panel report viewer, and persistent report storage via MongoDB.",
      howItWorks: "The candidate uploads their resume, pastes the job description, and provides optional self-context. The Express backend bundles this into an optimized system prompt sent to OpenRouter (using models like Upstage Solar Pro). The raw response is validated against strict Zod definitions before persisting to MongoDB and rendering in the React report interface.",
      technicalDecisions: "Opted for Zod validation over standard JSON parsing to guarantee type safety at runtime. Used a 3-panel layout in React to allow fast jumping between technical questions, behavioral STAR answers, and gap roadmaps.",
      challenges: "Getting free-tier AI models to consistently adhere to structured schemas without hallucinating extraneous markdown. Solved through JSON mode combined with defensive field parsing and retry fallbacks.",
      lessons: "Production AI engineering is 80% defensive input/output handling. You cannot trust external models to maintain API contracts without strict schema gates."
    }
  },
  {
    slug: "deep-research-agent",
    number: "02",
    title: "Deep Research Agent",
    subtitle: "Multi-Agent Research Pipeline",
    tagline: "Autonomous multi-agent research pipeline for literature review, citation extraction, and synthesis.",
    category: "AI / ML",
    featured: true,
    year: "2026",
    technologies: ["Python", "LLMs", "Streamlit", "uv", "Multi-Agent Systems"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "A multi-agent research pipeline in Python that automates literature review, cross-document analysis, and synthesis.",
    longDescription: "Deep Research Agent coordinates specialized AI agents that decompose complex research queries, discover relevant academic and technical literature, extract citations, and produce consolidated synthesis reports.",
    highlights: [
      "Multi-agent architecture dividing search, filtering, extraction, and synthesis",
      "Automated literature review compilation with direct citation anchoring",
      "Interactive Streamlit control room for query management and export",
      "Fast, reproducible Python environment management powered by uv"
    ],
    technicalStory: {
      problem: "Single-prompt LLM research suffers from context degradation, hallucinations, and lack of cross-document verification.",
      solution: "Decomposed the research workflow into autonomous sub-agents with dedicated responsibilities: Planner Agent, Retrieval Agent, Fact-Verification Agent, and Report Synthesis Agent.",
      architecture: [
        "Modular Python pipeline leveraging modern type annotations",
        "Streamlit-based live execution dashboard showing agent message exchanges",
        "Structured Markdown export containing executive summaries and reference bibliographies"
      ]
    },
    sections: {
      overview: "Deep Research Agent is an autonomous pipeline designed to accelerate academic and industry literature reviews by deploying cooperative agents that search, critique, and synthesize research findings.",
      theProblem: "Conducting thorough technical literature reviews is manual and time-consuming. Standard LLM chatbots fail at deep research because they hallucinate citations and lose coherence over multi-paper contexts.",
      whatIBuilt: "A multi-agent Python system powered by Streamlit and managed with uv. The platform orchestrates specialized agents that query, rank, summarize, and cross-reference information.",
      howItWorks: "When a user inputs a research topic, the Planner agent constructs a research tree. Worker agents query source databases, while the Synthesizer compiles verified notes into a structured briefing.",
      technicalDecisions: "Adopted uv for deterministic, ultra-fast Python dependency resolution and Streamlit for an agile, telemetry-rich researcher dashboard.",
      challenges: "Preventing agent loops and hallucinated references. Resolved by enforcing strict reference verification against actual document corpora.",
      lessons: "Multi-agent systems require rigorous communication protocols and bounded execution loops to prevent runaway token expenditure."
    }
  },
  {
    slug: "presidium",
    number: "02b",
    title: "Presidium: A Nation in Your Hands",
    subtitle: "Presidential Governance Simulation & ML Grading Engine",
    tagline: "Decision-driven presidential governance simulation with supervised learning and full grading engine.",
    category: "AI / ML",
    featured: false,
    year: "2026",
    technologies: ["Python", "Tkinter", "Supervised Learning", "Scikit-Learn"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "Presidential governance simulation in Python and Tkinter for an AI lab course, featuring a supervised learning component and a full grading engine to score player decisions.",
    longDescription: "Developed as a complex decision-driven simulation where players govern national policies. Incorporates a machine-learning component that classifies decision archetypes and a comprehensive grading engine that evaluates policy tradeoffs.",
    highlights: [
      "Supervised learning component predicting and classifying policy outcomes",
      "Dynamic policy grading engine scoring economic, social, and geopolitical tradeoffs",
      "Interactive desktop simulation built with Python and Tkinter for AI lab course"
    ],
    sections: {
      overview: "Presidium is a presidential governance simulation exploring algorithmic grading, policy tradeoff mechanics, and supervised learning classification.",
      theProblem: "Modeling multifaceted socioeconomic policies into an interactive desktop environment with deterministic evaluation.",
      whatIBuilt: "A Python/Tkinter desktop application containing game-theoretic policy graphs and a supervised learning classification model."
    }
  },
  {
    slug: "architecture-visualizer",
    number: "03",
    title: "Architecture Visualizer",
    subtitle: "AI-Powered System & Flow Canvas",
    tagline: "Natural-language prompt to interactive node graph generator running private local LLMs.",
    category: "AI / ML",
    featured: true,
    year: "2026",
    technologies: ["Next.js 14", "React Flow", "Clerk", "MongoDB", "Ollama", "Framer Motion"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "AI-powered platform that turns natural-language ideas into interactive visual diagrams with node graphs, decision branches, and execution flows.",
    longDescription: "Architecture Visualizer fuses a chat-first prompt interface with an infinite node-based canvas. Users enter system requirements in plain English, and a local LLM converts the concepts into structured React Flow graphs that can be animated in execution sequence.",
    highlights: [
      "Natural-language prompt to full graph generation without manual drag-and-drop",
      "Interactive infinite canvas powered by React Flow with custom node designs",
      "100% private local LLM inference powered by Ollama on candidate machines",
      "Play mode that lights up nodes sequentially to simulate system execution flows",
      "Clerk user authentication with MongoDB diagram persistence"
    ],
    technicalStory: {
      problem: "Generating deterministic node-and-edge graph coordinates and topological connection sequences from open-weight local LLMs without manual syntax fixes.",
      solution: "Designed a surgical system prompt specifying node hierarchies, coordinate offsets, edge relationships, and execution sequence indices in a single pure JSON structure.",
      architecture: [
        "Next.js 14 App Router layout managing state between chat panel and canvas",
        "React Flow infinite viewport with custom node types and responsive zoom/pan controls",
        "Ollama REST API integration for zero-latency local diagram synthesis"
      ]
    },
    sections: {
      overview: "Architecture Visualizer is a thinking canvas for software engineers. It turns architectural ideas and complex logic into living, interactive node graphs within seconds.",
      theProblem: "Drawing architecture diagrams manually in traditional tools takes focus away from system thinking. Whiteboarding tools are either too rigid or too manual.",
      whatIBuilt: "A full-stack Next.js application that combines a conversational prompt bar with an infinite React Flow canvas, driven by local Ollama LLMs and secured with Clerk.",
      howItWorks: "The user submits an idea like 'SaaS subscription billing cycle'. The local LLM processes the prompt and outputs a structured node-and-edge schema. React Flow renders the graph dynamically with animated execution steps.",
      technicalDecisions: "Used Ollama for local LLM inference to maintain zero data egress and eliminate cloud API billing. React Flow was chosen for its high-performance canvas rendering.",
      challenges: "Preventing overlapping nodes and overlapping edge trajectories in dynamically generated diagrams. Solved with an automated layout coordinate positioning algorithm.",
      lessons: "Canvas UX requires balancing AI autonomy with manual flexibility. Giving users visual playback of logic flows provides immense cognitive clarity."
    }
  },
  {
    slug: "roomify",
    number: "04",
    title: "Roomify",
    subtitle: "3D Architecture Design Builder",
    tagline: "Modernized 3D architectural design builder with centralized styling and spatial product UX.",
    category: "Full Stack",
    featured: true,
    year: "2026",
    technologies: ["Next.js", "React", "Three.js", "Tailwind CSS"],
    image: null,
    liveUrl: "https://roomify-three-indol.vercel.app/",
    githubUrl: null,
    description: "3D architecture design builder with a redesigned product experience, clean architectural aesthetics, and unified design tokens.",
    longDescription: "Roomify reimagines architectural spatial planning in the browser. The platform enables users to imagine, shape, and visualize architectural environments through an intuitive interface built around clean technical aesthetics.",
    highlights: [
      "Refreshed architectural color system and technical typography",
      "Interactive 3D viewport for spatial room exploration",
      "Product-focused hero layout demonstrating modern studio workflows",
      "Centralized styling system ensuring design consistency across builder tools"
    ],
    technicalStory: {
      problem: "Traditional 3D CAD and visualization tools have steep learning curves and outdated, cluttered interfaces.",
      solution: "Created an accessible, browser-based 3D workspace balancing minimalism with expressive architectural controls.",
      architecture: [
        "Component-driven layout with dedicated 3D canvas viewport",
        "Centralized design tokens for consistent light theme architectural palettes",
        "Responsive workspace controls optimized for both desktop and tablet interactions"
      ]
    },
    sections: {
      overview: "Roomify is a browser-based 3D architecture builder focused on clarity, creativity, and spatial design. It gives designers a streamlined environment to shape architectural spaces.",
      theProblem: "Architecture software is typically heavy, desktop-only, and visually overwhelming for rapid conceptualization and client presentation.",
      whatIBuilt: "A refreshed modern web application integrating 3D canvas rendering with a clean, typography-driven product experience.",
      howItWorks: "Users configure dimensions, materials, and spatial elements directly within a lightweight browser canvas with real-time visual feedback.",
      technicalDecisions: "Maintained a centralized styling system so theme modifications propagate seamlessly across complex canvas controls.",
      challenges: "Balancing smooth 60fps 3D rendering with lightweight DOM controls and responsive container scaling.",
      lessons: "Interface restraint is essential when designing creative tools—the user's creation should always be the visual centerpiece."
    }
  },
  {
    slug: "nyc-house-type-predictor",
    number: "05",
    title: "Predicting House Type",
    subtitle: "NYC Real Estate ML Intelligence Platform",
    tagline: "End-to-end classification system trained on 48,895+ NYC Airbnb listings with 84% F1-score.",
    category: "Data Science",
    featured: true,
    year: "2026",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Plotly", "Pandas", "NumPy", "Joblib"],
    image: null,
    liveUrl: "https://shayan123-svg-nyc-house-type-predictor-main-u1uhha.streamlit.app/",
    githubUrl: null,
    description: "End-to-end machine-learning web application and market intelligence dashboard trained on 48,895+ New York City Airbnb listings.",
    longDescription: "In high-density real estate markets like New York City, incorrect room-type categorization distorts pricing indices, affects host discoverability, and risks regulatory non-compliance. This application serves as an automated verification and revenue optimization engine achieving 84% accuracy and an 84% weighted F1-score.",
    highlights: [
      "Trained on 48,895+ NYC Airbnb listings with 84% accuracy and 84% weighted F1-score",
      "Haversine geodesic distance modeling from Times Square to capture spatial premiums",
      "Logarithmic transforms (log(1+x)) to normalize extreme right-skewed pricing distributions",
      "Tuned RandomForestClassifier with balanced subsample weighting for class imbalance",
      "Interactive dashboard: Property Studio, Batch CSV Inference, Real Estate EDA, and Revenue Simulator"
    ],
    technicalStory: {
      problem: "Significant class imbalance across room types, high price skewness, and the risk of server failure during repeated model loading.",
      solution: "Engineered spatial features using Haversine distance calculations, applied RobustScaler for outlier resilience, and implemented a self-healing singleton design pattern for cached model artifact recovery.",
      architecture: [
        "Property Attribute Studio with dynamic feature weight visualization",
        "High-throughput batch CSV inference engine with downloadable predictions",
        "Geospatial scatter visualizations and pricing boxplot distributions via Plotly",
        "Dynamic gross revenue estimation and pricing threshold simulator for hosts"
      ]
    },
    sections: {
      overview: "Predicting House Type is a production-grade machine learning platform that classifies NYC properties into Entire Home/Apt, Private Room, or Shared Room while providing market intelligence to hosts and analysts.",
      theProblem: "Short-term rental platforms face misclassification issues where listing types are misreported, warping competitive pricing benchmarks and causing regulatory exposure.",
      whatIBuilt: "An end-to-end ML application featuring complete spatial and statistical feature engineering, a tuned Scikit-Learn ensemble model, and a multi-tab Streamlit dashboard.",
      howItWorks: "Users input listing attributes (coordinates, price, minimum nights, availability). The pipeline scales variables using a fitted RobustScaler, computes spatial metrics, and runs classification via a balanced Random Forest model.",
      technicalDecisions: "Selected Random Forest with balanced subsampling to handle minority room classes without synthetic oversampling distortions. Used RobustScaler to remain robust against extreme luxury outlier prices.",
      challenges: "Right-skewed pricing and minimum stay features caused gradient instability in linear baselines. Addressed with logarithmic transformations and interaction terms.",
      lessons: "Domain-specific feature engineering (such as geodesic distance from central commercial hubs) often delivers greater performance gains than hyperparameter tuning."
    }
  },
  {
    slug: "cinematch",
    number: "06",
    title: "CineMatch",
    subtitle: "Movie Recommendation Engine",
    tagline: "NLP-powered recommendation system using sparse cosine similarity across 42,000+ films.",
    category: "Data Science",
    featured: true,
    year: "2026",
    technologies: ["Python", "FastAPI", "Tailwind CSS", "Scikit-Learn", "TF-IDF", "Pickle"],
    image: null,
    liveUrl: "https://movie-recomendation-system-obn0.onrender.com/",
    githubUrl: null,
    description: "Movie recommendation system using NLP (TF-IDF) and content similarity with memory-efficient on-demand sparse cosine calculations.",
    longDescription: "CineMatch suggests films based on semantic content similarity across overviews, taglines, and weighted genres. Rather than materializing a massive 42,000 × 42,000 similarity matrix in RAM, similarity is evaluated on demand using sparse vector representations.",
    highlights: [
      "NLP vectorization combining movie overviews, taglines, and weighted genres",
      "Sparse matrix approach enabling instant recommendations across 42,000+ titles",
      "FastAPI backend with pre-warmed serialized model artifacts via Pickle",
      "Clean Tailwind CSS interface with live search suggestions, posters, and match scores"
    ],
    technicalStory: {
      problem: "Pre-computing a dense 42,000 × 42,000 cosine similarity matrix exceeds typical production RAM limits for lightweight hosting tiers.",
      solution: "Persisted the sparse TF-IDF feature matrix and calculated cosine similarity vectors dynamically only when a user selects a target film, dropping memory footprint by over 90%.",
      architecture: [
        "Serialized NLP vectorizer and sparse matrix artifacts loaded at application startup",
        "FastAPI endpoint returning top-K matches with similarity scores in under 50ms",
        "Client interface with dynamic search filtering and responsive card layouts"
      ]
    },
    sections: {
      overview: "CineMatch is a content-based recommendation platform that helps users discover movies sharing thematic, stylistic, and narrative DNA with films they already enjoy.",
      theProblem: "Many recommendation engines either require complex collaborative filtering data (user watch histories) or consume excessive memory when computing global similarity matrices.",
      whatIBuilt: "A performant web application with a FastAPI backend, Scikit-Learn TF-IDF pipeline, and responsive Tailwind frontend hosted on Render.",
      howItWorks: "Text features (plot overview, tagline, genres) are tokenized and weighted into a TF-IDF sparse matrix. Upon query, cosine similarity is computed between the target film's vector and the corpus.",
      technicalDecisions: "Weighted genre tokens higher than general plot text to prevent unrelated films with minor descriptive overlaps from ranking above genuine genre peers.",
      challenges: "Memory constraints on cloud deployment. Solved by storing only sparse matrix artifacts and computing vector dot products on request.",
      lessons: "On-demand sparse computations can drastically reduce infrastructure costs without introducing perceptible latency for the end user."
    }
  },
  {
    slug: "student-mental-health-prediction",
    number: "07",
    title: "Student Mental Health Prediction",
    subtitle: "Wellbeing Score Estimation ML Application",
    tagline: "Machine learning web app estimating student wellbeing scores based on behavioral metrics.",
    category: "Data Science",
    featured: false,
    year: "2026",
    technologies: ["FastAPI", "Scikit-Learn", "HTMX", "Tailwind CSS", "Python"],
    image: null,
    liveUrl: "https://student-mental-health-prediction-jfmm.onrender.com/",
    githubUrl: null,
    description: "Machine learning web app that estimates a student wellbeing score using factors like sleep, study time, social-media usage, physical activity, and screen habits.",
    longDescription: "A self-reflection tool built with a FastAPI backend and interactive HTMX interface to predict wellbeing indicators from daily academic and lifestyle inputs.",
    highlights: [
      "Multi-factor behavioral analysis including sleep, study, and phone unlock telemetry",
      "Interactive HTMX UI providing instantaneous server-rendered updates without heavy JS",
      "Deployed on Render with responsive Tailwind CSS styling"
    ],
    sections: {
      overview: "An educational machine learning tool designed to encourage reflection on healthy academic and lifestyle balances.",
      theProblem: "Students often lack objective visibility into how lifestyle habits like irregular sleep and excessive screen time correlate with overall wellbeing.",
      whatIBuilt: "A lightweight, server-driven web application coupling trained Scikit-Learn regression models with an HTMX frontend.",
      howItWorks: "Users input daily metrics via sliders; HTMX streams inputs to the FastAPI backend, which returns formatted prediction cards in real time."
    }
  },
  {
    slug: "heart-disease-prediction",
    number: "08",
    title: "Heart Disease Prediction",
    subtitle: "Clinical Risk Stratification System",
    tagline: "Interactive clinical indicator assessment application using trained KNN classifiers.",
    category: "Data Science",
    featured: false,
    year: "2026",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "KNN", "Pandas"],
    image: null,
    liveUrl: "https://muhammadshayan593-ai-ml-learning-main-m4o4xs.streamlit.app/",
    githubUrl: null,
    description: "End-to-end machine learning application predicting the likelihood of heart disease from clinical inputs such as age, blood pressure, cholesterol, and ECG results.",
    longDescription: "Clinical parameter evaluation system developed to explore end-to-end ML lifecycle stages from data cleaning and categorical encoding to interactive Streamlit deployment.",
    highlights: [
      "Exploratory data analysis across clinical cardiology datasets",
      "Comparative model evaluation and hyperparameter tuning for KNN classification",
      "Streamlit UI with probability estimation outputs and feature scaling"
    ],
    sections: {
      overview: "A clinical prediction prototype demonstrating data preprocessing, feature normalization, and interactive prediction interfaces.",
      theProblem: "Understanding multi-variable clinical datasets requires intuitive interfaces where parameter adjustments immediately reflect risk probabilities.",
      whatIBuilt: "An interactive Streamlit application serving a serialized K-Nearest Neighbors classifier trained on clinical cardiovascular data."
    }
  },
  {
    slug: "restate",
    number: "09",
    title: "Restate",
    subtitle: "Real Estate Mobile Application",
    tagline: "Full-stack mobile real estate app with Expo Router, MongoDB property seeding, and Express API.",
    category: "Mobile",
    featured: false,
    year: "2026",
    technologies: ["React Native", "Expo Router", "TypeScript", "NativeWind", "Express", "MongoDB"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "Real estate mobile application built with React Native and Expo, featuring complete end-to-end data flows from Express and MongoDB.",
    longDescription: "Transitioned from static mobile screen prototypes into a complete product flow with dynamic backend endpoints, property search, category filters, and detail screens.",
    highlights: [
      "Demo sign-in flow with structured session handling",
      "MongoDB database seeding for property listings and metadata",
      "Dynamic filtering by property category and location parameters",
      "NativeWind styling optimized for cross-platform performance"
    ],
    sections: {
      overview: "Restate is a modern mobile real estate exploration platform built with React Native and Expo Router.",
      theProblem: "Many mobile portfolio apps rely purely on static mock data; Restate was engineered to test full-stack mobile client-server architecture.",
      whatIBuilt: "A React Native client communicating with a custom Express/MongoDB API to seed, fetch, filter, and inspect property listings."
    }
  },
  {
    slug: "react-native-movie-app",
    number: "10",
    title: "React Native Movie App",
    subtitle: "TMDB-Powered Mobile Cinema Explorer",
    tagline: "Mobile movie discovery application built with Expo Router and TMDB integration.",
    category: "Mobile",
    featured: false,
    year: "2026",
    technologies: ["React Native", "Expo", "Expo Router", "TypeScript", "NativeWind", "TMDB API"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "Mobile exploration app with trending movies, live TMDB search, detailed movie metrics (budget, revenue, runtime), and custom saved UI screens.",
    longDescription: "A mobile project focusing on real-world mobile app challenges: file-based routing, API token authorization, dynamic movie details, and reusable card components.",
    highlights: [
      "Live search queries with debounced TMDB API fetching",
      "Dynamic route handling for individual movie dossiers",
      "Saved movies UI and candidate user profile screens",
      "Clean NativeWind styling across iOS and Android viewports"
    ],
    sections: {
      overview: "A sleek cinema discovery app delivering live movie intelligence directly from TMDB.",
      theProblem: "Creating responsive mobile lists with remote poster image loading requires careful state management to avoid stutter and memory spikes.",
      whatIBuilt: "A complete Expo application incorporating search debouncing, tab navigation, and dynamic screen routing."
    }
  },
  {
    slug: "mystery-message",
    number: "11",
    title: "Mystery Message",
    subtitle: "Anonymous Social Feedback Platform",
    tagline: "Modern Next.js application with credentials auth, Resend email verification, and AI message prompts.",
    category: "Full Stack",
    featured: false,
    year: "2026",
    technologies: ["Next.js App Router", "TypeScript", "NextAuth", "MongoDB Atlas", "Mongoose", "Resend", "OpenRouter"],
    image: null,
    liveUrl: null,
    githubUrl: null,
    description: "Anonymous social feedback app with email verification, public feedback links, inbox management, and AI prompt suggestions.",
    longDescription: "Built with Next.js App Router and TypeScript, Mystery Message handles credentials auth, public user profile pages, message acceptance toggles, and OpenRouter AI prompt fallbacks.",
    highlights: [
      "Cached MongoDB Atlas database connection pattern for serverless route handlers",
      "Secure email verification workflow using Resend",
      "Public anonymous feedback endpoints (/u/[username]) with rate guarding",
      "AI-driven suggestion generator with graceful rate-limit fallbacks"
    ],
    sections: {
      overview: "An anonymous communication system prioritizing data validation, secure authentication, and resilient serverless DB connections.",
      theProblem: "Handling user verification and anonymous submissions securely without exposing private recipient details.",
      whatIBuilt: "A complete Next.js full-stack system featuring NextAuth integration, verified email flows, and an interactive recipient dashboard."
    }
  },
  {
    slug: "ai-social-media-post-generator",
    number: "12",
    title: "AI Social Media Post Generator",
    subtitle: "Multi-Modal Content Studio",
    tagline: "Instant Instagram caption and aesthetic visual generator using Gemini API and Pollinations.ai.",
    category: "AI / ML",
    featured: false,
    year: "2026",
    technologies: ["TanStack Start", "Google Gemini API", "Pollinations.ai", "TypeScript"],
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/MUHAMMADSHAYAN593/Social-media-post-generator",
    description: "Tool that generates ready-to-post social media captions and matching aesthetic imagery from short prompt descriptions.",
    longDescription: "Explored the TanStack Start framework to evaluate full-stack server functions (createServerFn), keeping client bundles light while coordinating Gemini caption generation and Pollinations visual synthesis.",
    highlights: [
      "Single-prompt multi-modal generation of text and matching visual assets",
      "Server function integration securing API keys without client bundle leakage",
      "Real-time social media card preview mockups"
    ],
    sections: {
      overview: "A lightweight studio for generating cohesive text and visual social media drafts from brief conceptual ideas.",
      theProblem: "Balancing client performance while executing server-side AI requests across multiple third-party generative endpoints.",
      whatIBuilt: "A TanStack Start application orchestrating Google Gemini for copywriting and Pollinations.ai for image rendering."
    }
  },
  {
    slug: "road-map-teller",
    number: "13",
    title: "Road Map Teller",
    subtitle: "Developer Career Path Navigator",
    tagline: "Interactive roadmap guide for tech domains with curated learning resources.",
    category: "Full Stack",
    featured: false,
    year: "2026",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Lucide React"],
    image: null,
    liveUrl: "https://road-map-teller.vercel.app/",
    githubUrl: "https://github.com/MUHAMMADSHAYAN593/Road_Map_Teller",
    description: "Interactive web app designed to guide developers through paths in Data Science, AI & ML, Full Stack Web Dev, Cyber Security, and Cloud Computing.",
    longDescription: "Provides structured learning milestones and links to verified open-source documentation and top-tier creator resources for engineers embarking on new specializations.",
    highlights: [
      "Curated learning tracks spanning 6+ tech industry specializations",
      "Integrated search to quickly locate specific skill milestones",
      "Smooth layout transitions powered by Framer Motion"
    ],
    sections: {
      overview: "An open roadmap navigation directory helping aspiring developers chart structured learning trajectories.",
      theProblem: "Self-directed tech education suffers from resource fragmentation and unclear progression ordering.",
      whatIBuilt: "An interactive React/Vite single-page application with categorized curriculum trees and curated resource links."
    }
  },
  {
    slug: "uber-clone",
    number: "14",
    title: "Full-Stack Uber Clone",
    subtitle: "Real-Time Ride-Sharing Architecture",
    tagline: "Ride matching system with OpenStreetMap, Socket.io communication, and dynamic fare estimation.",
    category: "Full Stack",
    featured: false,
    year: "2026",
    technologies: ["React", "Vite", "Tailwind CSS", "GSAP", "Node.js", "Express", "MongoDB", "Socket.io", "Leaflet"],
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/MUHAMMADSHAYAN593/Uber-Clone",
    description: "Real-time ride booking and matching system featuring OpenStreetMap integration, live socket tracking, and dynamic fare computation.",
    longDescription: "A comprehensive full-stack replication of core ride-sharing mechanics: captain-user matching algorithm, JWT session authentication, live tracking, and cost-free geospatial mapping.",
    highlights: [
      "Zero-cost mapping implementation using OpenStreetMap and Leaflet",
      "Bidirectional real-time Socket.io rooms linking users and drivers",
      "Geocoding and distance calculation via Nominatim API",
      "Dynamic fare pricing algorithm derived from distance and route metrics"
    ],
    sections: {
      overview: "A full-stack distributed ride-matching platform built to study real-time socket synchronization and geospatial routing.",
      theProblem: "Commercial map APIs impose heavy usage fees; engineering a production-like ride dispatch system required zero-cost alternatives.",
      whatIBuilt: "A complete system uniting Leaflet/OpenStreetMap with Node.js/Socket.io to enable driver discovery, ride bids, and live status transitions."
    }
  },
  {
    slug: "food-reel-mern",
    number: "15",
    title: "Food Reel-MERN",
    subtitle: "Short-Form Video Food Discovery Platform",
    tagline: "MERN platform for culinary businesses to showcase short video reels and engage customers.",
    category: "Full Stack",
    featured: false,
    year: "2026",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/MUHAMMADSHAYAN593/Reels-App",
    description: "Fullstack platform where food partners upload short video reels, manage store profiles, and connect with customers through an Instagram-style feed.",
    longDescription: "Designed to explore media upload pipelines, HTTP-only JWT session security, and clean modular controller-service-route backend architecture.",
    highlights: [
      "Partner registration and profile management with reel video uploads",
      "Responsive vertical video discovery feed",
      "Modular Node/Express architecture with clean route separation",
      "Secure authentication using HTTP-only cookies and JWT"
    ],
    sections: {
      overview: "A culinary discovery platform bridging local food businesses and consumers through engaging short-form video content.",
      theProblem: "Small food ventures lack simple, visually compelling channels to showcase culinary preparations without heavy ad spend.",
      whatIBuilt: "A MERN stack application featuring media handling, responsive video grids, and partner profile management."
    }
  },
  {
    slug: "lumina-edit",
    number: "16",
    title: "Lumina Edit",
    subtitle: "Browser-Based Canvas Image Editor",
    tagline: "Pure JavaScript & HTML5 Canvas image adjustments with real-time feedback.",
    category: "Full Stack",
    featured: false,
    year: "2025",
    technologies: ["HTML5 Canvas", "JavaScript", "CSS3"],
    image: null,
    liveUrl: "https://image-editor-lovat-eight.vercel.app",
    githubUrl: null,
    description: "Modern, browser-based image editing tool built with vanilla JavaScript, HTML5 Canvas, and CSS3 delivering real-time pixel adjustments.",
    longDescription: "A project exploring pixel manipulation algorithms, brightness/contrast matrices, and browser canvas performance without third-party frameworks.",
    highlights: [
      "Zero external runtime dependencies—pure Vanilla JavaScript and Canvas API",
      "Instant real-time slider adjustments with sub-millisecond redraws",
      "Export capability retaining original image resolution"
    ],
    sections: {
      overview: "A lightweight, performant browser image editing studio inspired by Lightroom controls.",
      theProblem: "Most browser image editors depend on heavy external libraries that add bulk and obscure core browser graphics capabilities.",
      whatIBuilt: "A focused canvas manipulation tool executing real-time color corrections directly through JavaScript typed arrays."
    }
  },
  {
    slug: "get-me-a-chai",
    number: "17",
    title: "Get Me A Chai",
    subtitle: "Creator Crowdfunding Platform",
    tagline: "Next.js 15 creator support application with GitHub OAuth and NextAuth.",
    category: "Full Stack",
    featured: false,
    year: "2025",
    technologies: ["Next.js 15", "NextAuth", "GitHub OAuth", "Tailwind CSS"],
    image: null,
    liveUrl: "https://get-me-a-chai-amber.vercel.app/",
    githubUrl: null,
    description: "Full-stack Next.js platform where users support creators by buying them virtual chai, featuring NextAuth and GitHub authentication.",
    longDescription: "Practiced Next.js 15 App Router architecture, authentication session flows, and payment intent mocks in a social creator platform.",
    highlights: [
      "OAuth session authentication via NextAuth",
      "Customizable creator showcase profiles",
      "Responsive payments UI and pledge history"
    ],
    sections: {
      overview: "A micro-patronage platform connecting independent builders with their audience through direct virtual chai contributions.",
      theProblem: "Creators need simple, frictionless support links without high onboarding barriers.",
      whatIBuilt: "A clean Next.js 15 web application with social login, profile persistence, and interactive contribution components."
    }
  },
  {
    slug: "pass-op",
    number: "18",
    title: "Password Manager",
    subtitle: "Client-Side Privacy Tool",
    tagline: "Secure password management utility built with React and Tailwind CSS.",
    category: "Full Stack",
    featured: false,
    year: "2025",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/password.png",
    liveUrl: "https://muhammadshayan593.github.io/passOP/",
    githubUrl: null,
    description: "Responsive password management tool built with React and Tailwind CSS focusing on client-side credential storage and user data privacy.",
    longDescription: "An early engineering exploration of local credential management, copy-to-clipboard workflows, and accessible form validations.",
    highlights: ["Client-side credential encryption handling", "Copy-to-clipboard utilities with visual confirmation", "Responsive Tailwind UI"],
    sections: {
      overview: "A clean client-side utility for organizing local credentials safely.",
      theProblem: "Password management tools often suffer from bloated interfaces and intrusive account requirements.",
      whatIBuilt: "A straightforward React application for generating, organizing, and copying login credentials locally."
    }
  },
  {
    slug: "weather-app",
    number: "19",
    title: "Smart Weather App",
    subtitle: "Real-Time Meteorological Explorer",
    tagline: "Weather forecasts with responsive data visualization and OpenWeather API.",
    category: "Full Stack",
    featured: false,
    year: "2025",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    image: "/images/weather.jpeg",
    liveUrl: null,
    githubUrl: null,
    description: "Real-time weather application providing accurate meteorological forecasts, built with vanilla JavaScript for optimal performance.",
    longDescription: "Focused on API consumption, asynchronous JavaScript fetch flows, dynamic icon mapping, and error handling for invalid locations.",
    highlights: ["Live meteorological condition mapping", "City search with error recovery", "Minimalist vanilla JavaScript implementation"],
    sections: {
      overview: "A responsive weather widget delivering instant meteorological forecasts.",
      theProblem: "Learning clean asynchronous JavaScript and resilient handling of third-party REST API limits.",
      whatIBuilt: "A fast, lightweight weather client consuming real-time meteorological JSON payloads."
    }
  },
  {
    slug: "snake-game",
    number: "20",
    title: "Classic Snake Game",
    subtitle: "Vanilla JavaScript Arcade Game",
    tagline: "Deterministic game loop and collision detection implemented in pure JavaScript.",
    category: "Full Stack",
    featured: false,
    year: "2025",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: null,
    liveUrl: "https://snake-game-ebon-kappa-92.vercel.app/",
    githubUrl: null,
    description: "Fully functional classic Snake game built with vanilla JavaScript, featuring custom game loops, grid coordinates, and score tracking.",
    longDescription: "A fundamental study in coordinate grids, requestAnimationFrame game loops, keyboard event buffering, and collision detection math.",
    highlights: ["Deterministic requestAnimationFrame game loop", "Grid coordinate array math and collision detection", "Persistent local high-score tracking"],
    sections: {
      overview: "A retro arcade classic implemented from first principles to master stateful game loops.",
      theProblem: "Managing continuous state updates and keyboard event input queues without frame dropping in the browser.",
      whatIBuilt: "A zero-dependency arcade game featuring score persistence and smooth grid movement."
    }
  },
  {
    slug: "twitter-clone",
    number: "21",
    title: "Twitter Clone",
    subtitle: "Microblogging Interface Replica",
    tagline: "Social media interface replica exploring component hierarchy and responsive layouts.",
    category: "Full Stack",
    featured: false,
    year: "2025",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "/images/Twitter.avif",
    liveUrl: "https://muhammadshayan593.github.io/Twitter-clone/",
    githubUrl: null,
    description: "Responsive social media interface clone mimicking Twitter's timeline feed, interaction buttons, and responsive sidebar navigation.",
    longDescription: "An interface design exercise exploring feed layouts, avatar cropping, tweet engagement interactions, and responsive multi-column structures.",
    highlights: ["Multi-column responsive layout imitating modern microblogging feeds", "Dynamic tweet feed component composition", "Interactive like and retweet state toggling"],
    sections: {
      overview: "A frontend clone built to study large-scale social media layout patterns and responsive navigation.",
      theProblem: "Replicating intricate desktop-to-mobile navigation collapse and tweet thread hierarchy.",
      whatIBuilt: "A component-driven React timeline interface styled with Tailwind CSS."
    }
  }
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return projects[0];
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}
