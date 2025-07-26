document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("mode-toggle");
  const body = document.body;

  // Set initial mode
  if (!body.classList.contains("dark-mode") && !body.classList.contains("light-mode")) {
    body.classList.add("dark-mode");
  }

  // Toggle logic
  toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  });
});

// SPA-like Navigation
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');

  function showPage(hash) {
    let pageId = hash ? hash.replace('#', '') : 'home';
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === pageId) {
        page.classList.add('active');
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + pageId) {
        link.classList.add('active');
      }
    });
    
    // Close mobile nav after navigation
    if (window.innerWidth < 600) {
      navbarLinks.classList.remove('active');
    }
  }

  // Navigation events
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      history.pushState(null, '', target);
      showPage(target);
    });
  });

  window.addEventListener('popstate', function () {
    showPage(location.hash);
  });

  // Initial page load
  showPage(location.hash);

  // Navbar toggle for mobile
  navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('active');
  });

  // Close mobile nav when clicking outside
  document.body.addEventListener('click', function (e) {
    if (window.innerWidth < 600 && !navbarLinks.contains(e.target) && !navbarToggle.contains(e.target)) {
      navbarLinks.classList.remove('active');
    }
  });

  
 
  // Form Validation & Animation for Login
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = loginForm['email'].value.trim();
      const password = loginForm['password'].value.trim();
      const formMessage = loginForm.querySelector('.form-message');
      // Accept only gmail.com, yahoo.com, hotmail.com domains
    const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
    const emailParts = email.split("@");

    if (
      emailParts.length !== 2 ||
      !allowedDomains.includes(emailParts[1].toLowerCase())
    ) {
      formMessage.textContent = "Email must be Gmail, Yahoo, or Hotmail only.";
      formMessage.style.opacity = 1;
      formMessage.style.color = "red";
      return;
    }

    // Password: Minimum length of 6
    if (password.length < 6) {
      formMessage.textContent = "Password must be at least 6 characters.";
      formMessage.style.opacity = 1;
      formMessage.style.color = "red";
      return;
    }

    // Success message
    formMessage.textContent = "✅ Logged in successfully!";
    formMessage.style.opacity = 1;
    formMessage.style.color = "green";
    loginForm.reset();
    setTimeout(() => {
      formMessage.style.opacity = 0;
    }, 2000);
  });
}
});
