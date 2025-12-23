// Navigation active link highlighting
document.addEventListener('DOMContentLoaded', function() {
  updateActiveNav();
  setupCarousels();
  setupModals();
  setupProjectFilters();
});

function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if ((currentPage === '' && href === 'index.html') || 
        (currentPage === 'index.html' && href === 'index.html') ||
        currentPage === href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Carousel functionality
function setupCarousels() {
  const carousels = document.querySelectorAll('[data-carousel]');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const imagesContainer = carousel.querySelector('.carousel-images');
    
    let currentIndex = 0;
    
    function showImage(index) {
      if (images.length === 0) return;
      
      currentIndex = (index + images.length) % images.length;
      const offset = -currentIndex * 100;
      imagesContainer.style.transform = `translateX(${offset}%)`;
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showImage(index));
    });
    
    // Show first image
    showImage(0);
  });
}

// Modal functionality
function setupModals() {
  const modals = document.querySelectorAll('[data-modal]');
  
  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
      });
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
}

// Open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
  }
}

// Project filtering
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-project]');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-project') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Keyboard navigation for carousels
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    const activeCarousel = document.querySelector('[data-carousel]:hover');
    if (activeCarousel) {
      const prevBtn = activeCarousel.querySelector('.carousel-prev');
      if (prevBtn) prevBtn.click();
    }
  } else if (e.key === 'ArrowRight') {
    const activeCarousel = document.querySelector('[data-carousel]:hover');
    if (activeCarousel) {
      const nextBtn = activeCarousel.querySelector('.carousel-next');
      if (nextBtn) nextBtn.click();
    }
  }
});
