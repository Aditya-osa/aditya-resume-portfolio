// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Form Submission (Frontend Only)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});

// Animate progress bars on scroll
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
};

// Intersection Observer for progress bars animation
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateProgressBars();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  observer.observe(skillsSection);
}
