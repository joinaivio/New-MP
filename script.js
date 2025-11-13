document.addEventListener('DOMContentLoaded', () => {

  // --- 1. HEADER SCROLL & SMOOTH NAVIGATION ---
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement && header) {
        const headerHeight = header.offsetHeight;
        const extraPadding = 40; // Extra space
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - extraPadding;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 2. ANIMATE ON SCROLL ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a staggered delay based on the element's order in the DOM
          const delay = (entry.target.dataset.delay || index % 5) * 50; // Custom or sequential delay
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
  }

  // --- 3. SLIDER LOGIC (FOR GALLERY & REVIEWS) ---
  const createSlider = (sliderId) => {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slider-slide');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    const dotsContainer = slider.querySelector('.slider-dots');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoplayInterval;
    const slideCount = slides.length;
    const autoplayDelay = sliderId === 'gallery-slider' ? 4000 : 5000;

    // Create dots if container exists
    if (dotsContainer) {
      for (let i = 0; i < slideCount; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          goToSlide(i);
          resetAutoplay();
        });
        dotsContainer.appendChild(button);
      }
    }
    const dots = dotsContainer ? dotsContainer.querySelectorAll('button') : [];

    const updateSlider = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      if (dots.length > 0) {
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }
    };

    const goToSlide = (index) => {
      currentIndex = (index + slideCount) % slideCount;
      updateSlider();
    };

    const startAutoplay = () => {
      if(autoplayInterval) clearInterval(autoplayInterval);
      autoplayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, autoplayDelay);
    };

    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    const resetAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };
    
    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentIndex - 1); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentIndex + 1); resetAutoplay(); });
    
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    // Initial setup
    updateSlider();
    startAutoplay();
  };

  createSlider('gallery-slider');
  createSlider('reviews-slider');

  // --- 4. OPENING HOURS STATUS (CLIENT-SIDE) ---
  const openingStatusBadge = document.getElementById('opening-status-badge');
  if (openingStatusBadge) {
    const openingHours = {
      // 0: Sunday, 1: Monday, ...
      0: { open: 9, close: 16 }, // Sunday
      1: { open: 9, close: 18 }, // Monday
      2: { open: 9, close: 18 }, // Tuesday
      3: { open: 9, close: 18 }, // Wednesday
      4: { open: 9, close: 18 }, // Thursday
      5: { open: 9, close: 18 }, // Friday
      6: { open: 9, close: 18 }, // Saturday
    };

    const now = new Date();
    const day = now.getDay();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    const todaysHours = openingHours[day];

    let status = 'Closed';
    let statusClass = 'closed';

    if (todaysHours && currentHour >= todaysHours.open && currentHour < todaysHours.close) {
      if (todaysHours.close - currentHour <= 1) {
        status = 'Closing soon';
        statusClass = 'closing';
      } else {
        status = 'Open now';
        statusClass = 'open';
      }
    }
    
    openingStatusBadge.textContent = status;
    openingStatusBadge.classList.add(statusClass);
  }

  // --- 5. CONTACT FORM ---
  const contactForm = document.getElementById('contact-form');
  if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      console.log("Form Submitted:", data);

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Message Sent!';

        // Reset form after a few seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = 'Send Message';
          contactForm.reset();
        }, 3000);
      }
    });
  }

});
