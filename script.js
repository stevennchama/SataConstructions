// DOM Ready
document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  
    // Hero Section Fade Effect on Scroll
    window.addEventListener("scroll", () => {
      const heroContent = document.querySelector(".hero-content");
      if (heroContent) {
        const maxScroll = 400;
        const opacity = 1 - window.scrollY / maxScroll;
        heroContent.style.opacity = Math.max(opacity, 0.3); // Prevent total fade
      }
    });
  
    // Reveal Animation on Scroll
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.reveal').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
          section.classList.add('active');
        }
      });
    });
  
    // Back to Top Button Logic
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
  
    // Testimonials Slider Logic
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let autoSlideInterval;
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showTestimonial(currentIndex);

    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
    resetAutoSlide();
  });
});

// Update active dot inside showTestimonial:
function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");

  dots.forEach(d => d.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}
  
    // Show Specific Testimonial by Index
    function showTestimonial(index) {
      testimonials.forEach(t => t.classList.remove('active'));
      testimonials[index].classList.add('active');
    }
  
    // Navigate to Next Testimonial
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    // Navigate to Previous Testimonial
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }
  
    // Start Auto Slide
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextTestimonial, 5000);
    }
  
    // Reset Auto Slide Timer when User Interacts
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    const contactSection = document.querySelector('.contact');

window.addEventListener('scroll', () => {
  if (!contactSection) return;

  const sectionTop = contactSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const maxOpacity = 0.3;

  const distanceFromTop = windowHeight - sectionTop;
  const fadeStart = 100; // start fading
  const fadeEnd = 400;   // completely faded

  let newOpacity;

  if (distanceFromTop < fadeStart) {
    newOpacity = maxOpacity;
  } else if (distanceFromTop > fadeEnd) {
    newOpacity = 0;
  } else {
    newOpacity = maxOpacity - ((distanceFromTop - fadeStart) / (fadeEnd - fadeStart)) * maxOpacity;
  }

  contactSection.style.setProperty('--contact-bg-opacity', newOpacity);
});

  
    // Attach Event Listeners to Slider Buttons
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
      });
  
      nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
      });
    }
  
    // Initialize First Testimonial and Auto Slide
    showTestimonial(currentIndex);
    startAutoSlide();
  

  // ✅ Contact Form Success Message
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Show success message
      successMessage.style.display = 'block';

      // Optional: Reset form
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    });
  }
});