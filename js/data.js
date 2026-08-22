// Shared Structured Data for the Portfolio Website

const PORTFOLIO_DATA = {
  profile: {
    name: "Ayon pal",
    designation: "Web Developer & UI/UX Designer",
    tagline: "We help businesses turn ideas into fast, reliable, and user-friendly digital products.",
    email: "ayonpal989@gmail.com",
    phone: "01961645231",
    whatsapp: "01961645231", // For WhatsApp redirect link
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    }
  },

  about: {
    journey: "My programming journey started back in high school when I wrote my first line of Python to automate a file-sorting script. That moment of seeing code solve a real-world problem sparked a passion that led me to pursue a degree in Computer Science. Over the years, I've transitioned into full-stack web development, mastering HTML, CSS, JavaScript, React, and Node.js. I love the creative freedom of frontend development blended with the logic and engineering challenges of the backend.",
    workEnjoyed: "I thrive in building highly interactive user interfaces, designing clean RESTful APIs, and optimizing database performance. I enjoy working on projects that require creative problem-solving, micro-interactions, responsive design, and robust architectures. Making a website feel 'alive' and seamless is what drives me.",
    hobbies: "Outside of writing code, I am an avid gamer who loves strategy games, a casual digital illustrator, and a competitive chess player. I also enjoy outdoor hiking to disconnect, clear my mind, and find new creative inspiration."
  },

  skills: {
    frontend: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 80 },
      { name: "Responsive Design", level: 95 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 75 }
    ],
    tools: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma (UI/UX)", level: 82 },
      { name: "Docker", level: 70 }
    ]
  },

  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "BRAC University",
      period: "2021 - 2025",
      result: "GPA: 3.8 / 4.0",
      description: "Focused on Data Structures, Algorithms, Software Engineering, Database Systems, Web Architectures, and Cloud Computing. Participated in programming contests and code sprints."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Apex Science College",
      period: "2019 - 2021",
      result: "GPA: 5.0 / 5.0 (Science Group)",
      description: "Represented the college in math olympiads. Gained strong foundational knowledge in Physics, Chemistry, Mathematics, and Computer Studies."
    }
  ],

  experience: [
    {
      role: "Software Engineer Intern",
      company: "TechVibe Solutions",
      period: "Jan 2025 - Present",
      description: [
        "Collaborated with senior engineers to implement new React components for a high-traffic analytics dashboard, improving user engagement by 15%.",
        "Optimized backend database queries in MongoDB, decreasing API response latency by approximately 20%.",
        "Participated in daily standups, sprint planning, and writing clean, reusable unit test suites."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed (Remote)",
      period: "Sep 2023 - Dec 2024",
      description: [
        "Designed and successfully deployed 10+ custom landing pages and e-commerce portals for international small businesses.",
        "Integrated secure checkout flows, custom CMS tools, and third-party email notifications (SendGrid/Mailchimp).",
        "Maintained 100% customer satisfaction rating with mobile-first responsive design practices."
      ]
    }
  ],

  projects: [
    {
      id: "devflow",
      name: "DevFlow",
      shortDescription: "A modern developer community Q&A and real-time collaboration workspace.",
      image: "assets/images/project-1.png",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      liveLink: "https://devflow-collab.example.com",
      githubLink: "https://github.com/johndoe/devflow-client",
      longDescription: "DevFlow is a full-stack community platform designed to bridge the gap between traditional developer Q&A forums (like StackOverflow) and real-time interactive workspaces. Users can post development-related questions, vote on answers, earn reputation points, and launch shared, real-time code-editing rooms directly inside the browser. It features a markdown content parser, user reputation tracking, nested discussions, and dynamic syntax-highlighted answers.",
      challenges: "The most demanding challenge was synchronizing the real-time code editor across multiple connected users. Implementing OT (Operational Transformation) or CRDT-based collision resolution was complex. We solved this by using Socket.io to broadcast cursor changes and delta edits, paired with debounce mechanisms to prevent network congestion.",
      improvements: "Future iterations will include integrated WebRTC video calling inside the collaboration rooms, an AI chatbot integrated to recommend debugging solutions instantly based on existing forum questions, and an expansion to support multi-file directory structures in the online editor."
    },
    {
      id: "ecosphere",
      name: "EcoSphere",
      shortDescription: "An interactive carbon footprint tracker dashboard and social impact platform.",
      image: "assets/images/project-2.png",
      techStack: ["Next.js", "Firebase", "Chart.js", "CSS Modules", "TailwindCSS"],
      liveLink: "https://ecosphere-app.example.com",
      githubLink: "https://github.com/johndoe/ecosphere-client",
      longDescription: "EcoSphere is a visual, mobile-first analytics web app that helps users track, understand, and reduce their daily carbon emissions. Users log their activities (transit, electricity usage, waste disposal, diet), and EcoSphere calculates their CO2 impact in real-time, displaying weekly and monthly patterns through responsive charts. It also hosts community challenges where users can join group goals, earn badges, and share sustainable tips.",
      challenges: "Integrating and translating activity data into precise carbon equivalent metrics was hard due to varying regional emission factors. We had to implement a custom translation utility using trusted databases (like EPA and DEFRA factors) and design cached client-side charts using Chart.js to make rendering super fast and responsive on mobile viewports.",
      improvements: "Planned improvements include integrating automated OCR scan utilities to parse energy bills directly into consumption stats, implementing machine learning models to recommend tailored emission-reduction suggestions, and partnering with direct carbon offset projects."
    },
    {
      id: "novacrypt",
      name: "NovaCrypt",
      shortDescription: "A Web3 NFT marketplace explorer and cryptocurrency portfolio tracking dashboard.",
      image: "assets/images/project-3.png",
      techStack: ["React.js", "Solidity", "Ethers.js", "Web3Modal", "Framer Motion"],
      liveLink: "https://novacrypt-dashboard.example.com",
      githubLink: "https://github.com/johndoe/novacrypt-client",
      longDescription: "NovaCrypt is a premium Web3 decentralised dashboard providing live tracking of crypto wallets, decentralized exchange (DEX) analytics, and an integrated NFT explorer. Users can connect their Web3 wallet (MetaMask, Coinbase Wallet) to view assets, track transaction histories, view floor prices of popular NFT collections via OpenSea API, and mint test NFTs. The dashboard has a futuristic neon aesthetic with glassmorphism panels.",
      challenges: "Handling RPC network drops and latency issues while reading blockchain states was a common pain point. We addressed this by integrating Ethers.js with fallback public RPC endpoints, creating loading skeletal structures to improve UX, and adding custom notification popups that guide users when wallet networks are mismatched.",
      improvements: "Next steps include implementing multi-chain support (Ethereum, Polygon, and Solana), integrating gas price prediction meters, and supporting direct batch-minting and listing features."
    },
    {
      id: "shopnest",
      name: "ShopNest",
      shortDescription: "A responsive e-commerce storefront with product search, cart management, and secure checkout.",
      image: "assets/images/shopnest-ui.jpg",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
      liveLink: "https://github.com/",
      githubLink: "https://github.com/",
      longDescription: "ShopNest is a full-stack e-commerce storefront built for small businesses. Customers can browse products, search and filter the catalog, manage a persistent cart, and complete checkout through Stripe. The admin area supports inventory updates, order status changes, and basic sales summaries.",
      challenges: "The key challenge was keeping inventory and cart totals consistent while multiple customers checked out at the same time. The checkout flow validates stock on the server, creates the payment intent securely, and updates order status through webhook events.",
      improvements: "Future improvements include product reviews, discount codes, customer wishlists, and a recommendation service based on purchase history."
    },
    {
      id: "taskpilot",
      name: "TaskPilot",
      shortDescription: "A collaborative project workspace for planning tasks, tracking progress, and aligning teams.",
      image: "assets/images/taskpilot-ui.jpg",
      techStack: ["Vue.js", "Firebase", "TailwindCSS", "Pinia", "Vitest"],
      liveLink: "https://github.com/",
      githubLink: "https://github.com/",
      longDescription: "TaskPilot is a collaborative workspace that helps small teams organize projects through boards, task assignments, due dates, labels, and activity updates. Firebase Authentication protects workspaces while Firestore keeps task changes synchronized across team members in real time.",
      challenges: "The most important challenge was making drag-and-drop updates reliable when several team members edited the same board. Optimistic UI updates are reconciled with Firestore snapshots, while permission rules ensure that only workspace members can modify tasks.",
      improvements: "The roadmap includes calendar and timeline views, recurring tasks, Slack notifications, and an offline queue for teams working with unreliable connections."
    }
  ]
};

// Export to make it accessible to modules if needed, otherwise assign globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
