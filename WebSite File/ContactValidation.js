const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm['name'].value.trim();
    const phone = contactForm['phone'].value.trim();
    const message = contactForm['message'].value.trim();
    const formMessage = contactForm.querySelector('.form-message');

    const namePattern = /^[A-Za-z\s]+$/;
    const phonePattern = /^\d{10}$/;

    // Validate name
    if (!namePattern.test(name) || name.length < 2) {
      formMessage.textContent = "❌ Invalid name. Use letters only, minimum 2 characters.";
      formMessage.style.color = "red";
      formMessage.style.opacity = 1;
      return;
    }

    // Validate phone number
    if (!phonePattern.test(phone)) {
      formMessage.textContent = "❌ Invalid phone number. Must be exactly 10 digits.";
      formMessage.style.color = "red";
      formMessage.style.opacity = 1;
      return;
    }

    // Validate message
    if (message.length < 10) {
      formMessage.textContent = "❌ Message should be at least 10 characters.";
      formMessage.style.color = "red";
      formMessage.style.opacity = 1;
      return;
    }

    // Success
    formMessage.textContent = "✅ Logged in successfully. We'll get back to you soon.";
    formMessage.style.color = "baby-pink";
    formMessage.style.opacity = 1;

    contactForm.reset();

    setTimeout(() => {
      formMessage.style.opacity = 0;
    }, 3000);
  });
}
