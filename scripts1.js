document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});

// === SHOP MODAL ===
const shopLink = document.querySelector('nav a[href="#"]');
const shopModal = document.getElementById('shopModal');
const shopCloseBtn = shopModal.querySelector('.close-btn'); // DOM tree navigation

shopLink.addEventListener('click', (e) => {
  e.preventDefault();
  shopModal.style.display = 'block';
});

shopCloseBtn.addEventListener('click', () => {
  shopModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === shopModal) {
    shopModal.style.display = 'none';
  }
});

// === REVIEW MODAL ===
const reviewLink = document.querySelector('nav a[href="#review"]');
const reviewModal = document.getElementById('reviewModal');
const closeReviewBtn = reviewModal.querySelector('.close-review-btn');

reviewLink.addEventListener('click', (e) => {
  e.preventDefault();
  reviewModal.style.display = 'block';
});

closeReviewBtn.addEventListener('click', () => {
  reviewModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === reviewModal) {
    reviewModal.style.display = 'none';
  }
});

// === BLOG MODAL ===
const blogLink = document.querySelector('nav a[href="#blog"]');
const blogModal = document.getElementById('blogModal');
const closeBlogBtn = blogModal.querySelector('.close-blog-btn');

blogLink.addEventListener('click', (e) => {
  e.preventDefault();
  blogModal.style.display = 'block';
});

closeBlogBtn.addEventListener('click', () => {
  blogModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === blogModal) {
    blogModal.style.display = 'none';
  }
});

// === CONTACT MODAL ===
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeContactBtn = contactModal.querySelector('.close-btn');

contactBtn.addEventListener('click', () => {
  contactModal.classList.add('show');
});

closeContactBtn.addEventListener('click', () => {
  contactModal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove('show');
  }
});

// === PRODUCT CATEGORY FUNCTION (CUSTOM FUNCTION) ===
function showCategory(category) {
  const sections = document.querySelectorAll('.products');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(category).classList.add('active');
}

// === BUY NOW FUNCTION ===
function buyNow() {
  alert("Redirecting to checkout...");
}

// === MOUSEOVER & MOUSEOUT EVENT + CLASS CHANGE ===
const productCards = document.querySelectorAll('.product-card'); // assuming these exist

productCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('highlight'); // change style by class
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('highlight');
  });
});

// === KEYBOARD EVENT ===
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close all modals
    [shopModal, reviewModal, blogModal, contactModal].forEach(modal => {
      modal.style.display = 'none';
      modal.classList.remove('show');
    });
  }
});

// === ADD ELEMENT TO DOM AT RUNTIME ===
const addReviewBtn = document.getElementById('addReviewBtn'); // a button to trigger
addReviewBtn.addEventListener('click', () => {
  const newReview = document.createElement('div');
  newReview.classList.add('review');
  newReview.textContent = "User123: Great product! Highly recommended.";
  
  const reviewContainer = document.getElementById('reviewList'); // where to append
  reviewContainer.appendChild(newReview);
});

