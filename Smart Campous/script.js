// ===== DEMO ALERT =====
function showDemo() {
    alert("🚀 Smart Campus helps institutions work smarter, faster, and safer!\n\n✨ Features:\n✓ Real-time attendance tracking\n✓ Digital library management\n✓ Transport tracking system\n✓ Advanced campus security\n\nJoin hundreds of institutions transforming education today!");
}

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollTo(page) {
    window.location.href = page;
}

// ===== HAMBURGER MENU =====
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
            hamburger.classList.toggle("active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.style.display = "none";
                hamburger.classList.remove("active");
            });
        });
    }

    // ===== CONTACT FORM VALIDATION =====
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const output = document.getElementById("formMessage");

            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                output.textContent = "❌ Please fill all fields.";
                output.style.color = "#e74c3c";
            } else if (!emailRegex.test(email)) {
                output.textContent = "❌ Please enter a valid email address.";
                output.style.color = "#e74c3c";
            } else {
                output.innerHTML = "✅ Message sent successfully! We'll get back to you soon.";
                output.style.color = "#27ae60";
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    output.textContent = "";
                }, 3000);
            }
        });
    }

    // ===== SMOOTH SCROLL FOR NAVIGATION =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ===== ACTIVE NAV LINK HIGHLIGHT =====
    function updateActiveLink() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);

    // ===== SCROLL TO TOP ANIMATION =====
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
