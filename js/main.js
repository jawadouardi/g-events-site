document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            const mailtoLink = `mailto:markluismr@gmail.com?subject=${encodeURIComponent('Contact: ' + data.subject)}&body=${encodeURIComponent(
                'Name: ' + data.firstName + ' ' + data.lastName + '\n' +
                'Email: ' + data.email + '\n' +
                'Phone: ' + (data.phone || 'N/A') + '\n\n' +
                data.message
            )}`;
            window.location.href = mailtoLink;
            alert('Thank you for your message! Your email client will open to send the message.');
            this.reset();
        });
    }
});
