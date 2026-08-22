// JavaScript for the Dynamic Project Detail Page

document.addEventListener("DOMContentLoaded", () => {
  // 1. Extract the project ID from query parameters (e.g. ?id=devflow)
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  // 2. Access the portfolio dataset (defined in js/data.js and loaded globally)
  const portfolioData = window.PORTFOLIO_DATA;

  if (!portfolioData || !projectId) {
    // If something goes wrong or no ID is provided, redirect to home page
    window.location.href = "index.html";
    return;
  }

  // Find the project matching the requested ID
  const project = portfolioData.projects.find(p => p.id.toLowerCase() === projectId.toLowerCase());

  if (!project) {
    // If the project doesn't exist, redirect to home page
    window.location.href = "index.html";
    return;
  }

  // 3. Populate project-specific details into the DOM
  
  // Set window & head titles
  document.title = `${project.name} | John Doe Project Case Study`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", `Case study of ${project.name} built with ${project.techStack.join(", ")}. Challenges and future roadmap details.`);
  }

  // Title headings
  const titleHeading = document.getElementById("project-title-heading");
  if (titleHeading) titleHeading.textContent = project.name;

  // Screenshot image
  const screenshotImg = document.getElementById("project-screenshot-show");
  if (screenshotImg) {
    screenshotImg.src = project.image;
    screenshotImg.alt = `${project.name} Desktop Interface Mockup`;
  }

  // Text descriptions
  const descParagraph = document.getElementById("project-description-paragraph");
  if (descParagraph) descParagraph.textContent = project.longDescription;

  const challengesParagraph = document.getElementById("project-challenges-paragraph");
  if (challengesParagraph) challengesParagraph.textContent = project.challenges;

  const improvementsParagraph = document.getElementById("project-improvements-paragraph");
  if (improvementsParagraph) improvementsParagraph.textContent = project.improvements;

  // Tech stack tags listing
  const tagsContainer = document.getElementById("project-tech-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = ""; // Clear placeholders
    project.techStack.forEach(tech => {
      const span = document.createElement("span");
      span.className = "project-tag";
      span.textContent = tech;
      tagsContainer.appendChild(span);
    });
  }

  // Action links
  const liveLinkBtn = document.getElementById("btn-project-live");
  if (liveLinkBtn) liveLinkBtn.href = project.liveLink;

  const githubLinkBtn = document.getElementById("btn-project-github");
  if (githubLinkBtn) githubLinkBtn.href = project.githubLink;

  // Sidebar technical table updates
  const primaryStackText = document.getElementById("spec-primary-stack");
  if (primaryStackText) {
    // Join first 3 stacks
    primaryStackText.textContent = project.techStack.slice(0, 3).join(", ");
  }

  const hostingText = document.getElementById("spec-hosting");
  if (hostingText) {
    if (project.id === "devflow") {
      hostingText.textContent = "Heroku / Netlify";
    } else if (project.id === "ecosphere") {
      hostingText.textContent = "Vercel / Firebase";
    } else {
      hostingText.textContent = "Netlify Node Gateway";
    }
  }

  const databaseText = document.getElementById("spec-db");
  if (databaseText) {
    if (project.techStack.includes("MongoDB")) {
      databaseText.textContent = "MongoDB Atlas";
    } else if (project.techStack.includes("Firebase")) {
      databaseText.textContent = "Firebase Firestore";
    } else {
      databaseText.textContent = "Local RPC Gateway";
    }
  }

  const stateText = document.getElementById("spec-state");
  if (stateText) {
    if (project.id === "devflow") {
      stateText.textContent = "Socket Actions / Redux";
    } else if (project.id === "ecosphere") {
      stateText.textContent = "React Context API";
    } else {
      stateText.textContent = "Ethers Provider State";
    }
  }
});
