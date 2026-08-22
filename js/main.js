// JavaScript for main portfolio page animations and interactions

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navigation Scroll Effect
  const header = document.getElementById("header");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. Mobile Navbar Toggle Menu
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const icon = menuToggle.querySelector("i");
      if (navLinks.classList.contains("open")) {
        icon.className = "fa-solid fa-xmark";
      } else {
        icon.className = "fa-solid fa-bars";
      }
    });

    // Close menu when clicking on a link
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }

  // 3. Active Nav Items scroll highlighting
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Detect active section in the middle of viewport
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach(item => {
          if (item.getAttribute("href") === `#${id}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // 4. Typing Animation for Hero Designation
  const typingElement = document.getElementById("hero-typing");
  const words = ["Web Developer", "UI/UX Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deleting is faster
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2000; // Wait at completion
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Wait before typing new word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Start typing loop
  setTimeout(typeEffect, 1000);

  // 5. Scroll Reveal Animation & Progress Bar Loading
  const revealElements = document.querySelectorAll(".reveal");
  const progressFills = document.querySelectorAll(".progress-bar-fill");

  const revealObserverOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // If the skills section is visible, trigger progress bar fill animation
        if (entry.target.id === "skills") {
          progressFills.forEach(fill => {
            const level = fill.getAttribute("data-level");
            fill.style.width = level;
          });
        }
        
        // Stop observing once animation has run
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 6. Contact Form Email Handoff
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const submitBtn = document.getElementById("btn-form-submit");

  if (contactForm && formStatus && submitBtn) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("form-name");
      const emailInput = document.getElementById("form-email");
      const subjectInput = document.getElementById("form-subject");
      const messageInput = document.getElementById("form-message");

      const nameVal = nameInput ? nameInput.value.trim() : "";
      const emailVal = emailInput ? emailInput.value.trim() : "";
      const subjectVal = subjectInput ? subjectInput.value.trim() : "Portfolio inquiry";
      const messageVal = messageInput ? messageInput.value.trim() : "";
      const mailBody = `Name: ${nameVal}\nReply email: ${emailVal}\n\n${messageVal}`;
      const mailtoUrl = `mailto:ayonpal989@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(mailBody)}`;

      formStatus.className = "form-status success";
      formStatus.textContent = "Your email app is opening with the message ready to send.";
      window.location.href = mailtoUrl;
    });
  }
});
